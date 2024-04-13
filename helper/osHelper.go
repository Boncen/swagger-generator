package helper

import (
	"os"
)

// Determine if the file or dir exists
func PathIsExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

func CreateDirIfNotExists(path string, perm os.FileMode) error {
	isExists, err := PathIsExists(path)
	if err != nil {
		return err
	}
	if !isExists {
		err = os.Mkdir(path, perm)
		if err != nil {
			return err
		}
		return nil
	}
	return err
}

func CreateIfNotExists(path string) error {
	isExists, err := PathIsExists(path)
	if err != nil {
		return err
	}
	if !isExists {
		_, err = os.Create(path)
		if err != nil {
			return err
		}
		return nil
	}
	return err
}
