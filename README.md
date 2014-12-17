getAwesomeness()
==============

getAwesomeness() is a simple consolidated viewer for curated awesome resource list hosted on Github. Big honors to those curators!

## Rational
As a developer, we need check out these resources pretty often, and we want to save our time and have a better bookmarking experience. With that in mind, getAwesomeness() provides a better organization and navigation choice. It works by croping the table of contents out from  the markdown file, normally, README.md, and regenerating TOC and then affixing it on the side bar. So, if you found the hacking breaks, please raise an issue or send us a PR, your contribution is always welcome.

## Install

```sh
$ git clone git://github.com/panzhangwang/getAwesomeness.git
$ npm install
$ npm start
```
Then visit [http://localhost:3000/](http://localhost:3000/)

## Features

- Designed for all developers.
- All awesomeness in a single place, simple layout.
-  Better organization on awesomeness category.
- Easier navigation between categories or table of contents.
- Content automaticly synchronized with github.
- No hassle! No login! No database!
- Open source and use for free.

## Steps to contribute a new awesome list
1. Open file includes/left.html, add a link on the left sidebar.
2. Open file lib/utils.js. Follow some comments, it is simple to add a new one.

That's it. 

## License

MIT
