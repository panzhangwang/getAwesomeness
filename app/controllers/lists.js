
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var ListModel = require('./../models/list.js');
var List = mongoose.model('ListModel');
var utils = require('../../lib/utils');
var extend = require('util')._extend;
var awes = utils.awes();

/**
 * Load
 */

exports.load = function (req, res, next, name){
  List.load(name, function (err, list) {
    if (err) return next(err);
    if (!list) return next(new Error('not found'));
    req.list = list;
    next();
  });
};

exports.loadById = function (req, res, next, id){
  List.loadById(id, function (err, list) {
    if (err) return next(err);
    if (!list) return next(new Error('not found'));
    req.list = list;
    next();
  });
};

exports.index = function (req, res){
  var aweCookie = req.cookies.aweCookie;
  var recents = aweCookie? JSON.parse(aweCookie) : [];

  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  List.list(options, function (err, lists) {
    if (err) return res.render('500');
    List.count().exec(function (err, count) {
      res.render('lists/index', {
        title: 'Lists',
        lists: lists,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};

exports.new = function (req, res){  
  res.render('lists/new', {
    title: 'New List',
    list: new List({})
  });
};

exports.create = function (req, res){
  var list = new List(req.body);

  List.findOne({name: req.body.name}).exec(function(err, found) {
    if (found) {
      return res.render('lists/new', {
        title: 'New List',
        list: list,
        errors: ['List already exists']
      });
    }

    list.save(function (err) {
      if (!err) {
        req.flash('success', 'Successfully created list!');
        return res.redirect('/lists/' + list.name );
      }
      res.render('lists/new', {
        title: 'New List',
        list: list,
        errors: utils.errors(err.errors || err)
      });
    });
  });
};

exports.edit = function (req, res){
  var list = req.list;

  res.render('lists/edit', {
    title: 'Edit List',
    list: list,
    activeList: list.name
  });
};

exports.show = function (req, res){
  var list = req.list;

  res.render('lists/show', {
    title: list.name,
    list: list,
    keys: list.keys.split(','),
    activeList: list.name
  });
};

exports.update = function (req, res){
  var list = req.list;
  var action = req.body.action;

  if (req.body.pass !== list.pass) {
    req.flash('error', 'Secret is wrong!');
    return res.redirect('/lists/' + list.name );
  }

  if (action === 'delete') {
    return list.remove(function (err){
      req.flash('info', 'Deleted successfully');
      res.redirect('/all');
    });
  }

  list = extend(list, req.body);

  list.save(function (err) {
    if (!err) {
      req.flash('success', 'Successfully updated!');
      return res.redirect('/lists/' + list.name );
    }
    res.render('lists/edit', {
      title: 'New List',
      list: list,
      activeList: list.name,
      errors: utils.errors(err.errors || err)
    });
  });
};