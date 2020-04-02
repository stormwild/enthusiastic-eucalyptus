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

/***/ "./server/db/data/course-categories.json":
/*!***********************************************!*\
  !*** ./server/db/data/course-categories.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Photography\"},{\"name\":\"Image Editing\"},{\"name\":\"Graphic Design & Publishing\"},{\"name\":\"Web Design & Development\"},{\"name\":\"E-Learning\"},{\"name\":\"Film & Video\"},{\"name\":\"Animation\"},{\"name\":\"Special & Seasonal Courses\"}]");

/***/ }),

/***/ "./server/db/data/courses.json":
/*!*************************************!*\
  !*** ./server/db/data/courses.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Digital Imaging and Color Management Fundamentals (seminar)\",\"description\":\"This one-day seminar is an excellent introduction to Photoshop or any image-editing software. It lays down the foundation for understanding bitmap editing and digital photography.\\n\\n## What will be covered\\n\\n- Definition of Digital Imaging\\n- Tools in Digital Imaging\\n- Building a Photoshop System\\n- Computer Graphics\\n- Scanning Techniques\\n- Color Basics and Color Management\\n- Digital Workflow\\n\\n## Who should attend\\n\\nRecommended participants include graphic designers, illustrators, photographers, art directors, corporate communicators, and advertising executives who want to understand the digital imaging process. This is a must for those who want to take up [Adobe Photoshop Essentials](#) but is also recommended to the self-taught Photoshop users.\\n\\n\",\"instructors\":[],\"fee\":2950,\"category\":{\"name\":\"Photography\"}},{\"title\":\"Adobe Photoshop CC Essentials\",\"description\":\"Learning by yourself often results in using the same 20% of Photoshop again and again. You also apply correction filters and adjustments without understanding the various options.\\n\\nThis focused, hands-on workshop guides you through the Photoshop fundamentals that will equip you to execute design projects. Included are lessons on layers (putting photos together), selecting and extracting parts of a photo, retouching, changing an object's color while retaining its texture, correcting off-color photos, removing defects, adding and manipulating text, and more.\\n\\nProjects you can apply the techniques to range from print ads, marketing collaterals, Websites, and other communication materials.\\n\\n##### Expected Outcome\\n\\nAt the end of the course, participants are expected to:\\n\\n*   Be able to set up Photoshop\\n*   Use tools and adjust their settings\\n*   Recognize and use essential panels\\n*   Create precise selections\\n*   Fix common photo problems (correct color cast, recover tones, etc.)\\n*   Create and use layers to organize art work\\n*   Add and edit text on images\\n*   Be able to apply Photoshop on images intended for print, presentation and online\\n\\n##### Who will benefit\\n\\nIf you are a photographer, graphic designer, web designer, or painter with little or no background in computer imaging, and now want to expand your business or your craft, this course is for you!\\n\\n##### Course Outline\\n\\n*   Preparing the work area\\n    *   setting the preferences\\n    *   choosing the appropriate color space\\n    *   creating your own work space\\n*   Setting Bridge to organize your images\\n*   How to use Bridge to bring images into Photoshop\\n*   Navigating in Photoshop\\n*   Cropping and aligning images if necessary\\n*   Performing global adjustments to images\\n    *   cleaning\\n    *   color correction\\n    *   color enhancement\\n    *   exposure adjustment\\n    *   tonal adjustment\\n*   Performing local adjustments to an image\\n    *   how to use the selection tools and techniques\\n    *   how to save selections as channel mask\\n    *   how to convert selections into layers\\n    *   how to use Blending properties of layers\\n    *   how to use the adjustment layers\\n    *   how to use the layer mask\\n*   Sharpening the final image\\n*   Preparing the file for outputting\\n*   Bonus: applying special effects to an image\\n\\n##### Prerequisite\\n\\nParticipants should have completed PCCI’s [Digital Imaging and Color Management Fundamentals](DigitalImaging-Fundamentals.html) seminar or have equivalent experience.\\n\\n\",\"instructors\":[],\"fee\":6950,\"category\":{\"name\":\"Image Editing\"}},{\"title\":\"Seminar: Web Design Fundamentals\",\"description\":\"A one-day seminar that introduces participants to technical considerations that impact on Web design. Issues covered include cross-platform and cross-browser designing; the nature of WWW imaging; navigation and usability; and interactivity. Prerequisite for Web design courses.\\n\\n##### **What will be covered**\\n\\n*   How the WWW fits into the Internet\\n*   Components of a Web page and how they work\\n*   Layers of Web design\\n*   The basic elements of a Web page\\n*   Languages of the Web\\n*   Multimedia\\n*   Print imaging vs. Web imaging\\n*   HTML or Flash?\\n*   Essential tools for Web designers and developers\\n*   Web design and development process\\n*   Basic design principles\\n*   Implications of user control on Web design\\n*   Factors affecting download speed\\n*   Usability and navigation\\n*   How to conceptualize a usable, interactive Web site\\n\\n##### **Who should attend**\\n\\nAll those planning to go into designing and building Web sites, either for hobby or for work. Web designers who want to further improve their Web pages or are still confused about the intricacies of the cyber media can benefit from this seminar as well.\\n\",\"instructors\":[],\"fee\":2950,\"category\":{\"name\":\"Web Design & Development\"}},{\"title\":\"E-Learning Basics with Adobe Captivate\",\"description\":\"Adobe Captivate allows you to create interactive eLearning content and provide custom online training to employees or clients. This is a two day intensive hands-on workshop with the industry standard on in authoring interactive eLearning content.\\n\\n##### What will be covered\\n\\n*   Learn to make a presentation from scratch or with built-in themes, import images and PowerPoint slides, and add interest with animation, widgets, and video.\\n*   Plus, add built-in smart learning interactions to your projects, which add more complex interactivity.\\n*   You’ll also discover how to prepare for and record a software simulation, synchronize video, add audio, and build quizzes into your project.\\n\\n##### Who should attend\\n\\n*   Anyone who what to create software demonstrations or interactive simulations\\n*   Brand professionals\\n*   Sales and marketing professionals\\n*   eLearning Developers and Designers\\n*   Educators\\n*   Trainers\\n*   Instructional Designers\\n*   Sales and Marketing Professionals\\n\\n##### Prerequisites\\n\\nKnowledge in basic computer operation is a must.\\n\",\"instructors\":[],\"fee\":7250,\"category\":{\"name\":\"E-Learning\"}},{\"title\":\"Script Writing & Development for Film\",\"description\":\"Screenwriting is a distinctive approach to storytelling for the visual medium. This 5-session workshop is an introduction to the basic principles of dramatic writing that guides the student to the creative and technical process of translating a concept to a screenplay.\\n\\n##### What will be covered\\n\\n*   Screenwriting concepts and terms\\n*   Structure and plot\\n*   Character and archetypes\\n*   Format and style\\n*   Pitching and concept development\\n*   The 3-act paradigm\\n*   Dialogue\\n*   Dramatic beats\\n*   Alternative structures and nonlinear plots\\n*   Dramatic and narrative voice\\n*   Screenwriting software\\n\\n**Recommended Reading:** _\\\"Trip to Quiapo\\\" by Ricky Lee._\\n\\n##### Who should attend\\n\\nIf you have an interest in filmmaking, some writing experience, and a college level education, this workshop is for you.\\n\\n##### Schedule\\n\\nPlease note, this hands-on workshop is scheduled differently from most other PCCI classes. Instead, of an _all-day, consecutive-day_ schedule, this class will be spread out over 5 sessions.\\n\\nIn addition, there will be an online consultation between each class day, so the instructor can discuss the participants’ writing progress.\\n\\n##### About the instructor\\n\\nKhalil Joseph Bañares is a filmmaker from Manila, Philippines. His films have competed in various film festivals abroad. His films range from historical documentaries, advocacy films, erotic thrillers and romantic flicks. He has worked in different industries such as advertising, TV, digital and films. Aside from filmmaking, he is a marketing professional. With projects ranging from digital marketing, OOH, OTT and content creation.\\n\",\"instructors\":[],\"fee\":7500,\"category\":{\"name\":\"Photography\"}},{\"title\":\"Basic Video & Film Production\",\"description\":\"Making videos is becoming a trend nowadays especially with the accessible internet access. Whether you're a YouTuber, blogger, vlogger, business owner, aspiring filmmaker, or just someone who wants to create videos as a hobby, this is a great introductory workshop for you to learn how to make professional videos with this course.\\n\\nThis workshop will cover the three basic stages of film and video production and provide insights on producing film and video projects which starts with building the storyline to shooting the scenes. There are hands on activities throughout the workshop and participants will be grouped for the final project.\\n\\n**By the end of the course, you will:**\\n\\n*   Understand the difference between Film Making and Video Production\\n*   Learn the stages of film making and video production for planning and execution\\n*   Learn the basic equipment and gears\\n*   Apply the camera composition, angles and movement\\n*   Create a final project by building a storyline and shooting then editing the scenes to complimenting the story\\n\\n**Note:** Different film clips will be shown and analyzed during the 2-day workshop. The instructor will also share valuable insider information and personal experience on the Philippine film industry. He may adjust certain topics depending on the students’ needs.\\n\\n##### Topics\\n\\nDay 1:\\n\\n*   (A) Pre-Production\\n    *   (1) Idea to Image : The goal of film production\\n    *   (2) Story: The most important element in film production\\n    *   (3) Script and Storyboard\\n    *   (4) Crew\\n    *   (5) The Actor\\n*   (B) Production\\n    *   (1) Camera\\n        *   (a) Tools  \\n            (a.1) Camera (Video Camera vs. DSLR)  \\n            (a.2) Lens  \\n            (a.3) Mounting  \\n            \\n        *   (b) Composition  \\n            (b.1) Shot (Rule of Thirds and 180-Degree Rule)  \\n            (b.2) Framing  \\n            (b.3) Angles  \\n            \\n        *   (c) Movement\\n    *   (2) Lighting\\n        *   (a) Source\\n        *   (b) Basic Set-Up\\n    *   (3) Sound\\n        *   (a) Equipment\\n        *   (b) Recording\\n\\nDay 2:\\n\\n*   (C) Post-Production\\n    *   (1) Editing\\n    *   (2) Effects\\n\\n##### Activities\\n\\nDay 1:\\n\\n*   Short film analysis.\\n*   Storytelling exercise.\\n*   Individual take home assignment on camera composition and movement.\\n\\nDay 2:\\n\\n*   Short flm output (group activity) to be written, shot, edited, and viewed in class. Based on the principle of the 3-Act Structure and Dramatic Arc. **Note:** topic(s) will be given during the workshop.\\n\\n##### What to bring\\n\\nParticipants who have their own digital camcorders or DSLR camera are encouraged to bring them to class.\\n\\n##### Who Should Attend\\n\\nThis workshop is open to high school students up to working professionals who may or may not have prior background in video or film production but are willing to learn the basics of the trade as a skill or a business or a hobby.\\n\",\"instructors\":[],\"fee\":6950,\"category\":{\"name\":\"Film & Video\"}},{\"title\":\"Dynamic Acrylic Painting\",\"description\":\"Try your hand at painting! Transfer your imagination to canvas! Don't worry if you can't draw very well, painting is as much imagination as drawing skill. You don't even need to color inside the lines, because there are no lines.\\n\\nBy the end of the workshop, you will learn the basic techniques in creating _Still Life and Blending Colors Painting_ using the acrylic medium and canvass. A great activity that you can enjoy with your friends and family!\\n\\n##### What will be covered\\n\\n*   Project 1: Blending colors painting\\n\\nThis project involves painting with blending colors. It's a great way to create a gradual transition from one color to another and is very useful in creating the finer details and making your paintings look more realistic.\\n\\n*   Project 2: Still Life Alla Prima\\n\\nParticipants paint a still life subject in the impressionist style, using brush and palette knife.\\n\\n##### Who should attend\\n\\nOpen to 8 years old and up, interested in learning acrylic painting, or starting out in art. A great activity that you can enjoy with your friends and family!\\n\\n##### Workshop Fee Inclusions\\n\\nAt the end of the workshop, each participant can bring home all their finished paintings.\\n\\nAll supplies will be provided (desktop easels, canvas board, paints, paint brush, paint palette, palette knife, apron...etc).\\n\\n**All you need to bring is lot of enthusiasm and willingness to learn.**\\n\\n##### About the instructor\\n\\nRonna Lara-Bes is a practicing artist, whose multi-disciplinary specialties are: painting (oil, acrylic, and watercolor), sculptures (clay, resin, 3D printing, assemblage) and photography. She has successfully launched two solo exhibitions in Manila, and her works have also been exhibited in Vienna, Rome, and Leeds (UK). Ronna is a member of the faculty of Feati University’s School of Fine Arts.\\n\\n*   2nd Place Winner: Manila Bulletin Sketchfest 2016, Exhibition Category\\n*   Grand Winner: Metrobank's MADE Awards 2018, Sculpture Category\\n\\n**More samples: acrylic on canvas painting** ![Photoshop for Kids](../../images/dynamic-painting-samples.jpg)\\n\",\"instructors\":[],\"fee\":2950,\"category\":{\"name\":\"Special & Seasonal Courses\"}}]");

/***/ }),

