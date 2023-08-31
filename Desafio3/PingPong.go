package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Desafio 3 - Ping Pong")
	c1 := make(chan string)
	c2 := make(chan string)
	
	go func() {
		for {
			time.Sleep(1 * time.Second)
			c1 <- "Ping"
		}
	}()

	go func() {
		for {
			time.Sleep(1 * time.Second)
			<-c1 // Espera o Ping para o Pong
			c2 <- "Pong"
		}
	}()

	for i := 0; i < 10; i++ {
		select {
		case msg1 := <-c1:
			fmt.Println(msg1)
		case msg2 := <-c2:
			fmt.Println(msg2)
		}
	}
}
