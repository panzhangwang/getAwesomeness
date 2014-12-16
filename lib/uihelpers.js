
/**
 * Module dependencies.
 */

var Remarkable = require('remarkable');
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
      var md = new Remarkable();
      return md.render(text);
    }
    res.locals.getAwesomeName = function (key) {
      var json = utils.awes();
      return json[key].name;
    }
    next()
  }
}

module.exports = uihelpers