/***/ "./server/db/data/instructors.json":
/*!*****************************************!*\
  !*** ./server/db/data/instructors.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Mariano \\\"Jun\\\" Miranda\",\"photo\":\"\",\"excerpt\":\"Jun is the first Adobe Certified Expert (ACE) and Adobe Certified Instructor (ACI) in photoshop (2000) and Lightroom (2008) in Asia.\",\"bio\":\"Jun is the first Adobe Certified Expert (ACE) and Adobe Certified Instructor (ACI) in photoshop (2000) and Lightroom (2008) in Asia. He is likewise a Canon EOS Brand Ambassador and a Canon PIXMA Brand Ambassador.\\n He is the president, creative director and resident photographer of PixelMagic, a digital imaging studio and service bureau since 1996. He is a CompTIA Certified Technical Trainer (CTT+ Certified Professional) and is also the chairman of the board of PCCI.\\n Jun is past president of the Camera Club of the Philippines, and was founding president of both the IdN Club Philippines (the country's first association of digital artists) and Club de Camera Digital (the country's first association of digital photographers). He is also a member of the National Association of photoshop Professionals.\\n He is a product of the Maine photographic Workshops (Rockport, Maine), Dynamic Graphics Educational Foundation (Peoria, Illinois) and United Digital Artists (New York). He also took Creative Training Techniques under Robert Pike and a class on Corel Painter under Jeremy Sutton, instructor, lecturer and author of several books on Painter.\\n Jun writes a regular column for Manila Bulletin called \\\"Digital Focus\\\", and lectures at different trade shows here and abroad. \\nAt last count, Jun has taught well over 400 classes in photography and digital imaging, including more than 150 classes on photoshop (both basic and advanced) and more than 30 classes on Lightroom.\"},{\"name\":\"Glenn B. Ala\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Glenn has been in the production industry in the Philippines since 1997 and has worked in both GMA and ABS-CBN developing, producing, and managing multiple shows for local and international audiences. He served for several years as Head of Production for a digital media agency and has traveled to Europe and Asia producing content for a global gaming brand. In 2013, he established GBA Media, which creates, produces, and trades digital content and original program formats globally. He is currently Head of Marketing for the biggest TV station in Cambodia and General Manager for a Cambodian advertising/commercial production company.\"},{\"name\":\"Czarina Sheela Alcasid\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Sheela completed the Master of Entrepreneurship program from the Asian Institute of Management. She has her own business but her fascination and passion for production keeps pulling her to work in the industry. She started in 2007 as the program host for NBN 4’s \\\"Kapihan ng Bayan\\\" and occasionally, as on-cam commercial talent after. Sheela had performed various capacities such as production manager, assistant director and line producer for music videos, AVPs, video viral and commercial.\"},{\"name\":\"Jose-Antonio \\\"Jan\\\" T. Aliling\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Jose-Antonio \\\"Jan\\\" T. Aliling is a practicing lawyer by profession, but a photographer by passion.\\n Not to be thrown off by his jovial disposition, Jan is a seasoned litigation and corporate lawyer who is known for his no-nonsense work ethics and professionalism. He is currently the Managing and Senior Partner of Jose Antonio Aliling and Associates, and the Chairman of Acube Legal Support, Inc.\\n He is a Supervising Lawyer at the University of the Philippines, College of Law, Office of Legal Aid and a Lecturer and Teacher at the College of Law of the New Era University.\\n Jan is also the Director for Legal Affairs and Corporate Secretary of Jose Aliling Construction Management Group of Companies, one of the country’s largest, if not the largest, 100% Filipino-Owned Construction Management Companies.\\n He is also a part-owner of a several business enterprises in the food, trading consultancy, and retail services.\\n Amidst his busy schedule, he regularly accepts professional engagements for commercial, documentation, travel, and portrait photography shoots. He has serviced clients for photography services for brochures, annual reports, magazines, websites, and even commercial billboards.\\n He also passionately engages in photography projects with a purpose. He has done various engagements with various agencies of the United Nations, including the UN International labor Organization and UNICEF, the Department of Foreign Affairs, and various charitable and socio-civic institutions to create awareness for their respective advocacies.\"},{\"name\":\"Charlie Aquino\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Charlie is the co-founder if SophieCreatives Media, together with his wife, Judy. They started off as online freelancers doing various creative activities, until they decided to focus extensively on creating explainer videos for startup companies in the US, Canada, Europe and Australia.\\n Today they still maintain a home-based setup in running their business, but hire several freelancers from all over the world to help them create Web videos.\\n He’s a self taught animator, but his skill at explaining things comes from his passion in teaching and a brief but fruitful career as a product development manager in a local multinational company.\"},{\"name\":\"Emir Khan Baustista\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Emir Kahn Bautista is known in the wedding industry for delivering wedding videos on time, every time. He is often called upon by wedding photographers to guarantee delivery for high-profile, important couples.\\n Emir has edited full-length films and documentaries and short films, including Barya, a finalist at the International Film Festival in Manhattan, and several U.S. productions. He has also edited music videos for Phylum Band, Firecastle, Teejay Marquez, and Posh Band.\\n His corporate clients include Miller Draft Beer, Gatorade Golf Tournament, Meralco, and SM.\"},{\"name\":\"Antonio \\\"Tony\\\" Bucu\",\"photo\":\"\",\"excerpt\":\"\",\"bio\":\"Tony is an Adobe Certified Expert (ACE) and the country’s first and only Adobe Certified Instructor (ACI) in Illustrator (CS6 and CC).\\n He took up Electrical Engineering at Mapua Institute of Technology, and never thought he would end up as a graphic designer. After leaving college, he decided to explore his artistic skills and worked as an artist for a garments factory, designing shirt graphics. He has never looked back, and has been a designer for the last 20 years.\\n Tony has worked as a freelance consultant/designer for FMI, Bozell, Basic FCB, Campaigns and Grey, and Leo Burnett; and as a full-time designer for PixelMagic and Gimenez Group. He has art-directed photoshoots for BPI and Equitable, and is an experimental photographer in his own right. Tony is also lead vocalist for the indie band X2M.\"}]");

/***/ }),

