#sign

#1.项目简介
面试管理软件
#2.技术栈
主框架为小程序，结合vuex等运行。

#3.项目运行 
```
## 初始化项目 
cd sign
npm run dev

## 安装依赖
yarn add  
  
## 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

## 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

## 生成 bundle 分析报告
npm run build --report
For detailed explanation on how things work, checkout the guide and docs for vue-loader.
```
功能列表
- [x] 定位功能
- [x] 我的功能
   - [ ] 绑定手机号
- [ ] 面试功能
   - [ ] 添加面试
   - [x] 面试列表
   - [x] 面试详情
   - [ ] 面试分享
   - [ ] 面试推送
   - [ ] 打卡功能
   - [ ] 面试导航
- [ ] 支付功能

## 更新日志  