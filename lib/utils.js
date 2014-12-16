exports.awes = function () {  
  var obj = {
    go: {
      name: 'Go', // display name
      url: 'https://raw.githubusercontent.com/avelino/awesome-go/master/README.md', // URL for the markdown file
      start: 8, end: 53 // use start and end to crop TOC section 
    },
    php: {
      name: 'PHP',
      url: 'https://raw.githubusercontent.com/ziadoz/awesome-php/master/README.md',
      start: 6, end: 70
    }
  }

  return obj;
}