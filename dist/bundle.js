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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 302);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    initial: [{
        type: 'spritesheet',
        key: 'level01',
        url: __webpack_require__(304),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'level02',
        url: __webpack_require__(305),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'playButton',
        url: __webpack_require__(306),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'soundButtons',
        url: __webpack_require__(307),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'audio',
        key: 'theme',
        urls: __webpack_require__(308)
    }, {
        type: 'audio',
        key: 'punch01',
        urls: __webpack_require__(309)
    }, {
        type: 'audio',
        key: 'punch02',
        urls: __webpack_require__(310)
    }, {
        type: 'audio',
        key: 'applause',
        urls: __webpack_require__(311)
    }, {
        type: 'audio',
        key: 'boo',
        urls: __webpack_require__(312)
    }, {
        type: 'audio',
        key: 'croud',
        urls: __webpack_require__(313)
    }, {
        type: 'audio',
        key: 'cough01',
        urls: __webpack_require__(314)
    }, {
        type: 'audio',
        key: 'cough02',
        urls: __webpack_require__(315)
    }, {
        type: 'audio',
        key: 'scream03',
        urls: __webpack_require__(316)
    }],
    level1: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(116),
        frameWidth: 400,
        frameHeight: 200
    }, {
        type: 'spritesheet',
        key: 'auto',
        url: __webpack_require__(117),
        frameWidth: 400,
        frameHeight: 187
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(317),
        frameWidth: 44,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(118),
        frameWidth: 32,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(119),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(120),
        frameWidth: 32,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(121),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(122),
        frameWidth: 30,
        frameHeight: 47
    }, {
        type: 'spritesheet',
        key: 'injury',
        url: __webpack_require__(123),
        frameWidth: 30,
        frameHeight: 31
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(124),
        frameWidth: 60,
        frameHeight: 71
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(318),
        overwrite: false
    }],
    level2: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(116),
        frameWidth: 400,
        frameHeight: 200
    }, {
        type: 'spritesheet',
        key: 'auto',
        url: __webpack_require__(117),
        frameWidth: 400,
        frameHeight: 187
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(319),
        frameWidth: 46,
        frameHeight: 54
    }, {
        type: 'spritesheet',
        key: 'swat',
        url: __webpack_require__(320),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(118),
        frameWidth: 32,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(119),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(120),
        frameWidth: 32,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(121),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(122),
        frameWidth: 30,
        frameHeight: 47
    }, {
        type: 'spritesheet',
        key: 'injury',
        url: __webpack_require__(123),
        frameWidth: 30,
        frameHeight: 31
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(124),
        frameWidth: 60,
        frameHeight: 71
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(321),
        overwrite: false
    }]
});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f3798349fe5c3b3b1799c27955b1d6a2.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/07cceb7a8ec87d8476bdf361029569d4.png";

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0db8c7aedd9b6876feb9ee4371b27d14.png";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c73e25fb0b044d025cd031db52c0704b.png";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c319d1c800f4e0f8c49b21f55ef1ee16.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/51eaa920cd842f906dbb0ab9dafb2046.png";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/373325f07721a6c1f012d59948a7b889.png";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d4bedbdde1c2adef9d869553fe67a350.png";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/28dbeb6c57f67cd17abbd912371bac9c.png";

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Protester = function (_Prefab) {
    _inherits(Protester, _Prefab);

    function Protester(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            spriteKey = _ref.spriteKey,
            spriteName = _ref.spriteName;

        _classCallCheck(this, Protester);

        var _this = _possibleConstructorReturn(this, (Protester.__proto__ || Object.getPrototypeOf(Protester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey, spriteName: spriteName }));

        _this.injurySprite = _this.sprite.addChild(_this.game.make.sprite(-15, -_this.sprite.height / 2 - 2, 'injury'));
        _this.injurySprite.bringToTop();
        _this.injurySprite.exists = false;

        _this.posterSprite = _this.sprite.addChild(_this.game.make.sprite(-40, -60, 'poster', 0));
        _this.posterSprite.bringToTop();
        _this.posterSprite.exists = false;

        _this.showPoster = false;
        return _this;
    }

    _createClass(Protester, [{
        key: 'update',
        value: function update() {
            this.injurySprite.exists = this.sprite.health !== 1;
            this.posterSprite.exists = this.showPoster;

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'update', this).call(this);
        }
    }]);

    return Protester;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Protester);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DEFAULT_COLORS;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_COLORS = (_DEFAULT_COLORS = {}, _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* FOV_MODE_NORMAL */], 0x3a3a56), _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* FOV_MODE_CAPTURE */], 0x563a3a), _DEFAULT_COLORS);

var FOV = function () {
    function FOV(_ref) {
        var game = _ref.game,
            radius = _ref.radius,
            angle = _ref.angle,
            _ref$colors = _ref.colors,
            colors = _ref$colors === undefined ? DEFAULT_COLORS : _ref$colors;

        _classCallCheck(this, FOV);

        this.game = game;
        this.radius = radius;
        this.radiusSq = Math.pow(this.radius, 2);
        this.halfViewAngle = this.game.math.degToRad(angle / 2);
        this.colors = colors;

        this.graphics = this.game.add.graphics(0, 0);
        this.center = null;
        this.isActive = true;
    }

    _createClass(FOV, [{
        key: 'update',
        value: function update(_ref2) {
            var _graphics;

            var x = _ref2.x,
                y = _ref2.y,
                angle = _ref2.angle,
                mode = _ref2.mode;

            this.center = { x: x, y: y };
            this.angle = angle;

            this.graphics.clear();

            if (!this.isActive) {
                return;
            }

            var startAngle = this.angle - this.halfViewAngle;
            var endAngle = this.angle + this.halfViewAngle;
            var arcStart = [x + Math.cos(startAngle) * this.radius, y + Math.sin(startAngle) * this.radius];

            this.graphics.beginFill(this.colors[mode || __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* FOV_MODE_NORMAL */]], 0.4);
            this.graphics.moveTo(x, y);
            (_graphics = this.graphics).lineTo.apply(_graphics, arcStart);
            this.graphics.arc(x, y, this.radius, startAngle, endAngle, false, 10);
            this.graphics.lineTo(x, y);
            this.graphics.endFill();
        }
    }, {
        key: 'containsPoint',
        value: function containsPoint(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;

            if (!this.center) {
                return false;
            }
            var distanceSq = this.game.math.distanceSq(this.center.x, this.center.y, x, y);
            if (distanceSq > this.radiusSq) {
                return false;
            }
            var angle = this.game.math.angleBetweenPoints(this.center, { x: x, y: y });

            var leftAngle = this.angle - this.halfViewAngle;
            var rightAngle = this.angle + this.halfViewAngle;

            if (leftAngle <= angle && angle <= rightAngle) {
                return true;
            }

            angle -= 2 * Math.PI * Math.sign(angle);

            return leftAngle <= angle && angle <= rightAngle;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.graphics.destroy();
            this.isActive = false;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.graphics.kill();
            this.isActive = false;
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.graphics.revive();
            this.isActive = true;
        }
    }]);

    return FOV;
}();

/* harmony default export */ __webpack_exports__["a"] = (FOV);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_EndMenu_js__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_Game_js__ = __webpack_require__(326);






var containerNode = document.querySelector('.js-game-container');

var game = new Phaser.Game({
    width: containerNode.clientWidth,
    height: containerNode.clientHeight,
    parent: containerNode,
    antialias: true
});

