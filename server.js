/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/apollo.js":
/*!**************************!*\
  !*** ./server/apollo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _language = _interopRequireDefault(__webpack_require__(/*! graphql/language */ "graphql/language"));

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _instructors2 = _interopRequireDefault(__webpack_require__(/*! ./data/instructors.json */ "./server/data/instructors.json"));

var GraphQLDate = new _graphql.GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize: function serialize(value) {
    return value.toISOString();
  },
  parseValue: function parseValue(value) {
    var dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind == _language["default"].STRING) {
      var value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  }
});

var addInstructor = function addInstructor(_, _ref) {
  var instructor = _ref.instructor;

  _instructors2["default"].push(instructor);

  return instructor;
};

var resolvers = {
  Query: {
    instructors: function instructors() {
      return _instructors2["default"];
    }
  },
  Mutation: {
    addInstructor: addInstructor
  },
  GraphQLDate: GraphQLDate
};
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _fs["default"].readFileSync('./server/schema/schema.gql', 'utf-8'),
  resolvers: resolvers,
  formatError: function formatError(error) {
    console.log(JSON.stringify(error));
    return error;
  }
});
var _default = server;
exports["default"] = _default;

/***/ }),

/***/ "./server/data/instructors.json":
/*!**************************************!*\
  !*** ./server/data/instructors.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Mariano \\\"Jun\\\" Miranda\",\"photo\":\"\",\"excerpt\":\"Jun is the first Adobe Certified Expert (ACE) and Adobe Certified Instructor (ACI) in photoshop (2000) and Lightroom (2008) in Asia.\",\"bio\":\"Jun is the first Adobe Certified Expert (ACE) and Adobe Certified Instructor (ACI) in photoshop (2000) and Lightroom (2008) in Asia. He is likewise a Canon EOS Brand Ambassador and a Canon PIXMA Brand Ambassador.\\n He is the president, creative director and resident photographer of PixelMagic, a digital imaging studio and service bureau since 1996. He is a CompTIA Certified Technical Trainer (CTT+ Certified Professional) and is also the chairman of the board of PCCI.\\n Jun is past president of the Camera Club of the Philippines, and was founding president of both the IdN Club Philippines (the country's first association of digital artists) and Club de Camera Digital (the country's first association of digital photographers). He is also a member of the National Association of photoshop Professionals.\\n He is a product of the Maine photographic Workshops (Rockport, Maine), Dynamic Graphics Educational Foundation (Peoria, Illinois) and United Digital Artists (New York). He also took Creative Training Techniques under Robert Pike and a class on Corel Painter under Jeremy Sutton, instructor, lecturer and author of several books on Painter.\\n Jun writes a regular column for Manila Bulletin called \\\"Digital Focus\\\", and lectures at different trade shows here and abroad. \\nAt last count, Jun has taught well over 400 classes in photography and digital imaging, including more than 150 classes on photoshop (both basic and advanced) and more than 30 classes on Lightroom.\"},{\"name\":\"Glenn B. Ala\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Glenn has been in the production industry in the Philippines since 1997 and has worked in both GMA and ABS-CBN developing, producing, and managing multiple shows for local and international audiences. He served for several years as Head of Production for a digital media agency and has traveled to Europe and Asia producing content for a global gaming brand. In 2013, he established GBA Media, which creates, produces, and trades digital content and original program formats globally. He is currently Head of Marketing for the biggest TV station in Cambodia and General Manager for a Cambodian advertising/commercial production company.\"},{\"name\":\"Czarina Sheela Alcasid\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Sheela completed the Master of Entrepreneurship program from the Asian Institute of Management. She has her own business but her fascination and passion for production keeps pulling her to work in the industry. She started in 2007 as the program host for NBN 4’s \\\"Kapihan ng Bayan\\\" and occasionally, as on-cam commercial talent after. Sheela had performed various capacities such as production manager, assistant director and line producer for music videos, AVPs, video viral and commercial.\"},{\"name\":\"Jose-Antonio \\\"Jan\\\" T. Aliling\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Jose-Antonio \\\"Jan\\\" T. Aliling is a practicing lawyer by profession, but a photographer by passion.\\n Not to be thrown off by his jovial disposition, Jan is a seasoned litigation and corporate lawyer who is known for his no-nonsense work ethics and professionalism. He is currently the Managing and Senior Partner of Jose Antonio Aliling and Associates, and the Chairman of Acube Legal Support, Inc.\\n He is a Supervising Lawyer at the University of the Philippines, College of Law, Office of Legal Aid and a Lecturer and Teacher at the College of Law of the New Era University.\\n Jan is also the Director for Legal Affairs and Corporate Secretary of Jose Aliling Construction Management Group of Companies, one of the country’s largest, if not the largest, 100% Filipino-Owned Construction Management Companies.\\n He is also a part-owner of a several business enterprises in the food, trading consultancy, and retail services.\\n Amidst his busy schedule, he regularly accepts professional engagements for commercial, documentation, travel, and portrait photography shoots. He has serviced clients for photography services for brochures, annual reports, magazines, websites, and even commercial billboards.\\n He also passionately engages in photography projects with a purpose. He has done various engagements with various agencies of the United Nations, including the UN International labor Organization and UNICEF, the Department of Foreign Affairs, and various charitable and socio-civic institutions to create awareness for their respective advocacies.\"},{\"name\":\"Charlie Aquino\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Charlie is the co-founder if SophieCreatives Media, together with his wife, Judy. They started off as online freelancers doing various creative activities, until they decided to focus extensively on creating explainer videos for startup companies in the US, Canada, Europe and Australia.\\n Today they still maintain a home-based setup in running their business, but hire several freelancers from all over the world to help them create Web videos.\\n He’s a self taught animator, but his skill at explaining things comes from his passion in teaching and a brief but fruitful career as a product development manager in a local multinational company.\"},{\"name\":\"Emir Khan Baustista\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Emir Kahn Bautista is known in the wedding industry for delivering wedding videos on time, every time. He is often called upon by wedding photographers to guarantee delivery for high-profile, important couples.\\n Emir has edited full-length films and documentaries and short films, including Barya, a finalist at the International Film Festival in Manhattan, and several U.S. productions. He has also edited music videos for Phylum Band, Firecastle, Teejay Marquez, and Posh Band.\\n His corporate clients include Miller Draft Beer, Gatorade Golf Tournament, Meralco, and SM.\"},{\"name\":\"Antonio \\\"Tony\\\" Bucu\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Tony is an Adobe Certified Expert (ACE) and the country’s first and only Adobe Certified Instructor (ACI) in Illustrator (CS6 and CC).\\n He took up Electrical Engineering at Mapua Institute of Technology, and never thought he would end up as a graphic designer. After leaving college, he decided to explore his artistic skills and worked as an artist for a garments factory, designing shirt graphics. He has never looked back, and has been a designer for the last 20 years.\\n Tony has worked as a freelance consultant/designer for FMI, Bozell, Basic FCB, Campaigns and Grey, and Leo Burnett; and as a full-time designer for PixelMagic and Gimenez Group. He has art-directed photoshoots for BPI and Equitable, and is an experimental photographer in his own right. Tony is also lead vocalist for the indie band X2M.\"}]");

/***/ }),

