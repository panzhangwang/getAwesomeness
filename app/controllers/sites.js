var cache = require('memory-cache');
var request = require('request');
var CronJob = require('cron').CronJob;
var _ = require('lodash');
var utils = require('../../lib/utils');
var awes = utils.awes();

    
exports.index = function (req, res){
	var aweCookie = req.cookies.aweCookie;
	var recents = aweCookie? JSON.parse(aweCookie) : [];
  res.render('index', {
    title: 'Home',
    recents: recents
  });
};

function processCookie(req, res) {
  var awe = req.param('awe');
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
	var awe = req.param('awe');
  var article = cache.get(awe);
  var found = awes[awe];

  if (!found) return res.render('404');

  processCookie(req, res);
  var aweCookie = req.cookies.aweCookie;
  var recents = aweCookie? JSON.parse(aweCookie) : [];

  if (article) {
    return res.render('get', {
      title: found.name,
      article: article,
      recents: recents,
      awe: awe
    });
  }

  request(found.url, function (error, response, body) {      
    if (!error && response.statusCode == 200) {
      article = cacheGit(awe, found.start, found.end, body);
      
      // fire up a cron job to load update from github every 12 hours.
      new CronJob('* * */12 * * *', function(){
        request(found.url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            cacheGit(awe, found.start, found.end, body);
          }
        });
      }, null, true, null);

      return res.render('get', {
        title: found.name,
        article: article,
        recents: recents,
        awe: awe
      });
    } else {
      return res.render('try');
    }
  });
};

function cacheGit(key, tocStart, tocEnd, body) {
  var content;
  var arr = body.split('\n');
  // remove github toc.
  arr.splice(tocStart, tocEnd);
  content = arr.join('\n');
  cache.put(key, content );

  return content;
}