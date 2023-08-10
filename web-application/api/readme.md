# NodeJS API Server for WebConf 2023

```bash
# build image
docker build -t ashleylai/webconf2023 .

# push image to DockerHub
docker push ashleylai/webconf2023

# run container
docker container run -p 3001:3000 --rm ashleylai/webconf2023
# run container in backgroud
docker container run -p 3001:3000 -d --rm ashleylai/webconf2023
```
