
/*!
 * nodejs-express-mongoose-demo
 * Copyright(c) 2013 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */
/**
 * Module dependencies
 */

var fs = require('fs');
var express = require('express');
var config = require('config');

var app = express();
var port = process.env.PORT || 3000;

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(port);
console.log('Express app started on port ' + port);


/**
 * Expose
 */

module.exports = app;