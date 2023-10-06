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
 Version:           24.0.5
 API version:       1.43
 Go version:        go1.20.6
 Git commit:        ced0996
 Built:             Fri Jul 21 20:35:18 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          24.0.5
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.6
  Git commit:       a61e2b4
  Built:            Fri Jul 21 20:35:18 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.22
  GitCommit:        8165feabfdfe38c65b599c4993d227328c231fca
 runc:
  Version:          1.1.8
  GitCommit:        v1.1.8-0-g82f18fe
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### Mac

```
$ docker version

Client:
 Cloud integration: v1.0.35+desktop.4
 Version:           24.0.6
 API version:       1.43
 Go version:        go1.20.7
 Git commit:        ed223bc
 Built:             Mon Sep  4 12:28:49 2023
 OS/Arch:           darwin/arm64
 Context:           desktop-linux

Server: Docker Desktop 4.23.0 (120376)
 Engine:
  Version:          24.0.6
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.7
  Git commit:       1a79695
  Built:            Mon Sep  4 12:31:36 2023
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.22
  GitCommit:        8165feabfdfe38c65b599c4993d227328c231fca
 runc:
  Version:          1.1.8
  GitCommit:        v1.1.8-0-g82f18fe
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

```
