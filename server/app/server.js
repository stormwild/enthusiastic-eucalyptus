"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _gatsbyPluginExpress = _interopRequireDefault(require("gatsby-plugin-express"));

var app = (0, _express["default"])(); // serve static files before gatsbyExpress

app.use(_express["default"]["static"]('public/'));
app.use((0, _gatsbyPluginExpress["default"])('config/gatsby-express.json', {
  publicDir: 'public/',
  template: 'public/404/index.html',
  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true
}));
app.listen(3000, function () {
  console.log('App started on port 3000');
});