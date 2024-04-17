package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"testing"
)

func TestFetchJson(t *testing.T) {
	jsonContent, err := getUrlContent("http://192.168.1.196:19003/swagger/v1/swagger.json")
	if err != nil {
		t.FailNow()
	}
	root, err := parseApiJson(jsonContent)
	if err != nil {
		t.FailNow()
	}
	fmt.Printf("%v", root)
}

func TestSwaggerParse(t *testing.T) {
	file, err := os.OpenFile("../testdata/swagger.json", os.O_RDONLY, 0644)
	if err != nil {
		fmt.Printf("error:%v", err)
		t.FailNow()
	}
	defer file.Close()
	var bufAll bytes.Buffer
	var buffer = make([]byte, 2048)
	for {
		buffer = make([]byte, 2048)
		n, err := file.Read(buffer)
		if n == 0 && err != nil {
			if err == io.EOF {
				break
			}
			t.FailNow()
		}
		n, err = bufAll.Write(buffer)
		if err != nil {
			if err == io.EOF {
				break
			}
			t.FailNow()
			panic(err)
		}
		if n == 0 {
			break
		}
	}
	root, err := parseApiJson(bytes.Trim(bufAll.Bytes(), "\x00"))
	if err != nil {
		t.FailNow()
		panic(err)
	}
	nameMap, err := genPaths(root)
	if err != nil {
		t.FailNow()
		fmt.Printf("%v", err)
	}
	err = genTypes(root, nameMap)
	if err != nil {
		t.FailNow()
		fmt.Printf("%v", err)
	}
}

func TestMarshal(t *testing.T) {
	var obj = struct {
		Name string `json:"name"`
		Age  int32  `json:"age"`
	}{Name: "boncen", Age: 89}

	jsonB, err := json.Marshal(obj)
	if err != nil {
		t.Errorf("err,%v", err)
	}
	fmt.Printf("%s", string(jsonB))
	t.Log("" + string(jsonB))

	var obj2 struct {
		Name string `json:"name"`
		Age  int32  `json:"age"`
	}
	json.Unmarshal(jsonB, &obj2)
	fmt.Println(obj2.Name)
}
