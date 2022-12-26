const  express = require('express')
const router = express.Router()

const user_handler = require('../router_handler/user')
router.post('/reguser',user_handler.regUser)

router.post('/login',user_handler.login)

module.exports = router