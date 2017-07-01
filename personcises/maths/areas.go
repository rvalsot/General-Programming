package main

import (
	"fmt"
	"math"
	"os"
)

type circle struct {
	radius float64
	name   string
}

func (c circle) area() float64 {
	area := math.Pi * math.Pow(c.radius, 2)
	return area
}

func (c circle) perimeter() float64 {
	perimeter := math.Pi * 2 * c.radius
	return perimeter
}

func main() {
	pete := circle{4.2, "pete"}
	fmt.Fprintf(os.Stdout, "Our circle, %s, has an area of %.2f, and a perimeter of %.2f, given its radius: %.2f. \n ", pete.name, pete.area(), pete.perimeter(), pete.radius)
}
