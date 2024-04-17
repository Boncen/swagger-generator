/*
Copyright © 2024 Boncen <boncen@outlook.com>
*/
package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"openapi/helper"
	"os"
	"path"
	"strings"
	"text/template"
	"time"

	"github.com/spf13/cobra"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

type TypeProperties struct {
	FieldName string
	FieldType string
	Desc      string
}
type TypeItem struct {
	Props []TypeProperties
	Name  string
	Desc  string
}
type PathItem struct {
	Name           string
	ParamsTypeName string
	MethodName     string
	ApiUrl         string
	Summary        string
	ReturnTypeName string
}

type ViewModel struct {
	TypeList    []TypeItem
	EnumImports []string
}

type ApiViewModel struct {
	TypesImports []string
	PathList     []PathItem
}

var dir string = "./out" // 生成目录

var swaggerCmd = &cobra.Command{
	Use:   "swagger",
	Short: "Generate code from swagger api doc.",
	RunE: func(cmd *cobra.Command, args []string) error {
		var err error
		jsonUrl, err := cmd.Flags().GetString("url")
		if err != nil {
			return err
		}
		jsonContent, err := getUrlContent(jsonUrl)
		if err != nil {
			return err
		}
		root, err := parseApiJson(bytes.Trim(jsonContent, "\x00"))
		if err != nil {
			log.Fatal("error occure", err)
			return err
		}
		fmt.Printf("Openapi:%v \n", root.Openapi)
		fmt.Printf("Project:%v - v%v \n", root.Info.Title, root.Info.Version)
		begin := time.Now()
		err = helper.CreateDirIfNotExists(dir, 0777)
		if err != nil {
			return err
		}

		namemap, err := genPaths(root)
		if err != nil {
			fmt.Printf("genPath err: %#v", err)
		}
		err = genTypes(root, namemap)
		if err != nil {
			return err
		}
		duration := time.Since(begin)
		fmt.Printf("done! -> %v milliseconds \n", duration.Milliseconds())
		return nil
	},
}

func init() {
	rootCmd.AddCommand(swaggerCmd)
	swaggerCmd.Flags().StringP("url", "u", "", "The swagger api doc json url.")
}

/** 生成类型 */
func genTypes(root *root, nameMap *map[string]string) error {
	defer func() {
		if err := recover(); err != nil {
			fmt.Printf("recover:%#v", err)
		}
	}()

	if len(root.Components.Schemas) == 0 {
		return nil
	}

	// create file type.ts
	err := initFile(path.Join(dir, "types.ts"))
	if err != nil {
		return err
	}
	fileHandler, err := os.OpenFile(path.Join(dir, "types.ts"), os.O_RDWR, 0777)
	if err != nil {
		return err
	}
	pendingObj := make(map[string]componentSchemaDetail) // 带有引用类型的类型稍后处理

	t, err := template.ParseFiles("./template/typesTemplate")
	// 使用模板生成内容
	if err != nil {
		fmt.Printf("err: %v", err)
		return err
	}
	typesList := make([]TypeItem, 0)
	enumNameList := make([]string, 0)
	refTypeNameList := make([]string, 0)
	enumImportList := make([]string, 0)

	for key, val := range root.Components.Schemas {
		if strings.Contains(key, "`") {
			pendingObj[handleNestKeyName(key)] = val
			continue
		}

		key = handleKeyName(key)

		props := make([]TypeProperties, 0)
		// object
		if val.TypeField == "object" {
			// get properties
			for keyP, valP := range val.Properties {
				propertiesKey := keyP
				if !helper.IsContain(val.Required, propertiesKey) {
					propertiesKey = propertiesKey + "?"
				}
				fileTypeName := valP.TypeString()
				fileTypeName = strings.ReplaceAll(fileTypeName, "Array<", "")
				fileTypeName = strings.ReplaceAll(fileTypeName, ">", "")

				refTypeNameList = append(refTypeNameList, fileTypeName)

				props = append(props, TypeProperties{FieldName: propertiesKey, FieldType: fileTypeName, Desc: valP.Description})
			}
		}
		// 枚举
		if val.Enum != nil {
			// 添加到枚举切片中
			enumNameList = append(enumNameList, key)
			err := handleEnum(key, val)
			if err != nil {
				return err
			}
			continue
		}
		typesList = append(typesList, TypeItem{Name: key, Props: props, Desc: val.Description})
	}

	// 处理嵌套类型
	for key, val := range pendingObj {
		if val.TypeField == "object" {
			props := make([]TypeProperties, 0)
			for keyProp, valProp := range val.Properties {
				propertiesKey := keyProp
				if !helper.IsContain(val.Required, propertiesKey) {
					propertiesKey = propertiesKey + "?"
				}
				fileTypeName := valProp.TypeString()
				fileTypeName = strings.ReplaceAll(fileTypeName, "Array<", "")
				fileTypeName = strings.ReplaceAll(fileTypeName, ">", "")

				// 判断是否包含枚举类型引用
				refTypeNameList = append(refTypeNameList, fileTypeName)

				props = append(props, TypeProperties{FieldName: propertiesKey, FieldType: fileTypeName})
			}
			typesList = append(typesList, TypeItem{Name: key, Props: props})
		}
	}

	for aliasName, rawName := range *nameMap {
		for _, item := range typesList {
			if item.Name == rawName {
				typesList = append(typesList, TypeItem{Name: aliasName, Props: item.Props})
			}
		}
	}

	//判断是否存在枚举引用
	for _, val := range refTypeNameList {
		if helper.IsContain(enumNameList, val) && !helper.IsContain(enumImportList, val) {
			enumImportList = append(enumImportList, val)
		}
	}

	err = t.Execute(fileHandler, ViewModel{TypeList: typesList, EnumImports: enumImportList}) //typesList
	if err != nil {
		return err
	}
	fileHandler.Close()
	return nil
}

