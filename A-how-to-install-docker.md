# How to install Docker

- 工作坊時間有限，務必要先安裝好環境，這樣才能儘快進入重點，如果安裝過程有任何疑問，歡迎來信或 Issues 留言討論！
- container 是 Linux 上的技術，可以的話就準備一台 Linux 主機來實驗，沒有也沒關係，Mac 跟 Windows 都一樣可以練習。

- [How to install Docker](#how-to-install-docker)
  - [Linux](#linux)
  - [Mac](#mac)
  - [Windows](#windows)
  - [驗證是否安裝成功](#驗證是否安裝成功)
    - [Linux](#linux-1)
    - [Mac](#mac-1)

## 版本

差一點版本號沒有關係，接近就可以了。

- Docker Desktop: 4.31.0
- Docker client: 26.1.4
- Docker server: 26.1.4
- Docker scout: 1.9.3

## Linux

VM (例如 virtual box) 或是 EC2: Ubuntu 22.04 都可以。

按照 docker 官方文件安裝 Docker:

[https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

安裝完成後執行以下指令

```bash
# {your-username} 記得要換成你所使用的 Linux 使用者名稱，例如 ubuntu
sudo usermod -aG docker {your-username}
# 執行指令後，登出系統再登入一次
```

上述步驟完成後，到[驗證是否安裝成功](#驗證是否安裝成功) 按照步驟確認安裝結果

## Mac

按照 Docker 官方文件安裝 Docker

[https://docs.docker.com/desktop/install/mac-install/](https://docs.docker.com/desktop/install/mac-install/)

選擇自己環境的晶片: intel chip 或是 Apple silicon

上述步驟完成後，到[驗證是否安裝成功](#驗證是否安裝成功) 按照步驟確認安裝結果

## Windows

按照 Docker 官方文件安裝 Docker

[https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)

有兩種方式: WSL 2 backend 及 Hyper-V backend and Windows containers，推薦優先使用 WSL。

上述步驟完成後，到[驗證是否安裝成功](#驗證是否安裝成功) 按照步驟確認安裝結果

## 驗證是否安裝成功

執行以下指令：

```bash
docker version
```

應出現類似以下的畫面，注意，版本號可能會略有不同。

### Linux

```
$ docker version
Client: Docker Engine - Community
 Version:           26.1.3
 API version:       1.45
 Go version:        go1.21.10
 Git commit:        b72abbb
 Built:             Thu May 16 08:33:29 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          26.1.3
  API version:      1.45 (minimum version 1.24)
  Go version:       go1.21.10
  Git commit:       8e96db1
  Built:            Thu May 16 08:33:29 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.31
  GitCommit:        e377cd56a71523140ca6ae87e30244719194a521
 runc:
  Version:          1.1.12
  GitCommit:        v1.1.12-0-g51d5e94
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### Mac

```
$ docker version

Client:
 Version:           26.1.4
 API version:       1.45
 Go version:        go1.21.11
 Git commit:        5650f9b
 Built:             Wed Jun  5 11:26:02 2024
 OS/Arch:           darwin/arm64
 Context:           desktop-linux

Server: Docker Desktop 4.31.0 (153195)
 Engine:
  Version:          26.1.4
  API version:      1.45 (minimum version 1.24)
  Go version:       go1.21.11
  Git commit:       de5c9cf
  Built:            Wed Jun  5 11:29:12 2024
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.33
  GitCommit:        d2d58213f83a351ca8f528a95fbd145f5654e957
 runc:
  Version:          1.1.12
  GitCommit:        v1.1.12-0-g51d5e94
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```
