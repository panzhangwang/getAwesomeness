
/**
 * Module dependencies.
 */

var marked = require('marked');
var utils = require('./utils');
var low = require('lowdb');
var db = low('db.json');

/**
 * Helpers method
 *
 * @param {String} name
 * @return {Function}
 * @api public
 */

function uihelpers (name) {
  return function (req, res, next) {
    res.locals.md = function (text) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
      return marked(text);
    }

    res.locals.label = function (key) {
      var found = db('defs').find({ key: key });
      if (found)
        return found.name;
      else
      return "";
    }

    next()
  }
}

module.exports = uihelpers
