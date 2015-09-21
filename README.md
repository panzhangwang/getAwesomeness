getAwesomeness()
==============

getAwesomeness() is an explorer designed for curated awesome list hosted on Github. Website: https://getawesomeness.herokuapp.com/ or http://getawesomeness.com


## Key Features

- Single repository  of amazing lists
- Better organization and navigation
- Content auto-synced with github
- i18n support

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


## Steps to add a new list

- Open db.json, add a new definition under defs.
```js
	{
      "key": "java",
      "name": "Java",
      "repo": "/akullpp/awesome-java",
      "file": "README.md"
    }
```
file atrribute is optional, by default it is README.md.

- Register the key of the list under groups.
```js
	{
      "title": "JVM",
      "items": [
        "java",
        "scala"
      ]
    }
```


## License

MIT

