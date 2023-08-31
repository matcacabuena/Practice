package main

import (
	"fmt"
	"time"
)

func main() {

	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		for {
			c1 <- "Ping"
			time.Sleep(1 * time.Second)
		}
	}()

	go func() {
		for {
			c2 <- "Pong"
			time.Sleep(1 * time.Second)
		}
	}()

	go func() {
		for i:=0; i<10; i++ {
			select {
			case msg1 := <-c1:
				fmt.Println(msg1)
			case msg2 := <-c2:
				fmt.Println(msg2)
			}
		}
	}()
}
