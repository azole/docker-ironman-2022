FROM golang:1.22.2-alpine as builder
WORKDIR /opt/app
COPY go.mod go.sum ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 go build -o server

FROM alpine:latest
WORKDIR /opt/app
COPY --from=builder /opt/app/server ./server
EXPOSE 8080
CMD ["./server"]