# NodeJS API Server for WebConf 2023

```bash
# build image
# image name (ashleylai/lab:api) 可以換成自己想要的名字
docker build -t ashleylai/lab:api .

# push image to Docker Hub
docker push ashleylai/lab:api

# pull image from Docker Hub
docker pull ashleylai/lab:api

# run container
docker container run -it -p 3001:3000 --rm ashleylai/lab:api
# run container in backgroud (detach mode)
docker container run -d -p 3001:3000 --rm ashleylai/lab:api

# run by docker compose
docker compose up
# run by docker compose in backgroupd
docker compose up -d

docker compose down
docker compose rm
```
