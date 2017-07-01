package main

import (
	"fmt"
)

func main() {
	aString := "La vaca tiene cuerpo de vaca, extremidades, de vaca tambien y cuernos."

	aStringLength := len(aString)

	fmt.Println("The string: \n \"", aString, "\" \n has a length of", aStringLength, "chars.")
}
