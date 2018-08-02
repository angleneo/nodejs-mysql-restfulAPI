var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../db/db.js');
/* GET users listing. */
var responseData;

router.use(function(req,res,next){
  responseData = {
    code: 0,
    message: ''
  }
  next();
})

router.get('/teachers', function(req, res, next) {
  let mysqlBody = [req.body.name, req.body.age, req.body.sex, req.body.teaching, req.body.headMaster]
  let sql = 'select * from teacher';
  connection.connection.query(sql, mysqlBody, function(err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    res.json(rows)
  })
});

router.post('/createTeacher', function(req, res, next) {
  let mysqlBody = [req.body.name, req.body.age, req.body.sex, req.body.teaching, req.body.headMaster]
  let sql = 'insert into teacher (name, age, sex, chinese, english, math) values (?, ?, ?, ?, ?)';
  connection.connection.query(sql, mysqlBody, function(err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    res.json('添加教师信息成功!')
  })
})

module.exports = router;
