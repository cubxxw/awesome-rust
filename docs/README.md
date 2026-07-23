---
home: true
lang: zh-CN
title: Cub链学社（c-universal blockchain）
description: docker学习
heroImage: https://sm.cubxxw.com//typora/logo_transparent.png?mail:3293172751@qq.com
heroText: Go语言篇
tagline: 链学社在保障用户安全，信息的完整性同时为大众带来更多的选择，笔记分享，视频分享，版权保护，以及其他的关于学信数据、电子证书、荣誉证明、成绩证明、信息授权的相关工具。
actions:
  - text: Go语言基础篇学习
    link: /markdown/1
    type: primary
  - text: Go语言高级篇学习
    link: /Gomd_super/
    type: primary
  - text: 链学社CUB
    link: https://github.com/C-UB/.github/blob/master/README.md
    type: secondary
actionText: 博客笔记 →
actionLink: ./markdown
features:
- title: 笔记分享
  details: 利用git作为分布式版本控制工具，BitTorrent进行分享、广播
- title: 资源学习
  details: 链学者社区希望打造世界上最大的开源学习社区，共同维护链学链。
- title: 业务扩展
  details: 不仅仅限于视频、内容创作，为社员提供学分统计、证书生成、荣誉证明，且基于区块链的信用保障。
- title: 数据永久
  details: 基于ipfs星球传输协议，创建持久且分布式存储和共享文件的网络传输协议。
- title: 版权保护
  details: 打造内容存证，授权，维权整套流程，对于上传学习的作者，学习的学者，提供链上数据保护机制，链上数据的记录。极大的提升著作权保护效率，让盗版不再嚣张，发行和学习更安心。
- title: 共识协议
  details: 基于Hyperledger fabric开源项目，使用ipfs为基础改进共识算法，更短时间内达成共识。
footer: 链学社 | Copyright © 2022-present Evan You
---



## awesome-rust

**区块链技术（也称之为分布式账本技术）**，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录

