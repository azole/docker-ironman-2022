# Lab - Multi-Platform

```bash
docker buildx create --name mybuilder --bootstrap --use
docker buildx ls

docker image build --builder mybuilder --platform linux/amd64,linux/arm64 -t ashleylai/lab:multi-platform --push .

docker container run --rm ashleylai/lab:multi-platform

docker image inspect ashleylai/lab:multi-platform -f '{{ .Os }}/{{ .Architecture }}'
# 顯示與你平台相符合的結果，例如 linux/arm64 或是 linux/amd64
```