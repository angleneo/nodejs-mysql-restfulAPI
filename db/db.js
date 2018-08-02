var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '654321',
  database: 'build'
})

connection.connect(function(err){
  if (err) {
    console.log(err)
    return
  }
  console.log('链接成功！')
})

module.exports.connection = connection;