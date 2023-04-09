const createError = require('http-errors');
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

// const redis = require('./config/connect-to-redis.js');
// const cassandra = require('./config/connect-to-cassandra');
// const mongodb = require('./config/connect-to-mongodb');
const mssql = require('./config/connect-to-mssql');
const usersRouter = require("./api/user/user-router");

/*redis.connect().then(r => console.log('Redis connected'));
cassandra.connect().then(c => console.log('Cassandra connected'));
mongodb.connect().then(m => console.log('MongoDB connected'));*/
mssql.getConnection()

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
  res.render('error');
});

module.exports = app;
