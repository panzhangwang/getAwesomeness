
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Getters
 */

var getKeys = function (keys) {
  return keys.join(',');
};

/**
 * Setters
 */

var setKeys = function (keys) {
  return keys.split(',');
};

/**
 * List Schema
 */

var ListSchema = new Schema({
  name: {type : String, default : '', trim : true},
  pass: {type : String, default : '', trim : true},
  keys: {type: [], get: getKeys, set: setKeys}
});

/**
 * Validations
 */

ListSchema.path('name').required(true, 'List name cannot be blank');


/**
 * Statics
 */

ListSchema.statics = {

  /**
   * Find list by id
   *
   * @param {ObjectId} id
   * @param {Function} cb
   * @api private
   */

  load: function (name, cb) {
    this.findOne({ name : name })
      .exec(cb);
  },

  loadById: function (id, cb) {
    this.findOne({ _id : id })
      .exec(cb);
  },

  /**
   * List of lists
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  list: function (options, cb) {
    var criteria = options.criteria || {}

    this.find(criteria)
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb);
  }
}

mongoose.model('ListModel', ListSchema);
