FROM golang:1.21.3
WORKDIR /opt/app
COPY . .
RUN go mod init main && go build -o main

CMD ["./main"]