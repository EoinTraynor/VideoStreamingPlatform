var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//var opentok = require('./opentok/opentokConfig');

var app = express();

// !!!! opentok test
// opentok setup config
// var OpenTok = require('opentok');
// var apiKey = 45501232;
// var apiSecret = '3eb87aa951206f0d74e12cbe3fb3eb14ea58f38a';
//
// var opentok = new OpenTok(apiKey, apiSecret);
// console.log(opentok);
// // Create a session and store it in the express app
// opentok.createSession(function(err, session) {
//     console.log('createSession');
//   if (err) throw err;
//   app.set('sessionId', session.sessionId);
// });
//
// app.get('/testingstream', function(req, res) {
//     var sessionId = app.get('sessionId');
//     // generate a fresh token for this client
//     var token = opentok.generateToken(sessionId);
//
//   res.render('streamtest.ejs', {
//     apiKey: apiKey,
//     sessionId: sessionId,
//     token: token
//   });
// });

// !!!! opentok test

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware for any requests made to the api
routes.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register the routes
app.use('/', routes);

module.exports = app;
