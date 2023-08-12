# build stage
FROM node:18-slim as builder

# 建立工作目錄
WORKDIR /app

# 把 package.json 跟 package-lock.json 複製到 image 中
COPY package*.json ./

# 安裝相依套件
RUN npm ci && npm cache clean --force

# 把所有檔案複製到 image 中
COPY . .

# 執行 build
RUN npm run build



###################################
# production stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
