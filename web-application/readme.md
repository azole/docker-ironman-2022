# Docker Container 是什麼？可以吃嗎？

WebConf 2023  
2023/8/12

詳細解說請參考：
[[WebConf2023] Docker 入門 101](https://azole.medium.com/webconf2023-docker-%E5%85%A5%E9%96%80-101-fae89170553a)

## 前情提要

這次的 workshop 是專門為了前端工程師設計的，但我脫離前端一陣子了，隱約從 AppWorks School 前端班畢業的學員中聽聞他們工作的情況，因此設計了這個 workshop，希望可以讓前端工程師們也能試試看 Docker。

如果你不是前端工程師，但從來沒用過 Docker，想試試看，那也歡迎參考看看。

### 希望能做到的

這個 workshop 希望能做到的是：

- 不害怕 Docker、願意開始使用
- 大概知道 Docker 是什麼
- 知道 Docker 有什麼好處
- 可以建立自己的 Docker Image

### 做不到的

有超級多做不到的東西，學無止境，歡迎大家找我一起學習跟討論！

- Best Practices
- Docker 原理與底層實作
- Kubernetes
- ...還有很多做不到

## 背景故事

我是一個前端工程師，後端工程師給我一個 Docker image 「ashleylai/webconf2023」，跟我說只要跑起來就可以有後端串接了，但，我不會 Docker 啊？

BE: 面試時，你不是說你會 git 跟基礎的 Linux 指令嗎？
我: 是沒有錯，但這跟 Docker 的關係是？
BE: 那讓我來跟你確認幾個指令

- `git pull` 跟 `git push` 你會嗎？
- `ls` 跟 `ls -a` 是什麼意思？
- `rm` 是什麼意思？
- log 跟 build 這兩個單字是什麼意思？

這些你都會的話，那你就會用 Docker 喔！
