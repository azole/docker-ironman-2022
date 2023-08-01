# How to install Docker

工作坊時間有限，務必要先安裝好環境，這樣才能儘快進入重點！

TOC

- [How to install Docker](#how-to-install-docker)
  - [Linux](#linux)
  - [Mac](#mac)
  - [Windows](#windows)
  - [驗證是否安裝成功](#驗證是否安裝成功)

## Linux

如果可以的話，準備以下環境：

VM 或是 EC2: Ubuntu 22.04

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

應出現類似以下的畫面：

```
$ docker version
Client: Docker Engine - Community
 Version:           24.0.2
 API version:       1.43
 Go version:        go1.20.4
 Git commit:        cb74dfc
 Built:             Thu May 25 21:51:00 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          24.0.2
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.4
  Git commit:       659604f
  Built:            Thu May 25 21:51:00 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.21
  GitCommit:        3dce8eb055cbb6872793272b4f20ed16117344f8
 runc:
  Version:          1.1.7
  GitCommit:        v1.1.7-0-g860f061
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```
