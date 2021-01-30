const express = require('express')
const router = require('./router')
const app = express()
const session = require('express-session')
const expressJWT = require('express-jwt')
app.use(session({
    secret: 'hhhh', // 随意
    resave: false, //固定写法
    saveUninitialized: true //固定写法
}))
app.use(expressJWT({ secret: '44jgjghdkf$', algorithms: ['HS256'] }).unless({ path: ['/user/login/'] }))
app.use(express.urlencoded({ extended: false }))
app.use(router)


app.listen(80, () => {
    console.log('listen the 127.0.0.1:80')
})
app.use(function(err, req, res, next) {
    if (err.name == 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效的token'
        })
    }
    res.send({
        status: 500,
        message: '其他错误'
    })
})