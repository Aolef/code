const express = require('express')
const app = express()

const apiRouter = require("./router/apiRouter.js")
// 用于允许跨域访问
const cors = require('cors')

// 生成token
const jwt = require("jsonwebtoken")
// 解析token
const {expressjwt} = require("express-jwt")
const secretkey = "nihaowokai !@#"



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(expressjwt({secret:secretkey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
app.use((err,req,res,next) => {
    if(err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: '无效的token' })
    }
    res.send({
        status: 500, message: '未知错误'
    })
})

// app.use("/api",apiRouter)
app.get('/api/login',(req,res) => {
    const token = jwt.sign({username: "hello"},secretkey,{expiresIn: '30s'})
    res.send({
        status: 200,
        message: 'success',
        token
    })
})
app.get('/app',(req,res) => {
    res.send('hello')
})
app.listen(80,() => {
    console.log("jianting ")
})