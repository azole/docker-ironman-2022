FROM golang:1.22.2-alpine as builder
WORKDIR /opt/app
COPY go.mod ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -o main

FROM alpine:latest
WORKDIR /opt/app
COPY --from=builder /opt/app/main ./main
EXPOSE 8080
CMD ["./main"]