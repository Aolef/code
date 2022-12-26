const mysql = require('mysql')

const db = mysql.createPool({
    host: '120.79.60.167',
    user: 'root',
    password: 'totoro',
    database: 'my_db_01'
})
module.exports = db