game.state.add('Boot', __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__["a" /* default */]);
game.state.add('Loading', __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__["a" /* default */]);
game.state.add('StartMenu', __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__["a" /* default */]);
game.state.add('EndMenu', __WEBPACK_IMPORTED_MODULE_3__states_EndMenu_js__["a" /* default */]);
game.state.add('Game', __WEBPACK_IMPORTED_MODULE_4__states_Game_js__["a" /* default */]);
game.state.start('Boot');

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__ = __webpack_require__(115);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Boot = function () {
    function Boot() {
        _classCallCheck(this, Boot);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            // this.scale.pageAlignHorizontally = true;
            // this.scale.pageAlignVertically = true;
        }
    }, {
        key: 'preload',
        value: function preload() {
            // this.load.image('loader', 'assets/loader.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Loading', true, false, {
                assets: [['pack', 'initial', null, JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */])]],
                nextState: ['StartMenu']
            });
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f92bc2f5d7aa8c5e8ccf000dd5f2268c.jpg";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c7118db4b46452ebb66ca9f1f72e7d53.jpg";

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/121104892eaea3f65969e7beb7d9f45f.png";

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/14ca0f6714021de1e9776c79ad48e916.png";

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/31269e05cd13ab095ae3bbb217d2f567.mp3";

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0cb89b881decdf87d1ccaba4ae7aaffb.mp3";

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dca004f04dec60da50cca8fecc4161f2.mp3";

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3745bf01cd4446437f37de7991ad805b.mp3";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/52b53826ba253bf501d879893845b5f4.mp3";

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/15a327358f08be2e673ef27c2e5dcaa1.mp3";

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6632e8a1ef01b6e295413e6fa1606858.mp3";

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2db995ce7f0661c455b95602348d7c50.mp3";

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/05b4ea2cf7bcddf26622cdaafb40b881.mp3";

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d98ae72532ed2e0fe2b7596a57c1cbac.png";

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7780fada5b5def9a73f068e7dee87e98.jpg";

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/733d7ab8b793f60f4c77b9d837fa3693.png";

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d0797776e88d180a0467e06d6899a8ae.png";

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a1a7aca8cdcabb0b6f29774a2b1eb971.jpg";

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
    function Loading() {
        _classCallCheck(this, Loading);
    }

    _createClass(Loading, [{
        key: 'init',
        value: function init(config) {
            this.mz = {
                config: config,
                objects: {
                    textProgress: null
                }
            };
        }
    }, {
        key: 'preload',
        value: function preload() {
            var _this = this;

            this.game.stage.backgroundColor = '#000';
            // const loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
            // loadingBar.anchor.setTo(0.5);
            // this.load.setPreloadSprite(loadingBar);

            this.mz.config.assets.forEach(function (_ref) {
                var _load, _load2, _load3, _load4;

                var _ref2 = _toArray(_ref),
                    assetType = _ref2[0],
                    assetParams = _ref2.slice(1);

                switch (assetType) {
                    case 'pack':
                        (_load = _this.load).pack.apply(_load, _toConsumableArray(assetParams));
                        break;
                    case 'spritesheet':
                        (_load2 = _this.load).spritesheet.apply(_load2, _toConsumableArray(assetParams));
                        break;
                    case 'image':
                        (_load3 = _this.load).image.apply(_load3, _toConsumableArray(assetParams));
                        break;
                    case 'tilemap':
                        debugger;
                        (_load4 = _this.load).tilemap.apply(_load4, _toConsumableArray(assetParams));
                        break;
                }
            });

            this.mz.objects.textProgress = this.game.add.text(300, 300, 'Загрузка 0%', {
                font: '26px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textProgress.anchor.set(0.5);
        }
    }, {
        key: 'loadUpdate',
        value: function loadUpdate() {
            this.mz.objects.textProgress.setText('\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ' + this.game.load.progress + '%');
        }
    }, {
        key: 'create',
        value: function create() {
            var _state;

            (_state = this.state).start.apply(_state, _toConsumableArray(this.mz.config.nextState));
        }
    }]);

    return Loading;
}();

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(115);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var StartMenu = function () {
    function StartMenu() {
        _classCallCheck(this, StartMenu);
    }

    _createClass(StartMenu, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#ccc';
        }
    }, {
        key: 'create',
        value: function create() {
            this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Мирный Протест MVP');
            this.title.anchor.setTo(0.5);

            this.level1Button = this.game.add.button(150, this.world.centerY, 'level02', this.handleClickPlay.bind(this, 'level1'));
            this.level1Button.anchor.setTo(0.5);

            this.level2Button = this.game.add.button(this.world.width - 150, this.world.centerY, 'level01', this.handleClickPlay.bind(this, 'level2'));
            this.level2Button.anchor.setTo(0.5);
        }
    }, {
        key: 'resize',
        value: function resize(newWidth, newHeight) {}
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay(level) {
            this.state.start('Loading', true, false, {
                assets: [['pack', level, null, JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */])]],
                nextState: ['Game', true, false, __WEBPACK_IMPORTED_MODULE_0__levels_js__["a" /* default */][level]]
            });
        }
    }]);

    return StartMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (StartMenu);

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 5 * 60, // s
        winningScore: 75,
        cops: {
            count: 1,
            speed: {
                value: 50,
                running: 1.7
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        press: {
            count: 1,
            speed: {
                value: 50
            },
            fov: {
                distance: 150,
                angle: 100
            },
            duration: 5 // s
        },
        protesters: {
            count: {
                start: 10,
                max: 30,
                add: 8
            },
            speed: {
                value: 60
            },
            mood: 30,
            moodDown: 0.01,
            cheeringDuration: 5
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 150,
            cheering: 0.5,
            stamina: 100,
            staminaCooldown: 5 // s
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 5 * 60, // s
        winningScore: 75,
        cops: {
            count: 5,
            speed: {
                value: 60,
                running: 1.7
            },
            fov: {
                distance: 150,
                angle: 120
            }
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 25000
        },
        press: {
            count: 5,
            speed: {
                value: 50
            },
            fov: {
                distance: 100,
                angle: 100
            },
            duration: 5
        },
        protesters: {
            count: {
                start: 30,
                max: 60,
                add: 12
            },
            max: 60,
            speed: {
                value: 60
            },
            mood: 30,
            moodDown: 0.01,
            cheeringDuration: 3
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 120,
            cheering: 0.5,
            stamina: 200,
            staminaCooldown: 5 // s
        }
    }
});

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndMenu = function () {
    function EndMenu() {
        _classCallCheck(this, EndMenu);
    }

    _createClass(EndMenu, [{
        key: 'init',
        value: function init(config) {
            this.mz = {
                config: config
            };
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#ccc';
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.world.resize(this.game.width, this.game.height);

            this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, this.mz.config.win ? 'Протест удался!' : 'Вы слили протест :(');
            this.title.anchor.setTo(0.5);

            var timeString = String(Math.floor(this.mz.config.time / 60)).padStart(2, '0') + ':' + String(this.mz.config.time % 60).padStart(2, '0');
            this.time = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY + 31, '\u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F: ' + timeString);
            this.time.anchor.setTo(0.5);

            this.replayButton = this.game.add.button(this.world.centerX, this.world.centerY, 'playButton', this.handleClickPlay, this);
            this.replayButton.anchor.setTo(0.5);
        }
    }, {
        key: 'resize',
        value: function resize(newWidth, newHeight) {}
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay() {
            this.state.start('StartMenu');
        }
    }]);

    return EndMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (EndMenu);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_SWATSquad_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_PauseMenu_js__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_ScoreMeter_js__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_js__ = __webpack_require__(40);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var GLOBAL_OFFSET = 100;

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: 'init',
        value: function init(level) {
            this.mz = {
                level: level,
                score: null,
                aliveProtestersCount: null,
                reviveProtestersNeeded: level.protesters.count.start,
                meanMood: level.protesters.mood,
                timePassed: 0, // s
                map: null,
                events: {
                    keys: {},
                    fieldClickHandler: null
                },
                objects: {
                    player: null,
                    swat: null,
                    score: null,
                    textTimer: null,
                    textProtestersCount: null,
                    bgTile: null,
                    buttonSound: null,
                    audio: {},
                    pauseMenu: null
                },
                arrays: {
                    protesters: [],
                    cops: [],
                    press: []
                },
                groups: {
                    actors: null,
                    cars: null,
                    copsFOV: null,
                    pressFOV: null,
                    playerFOV: null,
                    menu: null
                }
            };
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#ccc';

            this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

            this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground');
            this.mz.objects.bgTile.fixedToCamera = true;

            this.mz.objects.audio.theme = this.game.add.audio('theme');
            this.mz.objects.audio.theme.loopFull(0.1);
            this.mz.objects.audio.audioPunch = [this.game.add.audio('punch01'), this.game.add.audio('punch02')];
            this.mz.objects.audio.random = [this.game.add.audio('croud'), this.game.add.audio('cough01'), this.game.add.audio('cough02')];

            // this.mz.map = this.game.add.tilemap('tilemap', 50, 50);

            // FOVs should always be below everything
            this.mz.groups.playerFOV = this.game.add.group();
            this.mz.groups.pressFOV = this.game.add.group();
            this.mz.groups.copsFOV = this.game.add.group();

            this.mz.groups.cars = this.game.add.group();
            // cars
            for (var i = 0; i < this.game.world.width; i += 300) {
                var autoSprite = this.game.add.sprite(i, 100, 'auto');
                autoSprite.anchor.set(0, 1);
                autoSprite.scale.set(0.70);
                this.game.physics.arcade.enable(autoSprite);
                autoSprite.body.setSize(autoSprite.width / autoSprite.scale.x, autoSprite.height / autoSprite.scale.y - 50);
                autoSprite.body.immovable = true;
                this.mz.groups.cars.add(autoSprite);
            }

            // top borders
            for (var _i = 0; _i < this.game.world.width; _i += 100) {
                var borderSprite = this.game.add.sprite(_i, 50, 'border');
                borderSprite.scale.set(0.25);
            }

            this.mz.groups.actors = this.game.add.group();
            this.mz.groups.obstacles = this.game.add.group();

            // cops
            for (var _i2 = 0; _i2 < this.mz.level.cops.count; _i2++) {
                var cop = new __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    fov: {
                        group: this.mz.groups.copsFOV,
                        distance: this.mz.level.cops.fov.distance,
                        angle: this.mz.level.cops.fov.angle
                    },
                    speed: this.mz.level.cops.speed,
                    spriteName: 'cop' + _i2
                }));
                this.mz.arrays.cops.push(cop.sprite);
                this.mz.groups.actors.add(cop.sprite);
                cop.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["c" /* COP_MODE_WANDER */]);
            }

            // swat
            if (this.mz.level.swat) {
                this.mz.objects.swat = new __WEBPACK_IMPORTED_MODULE_4__objects_SWATSquad_js__["a" /* default */](_extends({
                    game: this.game
                }, this.mz.level.swat, {
                    group: this.mz.groups.actors
                }));
                this.swatTimer = this.game.time.create(false);
            }

            // press
            for (var _i3 = 0; _i3 < this.mz.level.press.count; _i3++) {
                var journalist = new __WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    fov: {
                        group: this.mz.groups.pressFOV,
                        distance: this.mz.level.press.fov.distance,
                        angle: this.mz.level.press.fov.angle
                    },
                    speed: this.mz.level.press.speed,
                    shootingDuration: this.mz.level.press.duration,
                    cooldownDuration: this.mz.level.press.duration * this.mz.level.press.count * 2,
                    onFinishShooting: this.handleFinishShooting,
                    callbackContext: this,
                    spriteName: 'journalist' + _i3
                }));
                this.mz.arrays.press.push(journalist.sprite);
                this.mz.groups.actors.add(journalist.sprite);
                journalist.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);
            }

            // protesters
            this.createProtesters(this.mz.level.protesters.count.max);

            // player
            this.mz.objects.player = new __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */](_extends({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                fovGroup: this.mz.groups.playerFOV
            }, this.mz.level.player));
            this.game.camera.follow(this.mz.objects.player.sprite);
            this.mz.groups.actors.add(this.mz.objects.player.sprite);
            this.mz.objects.player.sprite.events.onKilled.addOnce(this.handlePlayerKill, this);

            // bottom borders
            for (var _i4 = 0; _i4 < this.game.world.width; _i4 += 100) {
                var _borderSprite = this.game.add.sprite(_i4, this.game.world.height - 50, 'border');
                _borderSprite.scale.set(0.25);
            }

            this.mz.groups.menu = this.game.add.group();
            this.mz.groups.menu.fixedToCamera = true;

            this.mz.objects.score = new __WEBPACK_IMPORTED_MODULE_6__objects_ScoreMeter_js__["a" /* default */]({
                game: this.game,
                x: 10,
                y: this.game.height - 10,
                width: this.game.width - 20,
                parentGroup: this.mz.groups.menu,
                winPoint: this.mz.level.winningScore
            });

            var timer = this.game.time.create();
            timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
            timer.start();

            this.mz.objects.textTimer = this.game.add.text(this.game.width - 10, 20, '', {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textTimer.anchor.set(1, 0.5);
            this.mz.objects.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
            this.mz.groups.menu.add(this.mz.objects.textTimer);

            this.mz.objects.textProtestersCount = this.game.add.text(this.game.width - 10, 60, '', {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textProtestersCount.anchor.set(1, 0.5);
            this.mz.objects.textProtestersCount.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
            this.mz.groups.menu.add(this.mz.objects.textProtestersCount);

            this.mz.objects.buttonSound = this.game.add.button(0, 0, 'soundButtons', this.handleClickSound, this, 1, 1, 1, 1, this.mz.groups.menu);
            // this.scale.setResizeCallback(this.handleResize, this);

            // click on field
            var fieldClickHandler = this.game.add.sprite(0, 100);
            fieldClickHandler.fixedToCamera = true;
            fieldClickHandler.scale.setTo(this.game.width, this.game.height - 100);
            fieldClickHandler.inputEnabled = true;
            fieldClickHandler.input.priorityID = 1;
            fieldClickHandler.events.onInputUp.add(this.handleClick, this);
            this.mz.events.fieldClickHandler = fieldClickHandler;

            // pause
            this.game.onPause.add(this.handlePause, this);
            this.game.onResume.add(this.handlePause, this);
            this.game.input.onDown.add(this.handleUnpause, this);

            this.mz.events.keys.esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);

            // pause menu
            this.mz.objects.pauseMenu = new __WEBPACK_IMPORTED_MODULE_5__objects_PauseMenu_js__["a" /* default */]({ game: this.game });
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            // update background
            this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

            this.playRandomSound();

            this.mz.objects.buttonSound.frame = this.game.sound.mute ? 1 : 0;

            // update player
            this.mz.objects.player.update();

            // update protesters
            if (this.mz.reviveProtestersNeeded !== 0) {
                this.reviveProtesters({
                    count: this.mz.reviveProtestersNeeded,
                    mood: Math.max(this.mz.meanMood, this.mz.level.protesters.mood) / 100
                });
                this.mz.reviveProtestersNeeded = 0;
            }

            this.mz.score = 0;
            this.mz.meanMood = 0;
            this.mz.aliveProtestersCount = 0;
            this.mz.arrays.protesters.forEach(function (sprite) {
                if (sprite.alive) {
                    sprite.mz.update();
                    sprite.mz.toggleCheering(_this.mz.objects.player.showPoster && _this.game.math.distance(sprite.x, sprite.y, _this.mz.objects.player.sprite.x, _this.mz.objects.player.sprite.y) <= _this.mz.objects.player.radius, _this.mz.objects.player.cheering);
                    _this.mz.aliveProtestersCount++;
                    _this.mz.meanMood += sprite.mz.mood;
                }
            });
            this.mz.meanMood = this.mz.aliveProtestersCount !== 0 ? this.mz.meanMood / this.mz.aliveProtestersCount : 0;
            this.mz.score = 100 * (0.5 * this.mz.aliveProtestersCount / this.mz.level.protesters.count.max + 0.5 * this.mz.meanMood);

            // draw score
            this.mz.objects.score.update(this.mz.score);

            // update journalists
            this.mz.arrays.press.forEach(function (journalistSprite) {
                var journalist = journalistSprite.mz;
                var newTarget = null;

                if (journalist.FOV.isActive && _this.mz.objects.player.showPoster && journalist.FOV.containsPoint(_this.mz.objects.player.sprite.body.center)) {
                    newTarget = _this.mz.objects.player.sprite;
                }

                if (newTarget) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */], { target: newTarget });
                } else if (journalist.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["g" /* JOURNALIST_MODE_WANDER */]) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);
                }

                journalist.update();
            });

            // update swat
            if (this.mz.objects.swat) {
                if (this.mz.objects.swat.mode === __WEBPACK_IMPORTED_MODULE_7__constants_js__["k" /* SWAT_MODE_HIDE */] && !this.swatTimer.running) {
                    this.swatTimer.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                    this.swatTimer.start();
                }
                this.mz.objects.swat.update();
            }

            // update cops
            this.mz.arrays.cops.forEach(function (copSprite) {
                var cop = copSprite.mz;

                // set attraction point and strength
                cop.attractionPoint = _extends({}, _this.mz.objects.player.sprite.body.center);
                var attractionStrength = 0;
                if (_this.mz.objects.player.showPoster) {
                    attractionStrength += 0.2;
                    _this.mz.arrays.press.forEach(function (journalistSprite) {
                        if (journalistSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_7__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */]) {
                            attractionStrength += 0.4;
                        }
                    });
                }
                cop.attractionStrength = Math.min(1, attractionStrength);

                if (cop.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["a" /* COP_MODE_CONVOY */]) {
                    // find target for a cop
                    var newTarget = null;
                    var distanceToTarget = Infinity;
                    for (var i = 0; i <= _this.mz.arrays.protesters.length; i++) {
                        var protester = i === _this.mz.arrays.protesters.length ? _this.mz.objects.player : _this.mz.arrays.protesters[i].mz;
                        if (!protester.sprite.alive || protester.mode === __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */] || !cop.FOV.containsPoint(protester.sprite.body.center)) {
                            continue;
                        }
                        if (protester.sprite === cop.target || protester.showPoster) {
                            var distanceToProtester = _this.game.math.distance(copSprite.x, copSprite.y, protester.sprite.x, protester.sprite.y);
                            // give higher priority to current target
                            if (protester.sprite === cop.target) {
                                distanceToProtester *= 3 / 4;
                            }
                            if (distanceToProtester < distanceToTarget) {
                                newTarget = protester.sprite;
                                distanceToTarget = distanceToProtester;
                            }
                        }
                    }
                    if (newTarget) {
                        // if theres a target in a view, pursue him
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["b" /* COP_MODE_PURSUE */], { target: newTarget });
                    } else if (cop.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["c" /* COP_MODE_WANDER */]) {
                        // else wander around, if not yet
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["c" /* COP_MODE_WANDER */]);
                    }
                }

                cop.update();
            });

            // cops vs protesters collision
            this.game.physics.arcade.overlap(this.mz.arrays.protesters, this.mz.arrays.cops, this.proceedToJail, function (protesterSprite, copSprite) {
                return copSprite.mz.target === protesterSprite && protesterSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            }, this);

            // swat vs protesters collision
            if (this.mz.objects.swat) {
                this.game.physics.arcade.overlap(this.mz.objects.swat.sprites, this.mz.arrays.protesters, function (swatSprite, protesterSprite) {
                    _this.arrest(protesterSprite, swatSprite);
                }, function (swatSprite, protesterSprite) {
                    return swatSprite.children.length === 0 && protesterSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
                });
            }

            // cars vs protesters collision
            this.game.physics.arcade.overlap(this.mz.arrays.protesters, this.mz.groups.cars, function (protesterSprite) {
                protesterSprite.mz.kill();
            }, function (protesterSprite) {
                return protesterSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            });

            // swat vs player collision
            if (this.mz.objects.swat) {
                this.game.physics.arcade.overlap(this.mz.objects.player.sprite, this.mz.objects.swat.sprites, this.arrest, function (playerSprite, swatSprite) {
                    return swatSprite.children.length === 0 && playerSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
                }, this);
            }

            // cops vs player collision
            this.game.physics.arcade.overlap(this.mz.objects.player.sprite, this.mz.arrays.cops, function (playerSprite, copSprite) {
                _this.mz.events.fieldClickHandler.events.onInputUp.remove(_this.handleClick, _this);
                _this.proceedToJail(playerSprite, copSprite);
            }, function (playerSprite, copSprite) {
                return copSprite.mz.target === playerSprite && playerSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            });

            // player vs cars collision
            this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.cars, function (playerSprite) {
                if (playerSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]) {
                    playerSprite.mz.kill();
                }
            });

            this.mz.groups.actors.sort('y', Phaser.Group.SORT_ASCENDING);

            this.checkWin();

            this.mz.objects.textProtestersCount.setText('Protesters count: ' + String(this.mz.aliveProtestersCount).padStart(2, '0') + ' / ' + this.mz.level.protesters.count.max);

            // events
            if (this.mz.events.keys.esc.justUp) {
                this.game.paused = !this.game.paused;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

            // this.mz.groups.cars.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.cops.forEach(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.protesters.forEach(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.press.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(sprite, pointer) {
            var coords = {
                x: pointer.x + this.game.camera.x,
                y: pointer.y + this.game.camera.y
            };
            var player = this.mz.objects.player;
            if (player.sprite.body.isMoving && player.moveTarget && this.game.math.fuzzyEqual(player.moveTarget.x, coords.x, 5) && this.game.math.fuzzyEqual(player.moveTarget.y, coords.y, 5)) {
                player.clickSpeedUp *= player.speed.clickSpeedUp;
                this.mz.objects.player.setMoveTarget(player.moveTarget);
            } else {
                player.resetClickSpeedUp();
                this.mz.objects.player.setMoveTarget(coords);
            }
        }
    }, {
        key: 'handlePlayerKill',
        value: function handlePlayerKill() {
            this.endGame(false);
        }
    }, {
        key: 'handleFinishShooting',
        value: function handleFinishShooting() {
            this.mz.reviveProtestersNeeded += this.mz.level.protesters.count.add;
        }
    }, {
        key: 'handleClickSound',
        value: function handleClickSound() {
            this.game.sound.mute = !this.game.sound.mute;
        }
    }, {
        key: 'handlePause',
        value: function handlePause() {
            if (this.game.paused) {
                this.mz.objects.pauseMenu.revive();
            } else {
                this.mz.objects.pauseMenu.kill();
            }
        }
    }, {
        key: 'handleUnpause',
        value: function handleUnpause() {
            if (this.game.paused) {
                if (this.mz.objects.pauseMenu.replayButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
                    this.game.paused = false;
                }
            }
        }

        // handleResize(scale, parentBounds) {
        //     let scaleFactor;
        //     if (parentBounds.width > parentBounds.height) {
        //         scaleFactor = parentBounds.width / this.game.width;
        //     } else {
        //         scaleFactor = parentBounds.height / this.game.height;
        //     }
        //     this.scale.setUserScale(scaleFactor, scaleFactor);
        // }

    }, {
        key: 'updateTimer',
        value: function updateTimer() {
            this.mz.timePassed++;
            this.mz.objects.textTimer.setText(this.getFormattedTime(this.mz.timePassed));
        }
    }, {
        key: 'createProtesters',
        value: function createProtesters(count) {
            for (var i = 0; i < count; i++) {
                var protester = new __WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    group: this.mz.groups.actors,
                    speed: this.mz.level.protesters.speed,
                    spriteKey: 'protester' + this.game.rnd.between(1, 3),
                    spriteName: 'protester' + i,
                    mood: this.mz.level.protesters.mood / 100,
                    moodDown: this.mz.level.protesters.moodDown / 100,
                    cheeringDuration: this.mz.level.protesters.cheeringDuration
                }));
                this.mz.arrays.protesters.push(protester.sprite);
            }
        }
    }, {
        key: 'reviveProtesters',
        value: function reviveProtesters(_ref) {
            var count = _ref.count,
                _ref$mood = _ref.mood,
                mood = _ref$mood === undefined ? this.mz.meanMood / 100 : _ref$mood;

            for (var i = 0; i < this.mz.arrays.protesters.length; i++) {
                var sprite = this.mz.arrays.protesters[i];
                if (!sprite.alive) {
                    var randomOffset = this.game.rnd.between(0, 100);
                    sprite.mz.revive({
                        x: this.game.rnd.between(0, 1) === 0 ? -100 - randomOffset : this.game.world.width + 100 + randomOffset,
                        y: this.getRandomCoordinateY(),
                        nextCoords: this.getRandomCoordinates(),
                        mood: mood
                    });
                    count--;
                }
                if (count === 0) {
                    break;
                }
            }
        }
    }, {
        key: 'proceedToJail',
        value: function proceedToJail(protesterSprite, copSprite) {
            var _this2 = this;

            var closestCarCoords = null;
            var minDistanceSq = Infinity;
            this.mz.groups.cars.forEach(function (carSprite) {
                var carCoords = {
                    x: (carSprite.right + carSprite.left) / 2,
                    y: (carSprite.bottom + carSprite.top) / 2
                };
                var distanceToCarSq = _this2.game.math.distanceSq(copSprite.x, copSprite.y, carCoords.x, carCoords.y);
                if (distanceToCarSq < minDistanceSq) {
                    closestCarCoords = carCoords;
                    minDistanceSq = distanceToCarSq;
                }
            });

            copSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });

            this.arrest(protesterSprite, copSprite);
        }
    }, {
        key: 'arrest',
        value: function arrest(protesterSprite, copSprite) {
            // beat him up a little
            protesterSprite.damage(0.8);
            this.playRandomPunch();

            copSprite.addChild(protesterSprite);
            if (protesterSprite.name === 'player') {
                this.game.camera.follow(copSprite);
            }

            protesterSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["h" /* PROTESTER_MODE_ARRESTED */], {
                x: -Math.sign(copSprite.body.velocity.x) * protesterSprite.body.halfWidth,
                y: protesterSprite.body.halfHeight
            });
        }
    }, {
        key: 'launchSWAT',
        value: function launchSWAT() {
            this.swatTimer.stop(true);
            var direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';
            this.mz.objects.swat.setMode(__WEBPACK_IMPORTED_MODULE_7__constants_js__["l" /* SWAT_MODE_HUNT */], {
                x: direction === 'ltor' ? -GLOBAL_OFFSET : this.game.world.width + GLOBAL_OFFSET,
                y: this.getRandomCoordinateY(),
                target: {
                    x: direction === 'ltor' ? this.game.world.width + GLOBAL_OFFSET : -GLOBAL_OFFSET,
                    y: this.getRandomCoordinateY()
                }
            });
        }
    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (this.mz.score >= this.mz.level.winningScore || this.mz.score === 0 || this.mz.timePassed > this.mz.level.duration) {
                this.endGame(this.mz.score >= this.mz.level.winningScore);
            }
        }
    }, {
        key: 'endGame',
        value: function endGame(win) {
            this.mz.objects.audio.theme.stop();

            this.game.onPause.removeAll();
            this.game.onResume.removeAll();

            this.state.start('EndMenu', true, false, {
                win: win,
                time: this.mz.timePassed
            });
        }
    }, {
        key: 'playRandomSound',
        value: function playRandomSound() {
            if (this.game.rnd.between(0, 200) === 0) {
                this.game.rnd.pick(this.mz.objects.audio.random).play('', 0, 0.25);
            }
        }
    }, {
        key: 'playRandomPunch',
        value: function playRandomPunch() {
            this.game.rnd.pick(this.mz.objects.audio.audioPunch).play('', 0, 0.25);
        }
    }, {
        key: 'getRandomCoordinates',
        value: function getRandomCoordinates() {
            return {
                x: this.getRandomCoordinateX(),
                y: this.getRandomCoordinateY()
            };
        }
    }, {
        key: 'getRandomCoordinateX',
        value: function getRandomCoordinateX() {
            return this.game.math.clamp(this.game.world.randomX, GLOBAL_OFFSET, this.game.world.width - GLOBAL_OFFSET);
        }
    }, {
        key: 'getRandomCoordinateY',
        value: function getRandomCoordinateY() {
            return this.game.math.clamp(this.game.world.randomY, GLOBAL_OFFSET, this.game.world.height - GLOBAL_OFFSET);
        }
    }, {
        key: 'getFormattedTime',
        value: function getFormattedTime(secondsPassed) {
            var s = this.mz.level.duration - secondsPassed;
            var min = Math.floor(s / 60);
            return String(min).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        }
    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DEFAULT_CLICK_SPEED_UP = 1;

var Player = function (_Protester) {
    _inherits(Player, _Protester);

    function Player(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            fovGroup = _ref.fovGroup,
            radius = _ref.radius,
            cheering = _ref.cheering,
            stamina = _ref.stamina,
            staminaCooldown = _ref.staminaCooldown;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, {
            game: game,
            x: x,
            y: y,
            speed: speed,
            spriteKey: 'player',
            spriteName: 'player'
        }));

        _this.sprite.inputEnabled = true;
        _this.sprite.input.priorityID = 1;

        _this.sprite.body.collideWorldBounds = true;

        _this.radius = radius;
        _this.cheering = cheering;

        _this.moveTarget = null;
        _this.stamina = stamina;
        _this.maxStamina = stamina;
        _this.cooldownTimer = _this.game.time.create(false);
        _this.staminaCooldown = staminaCooldown * 1000;

        _this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.audioScream = _this.game.add.audio('scream03');

        _this.showPoster = false;

        _this.circleGraphics = _this.game.add.graphics(0, 0);
        _this.circleGraphics.lineStyle(1, 0x33ff33, 1);
        _this.circleGraphics.drawCircle(0, 0, _this.radius * 2);
        fovGroup.add(_this.circleGraphics);

        // events
        _this.sprite.events.onInputUp.add(_this.handleClick, _this);
        _this.sprite.input.priorityID = 2;

        _this.game.onResume.add(_this.handleGameResume, _this);

        _this.keys = {
            up: _this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: _this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: _this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: _this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: _this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            shift: _this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
        };
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {
            var _this2 = this;

            if (this.mode !== __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]) {
                this.speed.current = this.speed.value;
                this.speed.current *= this.clickSpeedUp;
            }

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this);

            this.circleGraphics.visible = this.showPoster;
            if (this.showPoster) {
                this.circleGraphics.x = this.sprite.x;
                this.circleGraphics.y = this.sprite.y;
            }

            if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]) {
                this.updateProgressBar(0);
                return;
            }

            var areMovingKeysDown = this.keys.up.isDown || this.keys.down.isDown || this.keys.left.isDown || this.keys.right.isDown;

            if (!this.cooldownTimer.running) {
                if (areMovingKeysDown && this.keys.shift.isDown) {
                    if (this.stamina > 0) {
                        this.stamina -= 1;
                        this.speed.current *= this.speed.running;
                    } else {
                        this.cooldownTimer.add(this.staminaCooldown, function () {
                            _this2.cooldownTimer.stop(true);
                        });
                        this.cooldownTimer.start();
                    }
                } else if (this.stamina < this.maxStamina) {
                    this.stamina += 1;
                }
            } else {
                this.stamina = this.maxStamina * this.cooldownTimer.ms / this.staminaCooldown;
            }

            if (this.stamina < this.maxStamina) {
                this.updateProgressBar(this.stamina / this.maxStamina, this.cooldownTimer.running ? 0xff0000 : 0x00ff00);
            } else {
                this.updateProgressBar(0);
            }

            if (this.showPoster) {
                this.speed.current *= this.speed.withPoster;
            }

            if (areMovingKeysDown) {
                this.stopMovement();
                var angles = [];

                if (this.keys.up.isDown) {
                    angles.push(-90);
                }
                if (this.keys.down.isDown) {
                    angles.push(90);
                }
                if (this.keys.left.isDown) {
                    if (this.keys.up.isDown) {
                        angles.push(-180);
                    } else {
                        angles.push(180);
                    }
                }
                if (this.keys.right.isDown) {
                    angles.push(0);
                }
                this.game.physics.arcade.velocityFromAngle(angles.reduce(function (value, sum) {
                    return sum + value;
                }, 0) / angles.length, this.speed.current, this.sprite.body.velocity);

                this.resetClickSpeedUp();
            } else if (this.keys.up.justUp || this.keys.down.justUp || this.keys.left.justUp || this.keys.right.justUp) {
                this.stopMovement();
            }

            if (this.keys.space.justDown) {
                this.togglePoster();
            }
        }
    }, {
        key: 'handleGameResume',
        value: function handleGameResume() {
            this.stopMovement();
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.sprite.body.isMoving) {
                this.stopMovement();
            } else {
                this.togglePoster();
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        var x = props.x,
                            y = props.y;

                        this.sprite.x = x;
                        this.sprite.y = y;
                        this.stopMovement();
                        this.togglePoster(false);

                        this.sprite.body.collideWorldBounds = false;

                        this.sprite.events.onInputUp.removeAll();
                        this.cooldownTimer.stop(true);
                        break;
                    }
            }

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'setMode', this).call(this, mode, props);
        }
    }, {
        key: 'togglePoster',
        value: function togglePoster() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPoster;

            if (on === this.showPoster) {
                return;
            }

            // play sound
            if (on) {
                this.audioScream.play('', 0, 0.25);
            }

            this.showPoster = on;
        }
    }, {
        key: 'resetClickSpeedUp',
        value: function resetClickSpeedUp() {
            this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;
        }
    }, {
        key: 'stopMovement',
        value: function stopMovement() {
            this.sprite.body.stop();

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'stopMovement', this).call(this);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.game.onResume.removeAll();

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'kill', this).call(this);
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NPCProtester = function (_Protester) {
    _inherits(NPCProtester, _Protester);

    function NPCProtester(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            group = _ref.group,
            speed = _ref.speed,
            spriteKey = _ref.spriteKey,
            spriteName = _ref.spriteName,
            mood = _ref.mood,
            moodDown = _ref.moodDown,
            cheeringDuration = _ref.cheeringDuration;

        _classCallCheck(this, NPCProtester);

        var _this = _possibleConstructorReturn(this, (NPCProtester.__proto__ || Object.getPrototypeOf(NPCProtester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey, spriteName: spriteName }));

        _this.group = group;
        _this.group.add(_this.sprite);

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.cheeringTimer = _this.game.time.create(false);
        _this.cheeringDuration = cheeringDuration * 1000;

        _this.leavingTimer = _this.game.time.create(false);

        _this.mood = mood;
        _this.initialMood = mood;
        _this.moodDownValue = moodDown;

        _this.isBeingCheeredUp = false;

        // initially dead
        _this.kill();
        return _this;
    }

    _createClass(NPCProtester, [{
        key: 'update',
        value: function update() {
            if (this.mood === 0 && !this.leavingTimer.running) {
                this.leavingTimer.add(this.game.rnd.between(5000, 10000), this.leave, this);
                this.leavingTimer.start();
            } else if (this.mood > 0 && this.leavingTimer.running) {
                this.leavingTimer.stop(true);
            }
            if (this.mood > 0 && this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_LEAVE */]) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["j" /* PROTESTER_MODE_WANDER */]);
            }

            if (this.mood < 0.75) {
                this.moodDown(this.moodDownValue);
            }

            this.showPoster = this.mode !== __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */] && this.mood >= 0.75;

            this.sprite.tint = 0xffffff;
            if (this.mood >= 0.75) {
                var tintSaturation = (this.mood - 0.75) / (1 - 0.75) * 0.25;
                this.sprite.tint = Phaser.Color.RGBArrayToHex([1 - tintSaturation, 1, 1 - tintSaturation]);
            } else if (this.mood <= 0.25) {
                var _tintSaturation = (1 - this.mood / 0.25) * 0.25;
                this.sprite.tint = Phaser.Color.RGBArrayToHex([1, 1 - _tintSaturation, 1 - _tintSaturation]);
            }

            if (this.cheeringTimer.running) {
                this.updateProgressBar(this.cheeringTimer.ms / this.cheeringDuration);
            } else {
                this.updateProgressBar(0);
            }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["j" /* PROTESTER_MODE_WANDER */]:
                    {
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_LEAVE */]) {
                            this.stopMovement();
                        }

                        var coords = props.coords;

                        if (coords) {
                            this.sprite.body.onMoveComplete.add(this.wander, this);
                            this.setMoveTarget(coords);
                        } else {
                            this.wander();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        var x = props.x,
                            y = props.y;

                        this.sprite.x = x;
                        this.sprite.y = y;

                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["j" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.stopMovement();

                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_LEAVE */]:
                    {
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["j" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }

                        this.sprite.body.onMoveComplete.add(this.kill, this);
                        this.setMoveTarget({
                            x: this.sprite.x < this.game.world.width / 2 ? -100 : this.game.world.width + 100,
                            y: this.sprite.y
                        });

                        break;
                    }
            }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'wander',
        value: function wander() {
            this.sprite.body.onMoveComplete.remove(this.wander, this);
            var nextAction = this.game.rnd.between(0, 10);
            if (nextAction === 0) {
                this.sprite.body.onMoveComplete.add(this.wander, this);
                this.setMoveTarget(this.getNextCoords());
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'leave',
        value: function leave() {
            this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_LEAVE */]);
            this.leavingTimer.stop(true);
        }
    }, {
        key: 'toggleCheering',
        value: function toggleCheering() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.isBeingCheeredUp;
            var moodUpValue = arguments[1];

            if (on === this.isBeingCheeredUp) {
                return;
            }

            if (on) {
                this.cheeringTimer.add(this.cheeringDuration, this.onCheeredUp.bind(this, moodUpValue));
                this.cheeringTimer.start();
            } else {
                this.cheeringTimer.stop(true);
            }

            this.isBeingCheeredUp = on;
        }
    }, {
        key: 'onCheeredUp',
        value: function onCheeredUp(moodUpValue) {
            this.moodUp(moodUpValue);
            this.toggleCheering(false);
        }
    }, {
        key: 'moodUp',
        value: function moodUp(value) {
            this.mood = Math.min(this.mood + value, 1);
        }
    }, {
        key: 'moodDown',
        value: function moodDown(value) {
            this.mood = Math.max(this.mood - value, 0);
        }
    }, {
        key: 'revive',
        value: function revive(_ref2) {
            var x = _ref2.x,
                y = _ref2.y,
                nextCoords = _ref2.nextCoords,
                _ref2$mood = _ref2.mood,
                mood = _ref2$mood === undefined ? this.initialMood : _ref2$mood;

            this.sprite.body.reset(x, y);
            this.sprite.x = x;
            this.sprite.y = y;

            this.mood = mood;

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'revive', this).call(this);

            this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["j" /* PROTESTER_MODE_WANDER */], { coords: nextCoords });
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.group.add(this.sprite);
            this.stopWandering();

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'kill', this).call(this);
        }
    }]);

    return NPCProtester;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (NPCProtester);

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Cop = function (_Prefab) {
    _inherits(Cop, _Prefab);

    function Cop(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            fov = _ref.fov,
            speed = _ref.speed,
            spriteName = _ref.spriteName;

        _classCallCheck(this, Cop);

        var _this = _possibleConstructorReturn(this, (Cop.__proto__ || Object.getPrototypeOf(Cop)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'cop', spriteName: spriteName }));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(_this.FOV.graphics);

        _this.target = null;
        _this.attractionPoint = null;
        _this.attractionStrength = 0;
        _this.returnCoords = null;
        return _this;
    }

    _createClass(Cop, [{
        key: 'update',
        value: function update() {
            this.speed.current = this.speed.value;
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_PURSUE */]) {
                this.speed.current *= this.speed.running;
            }
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */] && !this.target.alive) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_WANDER */], { coords: this.returnCoords });
            }

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'update', this).call(this);

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_PURSUE */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* FOV_MODE_NORMAL */]
            });
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_WANDER */]:
                    {
                        var coords = props.coords;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_PURSUE */]) {
                            this.target = null;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]) {
                            this.target = null;
                            this.returnCoords = null;
                            this.FOV.revive();
                        }
                        if (coords) {
                            this.sprite.body.onMoveComplete.add(this.wander, this);
                            this.setMoveTarget(coords);
                        } else {
                            this.wander(coords);
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_PURSUE */]:
                    {
                        var target = props.target;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.target = target;
                        this.setMoveTarget(target);
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]:
                    {
                        var jailCoords = props.jailCoords;

                        this.FOV.kill();
                        this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                        this.setMoveTarget(jailCoords);
                        break;
                    }
            }

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'wander',
        value: function wander() {
            this.sprite.body.onMoveComplete.remove(this.wander, this);
            var nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.sprite.body.onMoveComplete.add(this.wander, this);
                this.setMoveTarget(this.getNextCoords());
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords() {
            var bounds = void 0;
            var rnd = this.game.rnd.frac();
            if (this.attractionStrength === 1 || this.attractionStrength > 0 && rnd <= this.attractionStrength) {
                bounds = {
                    top: Math.min(this.sprite.y, this.attractionPoint.y),
                    right: Math.max(this.sprite.x, this.attractionPoint.x),
                    bottom: Math.max(this.sprite.y, this.attractionPoint.y),
                    left: Math.min(this.sprite.x, this.attractionPoint.x)
                };
            }
            return _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'getNextCoords', this).call(this, bounds);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.stopWandering();
            this.FOV.kill();

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'kill', this).call(this);
        }
    }]);

    return Cop;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Cop);

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(40);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Journalist = function (_Prefab) {
    _inherits(Journalist, _Prefab);

    function Journalist(_ref) {
        var _colors;

        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            fov = _ref.fov,
            shootingDuration = _ref.shootingDuration,
            cooldownDuration = _ref.cooldownDuration,
            onFinishShooting = _ref.onFinishShooting,
            callbackContext = _ref.callbackContext;

        _classCallCheck(this, Journalist);

        var _this = _possibleConstructorReturn(this, (Journalist.__proto__ || Object.getPrototypeOf(Journalist)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'journalist' }));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: (_colors = {}, _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* FOV_MODE_NORMAL */], 0xdddddd), _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* FOV_MODE_CAPTURE */], 0xffffff), _colors)
        });
        fov.group.add(_this.FOV.graphics);

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.shootingTimer = _this.game.time.create(false);
        _this.shootingDuration = shootingDuration * 1000;

        _this.cooldownTimer = _this.game.time.create(false);
        _this.cooldownDuration = cooldownDuration * 1000;

        _this.onFinishShooting = onFinishShooting;
        _this.callbackContext = callbackContext;

        _this.audioFinishShooting = _this.game.add.audio('applause');

        _this.target = null;
        return _this;
    }

    _createClass(Journalist, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */]) {
                this.turnTo(this.target);
            }
            if (this.shootingTimer.running) {
                this.updateProgressBar(this.shootingTimer.ms / this.shootingDuration);
            } else if (this.cooldownTimer.running) {
                this.updateProgressBar(this.cooldownTimer.ms / this.cooldownDuration, 0xff0000);
            } else {
                this.updateProgressBar(0);
            }

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* FOV_MODE_NORMAL */]
            });

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["g" /* JOURNALIST_MODE_WANDER */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */]) {
                            this.target = null;
                            this.shootingTimer.stop(true);
                        }
                        this.wander();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */]:
                    {
                        var target = props.target;

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */] && this.target === target) {
                            break;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["g" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
                            this.stopMovement();
                        }
                        this.target = target;

                        this.shootingTimer.add(this.shootingDuration, this.shootingTimerCallback, this);
                        this.shootingTimer.start();

                        break;
                    }
            }

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'wander',
        value: function wander() {
            this.sprite.body.onMoveComplete.remove(this.wander, this);
            var nextAction = this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.sprite.body.onMoveComplete.add(this.wander, this);
                this.setMoveTarget(this.getNextCoords());
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'turnTo',
        value: function turnTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.sprite.body.angle = this.game.math.angleBetweenPoints(this.sprite, { x: x, y: y });
        }
    }, {
        key: 'shootingTimerCallback',
        value: function shootingTimerCallback() {
            this.onFinishShooting.call(this.callbackContext);

            this.FOV.kill();

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);

            this.shootingTimer.stop(true);
            this.cooldownTimer.add(this.cooldownDuration, this.cooldownTimerCallback, this);
            this.cooldownTimer.start();

            this.audioFinishShooting.play('', 0, 0.25);
        }
    }, {
        key: 'cooldownTimerCallback',
        value: function cooldownTimerCallback() {
            this.FOV.revive();
            this.cooldownTimer.stop(true);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.cooldownTimer.stop(true);
            this.shootingTimer.stop(true);
            this.stopWandering();
            this.FOV.kill();

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'kill', this).call(this);
        }
    }]);

    return Journalist;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Journalist);

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(40);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SQUAD_DENSITY = 40;
var SQUAD_DISCIPLINE = 0.4;
var TURN_FREQUENCY = 30;

