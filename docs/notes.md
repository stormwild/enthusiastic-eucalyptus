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
