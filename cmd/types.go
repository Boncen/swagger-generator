package cmd

import (
	"regexp"
	"strings"
)

type root struct {
	Openapi    string                                 `json:"openapi"`
	Info       openapiInfo                            `json:"info"`
	Components component                              `json:"components"`
	Paths      map[string]map[string]pathMethodDetail `json:"paths"`
}

// type pathDetail struct {
// 	Post    pathMethodDetail `json:"post"`
// 	Get     pathMethodDetail `json:"get"`
// 	Put     pathMethodDetail `json:"put"`
// 	Patch   pathMethodDetail `json:"patch"`
// 	Delete  pathMethodDetail `json:"delete"`
// 	Head    pathMethodDetail `json:"head"`
// 	Trace   pathMethodDetail `json:"trace"`
// 	Connect pathMethodDetail `json:"connect"`
// 	Options pathMethodDetail `json:"options"`
// }

type pathMethodDetail struct {
	Tags        []string                 `json:"tags"`
	Summary     string                   `json:"summary"`
	Responses   pathMethodResponseDetail `json:"responses"`
	RequestBody pathMethodRequestBody    `json:"requestBody"`
}
type pathMethodResponseDetail struct {
	Status200 pathMethodResonse200 `json:"200"`
}
type pathMethodRequestBody struct {
	Description string                      `json:"description"`
	Content     pathMethodResonse200Content `json:"content"`
}

type pathMethodResonse200 struct {
	Description string                      `json:"description"`
	Content     pathMethodResonse200Content `json:"content"`
}

type pathMethodResonse200Content struct {
	ApplicationJson pathMethodResonse200ContentSchema `json:"application/json"`
}
type pathMethodResonse200ContentSchema struct {
	Schema pathMethodResonse200ContentSchemaDetail `json:"schema"`
}

type pathMethodResonse200ContentSchemaDetail struct {
	Ref string `json:"$ref"`
}

type openapiInfo struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Version     string `json:"version"`
}

type component struct {
	Schemas map[string]componentSchemaDetail `json:"schemas"`
}

// type componentSchema struct {
// 	schemas map[string]componentSchemaDetail
// }

type componentSchemaDetail struct {
	TypeField            string                      `json:"type"`
	Properties           map[string]propertiesDetail `json:"properties"`
	AdditionalProperties bool                        `json:"additionalProperties"`
	Required             []string                    `json:"required"`
	Enum                 []any                       `json:"enum"`
}

type propertiesDetailItems struct {
	Ref       string `json:"$ref"`
	TypeField string `json:"type"`
	Format    string `json:"format"`
}

type propertiesDetail struct {
	TypeField   string                `json:"type"`
	Nullable    bool                  `json:"nullable"`
	Ref         string                `json:"$ref"`
	Description string                `json:"description"`
	Format      string                `json:"format"`
	Items       propertiesDetailItems `json:"items"`
	MinLength   int16                 `json:"minLength"`
}

func (p *propertiesDetail) TypeString() string {
	result := ""
	arrayType := ""
	if p.Items != (propertiesDetailItems{}) {
		// get
		if p.Items.TypeField != "" {
			arrayType = getTypeString(p.Items.TypeField)
		}
		if p.Items.Ref != "" {
			arrayType = handleKeyName(p.Items.Ref)
		}
		if arrayType != "" {
			arrayType = handleKeyName(arrayType)
			result = getRefTypeString(p.Items.TypeField, arrayType)
		} else {
			if p.Items.Ref != "" {
				p.Items.Ref = handleKeyName(p.Items.Ref)
				result = getRefTypeString(p.Items.TypeField, p.Items.Ref)
			} else {
				result = getTypeString(p.Items.TypeField)
			}
		}
	} else {
		if p.Ref != "" {
			p.Ref = handleKeyName(p.Ref)
			result = getRefTypeString(p.TypeField, p.Ref)
		} else {
			result = getTypeString(p.TypeField)
		}
	}
	return result
}

func (p *propertiesDetail) TypeStringWithRef(ref string) string {
	result := getRefTypeString(p.TypeField, ref)
	return result
}

type jwtSecuritySchemes struct {
	TypeField    string `json:"type"`
	Description  string `json:"description"`
	Scheme       string `json:"schema"`
	BearerFormat string `json:"bearerFormat"`
}

func getTypeString(oldType string) string {
	result := "any"
	switch oldType {
	case "string":
		result = "string"
	case "object":
		result = "object"
	case "integer":
		result = "number"
	case "number":
		result = "number"
	case "boolean":
		result = "boolean"
	case "array":
		return "Array<any>"
	}
	return result
}

func getRefTypeString(oldType string, ref string) string {
	result := getTypeString(oldType)
	if ref != "" {
		result = strings.ReplaceAll(result, "any", ref)
	}

	// todo
	if strings.Contains(result, "`") {
		return "any"
	}
	return result
}

func handleKeyName(name string) string {
	result := ""
	// 处理key,去除. 去除加号
	result = strings.ReplaceAll(name, ".", "")
	result = strings.ReplaceAll(result, "+", "")
	result = strings.ReplaceAll(result, "#/components/schemas/", "")
	return result
}

// 处理嵌套类型key名
func handleNestKeyName(name string) string {
	if !strings.Contains(name, "`") {
		return handleKeyName(name)
	}
	result := name
	result = strings.ReplaceAll(result, "`", "$")
	result = strings.ReplaceAll(result, "[", "_")
	result = strings.ReplaceAll(result, "]", "_")

	re := regexp.MustCompile(`(PublicKeyToken=[\w\d]+)|(Version=\d+\.\d+\.\d+\.\d+)|(Culture=[\w\d]+)|(System.Private.CoreLib)`)
	result = re.ReplaceAllString(result, "")
	result = strings.ReplaceAll(result, ",", "")
	result = handleKeyName(result)
	result = strings.ReplaceAll(result, " ", "")
	return result
}
