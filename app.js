require('dotenv').config({ path: './.env' });
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./util/db');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

connectDB()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
