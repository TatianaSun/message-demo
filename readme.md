# message-demo 留言板小案例

> 学习目标
- 通过这个小案例学习使用nodejs,express,art-template,body-parser.
> [参考资料:express官网](https://expressjs.com/)
> [参考资料:art-template](https://github.com/aui/art-template)
> [参考资料:body-parser](https://github.com/expressjs/body-parser)

## 准备

```shell
# 创建项目目录
mkdir myapp

# 进入项目目录
cd myapp

# 初始化 package.json 文件
npm init -y

# 将 Express 安装到项目中

npm install express

# 创建app.js
   

目录如下
├── node_modules    npm安装的第三方包目录，使用 npm 装包会自动创建
├── views 所有视图页面（只存储 html 文件）
│   ├── publish.html
│   └── index.html
├── app.js 服务端程序入口文件，执行该文件会启动我们的 Web 服务器
├── data.json 这里充当我们的数据库
├── readme.md 项目说明文档
├── package.json 项目包说明文件，存储第三方包依赖等信息
└── package-lock.json     npm的包锁定文件，用来锁定第三方包的版本和提高npm下载速度
```
## 设计路由

| 请求方法 |    请求路径   |          备注          |
|----------|---------------|------------------------|
| GET      | /             | 渲染响应 index.html    |
| GET      | /publish.html | 渲染响应 publish.html  |
| POST     | /publish.html | 处理表单 POST 提交请求 |
|          |               |                        |


```javascript
app.get('/', function (req, res) {
  // ...
})

app.get('/publish', function (req, res) {
  // ...
})

app.post('/publish', function (req, res) {
  // ...
})

```
## 处理表单提交
- 1. 处理客户端表单
  + method
  + action
  + 表单控件的 name 属性
- 2. 提交测试
- 3. 服务端接收表单数据
  + 配置 body-parser 解析表单 POST 请求体
- 4. 处理表单数据
- 5. 持久化存储
- 6. 服务端重定向
  + res.redirect()