var SWATSquad = function () {
    function SWATSquad(_ref) {
        var game = _ref.game,
            count = _ref.count,
            speed = _ref.speed,
            group = _ref.group;

        _classCallCheck(this, SWATSquad);

        this.game = game;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.mode = __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* SWAT_MODE_HIDE */];
        this.moveTarget = null;
        this.updateIndex = 0;
        this.audioAppear = this.game.add.audio('boo');

        this.sprites = [];
        for (var i = 0; i < count; i++) {
            var swatSprite = this.game.add.sprite(0, 0, 'swat', 0);
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
        }
    }

    _createClass(SWATSquad, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* SWAT_MODE_HUNT */]) {
                var lastSprite = this.sprites[this.sprites.length - 1];

                if (this.game.math.fuzzyEqual(this.game.math.distanceSq(lastSprite.x, lastSprite.y, this.moveTarget.x, this.moveTarget.y), 0, lastSprite.width)) {
                    this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* SWAT_MODE_HIDE */]);
                } else {
                    // change direction once in a while
                    if (this.updateIndex % TURN_FREQUENCY === 0) {
                        var firstSprite = this.sprites[0];
                        var angle = this.game.math.angleBetweenPoints(firstSprite, this.moveTarget) + (this.updateIndex === 0 ? 1 : -1) * this.game.rnd.realInRange(0, SQUAD_DISCIPLINE);
                        this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, firstSprite.body.velocity);
                    }

                    for (var i = 1; i < this.sprites.length; i++) {
                        var swatSprite = this.sprites[i];
                        var angleToTarget = this.game.math.angleBetweenPoints(swatSprite, this.sprites[i - 1]);
                        this.game.physics.arcade.velocityFromRotation(angleToTarget, this.speed.current, swatSprite.body.velocity);
                    }

                    if (this.updateIndex === 2 * TURN_FREQUENCY - 1) {
                        this.updateIndex = 0;
                    } else {
                        this.updateIndex++;
                    }
                }
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* SWAT_MODE_HIDE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* SWAT_MODE_HUNT */]) {
                            for (var i = 0; i < this.sprites.length; i++) {
                                for (var j = 0; j < this.sprites[i].children.length; j++) {
                                    this.sprites[i].getChildAt(j).mz.kill();
                                }
                                this.sprites[i].visible = false;
                                this.sprites[i].body.stopMovement(true);
                            }
                            this.updateIndex = 0;
                            this.moveTarget = null;
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* SWAT_MODE_HUNT */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* SWAT_MODE_HIDE */]) {
                            var x = props.x,
                                y = props.y,
                                target = props.target;

                            this.moveTarget = target;

                            var directionSign = this.moveTarget.x > x ? -1 : 1;
                            for (var _i = 0; _i < this.sprites.length; _i++) {
                                var swatSprite = this.sprites[_i];
                                swatSprite.x = x + _i * directionSign * SQUAD_DENSITY;
                                swatSprite.y = y;
                                swatSprite.visible = true;
                            }

                            this.audioAppear.play();
                        }
                        break;
                    }
            }

            this.mode = mode;
        }
    }]);

    return SWATSquad;
}();

