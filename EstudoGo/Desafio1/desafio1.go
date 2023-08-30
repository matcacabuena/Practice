package main

import "fmt"

const ebulicaoKelvin = 373;
func main(){
	celsiusToKelvin := ebulicaoKelvin - 273;
	fmt.Printf("O valor do ponto de ebulição da água de Kelvin para graus Celsius é: %v graus Celsius", celsiusToKelvin);
}