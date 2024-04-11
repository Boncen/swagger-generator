package cmd

type root struct {
	Openapi    string      `json:"openapi"`
	Info       openapiInfo `json:"info"`
	Components component   `json:"components"`
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
}

type propertiesDetail struct {
	TypeField   string `json:"type"`
	Nullable    bool   `json:"nullable"`
	Ref         string `json:"$ref"`
	Description string `json:"description"`
	Format      string `json:"format"`
	Items       struct {
		Ref string `json:"$ref"`
	} `json:"items"`
	MinLength int16 `json:"minLength"`
}

func (p *propertiesDetail) TypeString(oldType string, itemName string) string {
	result := getTypeString(oldType, itemName)
	return result
}

type jwtSecuritySchemes struct {
	TypeField    string `json:"type"`
	Description  string `json:"description"`
	Scheme       string `json:"schema"`
	BearerFormat string `json:"bearerFormat"`
}

func getTypeString(oldType string, itemName string) string {
	result := "any"
	switch oldType {
	case "string":
		result = "string"
	case "object":
		result = "object"
	case "integer":
		result = "number"
	case "boolean":
		result = "boolean"
	case "array":
		if itemName != "" {
			result = itemName + "[]"
		} else {
			result = "any[]"
		}
	}
	return result
}
