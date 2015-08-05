getAwesomeness()
==============

getAwesomeness() is an explorer designed for curated awesome list hosted on Github. Website: https://getawesomeness.herokuapp.com/ or http://getawesomeness.com


## Key Features

- Single repository  of amazing lists
- Better organization and navigation
- Content auto-synced with github
- Short list for personalization

## Rational
As a developer, we need check out these resources pretty often, and we want to save our time and have a better bookmarking experience. With that in mind, getAwesomeness() shares a better organization and navigation method. It works by croping the table of contents out from  the markdown file, normally, README.md, and regenerating TOC and then affixing it on the side bar. So, if you found the hacking breaks, please raise an issue or send us a PR, your contribution is always welcome.

## Install

```sh
$ git clone git://github.com/panzhangwang/getAwesomeness.git
$ cd getAwesomeness
$ npm install
$ npm start
```
Then visit [http://localhost:3000/](http://localhost:3000/)


## Steps to contribute a new awesome list

1. Open file lib/utils.js. Follow some comments, it is simple to add a new one.
2. Optional. Open file includes/left.html, add a link on the left sidebar.


## License

MIT

