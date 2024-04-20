/*
Copyright © 2024 Boncen <boncen@outlook.com>
This file is part of CLI application foo.
*/
package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Version: "1.0.1",
	Use:     "openapi",
	Short:   "Generate ts code from swagger doc url",
	// Run: func(cmd *cobra.Command, args []string) { },
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

var saveDir = "dist"

func init() {
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
	rootCmd.Flags().StringP("dir", "d", saveDir, "Directory to save result.")
}
