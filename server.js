"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _gatsbyPluginExpress = _interopRequireDefault(require("gatsby-plugin-express"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use((0, _helmet["default"])());
app.use(_helmet["default"].contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
    // imgSrc: ["'self'", 'data:', '*.amazonaws.com']
    fontSrc: ["'self'", 'fonts.gstatic.com']
  }
}));
app.use(_helmet["default"].referrerPolicy({
  policy: 'same-origin'
})); // serve static files before gatsbyExpress

app.use(_express["default"]["static"]('public/'));
app.use((0, _gatsbyPluginExpress["default"])("config/gatsby-express.json", {
  publicDir: 'public/',
  template: 'public/404/index.html',
  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true
}));
app.listen(3000, function () {
  console.log('App started on port 3000');
});