/* harmony default export */ __webpack_exports__["a"] = (SWATSquad);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PauseMenu = function () {
    function PauseMenu(_ref) {
        var game = _ref.game;

        _classCallCheck(this, PauseMenu);

        this.game = game;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.exists = false;

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();

        this.title = this.game.add.text(this.game.width / 2, 2 / 3 * this.game.height / 2, 'Пауза');
        this.title.anchor.setTo(0.5);

        this.replayButton = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'playButton');
        this.replayButton.anchor.setTo(0.5);

        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.title);
        this.sprite.addChild(this.replayButton);
        this.sprite.fixedToCamera = true;
    }

    _createClass(PauseMenu, [{
        key: 'kill',
        value: function kill() {
            this.sprite.kill();
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.sprite.revive();
        }
    }]);

    return PauseMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (PauseMenu);

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoreMeter = function () {
    function ScoreMeter(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width,
            parentGroup = _ref.parentGroup,
            winPoint = _ref.winPoint;

        _classCallCheck(this, ScoreMeter);

        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.width = width;
        this.winPoint = winPoint;
        parentGroup.add(this.group);

        this.progressBar = this.game.add.graphics();
        this.group.add(this.progressBar);
        // this.label = this.game.add.text(
        //     -280,
        //     0,
        //     'Score:',
        //     {
        //         font: '14px Arial',
        //         fill: '#000',
        //         align: 'right'
        //     }
        // );
        // this.group.add(this.label);
    }

    _createClass(ScoreMeter, [{
        key: "update",
        value: function update(value) {
            this.progressBar.clear();
            value = this.game.math.clamp(value, 0, 100);
            var height = 10;
            var x = 0;
            var y = 0;
            this.progressBar.lineStyle(2, 0x333333, 1);
            this.progressBar.drawRect(x, y - height, this.width, height);
            this.progressBar.lineStyle(height, 0x00ff00, 1);
            this.progressBar.moveTo(x, y - height / 2);
            this.progressBar.lineTo(x + Math.round(this.width * value / 100), y - height / 2);
            this.progressBar.lineStyle(3, 0xffff00, 1);
            this.progressBar.moveTo(x + Math.round(this.width * this.winPoint / 100), y - height);
            this.progressBar.lineTo(x + Math.round(this.width * this.winPoint / 100), y);
        }
    }]);

    return ScoreMeter;
}();

