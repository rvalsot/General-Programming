package main

import (
	"fmt"
	"time"
)

func main() {
	todayIs := time.Now().Local().Format("Monday, 02-January-2006")
	fmt.Println(todayIs)

}