/***/ "./server/gatsby-plugin-express.js":
/*!*****************************************!*\
  !*** ./server/gatsby-plugin-express.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var redirect = function redirect() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gatsby-express.json';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var publicDir = options.publicDir || _path["default"].resolve('public/');

  var template = _path["default"].resolve(publicDir, options.template);

  if (typeof data === 'string') {
    data = _fs["default"].readFileSync(data);
    data = JSON.parse(data);
  }

  var join = function join(p) {
    return _path["default"].join(publicDir, p);
  };

  var paths = data.pages.map(function (p) {
    return p.path;
  });
  return function (req, res, next) {
    try {
      if (paths.indexOf(req.path) > -1) {
        var index = _path["default"].resolve(join(req.path), 'index.html');

        if (index) {
          // remove trailing slashes in request
          if (options.redirectSlashes && req.path.endsWith('/')) {
            return res.redirect(req.path.substr(0, req.path.length - 1));
          }

          return res.sendFile(index);
        }
      }

      return res.sendFile(template);
    } catch (error) {
      console.log(template);
      throw error;
    }
  };
};

var _default = redirect;
exports["default"] = _default;

/***/ }),

/***/ "./server/middleware.js":
/*!******************************!*\
  !*** ./server/middleware.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _cors = _interopRequireDefault(__webpack_require__(/*! cors */ "cors"));

var _compression = _interopRequireDefault(__webpack_require__(/*! compression */ "compression"));

var _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ "helmet"));

var _gatsbyPluginExpress = _interopRequireDefault(__webpack_require__(/*! ./gatsby-plugin-express */ "./server/gatsby-plugin-express.js"));

var _apollo = _interopRequireDefault(__webpack_require__(/*! ./apollo */ "./server/apollo.js"));

var middleware = function middleware(app) {
  app.use((0, _cors["default"])());
  app.use((0, _compression["default"])());
  app.use((0, _helmet["default"])());
  app.use(_helmet["default"].contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.jsdelivr.net'],
      imgSrc: ["'self'", 'data:', '*.amazonaws.com', 'cdn.jsdelivr.net'],
      fontSrc: ["'self'", 'fonts.gstatic.com']
    }
  }));
  app.use(_helmet["default"].referrerPolicy({
    policy: 'same-origin'
  })); // serve static files before gatsbyExpress

  app.use(_express["default"]["static"]('public/'));

  _apollo["default"].applyMiddleware({
    app: app,
    path: '/graphql'
  });

  app.use((0, _gatsbyPluginExpress["default"])("config/gatsby-express.json", {
    publicDir: 'public/',
    template: '404/index.html',
    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true
  }));
};

var _default = middleware;
exports["default"] = _default;

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _middleware = _interopRequireDefault(__webpack_require__(/*! ./middleware */ "./server/middleware.js"));

var app = (0, _express["default"])();
(0, _middleware["default"])(app);
app.listen(3000, function () {
  console.log('App started on port 3000');
});

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql/language":
/*!***********************************!*\
  !*** external "graphql/language" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/language");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map