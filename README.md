# vue-customs-data #
  **注意：该项目目前使用element-ui@1.3.3版本,所以最低兼容 Vue 2.3.0**
  - 本源码为开源项目，仅仅用于 Vue 实战项目的学习，不可作为商业用途。

## 前言
 
 **该项目不支持低版本游览器，有需求请自行添加polyfill[详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)**


## 开发
```bash
    # 克隆项目
    git clone http://git.zs/shiguangwei/customs-data.git

    # 安装依赖
    yarn install

    # 本地开发 开启服务
    yarn dev
```
浏览器访问 http://localhost:9202

## 发布
```bash
    # 发布测试环境 带webpack ananalyzer
    npm run build:sit-preview

    # 构建生成环境
    npm run build:prod
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── jquery
│   └── Tinymce                // 富文本
├── theme                      // eleme生成的一些主题文件
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```


## 状态管理
后台只有user和app配置相关状态使用vuex存在全局，其它数据都由每个业务页面自己管理。

## 项目使用
> 企业基本信息查询   
   
  - 使用以下公司可查询
  - 企业代码暂不能查询 
  - 提供模糊匹配	
   	
![2017-07-20-17-12-14](http://otdp12rwa.bkt.clouddn.com/2017-07-20-17-12-14.png)

> 单据查询

  - 提供了一些表单的查询功能，包括动态表单
 
> 企业贸易查询

  - 可以选择距今的时间段快捷查询
  - 也可自定义时间段
  - 基本上是有mock 2017-6以前的12个月份的数据
  - 企业登记号为默认：440102296888092，并不提供查询企业号的功能
  - 企业进出口金额的曲线图是百度e-charts

> 行业下贸易查询

  - 提供农业，林业，畜牧业，渔业，服务业的多选查询的三维数据
 
> 商品下贸易查询

  - 商品和行业基本一样
 
> 贸易资讯信息
	
  - 提供一些相关资讯的信息

  
## Bug 修复和项目完善

项目的数据为mock.js提供，都是本地代码，用来拦截ajax，后期打算迁移到easymock.js,由于个方面的原因，项目还没有很完善，感兴趣的道友可以star，fork，pull request.
    