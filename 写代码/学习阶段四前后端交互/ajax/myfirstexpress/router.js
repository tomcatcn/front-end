const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const secretkey = '44jgjghdkf$'

router.use(function(req, res, next) {
    console.log('路由级别中间件')
    next()
})
router.get('/user/logout/', function(req, res) {
    // throw new Error('路由错误')
    req.session.destroy()
    res.send('退出成功')

})
router.get('/user/list/', function(req, res) {
    // throw new Error('路由错误')
    console.log(req.user)
    res.send('the users list')

})

router.post('/user/login/', function(req, res) {
    console.log('working', req.body)
    req.session.user = req.body
    req.session.isLogin = true
    res.send({
        status: 0,
        mes: '登陆成功',
        token: jwt.sign({ username: req.body.username }, secretkey, { expiresIn: '60s' })
    })
})


module.exports = router