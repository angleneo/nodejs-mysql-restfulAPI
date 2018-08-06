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

router.get('/students', function (req, res, next) {
  let mysqlBody = [req.body.name, req.body.age, req.body.sex, req.body.chinese, req.body.english, req.body.math]
  let sql = 'select * from student where status = 0';
  connection.connection.query(sql, mysqlBody, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    res.json(rows)
    return
  })
})

router.post('/createStudent', function (req, res, next) {
  let mysqlBody = [req.body.name, req.body.age, req.body.sex, req.body.chinese, req.body.english, req.body.math]
  let sql = 'insert into student (name, age, sex, chinese, english, math, status) values (?, ?, ?, ?, ?, ?, 0)';
  connection.connection.query(sql, mysqlBody, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    responseData = {
      code: 0,
      message: '添加学生信息成功!'
    }
    res.json(responseData)
    return
  })
})

router.post('/student/delete/:id', function (req, res, next) {
  let mysqlBody = req.params.id
  let sql = 'update student set status = 1 where id = ?';
  connection.connection.query(sql, mysqlBody, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    responseData = {
      code: 0,
      message: '删除成功'
    }
    res.json(responseData)
    return
  })
})


module.exports = router;
