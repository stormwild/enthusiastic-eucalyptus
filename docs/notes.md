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

```yml
permissions:
  - object: /var/www/html/WordPress
    pattern: '**'
    except: [/var/www/html/WordPress/ReadMe.txt]
    owner: bob
    group: writers
    mode: 644
    acls:
      - u:mary:rw
      - u:sam:rw
      - m::rw
    context:
      user: unconfined_u
      type: httpd_sys_content_t
      range: s0
    type:
      - file
```
