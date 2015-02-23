
var sites = require('../app/controllers/sites');
var lists = require('../app/controllers/lists');

/**
 * Expose routes
 */

module.exports = function (app) {
  // home route
  app.get('/', sites.index);
  app.get('/get/:awe', sites.get);


  // lists route
  app.get('/all', lists.index);
  app.get('/lists/new', lists.new);
  app.get('/lists/:name', lists.show);

  app.post('/lists', lists.create);
  app.get('/lists/:id/edit', lists.edit);
  app.put('/lists/:name', lists.update); 

  app.get('/lists/:name/get/:awe', sites.get);

  app.param('name', lists.load);
  app.param('id', lists.loadById);
  

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
