
### 1.搭建环境
[nodejs][nodejs-id]  

>一个开放源代码、跨平台的、可用于服务器端和网络应用的运行环境

[webpack][webpackid]

>前端资源加载/打包工具

[nodejs-id]: https://github.com/nodejs/node/ "Markdown editor on Mac OS X"
[webpackid]: https://github.com/webpack/webpack/ "Markdown editor on Mac OS X"
### 2.主要使用技术
[react][reactid]、[react-redux][react-redux-id]、[redux][reduxid]
>使每个功能组件化，数据流清晰化

[react-router][react-router-id]
>搭配react控制路由指向组件



[reactid]: https://github.com/facebook/react/ "Markdown editor on Mac OS X"
[react-redux-id]:https://github.com/reactjs/react-redux
[reduxid]:https://github.com/reactjs/redux
[react-router-id]: https://github.com/reactjs/react-router/ "Markdown editor on Mac OS X"
[react-slick-id]: https://github.com/akiran/react-slick "Markdown editor on Mac OS X"
[uderscore-id]: http://underscorejs.org/ "Markdown editor on Mac OS X"
### 3.项目概述
本项目是新潮官网的3.0.0版本，主要用于宣传我们新潮团队及介绍我们的小工具

### 4.项目功能概述


### 5.搭建本地环境
// node版本 v4.4.5

```
git clone https://github.com/shenmiaoling/newteo3.0.git

cd newteo3.0 && npm install

webpack -w

node server.js
```


### 6.项目结构

##### 目录结构

routes.js  //路由

index.js  //入口文件

src:  //界面及处理数据逻辑文件

```
├─actions
├─components
│  ├─AboutTeam
│  ├─Contact
│  ├─Footer
│  ├─Home
│  ├─ItemDetail
│  ├─ProjectList
│  ├─Rule
│  ├─ServerCategy
│  ├─ServerContact
│  ├─ServerIntro
│  ├─ServerTop
│  ├─Tool
│  └─Topbar
├─containers
├─reducers
└─store
```
