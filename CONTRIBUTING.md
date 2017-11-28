## Code contributions

Please make sure you maintain current code style.

## Contributing a new awesome list

1. Open [db.json](db.json), add a new definition under `defs`.

```js
	{
      "key": "java",
      "name": "Java",
      "repo": "/akullpp/awesome-java",
      "file": "README.md"
    }
```

The `file` atrribute is optional, by default it is `README.md`.

2. Register the key of the list under `groups`.

```js
	{
      "title": "JVM",
      "items": [
        "java",
        "scala"
      ]
    }
```
