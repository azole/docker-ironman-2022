package main

import (
	"runtime"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, Docker from Golang!")
	})
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/platform", func(c *gin.Context) {
		var osinfo = map[string]string {
			"arch": runtime.GOARCH,
			"os": runtime.GOOS,
			"versoin": runtime.Version(),
		}
		c.JSON(200, osinfo)
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}