/***/ "./server/db/models/course-category.js":
/*!*********************************************!*\
  !*** ./server/db/models/course-category.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = exports.courseCategorySchema = void 0;

var _mongoose = _interopRequireWildcard(__webpack_require__(/*! mongoose */ "mongoose"));

var courseCategorySchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
});
exports.courseCategorySchema = courseCategorySchema;

var CourseCategory = _mongoose["default"].model('CourseCategory', courseCategorySchema, 'CourseCategories');

var _default = CourseCategory;
exports["default"] = _default;

/***/ }),

/***/ "./server/db/models/course.js":
/*!************************************!*\
  !*** ./server/db/models/course.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = exports.courseSchema = void 0;

var _mongoose = _interopRequireWildcard(__webpack_require__(/*! mongoose */ "mongoose"));

var ObjectId = _mongoose.Schema.Types.ObjectId;
var courseSchema = (0, _mongoose.Schema)({
  title: {
    type: String,
    required: true
  },
  description: String,
  instructors: [{
    type: ObjectId,
    ref: 'Instructor'
  }],
  fee: Number,
  category: {
    type: ObjectId,
    ref: 'CourseCategory'
  }
});
exports.courseSchema = courseSchema;

var Course = _mongoose["default"].model('Course', courseSchema, 'Courses');

