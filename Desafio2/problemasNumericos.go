package main

import "fmt"

func main(){

	fmt.Println("Problema 1 (números divisíveis por 3): ");
	for i := 1; i <= 100; i++{
		if(i % 3 == 0) {
			fmt.Println(i)
		}
	}

	fmt.Println("-----------------------");
	fmt.Println("Problema 2 (Pin-Pan): ");
	for i := 1; i <= 100; i++{
		if i % 3 == 0 && i % 5 == 0 {
			fmt.Println("Pin-Pan")
		} else if i % 3 == 0 {
			fmt.Println("Pin")
		} else if i % 5 == 0 {
			fmt.Println("Pan")
		}
	}
}