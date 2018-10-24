//引包
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
var app = express()

//配置express-art-template
app.engine('html', require('express-art-template'))

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//发送请求
app.get('/', function (request, response) {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      throw err
    }
    data = data.toString() //先把二进制数据转为字符串
    data = JSON.parse(data) //将字符串转为对象
    response.render('index.html', {
      posts: data.posts
    })
  })
})

app.get('/publish', function (request, response) {
  response.render('publish.html')
})

app.post('/publish', (req, res) => {
  //1.接受表单数据
  const body = req.body
  body.time = "2018-10-24 16:32:15"
  //2.数据校验(先不做)
  //3.持久化存储
  //先把文件读出来,再把文件内容转成对象,得到数组,再往数组里面unshift元素
  //最后再把数组转成字符串重写到文件中,从而实现持久化存储
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      throw err
    }
    data = data.toString() //先把二进制数据转为字符串
    data = JSON.parse(data) //转为数组对象
    data.posts.unshift(body)

    //重新转为字符串,写入文件中
    data = JSON.stringify(data)
    fs.writeFile('./data.json', data, err => {
      if (err) {
        throw err
      }
      //4.发送响应
      //服务端重定向,告诉服务器请求'/'这个标识
      res.redirect('/')
    })
  })
})

app.listen(3000, function () {
  console.log('running...')
})
