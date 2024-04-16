/*
Copyright © 2024 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"github.com/spf13/cobra/doc"
)

// docCmd represents the doc command
var docCmd = &cobra.Command{
	Use:   "doc",
	Short: "generate docs",
	RunE: func(cmd *cobra.Command, args []string) error {
		dir, err := cmd.Flags().GetString("dir")
		if err != nil {
			return err
		}
		if dir == "" {
			dir = os.TempDir()
		}
		if err = doc.GenMarkdownTree(cmd, dir); err != nil {
			return err
		}
		fmt.Println("Markdown doc successfully created! \n")
		return nil
	},
}

func init() {
	rootCmd.AddCommand(docCmd)
	docCmd.Flags().StringP("dir", "d", "", "Destination directory for docs")
}
