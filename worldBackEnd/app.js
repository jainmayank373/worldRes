var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const restaurantRoute =  require('./routes/restaurantRoute');
const locationRoute =  require('./routes/location');
const passport = require('passport');
const authenticate = require('./auth/userAuth');
const cors =  require('cors');
var app = express();
const URL =  "mongodb://localhost:27017/restaurant";
mongoose.connect(URL,{useNewUrlParser: true})
  .then((result)=>{
        console.log("COnnected");
  })
  .catch(err=>next(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.options('*',cors())

app.use(logger('dev'));
app.use(passport.initialize());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',restaurantRoute);
app.use('/locate',locationRoute);
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
