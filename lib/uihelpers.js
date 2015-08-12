
/**
 * Module dependencies.
 */

var marked = require('marked');
var utils = require('./utils');

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
    next()
  }
}

module.exports = uihelpers
