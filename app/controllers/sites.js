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
  var post = cache.get(awe);

  if (!awes[awe]) return res.render('404');

  processCookie(req, res);
  var aweCookie = req.cookies.aweCookie;
  var recents = aweCookie? JSON.parse(aweCookie) : [];

  if (!post) {
    var elem = awes[awe];
    return cacheGit(elem.url, elem.start, elem.end, awe, function(content){
      if (content) {
        new CronJob('* * 1 * * *', function(){ 
          cacheGit(elem.url, elem.start, elem.end, awe, null); 
        }, null, true, null);
        res.render('get', {
          title: awe,
          article: content,
          recents: recents,
          awe: awe
        });
      }
    })
  }

  res.render('get', {
    title: awe,
    article: post,
    recents: recents,
    awe: awe
  });
};

function cacheGit (url, start, end, key, done) {
  request(url, function (error, response, body) {
    var content;
    if (!error && response.statusCode == 200) {      
      var arr = body.split('\n');
      // remove github toc.
      arr.splice(start, end);
      content = arr.join('\n');
      cache.put(key, content );
    }
    done(content);
  })
}