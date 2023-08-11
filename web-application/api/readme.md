# NodeJS API Server for WebConf 2023

```bash
# build image
docker build -t ashleylai/webconf2023 .

# push image to Docker Hub
docker push ashleylai/webconf2023

# pull image from Docker Hub
docker pull ashleylai/webconf2023

# run container
docker container run -it -p 3001:3000 --rm ashleylai/webconf2023
# run container in backgroud
docker container run -d -p 3001:3000 --rm ashleylai/webconf2023

# run by docker compose
docker compose up
# run by docker compose in backgroupd
docker compose up -d

docker compose down
docker compose rm
```
