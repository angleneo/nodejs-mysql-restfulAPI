var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../db/db.js');
/* GET users listing. */
let token = ''

router.use(function(req,res,next){
  next();
})



module.exports = router;
