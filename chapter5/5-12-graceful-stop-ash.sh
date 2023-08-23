#!/bin/ash

cleanup() {
  echo "Hello SIGTERM"
  echo "Do something for graceful stop..."
  exit
}

trap cleanup SIGTERM

while true;
  do
  echo "running for sleep"
  sleep 1
done