var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var bodyParser = require('body-parser');

var indexRouter = require('./web/routes/indexRouter');
var usersRouter = require('./web/routes/users');
var scriptsRouter = require('./web/routes/scriptsRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './web/views'));
app.set('view engine', 'pug');

// Set where scripts are located
app.set('scripts', path.join(__dirname, 'scripts'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './web/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/scripts', scriptsRouter);

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
