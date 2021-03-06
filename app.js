const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')
const mongoose = require('mongoose')// require mongoose for database

// connecting to our Data base
mongoose.connect('mongodb://localhost/BlogApp', { useNewUrlParser: true, useUnifiedTopology: true })

// Variables
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createArticle =  require('./routes/create');
var viewArticle = require('./routes/view');
var editArticle = require('./routes/edit');

var app = express();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))// now if we call _method delete/put we will be able to 

// Register Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create', createArticle);
app.use('/view', viewArticle);
app.use('/edit', editArticle);

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
  res.render('error');
});

module.exports = app;