>   ❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客[http://cubxxw.com](http://cubxxw.com)
>
>   <a href="https://wakatime.com/@3293172751/projects/hngzsvjxqc?start=2022-03-30&end=2022-04-05" title="我的区块链代码时长"> <img src="./images/79cf7f10-4f61-42b7-92a8-dfc71cb99f4c.svg+xml"> </a>

---

# 🚸 Rust

![下载](http://sm.cubxxw.com/sm%E4%B8%8B%E8%BD%BD.pngmail3293172751@qq.png?xxw@cubxxw.com)

## ⚡前言

::: warning 为什么要学习rust?
:cloud_with_lightning_and_rain:Rust是一种令人兴奋的新编程语言，它可以让每一个人编写可靠且高效的软件。

⚡Rust可以替换C/C++，Rust和它们具有同样的性能，但是很多常见的bug在编译时候就可以被消灭。

 🔥Rust是一种通用的编程语言，但是它更善于以下的场景：

+ 需要运行时的速度
+ 需要内存安全
+ 更好的利用多处理器

:::



::: tip Rust和其他语言的比较
C/C++ 性能非常好，但是类型系统和内存都不太安全

java/C# 拥有GC，能够保证内存安全，也拥有很多优秀特性，但是性能不行

🚸 Rust：

+ 安全
+ 无需GC
+ 易于维护、调试、代码安全高效

:::



::: warning 擅长的领域
 ⚠️或许这将会是你后期会考虑到的

+ 高性能web Service
+ WebAssembly
+ 命令行工具
+ 网络编程
+ 嵌入式设备
+ 系统编程

> 但 Rust 并不局限于底层系统编程。它表达力强、写起来舒适，让人能够轻松地编写出命令行应用、网络服务器等各种类型的代码——在本书中就有这两者的简单示例。使用 Rust 能让你把在一个领域中学习的技能延伸到另一个领域：你可以通过编写网页应用来学习 Rust，接着将同样的技能应用到你的 Raspberry Pi（树莓派）上。

:::



## 🎈或如你可以选择

> 学习rust之前或许你可以看看
>
> + [x] [计算机网络 – TCP/IP – 抓包 – Linux网络编程](https://github.com/3293172751/Block_Chain/blob/master/web/README.md) （有一点网络基础就好）
> + [x] [有Linux的基础](https://github.com/3293172751/CS_COURSE/blob/master/linux/README.md)
>
> **编程语言不限**
>
> - [x] [🖱️GO 基础部分🔥](https://github.com/3293172751/Block_Chain/blob/master/TOC.md)
> - [ ] [🖱️GO web框架](https://github.com/3293172751/Block_Chain/blob/master/go-web)
> - [ ] [🖱️Go语言100篇进阶🔥](https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md)
> - [ ] [🖱️Go 高级篇](https://github.com/3293172751/Block_Chain/blob/master/go-advancend/README.md)



::: tip 为什么会突发奇想
一切都是可以串联出来的，从C –> OS

从 go –> OS (对标[mit的Go语言os](https://pdos.csail.mit.edu/projects/biscuit.html))  

> 能跑gcc、nginx、redis、且和Linux差百分之五到百分之十。

从rust –> OS (对标斯坦福的CS140e)

> 甚至可以在我喜欢的树莓派上面运行

从blockchain –> 

:::



::: danger 提醒
⚠️ 注意：在这里我要隆重介绍下：清华大学rcore操作系统~ 用rust实现os~

正如author（王润基）所说，rust带我走进了新世界的大门。

 🖱️[rcore操作系统](https://github.com/rcore-os/rCore-Tutorial-v3)

我会慢慢的、慢慢的走近你的心里（u~os）

:::



## 📚目录

🐋 1. [Docker概述](./markdown/1.md)

🐋 2. [docker系统架构](./markdown/2.md)

🐋 3. [docker和传统虚拟机](./markdown/3.md)

🐋 4. [docker安装](./markdown/4.md)

🐋 5. [在 Ubuntu 上安装 Docker 引擎](./markdown/5.md)

🐋 6. [Docker引擎（engine）详解](./markdown/6.md)

🐋 7. [镜像配置](./markdown/7.md)

🐋 8. [docker帮助启动类命令](./markdown/8.md)

🐋 9. [docker镜像命令](./markdown/9.md)

🐋 10. [ubuntu容器说明 — 容器的启动和运行](./markdown/10.md)

🐋 11. [深入理解镜像底层](./markdown/11.md)

🐋 12. [容器rootfs命令](./markdown/12.md)

🐋 13. [使用hub.docker](./markdown/13.md)

🐋 14. [容器数据卷](./markdown/14.md)

🐋 15. [docker基础篇最后补充-资源](./markdown/15.md)

🐋 16. [tomcat安装挂载](./markdown/16.md)

🐋 17. [docker安装MySQL](./markdown/17.md)

🐋 18. [docker安装redis](./markdown/18.md)

🐋 19. [Docker高级篇](./markdown/19.md)

🐋 20. [分布式存储之hash取余算法](./markdown/20.md)

🐋 21. [3主3从redis集群扩缩容配置案例说明](./markdown/21.md)

🐋 22. [redis主从扩容](./markdown/22.md)

🐋 23. [redis主从缩容](./markdown/23.md)

🐋 24. [DockerFile解析](./markdown/24.md)

🐋 25. [dockerfile保留字](./markdown/25.md)

🐋 26. [dockerfile案例](./markdown/26.md)

🐋 27. [虚悬镜像](./markdown/27.md)

🐋 28. [编写自定义镜像myubuntu](./markdown/28.md)

🐋 29. [Docker微服务实战](./markdown/29.md)

🐋 30. [docker 网络](./markdown/30.md)

🐋 31. [docker网络模式](./markdown/31.md)

🐋 32. [bridge是什么](./markdown/32.md)

🐋 33. [host是什么](./markdown/33.md)

🐋 34. [none是什么](./markdown/34.md)

🐋 35. [container是什么](./markdown/35.md)

🐋 36. [自定义网络格式](./markdown/36.md)

🐋 37. [Docker平台架构图解](./markdown/37.md)

🐋 38. [docker-compose容器编排](./markdown/38.md)

🐋 39. [Compose核心概念](./markdown/39.md)

🐋 40. [改造升级微服务工程docker_boot](./markdown/40.md)

---



::: danger 继续往下看
下面是精心打造的菜鸟成长手册，覆盖有多广~~，喜欢请在GitHub仓库给个♥，不胜感激

:::



# 菜鸟的成长手册⚡

## 🧭导航

+ 🔍[**快速指南(wike) — 仓库总结**](https://github.com/3293172751/Block_Chain/wiki)

+ 🔗[**中国大陆加速地址（Gitee平台）**](https://gitee.com/xxw3293172751/Block_Chain)

+ 📵[**不限速在线个人云盘**](https://xxw.cubxxw.com/s/wRSz)

  <p align='center'>
  <a href="https://gitee.com/xxw3293172751/Block_Chain"><img src="https://img.shields.io/badge/gitee-%40xxw3293172751-green?logo=gitee" title="国内gitee镜像加速"></a>
  <a href="https://wakatime.com/@3293172751/projects/hngzsvjxqc?start=2022-03-30&end=2022-04-05" title="项目的进展时长" > <img src="http://wakatime.com/badge/user/c445b3c6-a2bc-43a2-a24a-0828a17244b4/project/79cf7f10-4f61-42b7-92a8-dfc71cb99f4c.svg"></a>
  <a href="https://github.com/3293172751/cs-awesome-Block_Chain/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/3293172751/cs-awesome-Block_Chain?style=plastic"></a>
  <a href="https://xxw.cubxxw.com/s/wRSz"><img alt="个人网盘不限速" src="https://img.shields.io/badge/cloud-xiongxinwei-red?logo=iCloud" title="个人网盘不限速下载浏览"></a>
  </p>

<div align="center">
	<a href = "https://github.com/3293172751/cs-awesome-Block_Chain">🅱️GitHub</a>
	&emsp;&emsp; | &emsp;&emsp;
	<a href="https://interview.huihut.com">📚DocCub</a>
</div>

<div align="center">
	<a href = "readme_english.md">🔤English</a>
	&emsp;&emsp; | &emsp;&emsp;
	<a href = "README.md">🆑中文CN</a>
</div>
<br>



::: details ⚡ 点击（先看）
⚠️ 这是一个菜鸟的成长记录，如果你也想成为工程师，想从事后端的相关工作，或者想了解区块链的相关知识，那么它可以帮助到你😎 —>  <b>喜欢请给个⭐收藏~</b>

 🐧 喜欢Go语言的朋友欢迎加入Go语言自学群（QQ群号：141984758）~

 ⛓️ <b>区块链技术（也称之为分布式账本技术）</b>，是一种互联网数据库技术，其特点是<font color ="gree">去中心化，公开透明，信息不可篡改性，隐私匿名性🤑</font><a href="https://github.com/C-UB">CUB链学社</a>致力打造<b>区块链自学教育平台。</b>

💡 侧边目录支持方式：[📚 DocCub 文档](https://interview.huihut.com)、[Github + TOC 导航](https://github.com/jawil/GayHub)（[TOC预览.png](https://gitee.com/huihut/interview/raw/master/images/TOC预览.png)）

📄 保存为 PDF 方式：使用 Chrome 浏览器打开 <a href="https://interview.huihut.com">📚 DocCub 文档</a> 页面，缩起左侧目录-右键 - 打印 - 选择目标打印机是另存为PDF - 保存（[打印预览.png](https://gitee.com/huihut/interview/raw/master/images/打印预览.png)）

🙏 仓库内容如有错误或改进欢迎 [issue](https://github.com/3293172751/cs-awesome-Block_Chain/issues/new/choose) 或 pr，建议或讨论可在 [#12](https://github.com/huihut/interview/issues/12) 提出。由于本人水平有限，仓库中的知识点有来自本人原创、读书笔记、书籍、博文等，非原创均已标明出处，如有遗漏，请 [issue](https://github.com/3293172751/cs-awesome-Block_Chain/issues/new/choose) 提出。本仓库遵循 [CC BY-NC-SA 4.0（署名 - 非商业性使用 - 相同方式共享）](https://github.com/huihut/interview/blob/master/LICENSE) 协议，转载请注明出处，不得用于商业目的。

:::

## 📖Go语言

#### 🏷️前言

`Go`语言的学习参考官网文档[go语言官方编程指南](https://golang.org/#)，如何找到合适的Go语言学习路线[Go语言路线](go-advancend/go_route.md)。

```mermaid
graph LR
程序员基本素养 ==> Go基础篇 ==>开发必备技术 ==> Go进阶100篇 ==> Go高级篇章 
```

+ 🔱[go语言官方编程指南](https://golang.org/#)
+ 🚧[Go语言路线](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/go-advancend/go_route.md)

#### 🔖核心

**Go语言的核心编程篇，基础部分30天记录，100篇进阶，还有正在进展的高级篇~**

+  [🖱️GO 基础部分🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/TOC.md)
+  [🖱️GO web框架](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/go-web)
+  [🖱️Go语言100篇进阶🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/README.md)
+  [🖱️Go 高级篇](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/go-advancend/README.md)

#### 📝补充

`mod`包是`Go`语言2018年推出的包管理工具，并会一直延续下去。命名规范以及项目目录结构📇的设定对于一名合格的工程师来说也是非常重要的。下面是作为一名合格的开发者🤵，必须要会的基本素养。

+ [🖱️Go语言包管理工具 — mod包](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/mod.md)
+ [🖱️Go-air实现热加载编译](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/go-air.md)
+ [🖱️命名规则和代码规范](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/name.md)
+ 🖱️[Go语言目录结构](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/catalogue.md)
+ 🖱️[Go文件以及编码处理](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/go_file.md)
+ 🖱️[正则表达式](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/zhenze.md)
+ 🖱️[位运算技巧](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/bitwise.md)

> Go语言一些其他的网站和博客，值得一看
>
> + [Go语言面试题](https://www.topgoer.cn/docs/gomianshiti/mianshiti)
> + [Go语言中文官方文档](http://word.topgoer.com/)
> + [Go语言专家编程地址](http://wen.topgoer.com/docs/gozhuanjia/gogfjhk)

## 📚CS系列

CS 系列选自[🎉awesome-cs-course](https://github.com/3293172751/awesome-cs-course)，内容涵盖 计算机操作系统、csapp系列、算法和数据结构、计算机网络、`linux`、`java`、`python`、`C/C++`、`vuepress`、`gitbook`、`nodejs`、`vuejs`、`halo`、`redis`、`hugo`、`nginx`、`nosql`、`mysql`、`JavaScript`、`git`、`markdown`、`web`前端等笔记，更多移步到[AWESOME系列CS仓库地址](https://github.com/3293172751/CS_COURSE)

+  [Java全册☕](https://github.com/3293172751/awesome-cs-course/blob/master/java/README.md)
+  [汇编学习🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/汇编/README.md)
+  [软件工程](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/软件工程&系统设计和架构/README.md)
+  [算法与数据结构（LeetCode刷题记录）🔥](https://github.com/3293172751/LeetCode/)
+  [计算机网络🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/web/README.md)
+  [操作系统 — OS🔥](https://github.com/3293172751/os)
+  [CS必须要会的技术🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/cs/README.md)

## 📘开发必备技术

🧋参与普通程序的开发或者是区块链⛓️开发必须[熟悉Linux指令](https://github.com/3293172751/CS_COURSE/blob/master/linux/README.md)，熟悉[git团队开发](https://github.com/3293172751/CS_COURSE/blob/master/Git/README.md)，基于[docker容器](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/docker/README.md)会让我门快速的搭建工具和环境，更好的迁移开发环境和迁移链码（blockcode)，[密码学和信息安全](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/cryptology/README.md)不仅仅是区块链工程师必须要学习的技术，更是IT从业者未来不可或缺的技术。我们都渴望系统能更加的安全不是吗📵。

+  🖱️ [linux从入门到精通🔥](https://github.com/3293172751/CS_COURSE/blob/master/linux/README.md)
+  🖱️ [Git—必备神器🔥](https://github.com/3293172751/CS_COURSE/blob/master/Git/README.md)
+  [🖱️ Docker入门到进阶🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/docker/README.md)  ➡️➡️   [📘DocCub–docker book地址](https://3293172751.github.io/awesome-docker/markdown)
+  [🖱️ 密码学和信息安全🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/cryptology/README.md)

## 📔区块链导航

我认为世界历史可以用两句话来描述：分久必合，合久必分。区块链将是催化下一个‘合久必分’时代的新技术。区块链的产生铸就了一个新的时代，我们的信念是建筑在一个数学的算法上面，In math we trust。 ——张首晟

从事区块链，需要哪些基础知识，看下[区块链开发需要什么](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/C_Universal_Brockchain\chain.md) ，你需要一份[区块链工程师路线](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/route.md)，或许你可以在一些区块链项目中找到灵感[🔗区块链公益项目（NFT+私链/联盟链/私链）](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/区块链公益项目/README.md)。区块链的[共识算法](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/README.md)是怎么实现的呢?

+  [🔗区块链工程师路线](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/route.md)
+  [🔗区块链开发需要什么❓](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/C_Universal_Brockchain\chain.md)
+  [🔗区块链公益项目（NFT+私链/联盟链/私链）](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/区块链公益项目/README.md)
+  [🔗共识算法——Go语言实现](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/blockchain/README.md)

## 🅱️区块链教程

💱 区块链系列包含了区块链教程，主要是`eth`、`btc`还有联盟链`fabric`超级账本组织的教程，基于这些教程扩展新的技术：`git`、`ipfs`、密码学、共识算法。以及链学项目[C-Universal Blockchain](https://github.com/c-ub)

> 以太坊和比特币一样，底层框架都是区块链协议，区块链本质上是一个应用了密码学技术的分布式数据库系统。建议看一下**以太坊白皮书（需要有golang编程基础）**
>
> <div align="center">
> <a href="eth/TOC.md">
> 	<img src="https://sm.cubxxw.com//typora/image-20220630192622583.png?mail:3293172751@qq.com" alt="区块链的学习" style="zoom: 20%;" />
> </a></div>

+  [🖱️区块链教程🔥](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/C_Universal_Brockchain/README.md)
+  [🖱️ETH and BTC](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/eth/TOC.md)
+  [🖱️区块链技术指南](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/chainbrock-learning/SUMMARY.md)

> 企业级[区块链实战教程](https://learnblockchain.cn/books/enterprise/)

### 🗃️项目

> **c-universal blockchain（CUB-链学）**
>
> <div align="center">
> <a href="https://github.com/C-UB">
> 	<img src="https://sm.cubxxw.com//typora/twitter_header_photo_1.png?mail:3293172751@qq.com" alt="twitter_header_photo_1" style="zoom: 20%;" />
> </a></div>
>
> 基于区块链的全民学习平台`C-Universal Blockchain`在保障用户安全，信息的完整性同时为大众带来更多的选择，笔记分享，视频分享，版权保护，以及其他的关于学信数据、电子证书、荣誉证明、成绩证明、信息授权的相关工具。

+  ~~[🖱️GLinux内核(未开始)](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master)~~
+  [🖱️C-Universal Brockchain](https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/C_Universal_Brockchain/README.md)
+  [🖱️C-Universal Brockchain（链学）组织地址](https://github.com/C-UB)

## ✨参与贡献💕

**[🫵参与贡献💖❤️‍🩹💓💞](https://cubxxw.com/archives/contributors)**

**要求：**

+ [你需要学会使用markdown🖱️](https://github.com/3293172751/CS_COURSE/blob/master/markdown/README.md)
+ [符合Google代码规范](https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/)

如果你也想对本项目做出贡献，那么你可以先把该项目进行 [fork](https://github.com/3293172751/cs-awesome-Block_Chain/fork)或者 `git clone` 到本地（推荐先用 [fock](https://github.com/3293172751/cs-awesome-Block_Chain/fork)到自己仓库，然后再clone到本地，对本地进行操作，最后从自己仓库贡献，然后自己建立一个分支 `your-branch`，然后上传资料到 对应目录 下，图片信息可以上传到` /images`，然后更新 `README`。

##

## [![Repography logo](https://images.repography.com/logo.svg)](https://repography.com) / Recent activity [![Time period](https://images.repography.com/26892425/3293172751/Block_Chain/recent-activity/04864df8cf8f1f104b2b9453e0b47498_badge.svg)](https://repography.com)

![Alt](https://repobeats.axiom.co/api/embed/7053fe17b2bd9f88a0015474635e09cff7dc1ee2.svg "Repobeats analytics image")

[![Timeline graph](https://images.repography.com/26892425/3293172751/Block_Chain/recent-activity/04864df8cf8f1f104b2b9453e0b47498_timeline.svg)](https://github.com/3293172751/Block_Chain/commits)
[![Issue status graph](https://images.repography.com/26892425/3293172751/Block_Chain/recent-activity/04864df8cf8f1f104b2b9453e0b47498_issues.svg)](https://github.com/3293172751/Block_Chain/issues)
[![Pull request status graph](https://images.repography.com/26892425/3293172751/Block_Chain/recent-activity/04864df8cf8f1f104b2b9453e0b47498_prs.svg)](https://github.com/3293172751/Block_Chain/pulls)
![Trending topics](https://images.repography.com/26892425/3293172751/Block_Chain/recent-activity/04864df8cf8f1f104b2b9453e0b47498_words.svg)

 

## 版权声明 &copy;

[![GitHub license](https://sm.cubxxw.com//typora/cs-awesome-Block_Chain?mail:3293172751@qq.com)](http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0协议文本)

本书所有内容遵循[CC-BY-SA 3.0协议（署名-相同方式共享）&copy;](http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0协议文本) 
