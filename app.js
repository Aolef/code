const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const userRouter = require('./router/user')
app.use('/api',userRouter)

app.listen(3007,() => {
    console.log("start listening 3007")
})