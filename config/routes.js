
var sites = require('../app/controllers/sites');

/**
 * Expose routes
 */

module.exports = function (app) {
  // home route
  app.get('/', sites.index);
  app.get('/get/:awe', sites.get);
  app.get('/json/list', sites.json);
  

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
}
