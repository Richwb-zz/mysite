const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const errorLogging = require ('./logging');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const errorMessage = "An internal server error has ocurred. The issue, as well as your submission, have been logged and will be reviewed. I apologize for the inconvenience";
  
  errorLogging(errorMessage, "500", req.originalUrl, JSON.stringify(req.body));
  res.status(500).json(errorMessage);
});

module.exports = app;