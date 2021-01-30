const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_db_01',
    user: 'root',
    password: 'admin123'
})
var data = {
    username: 'h6',
    password: 'jkl46',
    id: 7
}
var sql = 'delete from users where id=?;'

db.query(sql, 7, (err, result) => {
    if (err) {
        return console.log('错误信息:' + err.message)
    }
    console.log(result, typeof result)
})