var _default = Course;
exports["default"] = _default;

/***/ }),

/***/ "./server/db/models/index.js":
/*!***********************************!*\
  !*** ./server/db/models/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;

var _courseCategory = _interopRequireDefault(__webpack_require__(/*! ./course-category */ "./server/db/models/course-category.js"));

exports.CourseCategory = _courseCategory["default"];

var _instructor = _interopRequireDefault(__webpack_require__(/*! ./instructor */ "./server/db/models/instructor.js"));

exports.Instructor = _instructor["default"];

var _course = _interopRequireDefault(__webpack_require__(/*! ./course */ "./server/db/models/course.js"));

exports.Course = _course["default"];

/***/ }),

/***/ "./server/db/models/instructor.js":
/*!****************************************!*\
  !*** ./server/db/models/instructor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = exports.instructorSchema = void 0;

var _mongoose = _interopRequireWildcard(__webpack_require__(/*! mongoose */ "mongoose"));

var _mongodb = __webpack_require__(/*! mongodb */ "mongodb");

var instructorSchema = (0, _mongoose.Schema)({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  photo: String,
  excerpt: String,
  bio: String,
  courses: [{
    type: _mongodb.ObjectId,
    ref: 'Course'
  }]
});
exports.instructorSchema = instructorSchema;

