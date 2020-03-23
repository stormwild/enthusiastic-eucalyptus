"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _gatsbyPluginExpress = _interopRequireDefault(require("gatsby-plugin-express"));

var app = (0, _express["default"])();

var base = _path["default"].resolve(__dirname, '..'); // serve static files before gatsbyExpress


app.use(_express["default"]["static"](base));
app.use((0, _gatsbyPluginExpress["default"])("".concat(base, "/config/gatsby-express.json"), {
  publicDir: _path["default"].join(base, '/public'),
  template: _path["default"].join(base, '/public/404/index.html'),
  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true
}));
app.listen(3000, function () {
  console.log('App started on port 3000');
});