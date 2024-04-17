# Java application containerized with Spring Boot

Java 的啟動方式:

- 打包成 jar 檔
- 透過 Spring Boot 來啟動

## Jar

參考 [Dockerfile](./Dockerfile)

- 採用 multi-stage 的方式來 build image
- 建立出來的了 image 約 280 MB 左右

## Spring Boot

參考 [Dockerfile.springboot](./Dockerfile.springboot)

- 這個方式看似簡單，它將 build 的過程遞延到啟動階段，但會需要依賴 JDK 環境，這在正式環境中來說，不是一個好的選擇
- image 也比較大，大約 480 MB 左右