var Instructor = _mongoose["default"].model('Instructor', instructorSchema, 'Instructors');

var _default = Instructor;
exports["default"] = _default;

/***/ }),

/***/ "./server/db/mongodb.js":
/*!******************************!*\
  !*** ./server/db/mongodb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _mongoose = _interopRequireWildcard(__webpack_require__(/*! mongoose */ "mongoose"));

var _readline = _interopRequireDefault(__webpack_require__(/*! readline */ "readline"));

var _seeder = __webpack_require__(/*! ./scipts/seeder */ "./server/db/scipts/seeder.js");

if (process.platform === 'win32') {
  var rl = _readline["default"].createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('SIGINT', function () {
    process.emit('SIGINT');
  });
}

var gracefulShutdown = function gracefulShutdown(msg, callback) {
  _mongoose["default"].connection.close(function () {
    console.log("Mongoose disconnected through ".concat(msg));
    callback();
  });
};

process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});
process.on('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});
var conn = process.env.MONGODB_URL || 'mongodb://localhost/pcci';

_mongoose["default"].connect(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('connected', function () {
  return console.log("Mongoose connected to ".concat(conn));
});

_mongoose["default"].connection.on('error', function (err) {
  return console.log('Mongoose connection error:', err);
});

_mongoose["default"].connection.on('disconnected', function () {
  return console.log('Mongoose disconnected');
});

_mongoose["default"].connection.once('open', function () {
  console.log('Connection Successful!');
  (0, _seeder.initCourseCategories)();
  (0, _seeder.initInstructors)();
  (0, _seeder.initCourses)();
});

/***/ }),

