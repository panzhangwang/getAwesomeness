var cache = require('memory-cache');
var request = require('request');
var CronJob = require('cron').CronJob;
var _ = require('lodash');

var low = require('lowdb');
var db = low('db.json');

exports.index = function (req, res){
	var aweCookie = req.cookies.aweCookie;
	var recents = aweCookie? JSON.parse(aweCookie) : [];
  res.render('index', {
    title: 'Home',
    recents: recents,
    groups: db('groups').where({})
  });
};

exports.json = function (req, res){  
  res.json( db('defs').where() );
};


function processCookie(req, res) {
  var awe = req.params.awe;
  var aweCookie = req.cookies.aweCookie;
  var maxAge = 7*24*60*60*1000;

  if (!aweCookie) {
    var arr = [];
    arr.push(awe);
    res.cookie('aweCookie', JSON.stringify(arr), { maxAge: maxAge, httpOnly: true });
  } else {
    var existings = JSON.parse(aweCookie);
    if (!_.contains(existings, awe)) {
      if (existings.length < 5) {
        existings.push(awe);
        res.cookie('aweCookie', JSON.stringify(existings), { maxAge: maxAge, httpOnly: true });
      } else {
        var arr = [];
        arr.push(existings[1]);
        arr.push(existings[2]);
        arr.push(existings[3]);
        arr.push(existings[4]);
        arr.push(awe);
        res.cookie('aweCookie', JSON.stringify(arr), { maxAge: maxAge, httpOnly: true });
      }     
    }   
  }
}

exports.get = function (req, res){
  var list = req.list;
  var keys = list ? list.keys.split(',') : [];
  var activeAwe = req.params.name;

	var awe = req.params.awe;
  var article = cache.get(awe);
  var found = db('defs').find({ key: awe });

  if (!found) return res.render('404');

  processCookie(req, res);
  var aweCookie = req.cookies.aweCookie;
  var recents = aweCookie? JSON.parse(aweCookie) : [];

  if (article) {
    return res.render('get', {
      title: found.name,
      article: article,
      recents: recents,
      groups: db('groups').where({}),
      repo: found.repo,
      activeAwe: activeAwe,
      keys: keys,
      awe: awe
    });
  }

  var mkFile = found.file ? found.file : "README.md";
  var url = 'https://raw.githubusercontent.com' + found.repo + '/master/' + mkFile;

  request(url, function (error, response, body) {   
    if (!error && response.statusCode == 200) {
      cache.put(awe, body );
      
      // fire up a cron job to load update from github every 12 hours.
      new CronJob('* * */12 * * *', function(){
        request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            cache.put(awe, body );
          }
        });
      }, null, true, null);

      return res.render('get', {        
        title: found.name,
        article: body,
        recents: recents,
        groups: db('groups').where({}),
        repo: found.repo,
        activeAwe: activeAwe,
        keys: keys,
        awe: awe
      });
    } else {
      return res.render('try');
    }
  });
};
