package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"testing"
)

func TestSwaggerParse(t *testing.T) {
	file, err := os.OpenFile("../testdata/swagger.json", os.O_RDONLY, 0644)
	if err != nil {
		fmt.Printf("error:%v", err)
		t.Fail()
	}
	defer file.Close()
	var bufAll bytes.Buffer
	var buffer = make([]byte, 2048)
	for {
		buffer = make([]byte, 2048)
		n, err := file.Read(buffer)
		bufAll.Write(buffer)

		if err != nil {
			if err == io.EOF {
				break
			}
			panic(err)
		}
		if n == 0 {
			break
		}

	}
	fmt.Printf("bufAll length:%d \n", bufAll.Len())
	root, err := parseApiJson(bytes.Trim(bufAll.Bytes(), "\x00"))
	if err != nil {
		panic(err)
	}
	fmt.Printf("root: %v", &root)
	if &root.Components.Schemas == nil {
		t.FailNow()
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