func genPaths(root *root) (*map[string]string, error) {
	// create file type.ts
	err := initFile(path.Join(dir, "api.ts"))
	if err != nil {
		return nil, err
	}
	fileHandler, err := os.OpenFile(path.Join(dir, "api.ts"), os.O_RDWR, 0777)
	if err != nil {
		return nil, err
	}
	defer fileHandler.Close()

	t, err := template.ParseFiles("./template/pathTemplate")
	// 使用模板生成内容
	if err != nil {
		fmt.Printf("err: %v", err)
		return nil, err
	}
	result := make(map[string]string)
	pathItems := make([]PathItem, 0)
	pathImports := make([]string, 0)

	for url, m := range root.Paths {
		for method, methodDetail := range m {
			p := PathItem{ApiUrl: url, MethodName: method, Summary: methodDetail.Summary}
			// name
			urlPieces := strings.Split(url, "/")
			caser := cases.Title(language.English)
			for i := 0; i < len(urlPieces); i++ {
				urlPieces[i] = caser.String(urlPieces[i])
			}
			p.Name = strings.Join(urlPieces, "")

			// paramsName
			reqRef := methodDetail.RequestBody.Content.ApplicationJson.Schema.Ref
			rspRef := methodDetail.Responses.Status200.Content.ApplicationJson.Schema.Ref

			p.ReturnTypeName = handleNestKeyName(rspRef)
			p.ParamsTypeName = handleNestKeyName(reqRef)

			if p.ParamsTypeName != "" {
				if strings.Contains(p.ParamsTypeName, "_") {
					result[p.Name+"Req"] = p.ParamsTypeName
					p.ParamsTypeName = p.Name + "Req"
				}
				if !helper.IsContain(pathImports, p.ParamsTypeName) {
					pathImports = append(pathImports, p.ParamsTypeName)
				}
			}

			if p.ReturnTypeName != "" {
				if strings.Contains(p.ReturnTypeName, "_") {
					result[p.Name+"Rsp"] = p.ReturnTypeName
					p.ReturnTypeName = p.Name + "Rsp"
				}
				if !helper.IsContain(pathImports, p.ReturnTypeName) {
					pathImports = append(pathImports, p.ReturnTypeName)
				}
			}
			pathItems = append(pathItems, p)
		}
	}

	viewModel := ApiViewModel{PathList: pathItems, TypesImports: pathImports}
	err = t.Execute(fileHandler, viewModel)
	return &result, err
}

type EnumTemplateModel struct {
	Name string
	Enum []any
	Desc string
}

// 处理枚举类型并写入文件
func handleEnum(name string, detail componentSchemaDetail) error {
	err := initFile(path.Join(dir, "enum.ts"))
	if err != nil {
		return err
	}

	t, err := template.ParseFiles("./template/enumTemplate")
	if err != nil {
		return err
	}
	file, err := os.OpenFile(path.Join(dir, "enum.ts"), os.O_APPEND|os.O_RDWR, 0777)
	if err != nil {
		return err
	}
	err = t.Execute(file, EnumTemplateModel{Name: name, Enum: detail.Enum, Desc: detail.Description})
	file.Close()
	return err
}

// 初始化文件,保证文件存在且为空
func initFile(path string) error {
	isExist, err := helper.PathIsExists(path)
	if err != nil {
		return err
	}
	if isExist {
		// remove and create
		err = os.Remove(path)
		if err != nil {
			return err
		}
	}
	_, err = os.Create(path)
	return err
}

func parseApiJson(jsonS []byte) (*root, error) {
	var rootObj root
	if err := json.Unmarshal(jsonS, &rootObj); err != nil {
		log.Fatalf("parseApiJson error: %v", err)
		return nil, nil
	}
	return &rootObj, nil
}

func getUrlContent(jsonUrl string) ([]byte, error) {
	resp, err := http.Get(jsonUrl)
	if err != nil {
		return nil, err
	}
	var buffer bytes.Buffer
	var readBuf = make([]byte, 2048)
	defer resp.Body.Close()

	for {
		n, err := resp.Body.Read(readBuf)
		if err != nil && err != io.EOF {
			return nil, err
		}

		buffer.Write(readBuf[:n])
		if err == io.EOF {
			break
		}
	}
	return buffer.Bytes(), nil
}
