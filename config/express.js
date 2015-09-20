
/**
 * Module dependencies.
 */

var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var swig = require('swig');
var winston = require('winston');
var helpers = require('view-helpers');
var config = require('./config');
var pkg = require('../package.json');
var path = require('path');
var connectAssets = require('connect-assets');
var uihelpers = require('../lib/uihelpers');
var flash = require('connect-flash');
var i18n = require('i18n');
var locale = require("locale");
var supported = ["en", "zh-CN"];

var env = process.env.NODE_ENV || 'development';

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en', 'zh-CN'],
 
  // sets a custom cookie name to parse locale settings from
  cookie: 'awesome.cookie',
 
  // where to store json files - defaults to './locales'
  directory: __dirname + '/locales',
  defaultLocale: 'en',
});

/**
 * Expose
 */

module.exports = function (app, passport) {

  // Static files middleware
  app.use(express.static(config.root + '/public'));

  // Use winston on production
  var log;
  if (env !== 'development') {
    log = {
      stream: {
        write: function (message, encoding) {
          winston.info(message);
        }
      }
    };
  } else {
    log = 'dev';
  }

  // Don't log during tests
  // Logging middleware
  if (env !== 'test') app.use(morgan(log));

  // Swig templating engine settings
  if (env === 'development' || env === 'test') {
    swig.setDefaults({
      cache: false
    });
  }

  // set views path, template engine and default layout
  app.engine('html', swig.renderFile);
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');
  app.use(connectAssets({
    paths: [path.join(config.root, 'public/css'), path.join(config.root, 'public/js')],
    helperContext: app.locals
  }));

  // expose package.json to views
  app.use(function (req, res, next) {
    res.locals.pkg = pkg;
    res.locals.env = env;
    next();
  });

  // bodyParser should be above methodOverride
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

  app.use(cookieParser());
  app.use(i18n.init);
  app.use(cookieSession({ secret: 'getAwesomeness rocks secret' }));
  app.use(flash());
  
  // should be declared after session and flash
  app.use(helpers(pkg.name));
  app.use(uihelpers(pkg.name));
  app.use(locale(supported));
};
