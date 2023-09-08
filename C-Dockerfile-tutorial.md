# Dockerfile Tutorial

Dockerfile 是一個文字檔，Docker 提供了一系列的指令，讓我們可以在 Dockerfile 中編寫這些指令，好用來建立專屬於我們自己的 Docker image。

這裡我會用之前在 Web Conf 2023 分享時的範例來講解，原始的 Dockerfile 與相關程式碼請參考 [web-application](web-application/api)，這是一個 NodeJS 的 Express 專案，檔案夾中也提供了一個 Dockerfile，可以用來將這個專案做成 Docker image。

```dockerfile
FROM node:18-slim

# 建立工作目錄
WORKDIR /app

# 把 package.json 跟 package-lock.json 複製到 image 中
COPY package*.json ./

# 安裝相依套件
RUN npm ci && npm cache clean --force

# 把所有檔案複製到 image 中
COPY . .

# 用來指明這個 container 有監聽哪些 port number
EXPOSE 3000

# 指定在 container 中要執行哪個指令
CMD ["npm", "start"]
```

其實上面的註解應該還算清楚，事實上，我自己在開發 Dockerfile 的時候，除非是很簡單或很熟悉，不然我都會從手動建立一個 container 開始，然後把我在這個 container 中的操作記錄起來，最後就會成為這個 Dockerfile 中的指令。

我們來對照看看。

### `FROM node:18-slim`

`FROM` 這個指令的意思是是說我們從 **node:18-slim** 這個 image 開始，你可以想成是在你的電腦中安裝了 NodeJS 18 這個環境，或更接近的是：你執行了建立 container 的指令，以 **node:18-slim** 這個 image 建立了一個 container。

```docker
docker container run -it --rm node:18-slim bash
```

可以注意到我們這邊有加上 `--rm` 參數，也就是這個 container 關閉後，就會被移除。

### `WORKDIR /app`

建立工作目錄，就是在 `FROM` 這一步建立的 container 中，建立一個叫做 app 的檔案夾，並且切換進這個檔案夾，換成手動執行的指令就是：

```bash
mkdir -p /app

cd /app
```

所以在經過這一步驟後，你會身處在 /app 這個檔案夾中。

### `COPY package*.json ./`

這行指令翻譯起來就是：從我們當前的目錄（Host） 中複製檔案到 container 的目錄中。

「當前目錄」這是指哪裡呢？當我們開發完 Dockerfile，要用這個 Dockerfile 去 build 成 Docker image 的指令是：

```bash
docker image build -t test -f Dockerfile .
```

在書中有特別提到，這個指令最後有一個 **.** ，這是不能拿掉的，它是用來指定一個路徑，是 Docker 在建立 image 的過程中，會用來搜尋和處理檔案的根目錄。

當我們在 Dockerfile 中用到 `COPY` 這個指令時，就會從 `docker image build` 指定的這個路徑去找要複製的檔案，也就是這個路徑就是前文提到的「當前目錄」。

再來是，複製到哪個目錄呢？那就看你現在在 container 裡的哪裡，由於我們有 `WORKDIR /app` 這一步，所以我們現在應該是在 /app 這個檔案夾中。

### `RUN npm ci && npm cache clean --force`

`RUN` 後面接的指令其實就只是你在 container 中會做的事而已，以這個範例而言，當有了 package.json 檔案後，要做的事情就是用 npm 這個指令去按照 package.json 安裝需要的套件。

如果你的專案不是 nodejs，那也無妨，總之就是你手動會執行什麼指令，你就在 RUN 這邊寫什麼。

### `EXPOSE 3000`

這是用來指明這個 container 有監聽哪些 port number。有的人會發現不寫好像也沒關係，大家可以實驗看看，在 Dockerfile 中將這一行註解掉，build 出來的 image 執行時，如果有設定好參數 `-p {host port}:{container port}`，也一樣是可以運作的。

那還需要寫嗎？這個就看大家的用途了，實際上，除了 `-p` 之外，還有一個參數是 `-P`，大寫的 P，這個是「Publish all exposed ports to random ports」，也就是把所有要露出的 port number 都對應到 Host 上隨機的 port number，那 Docker 是怎麼知道我們的 container 有哪些 port 要露出呢？靠著就是這個 `EXPOSE` 指令，所以建議，還是把 `EXPOSE` 寫好。另外一方面，Dockerfile 作為一個「文件」的角色，也可以告訴合作的夥伴（包括未來的自己），這個 container 會監聽哪些 port number。

### `CMD ["npm", "start"]`

最後就是這個 CMD 指令，這是用來指定這個 image 要啟動成 container 時，要執行的指令是哪一個，以這個 Dockerfile 為例，就是要去執行 `npm start` 這個指令。

這裡除了中括號這種模式（exec mode）外，還有另外一種格式是 shell mode：

```dockerfile
#... 略

CMD npm start
```

這兩種模式是有一些差別的，歡迎參考[《Docker 實戰 6 堂課：56 個實驗動手做，掌握 Linux 容器核心技術》](https://www.tenlong.com.tw/products/9786263335769)的第五章，書裡會帶著大家動手做一些實驗去研究兩者之間的差別。

## 結語

以上用一個範例很快地介紹什麼是 Dockerfile，還有很多漏網之魚沒有講到，而 Dockerfile 的開發也會影響到建立出來的 Docker image 的品質，特別是 image 的大小，這部分我們之後再另外找時間討論嚕。