/***/ "./server/db/scipts/seeder.js":
/*!************************************!*\
  !*** ./server/db/scipts/seeder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.initCourses = exports.initInstructors = exports.initCourseCategories = void 0;

var _models = __webpack_require__(/*! ../models */ "./server/db/models/index.js");

var _courseCategories = _interopRequireDefault(__webpack_require__(/*! ../data/course-categories.json */ "./server/db/data/course-categories.json"));

var _instructors = _interopRequireDefault(__webpack_require__(/*! ../data/instructors.json */ "./server/db/data/instructors.json"));

var _courses = _interopRequireDefault(__webpack_require__(/*! ../data/courses.json */ "./server/db/data/courses.json"));

var initCourseCategories = function initCourseCategories() {
  _models.CourseCategory.countDocuments(function (err, count) {
    if (count == 0) {
      _models.CourseCategory.collection.insertMany(_courseCategories["default"], function (err, docs) {
        return console.log("CourseCategoriess seeded. Inserted: ".concat(docs.insertedCount));
      });
    }
  });
};

exports.initCourseCategories = initCourseCategories;

var initInstructors = function initInstructors() {
  _models.Instructor.countDocuments(function (err, count) {
    if (count == 0) {
      _models.Instructor.collection.insertMany(_instructors["default"], function (err, docs) {
        return console.log("Instructors seeded. Inserted: ".concat(docs.insertedCount));
      });
    }
  });
};

