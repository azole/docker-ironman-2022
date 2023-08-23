#!/bin/bash

cleanup() {
  echo "Hello SIGTERM"
  echo "Do something for graceful stop..."
  exit
}

trap cleanup SIGTERM

i=1
while true;
  do
  echo "running for $i times"
  ((i++))
  sleep 1
done