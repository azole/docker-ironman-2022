FROM golang:1.21.3 as builder
WORKDIR /opt/app
COPY . .
RUN go mod init main && go build -o main


FROM alpine:latest
WORKDIR /opt/app
COPY --from=builder /opt/app/main ./main
CMD ["./main"]