exports.initInstructors = initInstructors;

var initCourses = function initCourses() {
  _models.CourseCategory.countDocuments(function (err, count) {
    if (count > 0) {
      _models.CourseCategory.find(function (err, categories) {
        var courses = _courses["default"].map(function (course) {
          var category = categories.find(function (c) {
            return c.name == course.category.name;
          });
          course.category = category ? category._id : null;
          return course;
        });

        _models.Course.countDocuments(function (err, count) {
          if (count == 0) {
            _models.Course.collection.insertMany(courses, function (err, docs) {
              console.log("Courses seeded. Inserted: ".concat(docs.insertedCount));
            });
          }
        });
      });
    }
  });
};

exports.initCourses = initCourses;
var _default = {
  initInstructors: initInstructors,
  initCourseCategories: initCourseCategories,
  initCourses: initCourses
};
exports["default"] = _default;

/***/ }),

/***/ "./server/graphql/apollo.js":
/*!**********************************!*\
  !*** ./server/graphql/apollo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _configProvider = __webpack_require__(/*! ./configProvider */ "./server/graphql/configProvider.js");

var config = (0, _configProvider.configProvider)();
var server = new _apolloServerExpress.ApolloServer(config);
var _default = server;
exports["default"] = _default;

/***/ }),

/***/ "./server/graphql/configProvider.js":
/*!******************************************!*\
  !*** ./server/graphql/configProvider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.configProvider = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _language = _interopRequireDefault(__webpack_require__(/*! graphql/language */ "graphql/language"));

var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema/schema.gql */ "./server/graphql/schema/schema.gql"));

var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

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
  instructors.push(instructor);
  return instructor;
};

var resolvers = {
  Query: {
    courseCategories: function () {
      var _courseCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, context, info) {
        var CourseCategories;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                CourseCategories = _mongoose["default"].model('CourseCategory');
                _context.next = 3;
                return CourseCategories.find();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function courseCategories(_x, _x2, _x3, _x4) {
        return _courseCategories.apply(this, arguments);
      }

      return courseCategories;
    }(),
    instructors: function () {
      var _instructors = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, args, context, info) {
        var Instructor;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Instructor = _mongoose["default"].model('Instructor');
                _context2.next = 3;
                return Instructor.find();

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function instructors(_x5, _x6, _x7, _x8) {
        return _instructors.apply(this, arguments);
      }

      return instructors;
    }(),
    courses: function () {
      var _courses = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, args, context, info) {
        var Course;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Course = _mongoose["default"].model('Course');
                _context3.next = 3;
                return Course.find().populate('category');

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function courses(_x9, _x10, _x11, _x12) {
        return _courses.apply(this, arguments);
      }

      return courses;
    }()
  },
  Mutation: {
    addInstructor: addInstructor
  },
  GraphQLDate: GraphQLDate
};
var config = {
  typeDefs: _schema["default"],
  resolvers: resolvers,
  formatError: function formatError(error) {
    console.log(JSON.stringify(error));
    return error;
  }
};

var configProvider = function configProvider() {
  return config;
};

exports.configProvider = configProvider;

/***/ }),

