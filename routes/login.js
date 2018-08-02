var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../db/db.js');
/* GET users listing. */
var responseData;
router.use(function (req, res, next) {
  responseData = {
    code: 0,
    message: ''
  }
  next();
})

router.post('/login', function (req, res, next) {
  let mysqlBody = [req.body.username, req.body.password]
  let sql = 'select * from user where username = ? and password = ?';
  connection.connection.query(sql, mysqlBody, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }

    if (rows.length === 0) {
      responseData = {
        code: 1,
        message: '用户名或密码错误!'
      }
      res.json(responseData)
      return
    }

    if (rows[0] && req.body.username === rows[0].username && req.body.password === rows[0].password) {
      responseData = {
        code: 0,
        message: '登陆成功!'
      }
      res.json(responseData)
      return
    }
  })
});

router.post('/register', function (req, res, next) {
  let mysqlBody = [req.body.username, req.body.password]
  let sql = 'select * from user where username = ? and password = ?'
  connection.connection.query(sql, mysqlBody, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }

    if (rows[0] && req.body.username === rows[0].username && req.body.password === rows[0].password) {
      responseData = {
        code: 1,
        message: '用户已存在!'
      }
      res.json(responseData)
      return
    }

    if (rows.length === 0) {
      let sqlQuery = 'insert into user (username, password, admin) values (?, ?, 1)'
      connection.connection.query(sqlQuery, mysqlBody, function (error, data, fields) {
        if (error) {
          console.log(error)
          return
        }

        responseData = {
          code: 0,
          message: '注册成功!'
        }
        res.json(responseData)
        return
      })
    }
  })
})

module.exports = router;
