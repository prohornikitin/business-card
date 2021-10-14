var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client/public')));


// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});