/* harmony default export */ __webpack_exports__["a"] = (ScoreMeter);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COP_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COP_MODE_PURSUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COP_MODE_CONVOY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SWAT_MODE_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SWAT_MODE_HUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOV_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FOV_MODE_CAPTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PROTESTER_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PROTESTER_MODE_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PROTESTER_MODE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JOURNALIST_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JOURNALIST_MODE_SHOOTING; });
var COP_MODE_WANDER = 'wander';
var COP_MODE_PURSUE = 'pursue';
var COP_MODE_CONVOY = 'convoy';

var SWAT_MODE_HIDE = 'hide';
var SWAT_MODE_HUNT = 'hunt';

var FOV_MODE_NORMAL = 'normal';
var FOV_MODE_CAPTURE = 'capture';

var PROTESTER_MODE_WANDER = 'wander';
var PROTESTER_MODE_ARRESTED = 'arrested';
var PROTESTER_MODE_LEAVE = 'leave';

var JOURNALIST_MODE_WANDER = 'wander';
var JOURNALIST_MODE_SHOOTING = 'shooting';

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prefab = function () {
    function Prefab(_ref) {
        var _this = this;

        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            spriteKey = _ref.spriteKey,
            spriteName = _ref.spriteName,
            props = _ref.props;

        _classCallCheck(this, Prefab);

        this.props = props;
        this.game = game;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.name = spriteName;
        this.sprite.anchor.set(0.5);

        this.game.physics.arcade.enable(this.sprite);

        this.stayingTimer = this.game.time.create(false);

        this.mode = null;
        this.moveTarget = null;

        // events
        this.sprite.body.onMoveComplete.add(function () {
            _this.setMoveTarget(null);
        });
    }

    _createClass(Prefab, [{
        key: 'update',
        value: function update() {
            if (!this.sprite.body.isMoving && this.moveTarget) {
                this.moveTo(this.moveTarget);
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            this.mode = mode;
        }
    }, {
        key: 'moveTo',
        value: function moveTo(coords) {
            var distance = this.game.math.distance(this.sprite.x, this.sprite.y, coords.x, coords.y);
            var duration = distance / this.speed.current * 1000; // ms
            var angle = this.game.math.angleBetweenPoints(this.sprite, coords);
            var angleDeg = this.game.math.radToDeg(angle);
            this.sprite.body.angle = angle;

            this.sprite.body.moveTo(duration, distance, angleDeg);
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords(bounds) {
            var directions = [];
            var offsetTop = 50;
            if (!bounds) {
                bounds = {
                    top: this.sprite.y - this.sprite.top + offsetTop,
                    right: this.game.world.width - (this.sprite.right - this.sprite.x),
                    bottom: this.game.world.height - (this.sprite.bottom - this.sprite.y),
                    left: this.sprite.x - this.sprite.left
                };
            }

            if (this.sprite.x > bounds.left) {
                directions.push('left');
            }
            if (this.sprite.x < bounds.right) {
                directions.push('right');
            }
            if (this.sprite.y > bounds.top) {
                directions.push('top');
            }
            if (this.sprite.y < bounds.bottom) {
                directions.push('bottom');
            }

            var direction = this.game.rnd.between(0, directions.length - 1);
            var x = this.sprite.x;
            var y = this.sprite.y;
            switch (directions[direction]) {
                case 'left':
                    x = this.game.rnd.between(bounds.left, this.sprite.x - 1);
                    break;
                case 'right':
                    x = this.game.rnd.between(this.sprite.x + 1, bounds.right);
                    break;
                case 'top':
                    y = this.game.rnd.between(bounds.top, this.sprite.y - 1);
                    break;
                case 'bottom':
                    y = this.game.rnd.between(this.sprite.y + 1, bounds.bottom);
                    break;
            }
            return { x: Math.round(x), y: Math.round(y) };
        }
    }, {
        key: 'updateProgressBar',
        value: function updateProgressBar(percent) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x00ff00;

            var y = -30;
            var width = 25;
            var height = 5;
            this.progressBar.clear();
            percent = this.game.math.clamp(percent, 0, 1);
            if (percent !== 0) {
                this.progressBar.lineStyle(1, color, 1);
                this.progressBar.drawRect(-width / 2, y - height / 2, width, height);
                this.progressBar.lineStyle(height, color, 1);
                this.progressBar.moveTo(-width / 2, y);
                this.progressBar.lineTo(Math.round(width * (-0.5 + percent)), y);
            }
        }
    }, {
        key: 'setMoveTarget',
        value: function setMoveTarget(coords) {
            this.stopMovement();
            if (coords) {
                this.moveTarget = { x: coords.x, y: coords.y };
            } else {
                this.moveTarget = null;
            }
        }
    }, {
        key: 'stopMovement',
        value: function stopMovement() {
            this.sprite.body.stopMovement(true);
        }
    }, {
        key: 'stopWandering',
        value: function stopWandering() {
            this.sprite.body.onMoveComplete.remove(this.wander, this);
            this.stayingTimer.stop(true);
        }
    }, {
        key: 'revive',
        value: function revive() {
            var _this2 = this;

            this.sprite.revive(1);

            this.mode = null;
            this.moveTarget = null;

            // events
            this.sprite.body.onMoveComplete.add(function () {
                _this2.setMoveTarget(null);
            });
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.sprite.body.onMoveComplete.removeAll();
            this.sprite.kill();
        }
    }]);

    return Prefab;
}();

/* harmony default export */ __webpack_exports__["a"] = (Prefab);

/***/ })

/******/ });