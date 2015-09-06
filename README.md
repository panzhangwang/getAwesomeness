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


## One step to add a new list

Open db.json, add new list as following .
```json
  // create a group or add your list to an existing group under 'groups'
  {
    "key": "c",
    "name": "C"
  }
  // add your list under 'items'
  {
      "key": "c",
      "name": "/aleksandar-todorovic/awesome-c",
      "file": "README.md"
  }
```


## License

MIT

