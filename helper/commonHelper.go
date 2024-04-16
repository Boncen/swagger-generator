package helper

func IsContain[T comparable](items []T, item T) bool {
	for _, v := range items {
		if v == item {
			return true
		}
	}
	return false
}

func IsMapContainValue[T comparable, K comparable](m map[K]T, targetValue T) (bool, K) {
	var k K
	for key, value := range m {
		if value == targetValue {
			return true, key
		}
	}
	return false, k
}
