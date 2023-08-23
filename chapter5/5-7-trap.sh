#!/bin/bash

trap "echo Hello SIGTERM" SIGTERM
trap "echo Hello SIGINT" SIGINT
trap "echo Hello SIGKILL" SIGKILL

i=1
while true;
do
  echo "running for $i times"
  ((i++))
  sleep 10
done