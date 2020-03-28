# Notes

Setup nodemon

Setup babel-node

```bash
npm i nodemon @babel/node
```

Setup script

`package.json`

```json
{
  "scripts": {
    "app": "nodemon --exec babel-node --watch src/app/ src/app/server.js"
  }
}
```

## References

- [Example Node Server w/ Babel](https://github.com/babel/example-node-server)

## EsLint

```
{
  scripts: {
        "lint": "eslint --fix src/**/*.js",
    "prettify": "prettier --write src/**/*.js"
  }
}
```

https://hostadvice.com/how-to/how-to-install-node-js-on-ubuntu-18-04/

$ command -v foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
$ type foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed. Aborting."; exit 1; }
\$ hash foo 2>/dev/null || { echo >&2 "I require foo but it's not installed. Aborting."; exit 1; }
