FROM node:18-alpine

# 建立工作目錄
WORKDIR /app

# 把 package.json 跟 package-lock.json 複製到 image 中
COPY package*.json ./

# 安裝相依套件
RUN npm i && npm cache clean --force

# 把所有檔案複製到 image 中
COPY . .

# 用來指明這個 container 有監聽哪些 port number
EXPOSE 3000

# 指定在 container 中要執行哪個指令
#CMD ["npm", "start"]
CMD ["server.js"]



