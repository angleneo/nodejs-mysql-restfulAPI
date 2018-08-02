# nodejs-mysql-restfulAPI
A simple information management system of teacher and student
一个简易的师生资料管理系统。

前端技术栈：
vue + es6 + axios + elementui 进行表格的增删改查以及echart进行图表数据分析。
后端技术栈：
nodejs + express + mysql 编写符合restful规范的API,供前端调用。

操作指南：
npm install


npm start   启动

访问和调用接口：
http://localhost:3306/api/user
http://localhost:3306/api/students
http://localhost:3306/api/createStudent
http://localhost:3306/api/teachers
http://localhost:3306/api/createTeacher


本地安装并启动mysql
host: localhost,
port: 3306,
user: xxxx,
password: xxxxxx,
database: xxxxxx

建表
user:
create table user(
   id INT(8) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   username VARCHAR(16) NOT NULL,
   password VARCHAR(16) NOT NULL,
   admin INT(1) NOT NULL
);

student:
create table student(
   id INT(8) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(20) NOT NULL,
   age INT(3) NOT NULL,
   sex VARCHAR(2) NOT NULL,
   chinese VARCHAR(20) NOT NULL,
   english VARCHAR(20) NOT NULL,
   math VARCHAR(20) NOT NULL
);

teacher:
create table teacher(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(10) NOT NULL,
   age INT(3) NOT NULL,
   sex VARCHAR(2) NOT NULL,
   teaching VARCHAR(20) NOT NULL,
   headMaster INT(1) NOT NULL
);


