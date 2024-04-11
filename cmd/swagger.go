/*
Copyright © 2024 Boncen <boncen@outlook.com>
This file is part of CLI application foo.
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

	"github.com/spf13/cobra"
)

// swaggerCmd represents the swagger command
var swaggerCmd = &cobra.Command{
	Use: "swagger",
	// Args:  cobra.ExactArgs(1),
	Short: "Generate code from swagger api doc.",
	RunE: func(cmd *cobra.Command, args []string) error {
		dir, err := cmd.Flags().GetString("dir") //
		if err != nil {
			return err
		}

		jsonUrl, err := cmd.Flags().GetString("url")
		if err != nil {
			return err
		}
		jsonContent, err := getUrlContent(jsonUrl)
		if err != nil {
			return err
		}
		root, err := parseApiJson(jsonContent)
		if err != nil {
			log.Fatal("error occure", err)
			return err
		}
		fmt.Printf("%v", root)
		genTypes(root, dir)
		return nil
	},
}

func init() {
	rootCmd.AddCommand(swaggerCmd)
	swaggerCmd.Flags().StringP("url", "u", "", "The swagger api doc json url.")
}

/** 生成类型 */
func genTypes(root *root, dir string) error {
	if len(root.Components.Schemas) == 0 {
		return nil
	}

	// Determine if the folder exists
	err := helper.CreateIfNotExists(dir, 0666)
	if err != nil {
		return err
	}

	// create file type.ts
	fileHandler, err := os.OpenFile(path.Join(dir, "types.ts"), os.O_CREATE, 0666)
	if err != nil {
		return err
	}

	pendingObj := make(map[string]componentSchemaDetail) // 带有引用类型的类型稍后处理

	for key, val := range root.Components.Schemas {
		if strings.Contains(key, "`") {
			pendingObj[key] = val
			continue
		}

	}
	return nil
}

func parseApiJson(jsonS []byte) (*root, error) {
	fmt.Printf("jsonS length:%d \n", len(jsonS))
	var rootObj root
	if err := json.Unmarshal(jsonS, &rootObj); err != nil {
		log.Fatalf("error: %v", err)
		return nil, nil
	}
	fmt.Printf("%#v", &rootObj)
	return &rootObj, nil
}

func getUrlContent(jsonUrl string) ([]byte, error) {
	resp, err := http.Get(jsonUrl)
	if err != nil {
		return nil, err
	}
	var buffer bytes.Buffer
	var readBuf = make([]byte, 1024)
	for {
		n, err := resp.Body.Read(readBuf)
		_, err = buffer.Write(readBuf)
		if err != nil {
			return nil, err
		}
		if err != nil {
			if err == io.EOF {
				break
			}
			return nil, err
		}
		if n < 1 {
			break
		}
	}
	return readBuf, nil
}