/***/ "./server/graphql/schema/schema.gql":
/*!******************************************!*\
  !*** ./server/graphql/schema/schema.gql ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scalar GraphQLDate\n\ninput UserInput {\n  username: String\n  password: String\n  email: String\n}\n\ninput InstructorInput {\n  name: String!\n  photo: String\n  excerpt: String\n  bio: String\n  courses: [ID!]!\n}\n\ninput CourseCategoryInput {\n  name: String!\n}\n\ninput CourseInput {\n  title: String!\n  description: String!\n  instructors: [ID!]!\n  fee: Float\n  category: CourseCategoryInput\n}\n\ntype Role {\n  _id: ID!\n  name: String!\n}\n\ntype User {\n  _id: ID!\n  username: String!\n  password: String!\n  email: String!\n  roles: [Role!]!\n}\n\ntype CourseCategory {\n  _id: ID!\n  name: String!\n}\n\ntype Instructor {\n  _id: ID!\n  name: String!\n  photo: String\n  excerpt: String\n  bio: String\n  courses: [Course!]!\n}\n\ntype Course {\n  _id: ID!\n  title: String!\n  description: String!\n  instructors: [Instructor!]!\n  fee: Float\n  category: CourseCategory!\n}\n\ninput ScheduleInput {\n  _id: ID\n  course: CourseInput!\n  dates: [GraphQLDate!]!\n}\n\ntype Schedule {\n  _id: ID!\n  course: Course!\n  dates: [GraphQLDate!]!\n}\n\ntype Student {\n  _id: ID!\n  name: String!\n}\n\ntype Query {\n  courseCategories: [CourseCategory]\n  instructors: [Instructor]\n  courses: [Course]\n  schedules: [Schedule]\n  users: [User]\n  roles: [Role]\n  courseCategory(id: ID!): CourseCategory\n}\n\ntype Mutation {\n  addCourseCategory(name: String!): CourseCategory!\n  updateCoureCategory(_id: ID!, name: String!): CourseCategory!\n  addInstructor(instructor: InstructorInput!): Instructor!\n  updateInstructor(_id: ID!, instructor: InstructorInput!): Instructor!\n  addCourse(course: CourseInput!): Course!\n  updateCourse(_id: ID!, course: CourseInput!): Course!\n  addRole(name: String): Role!\n  updateRole(_id: ID!, name: String): Role\n  addUser(user: UserInput!): User!\n  updateUser(_id: ID!, user: UserInput!): User!\n  addSchedule(schedule: ScheduleInput!): Schedule\n  updateSchedule(_id: ID!, schedule: ScheduleInput!): Schedule\n}\n"

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

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _cors = _interopRequireDefault(__webpack_require__(/*! cors */ "cors"));

var _compression = _interopRequireDefault(__webpack_require__(/*! compression */ "compression"));

var _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ "helmet"));

var _apollo = _interopRequireDefault(__webpack_require__(/*! ./graphql/apollo */ "./server/graphql/apollo.js"));

var middleware = function middleware(app) {
  app.use((0, _cors["default"])());
  app.use((0, _compression["default"])()); // app.use(helmet());
  // app.use(
  //   helmet.contentSecurityPolicy({
  //     directives: {
  //       defaultSrc: ["'self'"],
  //       scriptSrc: [
  //         "'self'",
  //         "'unsafe-inline'",
  //         'cdn.jsdelivr.net',
  //         "'unsafe-eval'",
  //         'identity.netlify.com',
  //         'unpkg.com',
  //       ],
  //       styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'cdn.jsdelivr.net'],
  //       imgSrc: ["'self'", 'data:', '*.amazonaws.com', 'cdn.jsdelivr.net'],
  //       fontSrc: ["'self'", 'fonts.gstatic.com'],
  //     },
  //   })
  // );
  // app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
  // serve static files before gatsbyExpress

  app.use(_express["default"]["static"]('public/'));

  _apollo["default"].applyMiddleware({
    app: app,
    path: '/graphql'
  });

  app.use('/app/:path', function (err, req, res, next) {
    var appPath = _path["default"].resolve('public/', 'app/index.html');

    if (fs.existsSync(appPath)) {
      res.status(200).sendFile(appPath);
    }

    res.status(200).send('ok');
  });
  app.use(function (_req, res, _next) {
    var notFoundPath = _path["default"].resolve('public/', '404/index.html');

    if (fs.existsSync(notFoundPath)) {
      res.status(404).sendFile(notFoundPath);
    }

    res.status(200).send('ok');
  });
  app.use(function (err, _req, res, _next) {
    console.log('Error occurred: ', err);

    var serverErrorPath = _path["default"].resolve('public/', '500/index.html');

    if (fs.existsSync(serverErrorPath)) {
      res.status(500).sendFile(serverErrorPath);
    }

    res.status(200).send('ok');
  });
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

__webpack_require__(/*! ./db/mongodb */ "./server/db/mongodb.js");

__webpack_require__(/*! dotenv */ "dotenv").config({
  path: ".env.".concat("development")
});

var PORT = process.env.PORT;
var app = (0, _express["default"])();
(0, _middleware["default"])(app);
app.listen(PORT, function () {
  console.log("App started on http://localhost:".concat(PORT));
});

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/*!****************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireWildcard" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map