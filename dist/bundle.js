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
/******/ 	return __webpack_require__(__webpack_require__.s = 304);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    initial: [{
        type: 'spritesheet',
        key: 'playButton',
        url: __webpack_require__(306),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'repeatButton',
        url: __webpack_require__(307),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'soundButtons',
        url: __webpack_require__(308),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'langButtons',
        url: __webpack_require__(309),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'helpArrows',
        url: __webpack_require__(310),
        frameWidth: 150,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'helpShift',
        url: __webpack_require__(311),
        frameWidth: 150,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'helpSpacebar',
        url: __webpack_require__(312),
        frameWidth: 200,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'posterButton',
        url: __webpack_require__(313),
        frameWidth: 60,
        frameHeight: 60
    }, {
        type: 'audio',
        key: 'theme',
        urls: __webpack_require__(314)
    }, {
        type: 'audio',
        key: 'punch01',
        urls: __webpack_require__(315)
    }, {
        type: 'audio',
        key: 'punch02',
        urls: __webpack_require__(316)
    }, {
        type: 'audio',
        key: 'applause',
        urls: __webpack_require__(317)
    }, {
        type: 'audio',
        key: 'boo',
        urls: __webpack_require__(318)
    }, {
        type: 'audio',
        key: 'croud',
        urls: __webpack_require__(319)
    }, {
        type: 'audio',
        key: 'cough01',
        urls: __webpack_require__(320)
    }, {
        type: 'audio',
        key: 'cough02',
        urls: __webpack_require__(321)
    }, {
        type: 'audio',
        key: 'scream03',
        urls: __webpack_require__(322)
    }, {
        type: 'audio',
        key: 'truck',
        urls: __webpack_require__(323)
    }, {
        type: 'audio',
        key: 'pick',
        urls: __webpack_require__(324)
    }],
    level1: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(116),
        frameWidth: 100,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'auto',
        url: __webpack_require__(117),
        frameWidth: 290,
        frameHeight: 135
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(325),
        frameWidth: 44,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'shield',
        url: __webpack_require__(118),
        frameWidth: 316,
        frameHeight: 140
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(119),
        frameWidth: 32,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(120),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(121),
        frameWidth: 32,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(122),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(123),
        frameWidth: 30,
        frameHeight: 47
    }, {
        type: 'spritesheet',
        key: 'injury',
        url: __webpack_require__(124),
        frameWidth: 30,
        frameHeight: 31
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(125),
        frameWidth: 60,
        frameHeight: 71
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(326),
        overwrite: false
    }],
    level2: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(116),
        frameWidth: 100,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'auto',
        url: __webpack_require__(117),
        frameWidth: 290,
        frameHeight: 135
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(327),
        frameWidth: 46,
        frameHeight: 54
    }, {
        type: 'spritesheet',
        key: 'swat',
        url: __webpack_require__(328),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'shield',
        url: __webpack_require__(118),
        frameWidth: 316,
        frameHeight: 140
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(119),
        frameWidth: 32,
        frameHeight: 49
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(120),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(121),
        frameWidth: 32,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(122),
        frameWidth: 30,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(123),
        frameWidth: 30,
        frameHeight: 47
    }, {
        type: 'spritesheet',
        key: 'injury',
        url: __webpack_require__(124),
        frameWidth: 30,
        frameHeight: 31
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(125),
        frameWidth: 60,
        frameHeight: 71
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(329),
        overwrite: false
    }]
});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6de19dd8a50184e808601049e3864f02.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e50b7c19c0b293363ca8ee1847f87c02.png";

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2ce3714d47c9a7f811acdeaab3c80346.png";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0db8c7aedd9b6876feb9ee4371b27d14.png";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c73e25fb0b044d025cd031db52c0704b.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c319d1c800f4e0f8c49b21f55ef1ee16.png";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/51eaa920cd842f906dbb0ab9dafb2046.png";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/373325f07721a6c1f012d59948a7b889.png";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d4bedbdde1c2adef9d869553fe67a350.png";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/28dbeb6c57f67cd17abbd912371bac9c.png";

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(13);
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
            spriteName = _ref.spriteName,
            onDropPoster = _ref.onDropPoster;

        _classCallCheck(this, Protester);

        var _this = _possibleConstructorReturn(this, (Protester.__proto__ || Object.getPrototypeOf(Protester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey, spriteName: spriteName }));

        _this.injurySprite = _this.sprite.addChild(_this.game.make.sprite(-15, -_this.sprite.height / 2 - 2, 'injury'));
        _this.injurySprite.bringToTop();
        _this.injurySprite.visible = false;

        _this.posterSprite = _this.sprite.addChild(_this.game.make.sprite(-10, 11, 'poster', 0));
        _this.posterSprite.bringToTop();
        _this.posterSprite.anchor.set(0.5, 1);
        _this.posterSprite.visible = false;

        _this.showPoster = false;
        _this.dropPoster = 1;

        _this.onDropPoster = onDropPoster;
        return _this;
    }

    _createClass(Protester, [{
        key: 'update',
        value: function update() {
            this.injurySprite.visible = this.sprite.health !== 1;
            this.posterSprite.visible = this.posterSprite.alive && this.showPoster;

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["p" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        if (this.game.rnd.frac() < this.dropPoster) {
                            this.posterSprite.kill();
                            this.onDropPoster({ x: this.sprite.x, y: this.sprite.y });
                        }

                        this.moveTo(null);

                        var x = props.x,
                            y = props.y;

                        this.sprite.x = x;
                        this.sprite.y = y;

                        break;
                    }
            }

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'setMode', this).call(this, mode, props);
        }
    }]);

    return Protester;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Protester);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DEFAULT_COLORS;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_COLORS = (_DEFAULT_COLORS = {}, _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* FOV_MODE_NORMAL */], 0x3a3a56), _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* FOV_MODE_CAPTURE */], 0x563a3a), _DEFAULT_COLORS);

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

            this.graphics.beginFill(this.colors[mode || __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* FOV_MODE_NORMAL */]], 0.4);
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFormattedTime;
function getFormattedTime(seconds) {
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LANG_RU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FIELD_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return END_GAME_TIME_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return END_GAME_PLAYER_KILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return END_GAME_PROTEST_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return END_GAME_WIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COP_MODE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COP_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COP_MODE_PURSUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COP_MODE_CONVOY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SWAT_MODE_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SWAT_MODE_HUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SHIELD_MODE_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SHIELD_MODE_DRIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FOV_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FOV_MODE_CAPTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PROTESTER_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PROTESTER_MODE_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PROTESTER_MODE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return JOURNALIST_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return JOURNALIST_MODE_SHOOTING; });
var LANG_RU = 'ru';
var LANG_EN = 'en';

var FIELD_OFFSET = {
    top: 150,
    right: 50,
    bottom: 50,
    left: 50
};

var END_GAME_TIME_OUT = 'timeOut';
var END_GAME_PLAYER_KILLED = 'playerKilled';
var END_GAME_PROTEST_RATE = 'protestRate';
var END_GAME_WIN = 'win';

var COP_MODE_ENTER = 'enter';
var COP_MODE_WANDER = 'wander';
var COP_MODE_PURSUE = 'pursue';
var COP_MODE_CONVOY = 'convoy';

var SWAT_MODE_HIDE = 'hide';
var SWAT_MODE_HUNT = 'hunt';

var SHIELD_MODE_HIDE = 'hide';
var SHIELD_MODE_DRIVE = 'drive';

var FOV_MODE_NORMAL = 'normal';
var FOV_MODE_CAPTURE = 'capture';

var PROTESTER_MODE_WANDER = 'wander';
var PROTESTER_MODE_ARRESTED = 'arrested';
var PROTESTER_MODE_LEAVE = 'leave';

var JOURNALIST_MODE_WANDER = 'wander';
var JOURNALIST_MODE_SHOOTING = 'shooting';

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_Help_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_Controls_js__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_Game_js__ = __webpack_require__(337);







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
game.state.add('Help', __WEBPACK_IMPORTED_MODULE_3__states_Help_js__["a" /* default */]);
game.state.add('Controls', __WEBPACK_IMPORTED_MODULE_4__states_Controls_js__["a" /* default */]);
game.state.add('Game', __WEBPACK_IMPORTED_MODULE_5__states_Game_js__["a" /* default */]);

game.state.start('Boot');

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_i18n_js__ = __webpack_require__(330);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Boot = function () {
    function Boot() {
        _classCallCheck(this, Boot);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);

            this.game.mz = {};
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.mz.i18n = new __WEBPACK_IMPORTED_MODULE_1__objects_i18n_js__["a" /* default */]({
                game: this.game
            });

            this.state.onStateChange.add(this.handleStateChange, this);

            this.state.start('Loading', true, false, {
                assets: [['pack', 'initial', null, JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */])]],
                nextState: ['StartMenu']
            });
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange() {
            this.game.mz.i18n.clear();
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/121104892eaea3f65969e7beb7d9f45f.png";

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a41131e8dff8ee89ba12d9d36534a417.png";

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/14ca0f6714021de1e9776c79ad48e916.png";

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/66dd3dd498c059b331146e5fe01f17dd.png";

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4190e618de11fbf3ae3d41873529b2e0.png";

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3eb6c3176371a0f3cc4fc69f68d0daea.png";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/faef552b2e7643fbca6e2dcd87dec01b.png";

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d75ac66b714b8f2e53ccbf82f8fe4974.png";

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/31269e05cd13ab095ae3bbb217d2f567.mp3";

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0cb89b881decdf87d1ccaba4ae7aaffb.mp3";

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dca004f04dec60da50cca8fecc4161f2.mp3";

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3745bf01cd4446437f37de7991ad805b.mp3";

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/52b53826ba253bf501d879893845b5f4.mp3";

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/15a327358f08be2e673ef27c2e5dcaa1.mp3";

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6632e8a1ef01b6e295413e6fa1606858.mp3";

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2db995ce7f0661c455b95602348d7c50.mp3";

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/05b4ea2cf7bcddf26622cdaafb40b881.mp3";

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b2187268a6f521f79c03adf9bedcf458.mp3";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dd570435d42a0e42441e1fc12af0f4fa.mp3";

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d98ae72532ed2e0fe2b7596a57c1cbac.png";

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/01689666662dc43509774a074f8236d2.png";

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/733d7ab8b793f60f4c77b9d837fa3693.png";

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d0797776e88d180a0467e06d6899a8ae.png";

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/8afe7311bb2c99db9fb7c7ac970c905f.png";

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_i18n_json__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_i18n_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_i18n_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var i18n = function () {
    function i18n(_ref) {
        var game = _ref.game;

        _classCallCheck(this, i18n);

        this.game = game;
        this.textObjects = [];
        this.currentLang = navigator.language === __WEBPACK_IMPORTED_MODULE_1__constants_js__["o" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_1__constants_js__["o" /* LANG_RU */] : __WEBPACK_IMPORTED_MODULE_1__constants_js__["n" /* LANG_EN */];
        this.translations = __WEBPACK_IMPORTED_MODULE_0__assets_i18n_json___default.a;
    }

    _createClass(i18n, [{
        key: 'setLang',
        value: function setLang(lang) {
            var _this = this;

            this.currentLang = lang;
            this.textObjects.forEach(function (_ref2) {
                var inst = _ref2.inst,
                    text = _ref2.text;

                inst.setText(_this.getTranslation(text));
            });
        }
    }, {
        key: 'createText',
        value: function createText(x, y, text, font) {
            var textObject = this.game.add.text(x, y, this.getTranslation(text), font);
            this.textObjects.push({
                inst: textObject,
                text: text
            });
            return textObject;
        }
    }, {
        key: 'getTranslation',
        value: function getTranslation(text) {
            if (this.currentLang === __WEBPACK_IMPORTED_MODULE_1__constants_js__["n" /* LANG_EN */]) {
                return text;
            }
            return this.translations[text][this.currentLang];
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.textObjects = [];
        }
    }]);

    return i18n;
}();

/* harmony default export */ __webpack_exports__["a"] = (i18n);

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = {
	"Loading": {
		"ru": "Загрузка"
	},
	"Peaceful protest": {
		"ru": "Мирная акция протеста"
	},
	"> Level 01": {
		"ru": "> Уровень 01"
	},
	"> Level 02": {
		"ru": "> Уровень 02"
	},
	"How to play?": {
		"ru": "Как играть?"
	},
	"Controls": {
		"ru": "Управление"
	},
	"<   Back to menu": {
		"ru": "<   Назад в меню"
	},
	"move around": {
		"ru": "двигаться"
	},
	"run": {
		"ru": "бегать"
	},
	"show poster": {
		"ru": "показать плакат"
	},
	"Fill the protest scale before time runs out": {
		"ru": "Заполните шкалу протеста на 100% пока не вышло время"
	},
	"Show your poster to people around you to cheer them up": {
		"ru": "Показывайте плакат другим людям, чтобы их завести"
	},
	"Show your poster to journalists for several seconds to call out for more people": {
		"ru": "Показывайте плакат журналистам несколько секунд, чтобы позвать больше людей"
	},
	"Cops will chase you and others for showing posters": {
		"ru": "Полицейские вас задержат, если поймают с плакатом"
	},
	"Protest meter": {
		"ru": "Шкала протеста"
	},
	"You did it!": {
		"ru": "Маладец!"
	},
	"They turned you in, pal": {
		"ru": "Суши сухари, дружище"
	},
	"Time is out!": {
		"ru": "Время вышло!"
	},
	"You let the protest fail :(": {
		"ru": "Ты слил протест :("
	},
	"Your time:": {
		"ru": "Время:"
	},
	"Total protesters:": {
		"ru": "Всего протестующих:"
	},
	"Active:": {
		"ru": "Осталось на митинге:"
	},
	"Arrested:": {
		"ru": "Арестовано:"
	},
	"Left home:": {
		"ru": "Ушло домой:"
	},
	"Pause": {
		"ru": "Пауза"
	}
};

/***/ }),

/***/ 332:
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

            this.mz.config.assets.forEach(function (_ref) {
                var _load, _load2, _load3;

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
                }
            });

            this.mz.objects.textLoading = this.game.add.text(this.game.world.centerX - 5, this.game.world.centerY, this.game.mz.i18n.getTranslation('Loading'), {
                font: '26px Arial',
                fill: '#fff'
            });
            this.mz.objects.textLoading.anchor.set(1, 0.5);

            this.mz.objects.textProgress = this.game.add.text(this.game.world.centerX + 5, this.game.world.centerY, '0 %', {
                font: '26px Arial',
                fill: '#fff'
            });
            this.mz.objects.textProgress.anchor.set(0, 0.5);
        }
    }, {
        key: 'loadUpdate',
        value: function loadUpdate() {
            this.mz.objects.textProgress.setText(this.game.load.progress + ' %');
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(13);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var StartMenu = function () {
    function StartMenu() {
        _classCallCheck(this, StartMenu);
    }

    _createClass(StartMenu, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.game.world.resize(this.game.width, this.game.height);

            this.title = this.game.mz.i18n.createText(this.game.world.centerX, 100, 'Peaceful protest', {
                fill: '#fff'
            });
            this.title.anchor.setTo(0.5);

            this.menu = [['> Level 01', this.handleClickPlay.bind(this, 'level1')], ['> Level 02', this.handleClickPlay.bind(this, 'level2')], ['How to play?', this.handleClickHelp.bind(this)], ['Controls', this.handleClickControls.bind(this)]].map(function (_ref, i) {
                var _ref2 = _slicedToArray(_ref, 2),
                    itemTitle = _ref2[0],
                    callback = _ref2[1];

                return [_this.game.mz.i18n.createText(40, i * 70 + 200, itemTitle, {
                    fill: '#fff'
                }), callback];
            });

            this.langButton = this.game.add.button(this.game.world.width - 10, 10, 'langButtons', this.handleClickLang.bind(this));
            this.langButton.anchor.setTo(1, 0);

            this.game.input.onDown.add(this.handleClickMenu, this);
        }
    }, {
        key: 'update',
        value: function update() {
            this.langButton.frame = this.game.mz.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants_js__["o" /* LANG_RU */] ? 1 : 0;
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay(level) {
            this.state.start('Loading', true, false, {
                assets: [['pack', level, null, JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */])]],
                nextState: ['Game', true, false, __WEBPACK_IMPORTED_MODULE_0__levels_js__["a" /* default */][level]]
            });
        }
    }, {
        key: 'handleClickLang',
        value: function handleClickLang() {
            this.game.mz.i18n.setLang(this.game.mz.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants_js__["o" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["n" /* LANG_EN */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["o" /* LANG_RU */]);
        }
    }, {
        key: 'handleClickMenu',
        value: function handleClickMenu() {
            var _this2 = this;

            this.menu.some(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    item = _ref4[0],
                    callback = _ref4[1];

                if (item.getBounds().contains(_this2.game.input.x, _this2.game.input.y)) {
                    _this2.game.input.onDown.remove(_this2.handleClickMenu, _this2);
                    callback();
                    return true;
                }
            });
        }
    }, {
        key: 'handleClickHelp',
        value: function handleClickHelp() {
            this.state.start('Help', true, false);
        }
    }, {
        key: 'handleClickControls',
        value: function handleClickControls() {
            this.state.start('Controls', true, false);
        }
    }]);

    return StartMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (StartMenu);

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 3 * 60, // s
        winningThreshold: 75,
        cops: {
            count: [[60, 0], [85, 1], [100, 2]],
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
            mood: 0.3,
            moodUp: 0.001,
            moodDown: 0.0001,
            dropPoster: 0.3
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 120,
            stamina: 100,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 4 * 60, // s
        winningThreshold: 75,
        cops: {
            count: [[40, 1], [50, 2], [60, 3], [90, 4], [100, 5]],
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
            frequency: 15000,
            scoreThreshold: 60
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
                start: 20,
                max: 60,
                add: 10
            },
            max: 60,
            speed: {
                value: 60
            },
            mood: 0.25,
            moodUp: 0.0024,
            moodDown: 0.0001,
            dropPoster: 0.1
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 120,
            stamina: 200,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        }
    }
});

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Help = function () {
    function Help() {
        _classCallCheck(this, Help);
    }

    _createClass(Help, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.back = this.game.add.text(40, 40, this.game.mz.i18n.getTranslation('<   Back to menu'), {
                fill: '#fff'
            });

            ['Fill the protest scale before time runs out', 'Show your poster to people around you to cheer them up', 'Show your poster to journalists for several seconds to call out for more people', 'Cops will chase you and others for showing posters'].forEach(function (text, i) {
                _this.game.add.text(40, i * 80 + 150, i + 1 + '. ' + _this.game.mz.i18n.getTranslation(text) + '.', {
                    font: '22px Arial',
                    fill: '#fff',
                    wordWrap: true,
                    wordWrapWidth: _this.game.width - 80
                });
            });

            this.game.input.onDown.add(this.handleClickBack, this);
        }
    }, {
        key: 'handleClickBack',
        value: function handleClickBack() {
            if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickBack, this);
                this.state.start('StartMenu', true, false);
                return true;
            }
        }
    }]);

    return Help;
}();

/* harmony default export */ __webpack_exports__["a"] = (Help);

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = function () {
    function Controls() {
        _classCallCheck(this, Controls);
    }

    _createClass(Controls, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.back = this.game.add.text(40, 40, this.game.mz.i18n.getTranslation('<   Back to menu'), {
                fill: '#fff'
            });

            [['helpArrows', 'move around'], ['helpShift', 'run'], ['helpSpacebar', 'show poster']].forEach(function (_ref, i) {
                var _ref2 = _slicedToArray(_ref, 2),
                    spriteKey = _ref2[0],
                    text = _ref2[1];

                _this.game.add.sprite(40, i * 100 + 200, spriteKey);
                _this.game.add.text(300, i * 100 + 210, _this.game.mz.i18n.getTranslation(text), {
                    fill: '#fff'
                });
            });

            this.game.input.onDown.add(this.handleClickBack, this);
        }
    }, {
        key: 'handleClickBack',
        value: function handleClickBack() {
            if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickBack, this);
                this.state.start('StartMenu', true, false);
                return true;
            }
        }
    }]);

    return Controls;
}();

/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_SWATSquad_js__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_Shield_js__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_GameInterface_js__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_PauseMenu_js__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_EndMenu_js__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_js__ = __webpack_require__(128);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }















var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: 'init',
        value: function init(level) {
            this.mz = {
                level: level,
                gameEnded: false,
                score: 100 * (0.5 * level.protesters.mood + 0.5 * level.protesters.count.start / level.protesters.count.max),
                timePassed: 0, // s
                protesters: {
                    alive: 0,
                    arrested: 0,
                    revived: 0,
                    left: 0,
                    toRevive: level.protesters.count.start,
                    meanMood: level.protesters.mood
                },
                cops: {
                    alive: 0
                },
                events: {
                    keys: {},
                    fieldClickHandler: null
                },
                timers: {
                    swat: null
                },
                objects: {
                    player: null,
                    swat: null,
                    shield: null,
                    bgTile: null,
                    interface: null,
                    audio: {},
                    pauseMenu: null,
                    endMenu: null
                },
                arrays: {
                    protesters: [],
                    cops: [],
                    press: [],
                    borders: []
                },
                groups: {
                    actors: null,
                    cars: null,
                    droppedPosters: null,
                    copsFOV: null,
                    pressFOV: null,
                    playerFOV: null
                }
            };
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.game.stage.backgroundColor = '#ccc';

            this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

            this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground');
            this.mz.objects.bgTile.fixedToCamera = true;

            this.mz.objects.audio.theme = this.game.add.audio('theme');
            this.mz.objects.audio.theme.loopFull(0.1);
            this.mz.objects.audio.audioPunch = [this.game.add.audio('punch01'), this.game.add.audio('punch02')];
            this.mz.objects.audio.random = [this.game.add.audio('croud'), this.game.add.audio('cough01'), this.game.add.audio('cough02')];
            this.mz.objects.audio.applause = this.game.add.audio('applause');
            this.mz.objects.audio.boo = this.game.add.audio('boo');
            this.mz.objects.audio.pick = this.game.add.audio('pick');

            // FOVs should always be below everything
            this.mz.groups.playerFOV = this.game.add.group();
            this.mz.groups.pressFOV = this.game.add.group();
            this.mz.groups.copsFOV = this.game.add.group();

            this.mz.groups.droppedPosters = this.game.add.group();

            this.mz.groups.cars = this.game.add.group();
            // cars
            for (var i = 0; i < this.game.world.width; i += 300) {
                var autoSprite = this.game.add.sprite(i, 120, 'auto');
                autoSprite.anchor.set(0, 1);
                this.mz.groups.cars.add(autoSprite);
            }

            this.mz.groups.actors = this.game.add.group();

            // player
            this.mz.objects.player = new __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */](_extends({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                fovGroup: this.mz.groups.playerFOV
            }, this.mz.level.player, {
                onDropPoster: this.handleDropPoster.bind(this)
            }));
            this.game.camera.follow(this.mz.objects.player.sprite);
            this.mz.groups.actors.add(this.mz.objects.player.sprite);

            // top borders
            for (var _i = 0; _i < this.game.world.width; _i += 100) {
                var offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
                var borderTop = this.game.add.sprite(_i, __WEBPACK_IMPORTED_MODULE_9__constants_js__["i" /* FIELD_OFFSET */].top - 25, 'border', 0, this.mz.groups.actors);
                borderTop.anchor.set(0, 0.5);
                this.game.physics.arcade.enable(borderTop);
                borderTop.body.setSize(borderTop.width, offset);
                borderTop.body.immovable = true;
                this.mz.arrays.borders.push(borderTop);
            }

            // cops
            this.createCops();

            // swat
            if (this.mz.level.swat) {
                this.mz.objects.swat = new __WEBPACK_IMPORTED_MODULE_4__objects_SWATSquad_js__["a" /* default */](_extends({
                    game: this.game
                }, this.mz.level.swat, {
                    group: this.mz.groups.actors
                }));
                this.mz.timers.swat = this.game.time.create(false);
            }

            // shield
            this.mz.objects.shield = new __WEBPACK_IMPORTED_MODULE_5__objects_Shield_js__["a" /* default */]({
                game: this.game,
                speed: {
                    value: 300
                }
            });

            // press
            var onFinishShooting = this.handleFinishShooting.bind(this);
            for (var _i2 = 0; _i2 < this.mz.level.press.count; _i2++) {
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
                    onFinishShooting: onFinishShooting,
                    spriteName: 'journalist' + _i2
                }));
                this.mz.arrays.press.push(journalist.sprite);
                this.mz.groups.actors.add(journalist.sprite);
                journalist.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["m" /* JOURNALIST_MODE_WANDER */]);
            }

            // protesters
            this.createProtesters();

            // interface
            this.mz.objects.interface = new __WEBPACK_IMPORTED_MODULE_6__objects_GameInterface_js__["a" /* default */]({
                game: this.game,
                onTogglePoster: function onTogglePoster() {
                    _this.mz.objects.player.togglePoster();
                }
            });

            // bottom borders
            for (var _i3 = 0; _i3 < this.game.world.width; _i3 += 100) {
                var _offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
                var borderBottom = this.game.add.sprite(_i3, this.game.world.height - 25, 'border', 0, this.mz.groups.actors);
                borderBottom.anchor.set(0, 0.5);
                this.game.physics.arcade.enable(borderBottom);
                borderBottom.body.setSize(borderBottom.width, _offset, 0, borderBottom.height - _offset);
                borderBottom.body.immovable = true;
                this.mz.arrays.borders.push(borderBottom);
            }

            this.mz.objects.timer = this.game.time.create();
            this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
            this.mz.objects.timer.start();

            // pause menu
            this.mz.objects.pauseMenu = new __WEBPACK_IMPORTED_MODULE_7__objects_PauseMenu_js__["a" /* default */]({ game: this.game });

            // events

            // click on field
            var fieldClickHandler = this.game.add.sprite(0, 100);
            fieldClickHandler.fixedToCamera = true;
            fieldClickHandler.scale.setTo(this.game.width, this.game.height - 100);
            fieldClickHandler.inputEnabled = true;
            fieldClickHandler.input.priorityID = 1;
            fieldClickHandler.events.onInputDown.add(this.handleClick, this);
            this.mz.events.fieldClickHandler = fieldClickHandler;

            // pause
            this.game.onPause.add(this.handlePause, this);
            this.game.onResume.add(this.handlePause, this);
            this.game.input.onDown.add(this.handleUnpause, this);

            this.mz.events.keys.esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            // update background
            this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

            if (!this.mz.gameEnded) {
                this.playRandomSound();
            }

            // update player
            this.mz.objects.player.update();

            // update protesters
            var lastTickMeanMood = this.mz.protesters.meanMood;
            this.mz.score = 0;
            this.mz.protesters.meanMood = 0;
            this.mz.protesters.alive = 0;
            for (var i = 0; i < this.mz.arrays.protesters.length; i++) {
                var sprite = this.mz.arrays.protesters[i];
                if (!sprite.alive) {
                    if (this.mz.protesters.toRevive !== 0) {
                        var mood = this.game.math.clamp(lastTickMeanMood, this.mz.level.protesters.mood, (this.mz.level.winningThreshold - 1) / 100);
                        this.reviveProtester({
                            sprite: sprite,
                            mood: mood
                        });
                        this.mz.protesters.alive++;
                        this.mz.protesters.meanMood += mood;
                    }
                } else {
                    sprite.mz.update();
                    sprite.mz.toggleCheering(!this.mz.gameEnded && this.mz.objects.player.showPoster && this.getDistanceSq(sprite, this.mz.objects.player.sprite) <= this.mz.objects.player.radius.actualSq);

                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += sprite.mz.mood;
                }
            }

            this.mz.protesters.toRevive = 0;

            this.mz.protesters.meanMood = this.mz.protesters.alive !== 0 ? this.mz.protesters.meanMood / this.mz.protesters.alive : 0;
            this.mz.score = 100 * this.game.math.clamp(100 * (0.5 * this.mz.protesters.alive / this.mz.level.protesters.count.max + 0.5 * this.mz.protesters.meanMood) / this.mz.level.winningThreshold, 0, 1);

            // update interface
            if (!this.mz.gameEnded) {
                this.mz.objects.interface.update({
                    score: this.mz.score,
                    protestersAlive: this.mz.protesters.alive,
                    protestersTotal: this.mz.level.protesters.count.max,
                    meanMood: this.mz.protesters.meanMood
                });
            }

            // update journalists
            this.mz.arrays.press.forEach(function (journalistSprite) {
                var journalist = journalistSprite.mz;
                var newTarget = null;

                if (!_this2.mz.gameEnded && journalist.FOV.isActive && _this2.mz.objects.player.showPoster && journalist.FOV.containsPoint(_this2.mz.objects.player.sprite.body.center)) {
                    newTarget = _this2.mz.objects.player.sprite;
                }

                if (newTarget) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */], { target: newTarget });
                } else if (journalist.mode !== __WEBPACK_IMPORTED_MODULE_9__constants_js__["m" /* JOURNALIST_MODE_WANDER */]) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["m" /* JOURNALIST_MODE_WANDER */]);
                }

                journalist.update();
            });

            // update swat
            if (this.mz.objects.swat) {
                if ((this.mz.score >= this.mz.level.swat.scoreThreshold || this.mz.gameEnded) && this.mz.objects.swat.mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["u" /* SWAT_MODE_HIDE */] && !this.mz.timers.swat.running) {
                    this.mz.timers.swat.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                    this.mz.timers.swat.start();
                } else if (this.mz.timers.swat.running && this.mz.score < this.mz.level.swat.scoreThreshold) {
                    this.mz.timers.swat.stop(true);
                }
                this.mz.objects.swat.update();
            }

            // update shield
            this.mz.objects.shield.update();

            // update cops
            if (this.mz.cops.alive < this.mz.arrays.cops.length) {
                // revive if necessary
                var copsRequired = this.getCopsRequiredNumber();
                if (copsRequired > this.mz.cops.alive) {
                    this.reviveCops(copsRequired - this.mz.cops.alive);
                    this.mz.cops.alive = copsRequired;
                }
            }

            for (var _i4 = 0; _i4 < this.mz.cops.alive; _i4++) {
                var copSprite = this.mz.arrays.cops[_i4];
                var cop = copSprite.mz;

                if (cop.mode !== __WEBPACK_IMPORTED_MODULE_9__constants_js__["a" /* COP_MODE_CONVOY */] && cop.mode !== __WEBPACK_IMPORTED_MODULE_9__constants_js__["b" /* COP_MODE_ENTER */]) {
                    // set attraction point and strength
                    cop.attractionPoint = _extends({}, this.mz.objects.player.sprite.body.center);
                    var attractionStrength = 0;
                    if (this.mz.objects.player.showPoster) {
                        attractionStrength += 0.2;
                        this.mz.arrays.press.forEach(function (journalistSprite) {
                            if (journalistSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */]) {
                                attractionStrength += 0.4;
                            }
                        });
                    }
                    cop.attractionStrength = Math.min(1, attractionStrength * this.mz.objects.player.power);

                    // find target for a cop
                    var newTarget = null;
                    var distanceToTargetSq = Infinity;
                    for (var _i5 = 0; _i5 <= this.mz.arrays.protesters.length; _i5++) {
                        var protester = _i5 === this.mz.arrays.protesters.length ? this.mz.objects.player : this.mz.arrays.protesters[_i5].mz;
                        if (!protester.sprite.alive || protester.mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["p" /* PROTESTER_MODE_ARRESTED */] || !cop.FOV.containsPoint(protester.sprite.body.center)) {
                            continue;
                        }
                        if (protester.sprite === cop.target || protester.showPoster) {
                            var distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, protester.sprite.body.center);
                            // give higher priority to current target
                            if (protester.sprite === cop.target) {
                                distanceToProtesterSq *= 3 / 4;
                            }
                            if (distanceToProtesterSq < distanceToTargetSq) {
                                newTarget = protester.sprite;
                                distanceToTargetSq = distanceToProtesterSq;
                            }
                        }
                    }
                    if (newTarget) {
                        // if theres a target in a view, pursue him
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["c" /* COP_MODE_PURSUE */], { target: newTarget });
                    } else if (cop.mode !== __WEBPACK_IMPORTED_MODULE_9__constants_js__["d" /* COP_MODE_WANDER */]) {
                        // else wander around, if not yet
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["d" /* COP_MODE_WANDER */]);
                    }
                }

                cop.update();
            }

            // protesters collision
            for (var _i6 = 0; _i6 <= this.mz.arrays.protesters.length; _i6++) {
                var protesterSprite = _i6 === this.mz.arrays.protesters.length ? this.mz.objects.player.sprite : this.mz.arrays.protesters[_i6];

                if (!protesterSprite.alive || protesterSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["p" /* PROTESTER_MODE_ARRESTED */]) {
                    continue;
                }

                var protesterBounds = protesterSprite.getBounds();

                // vs cops
                for (var j = 0; j < this.mz.arrays.cops.length; j++) {
                    var _copSprite = this.mz.arrays.cops[j];
                    if (!_copSprite.alive || _copSprite.mz.target !== protesterSprite || !Phaser.Rectangle.intersects(protesterBounds, _copSprite.getBounds())) {
                        continue;
                    }
                    this.proceedToJail(protesterSprite, _copSprite);
                }

                // vs swat
                if (this.mz.objects.swat) {
                    for (var _j = 0; _j < this.mz.objects.swat.sprites.length; _j++) {
                        var swatSprite = this.mz.objects.swat.sprites[_j];
                        if (swatSprite.children.length !== 0 || !Phaser.Rectangle.intersects(protesterBounds, swatSprite.getBounds())) {
                            continue;
                        }
                        this.arrest(protesterSprite, swatSprite);
                    }
                }

                // vs shield
                if (this.mz.gameEnded) {
                    this.game.physics.arcade.collide(protesterSprite, this.mz.objects.shield.sprite, function (protesterSprite) {
                        protesterSprite.body.collideWorldBounds = false;
                        if (protesterSprite.health === 1) {
                            _this2.beatUpProtester(protesterSprite);
                        }
                    });
                }
            }

            // player collisions
            if (this.mz.objects.player.mode !== __WEBPACK_IMPORTED_MODULE_9__constants_js__["p" /* PROTESTER_MODE_ARRESTED */]) {
                // vs posters
                this.mz.groups.droppedPosters.forEachAlive(function (posterSprite) {
                    if (Phaser.Rectangle.intersects(posterSprite.getBounds(), _this2.mz.objects.player.sprite.getBounds())) {
                        _this2.mz.objects.audio.pick.play('', 0, 0.25);
                        _this2.mz.objects.player.powerUp();
                        posterSprite.kill();
                    }
                });
            }

            // player vs borders collision
            this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.arrays.borders);

            this.mz.groups.actors.sort('y', Phaser.Group.SORT_ASCENDING);

            if (!this.mz.gameEnded) {
                this.checkWin();
            }

            // events
            if (this.mz.events.keys.esc.justUp) {
                this.game.paused = !this.game.paused;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.cameraInfo(this.game.camera, 32, 32);
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

            // this.mz.arrays.borders.forEach(sprite => {
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
            if (player.moveTarget.length && this.game.math.fuzzyEqual(player.moveTarget[0].x, coords.x, 5) && this.game.math.fuzzyEqual(player.moveTarget[0].y, coords.y, 5)) {
                player.clickSpeedUp *= player.speed.clickSpeedUp;
            } else {
                player.resetClickSpeedUp();
                player.moveTo(coords);
            }
        }
    }, {
        key: 'handleProtesterLeft',
        value: function handleProtesterLeft() {
            this.mz.protesters.left++;
        }
    }, {
        key: 'handleDropPoster',
        value: function handleDropPoster(coords) {
            this.createPoster(coords);
        }
    }, {
        key: 'handleFinishShooting',
        value: function handleFinishShooting() {
            this.mz.protesters.toRevive += this.mz.level.protesters.count.add;
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
    }, {
        key: 'updateTimer',
        value: function updateTimer() {
            this.mz.timePassed++;
            this.mz.objects.interface.updateTimer(__WEBPACK_IMPORTED_MODULE_10__utils_js__["a" /* getFormattedTime */](this.mz.level.duration - this.mz.timePassed));
        }
    }, {
        key: 'createCops',
        value: function createCops() {
            var totalCount = this.mz.level.cops.count[this.mz.level.cops.count.length - 1][1];
            this.mz.cops.alive = this.getCopsRequiredNumber();
            for (var i = 0; i < totalCount; i++) {
                var cop = new __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    alive: i < this.mz.cops.alive,
                    fov: {
                        group: this.mz.groups.copsFOV,
                        distance: this.mz.level.cops.fov.distance,
                        angle: this.mz.level.cops.fov.angle
                    },
                    speed: this.mz.level.cops.speed,
                    spriteName: 'cop' + i
                }));
                this.mz.arrays.cops.push(cop.sprite);
                this.mz.groups.actors.add(cop.sprite);

                if (i < this.mz.cops.alive) {
                    cop.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["d" /* COP_MODE_WANDER */]);
                }
            }
        }
    }, {
        key: 'reviveCops',
        value: function reviveCops(count) {
            for (var i = 0; i < count; i++) {
                var index = i + this.mz.cops.alive;
                var copSprite = this.mz.arrays.cops[index];
                copSprite.mz.revive(Boolean(index % 2));
            }
        }
    }, {
        key: 'getCopsRequiredNumber',
        value: function getCopsRequiredNumber() {
            var result = 0;
            for (var i = 0; i < this.mz.level.cops.count.length; i++) {
                if (this.mz.score <= this.mz.level.cops.count[i][0]) {
                    result = this.mz.level.cops.count[i][1];
                    break;
                }
            }
            return result;
        }
    }, {
        key: 'createProtesters',
        value: function createProtesters() {
            var count = this.mz.level.protesters.count.max;
            var onDropPoster = this.handleDropPoster.bind(this);
            var onLeft = this.handleProtesterLeft.bind(this);
            for (var i = 0; i < count; i++) {
                var protester = new __WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    group: this.mz.groups.actors,
                    speed: this.mz.level.protesters.speed,
                    spriteKey: 'protester' + this.game.rnd.between(1, 3),
                    spriteName: 'protester' + i,
                    mood: this.mz.level.protesters.mood,
                    moodUp: this.mz.level.protesters.moodUp,
                    moodDown: this.mz.level.protesters.moodDown,
                    dropPoster: this.mz.level.protesters.dropPoster,
                    onLeft: onLeft,
                    onDropPoster: onDropPoster
                }));
                this.mz.arrays.protesters.push(protester.sprite);
            }
        }
    }, {
        key: 'reviveProtester',
        value: function reviveProtester(_ref) {
            var sprite = _ref.sprite,
                mood = _ref.mood;

            var randomOffset = this.game.rnd.between(0, 100);
            sprite.mz.revive({
                x: this.game.rnd.between(0, 1) === 0 ? -100 - randomOffset : this.game.world.width + 100 + randomOffset,
                y: this.getRandomCoordinateY(),
                nextCoords: this.getRandomCoordinates(),
                mood: mood
            });

            this.mz.protesters.toRevive--;
            this.mz.protesters.revived++;
        }
    }, {
        key: 'beatUpProtester',
        value: function beatUpProtester(sprite) {
            sprite.damage(0.1);
            this.playRandomPunch();
        }
    }, {
        key: 'createPoster',
        value: function createPoster(coords) {
            var posterSprite = this.mz.groups.droppedPosters.getFirstDead(true, coords.x, coords.y, 'poster');
            posterSprite.anchor.set(0.5);
            posterSprite.rotation = this.game.rnd.sign() * Math.PI / 3;
        }
    }, {
        key: 'proceedToJail',
        value: function proceedToJail(protesterSprite, copSprite) {
            var _this3 = this;

            var closestCarCoords = null;
            var minDistanceSq = Infinity;
            this.mz.groups.cars.forEach(function (carSprite) {
                var carCoords = {
                    x: (carSprite.right + carSprite.left) / 2,
                    y: carSprite.bottom + 20
                };
                var distanceToCarSq = _this3.getDistanceSq(copSprite, carCoords);
                if (distanceToCarSq < minDistanceSq) {
                    closestCarCoords = carCoords;
                    minDistanceSq = distanceToCarSq;
                }
            });

            this.arrest(protesterSprite, copSprite);

            copSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });
        }
    }, {
        key: 'arrest',
        value: function arrest(protesterSprite, copSprite) {
            this.beatUpProtester(protesterSprite);

            copSprite.addChild(protesterSprite);

            if (protesterSprite.name === 'player') {
                this.game.camera.follow(copSprite);
            }

            protesterSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["p" /* PROTESTER_MODE_ARRESTED */], {
                x: (copSprite.body.velocity.x === 0 ? this.game.rnd.sign() : -Math.sign(copSprite.body.velocity.x)) * protesterSprite.body.halfWidth,
                y: protesterSprite.body.halfHeight
            });

            if (protesterSprite.name !== 'player') {
                this.mz.protesters.arrested++;
            }
        }
    }, {
        key: 'launchSWAT',
        value: function launchSWAT() {
            this.mz.timers.swat.stop(true);

            this.mz.objects.audio.boo.play();

            var direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';
            this.mz.objects.swat.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["v" /* SWAT_MODE_HUNT */], {
                x: direction === 'ltor' ? -100 : this.game.world.width + 100,
                y: this.getRandomCoordinateY(),
                target: {
                    x: direction === 'ltor' ? this.game.world.width + 100 : -100,
                    y: this.getRandomCoordinateY()
                }
            });
        }
    }, {
        key: 'launchShield',
        value: function launchShield() {
            this.mz.objects.shield.setMode(__WEBPACK_IMPORTED_MODULE_9__constants_js__["s" /* SHIELD_MODE_DRIVE */], {
                y: this.game.height / 2 + this.game.camera.y
            });
        }
    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (this.mz.timePassed > this.mz.level.duration) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_9__constants_js__["g" /* END_GAME_TIME_OUT */]);
            } else if (this.mz.score === 0) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_9__constants_js__["f" /* END_GAME_PROTEST_RATE */]);
            } else if (this.mz.score === 100) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_9__constants_js__["h" /* END_GAME_WIN */]);
            } else if (this.mz.objects.player.mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["p" /* PROTESTER_MODE_ARRESTED */] || !this.mz.objects.player.sprite.alive) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_9__constants_js__["e" /* END_GAME_PLAYER_KILLED */]);
            }
        }
    }, {
        key: 'endGame',
        value: function endGame(mode) {
            this.mz.gameEnded = true;

            this.mz.objects.audio.theme.fadeOut(2000);

            this.mz.objects.endMenu = new __WEBPACK_IMPORTED_MODULE_8__objects_EndMenu_js__["a" /* default */]({
                game: this.game,
                mode: mode,
                score: this.mz.objects.interface.score.group,
                stats: {
                    time: this.mz.timePassed,
                    alive: this.mz.protesters.alive,
                    arrested: this.mz.protesters.arrested,
                    revived: this.mz.protesters.revived,
                    left: this.mz.protesters.left
                }
            });

            this.game.camera.unfollow();
            this.mz.objects.interface.kill();
            this.mz.objects.timer.stop();
            this.mz.events.fieldClickHandler.kill();

            // pause
            this.game.onPause.removeAll();
            this.game.onResume.removeAll();

            // player
            this.mz.objects.player.freeze();

            this.game.input.keyboard.removeKey(Phaser.Keyboard.ESC);
            this.game.input.onDown.remove(this.handleUnpause, this);

            if (mode === __WEBPACK_IMPORTED_MODULE_9__constants_js__["h" /* END_GAME_WIN */]) {
                this.mz.objects.audio.applause.play('', 0, 0.25);
                this.mz.arrays.protesters.forEach(function (sprite) {
                    sprite.mz.moodUp(1);
                });
            } else {
                this.mz.objects.audio.boo.play();
                switch (mode) {
                    case __WEBPACK_IMPORTED_MODULE_9__constants_js__["g" /* END_GAME_TIME_OUT */]:
                        {
                            this.mz.arrays.protesters.forEach(function (sprite) {
                                sprite.mz.moodDown(1);
                            });
                            this.launchShield();
                            break;
                        }
                    case __WEBPACK_IMPORTED_MODULE_9__constants_js__["f" /* END_GAME_PROTEST_RATE */]:
                        {
                            this.launchShield();
                            break;
                        }
                    case __WEBPACK_IMPORTED_MODULE_9__constants_js__["e" /* END_GAME_PLAYER_KILLED */]:
                        {
                            break;
                        }
                }
            }
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
        key: 'getDistanceSq',
        value: function getDistanceSq(obj1, obj2) {
            return this.game.math.distanceSq(obj1.x, obj1.y, obj2.x, obj2.y);
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
            return this.game.math.clamp(this.game.world.randomX, __WEBPACK_IMPORTED_MODULE_9__constants_js__["i" /* FIELD_OFFSET */].left, this.game.world.width - __WEBPACK_IMPORTED_MODULE_9__constants_js__["i" /* FIELD_OFFSET */].right);
        }
    }, {
        key: 'getRandomCoordinateY',
        value: function getRandomCoordinateY() {
            return this.game.math.clamp(this.game.world.randomY, __WEBPACK_IMPORTED_MODULE_9__constants_js__["i" /* FIELD_OFFSET */].top, this.game.world.height - __WEBPACK_IMPORTED_MODULE_9__constants_js__["i" /* FIELD_OFFSET */].bottom);
        }
    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(13);
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
            staminaCooldown = _ref.staminaCooldown,
            powerUp = _ref.powerUp,
            powerDown = _ref.powerDown,
            onDropPoster = _ref.onDropPoster;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, {
            game: game,
            x: x,
            y: y,
            speed: speed,
            spriteKey: 'player',
            spriteName: 'player',
            onDropPoster: onDropPoster
        }));

        _this.sprite.inputEnabled = true;
        _this.sprite.input.priorityID = 1;

        _this.sprite.body.collideWorldBounds = true;

        _this.power = 1;
        _this.powerUpValue = powerUp;
        _this.powerDownValue = powerDown;
        _this.powerTimer = _this.game.time.create(false);
        _this.powerTimer.loop(2000, _this.powerDown, _this);
        _this.powerTimer.start();

        _this.cheering = cheering;

        _this.stamina = stamina;
        _this.maxStamina = stamina;
        _this.cooldownTimer = _this.game.time.create(false);
        _this.staminaCooldown = staminaCooldown * 1000;

        _this.clickSpeedUp = null;
        _this.resetClickSpeedUp();

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.audioScream = _this.game.add.audio('scream03');

        _this.showPoster = false;
        _this.isFrozen = false;

        _this.radius = {
            initial: radius,
            graphic: 0,
            actual: 0,
            actualSq: 0,
            tween: {}
        };
        _this.resetRadius();

        _this.circleGraphics = _this.game.add.graphics(0, 0);
        fovGroup.add(_this.circleGraphics);

        // events
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

            this.resetRadius();

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this);

            this.circleGraphics.clear();

            if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["p" /* PROTESTER_MODE_ARRESTED */] || this.isFrozen) {
                this.updateProgressBar(0);
                return;
            }

            this.circleGraphics.lineStyle(1, 0x33ff33, 1);
            this.circleGraphics.drawCircle(this.sprite.x, this.sprite.y, this.radius.graphic * 2);

            var newSpeed = this.speed.value;
            newSpeed *= this.clickSpeedUp;

            var areMovingKeysDown = this.keys.up.isDown || this.keys.down.isDown || this.keys.left.isDown || this.keys.right.isDown;

            if (!this.cooldownTimer.running) {
                if (areMovingKeysDown && this.keys.shift.isDown) {
                    if (this.stamina > 0) {
                        this.stamina -= 1;
                        newSpeed *= this.speed.running;
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
                newSpeed *= this.speed.withPoster;
            }

            this.setSpeed(newSpeed);

            if (areMovingKeysDown) {
                this.moveTo(null);
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
                this.stop();
            }

            if (this.keys.space.justDown) {
                this.togglePoster();
            }
        }
    }, {
        key: 'handleGameResume',
        value: function handleGameResume() {
            this.moveTo(null);
        }
    }, {
        key: 'handleClickOnSelf',
        value: function handleClickOnSelf() {
            if (this.moveTarget.length) {
                this.moveTo(null);
            } else {
                this.togglePoster();
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["p" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        this.togglePoster(false);

                        this.sprite.body.collideWorldBounds = false;

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
                this.audioScream.play('', 0, 0.1);
            }

            this.showPoster = on;
        }
    }, {
        key: 'powerUp',
        value: function powerUp() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.powerUpValue;

            if (value !== 0) {
                this.powerChange(value);
            }
        }
    }, {
        key: 'powerDown',
        value: function powerDown() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.powerDownValue;

            var power = Math.max(1, this.power - value);
            if (power !== this.power) {
                this.powerChange(-value);
            }
        }
    }, {
        key: 'powerChange',
        value: function powerChange(value) {
            this.power += value;

            this.posterSprite.scale.set(this.power);
        }
    }, {
        key: 'resetClickSpeedUp',
        value: function resetClickSpeedUp() {
            this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;
        }
    }, {
        key: 'resetRadius',
        value: function resetRadius() {
            var newRadius = this.showPoster ? this.radius.initial : 0;
            newRadius *= this.power;

            if (newRadius === this.radius.actual) {
                return;
            }

            if (this.radius.tween.isRunning) {
                this.radius.tween.stop();
            }

            if (this.game.math.fuzzyEqual(newRadius, this.radius.graphic, 1)) {
                this.radius.graphic = newRadius;
            } else {
                this.radius.tween = this.game.add.tween(this.radius);
                this.radius.tween.to({ graphic: newRadius }, 500, Phaser.Easing.Exponential.Out);
                this.radius.tween.start();
            }

            this.radius.actual = newRadius;
            this.radius.actualSq = Math.pow(this.radius.actual, 2);
        }
    }, {
        key: 'freeze',
        value: function freeze() {
            if (this.sprite.alive) {
                this.moveTo(null);
            }

            this.isFrozen = true;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.game.onResume.removeAll();
            this.powerTimer.stop(true);

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'kill', this).call(this);
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
            moodUp = _ref.moodUp,
            dropPoster = _ref.dropPoster,
            onLeft = _ref.onLeft,
            onDropPoster = _ref.onDropPoster;

        _classCallCheck(this, NPCProtester);

        var _this = _possibleConstructorReturn(this, (NPCProtester.__proto__ || Object.getPrototypeOf(NPCProtester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey, spriteName: spriteName, onDropPoster: onDropPoster }));

        _this.group = group;
        _this.group.add(_this.sprite);

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.leavingTimer = _this.game.time.create(false);

        _this.mood = mood;
        _this.initialMood = mood;
        _this.moodUpValue = moodUp;
        _this.moodDownValue = moodDown;

        _this.dropPoster = dropPoster;

        _this.isBeingCheeredUp = false;

        _this.onLeft = onLeft;

        // initially dead
        _this.kill();
        return _this;
    }

    _createClass(NPCProtester, [{
        key: 'update',
        value: function update() {
            if (this.mood === 0 && !this.leavingTimer.running && this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */]) {
                this.leavingTimer.add(this.game.rnd.between(1000, 5000), this.leave, this);
                this.leavingTimer.start();
            } else if (this.mood > 0 && this.leavingTimer.running) {
                this.leavingTimer.stop(true);
            }
            if (this.mood > 0 && this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["q" /* PROTESTER_MODE_LEAVE */]) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */]);
            }

            if (this.isBeingCheeredUp) {
                this.updateProgressBar(this.mood);
                this.moodUp(this.moodUpValue);
            } else if (this.mood < 0.75) {
                this.moodDown(this.moodDownValue);
                this.updateProgressBar(0);
            }

            this.showPoster = this.mode !== __WEBPACK_IMPORTED_MODULE_1__constants_js__["p" /* PROTESTER_MODE_ARRESTED */] && this.mood >= 0.75;

            this.sprite.tint = 0xffffff;
            if (this.mood >= 0.75) {
                var tintSaturation = (this.mood - 0.75) / (1 - 0.75) * 0.25;
                this.sprite.tint = Phaser.Color.RGBArrayToHex([1 - tintSaturation, 1, 1 - tintSaturation]);
            } else if (this.mood <= 0.25) {
                var _tintSaturation = (1 - this.mood / 0.25) * 0.25;
                this.sprite.tint = Phaser.Color.RGBArrayToHex([1, 1 - _tintSaturation, 1 - _tintSaturation]);
            }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'update', this).call(this);
        }
    }, {
        key: 'handleLeft',
        value: function handleLeft() {
            this.onLeft();
            this.kill();
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */]:
                    {
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["q" /* PROTESTER_MODE_LEAVE */]) {
                            this.moveTo(null);
                        }

                        var coords = props.coords;

                        if (coords) {
                            this.moveTo(_extends({}, coords, {
                                callback: this.wander.bind(this)
                            }));
                        } else {
                            this.wander();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["p" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }

                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["q" /* PROTESTER_MODE_LEAVE */]:
                    {
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }

                        this.moveTo({
                            x: this.sprite.x < this.game.world.width / 2 ? -100 : this.game.world.width + 100,
                            y: this.sprite.y,
                            callback: this.handleLeft.bind(this)
                        });

                        break;
                    }
            }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'setMode', this).call(this, mode, props);
        }
    }, {
        key: 'wander',
        value: function wander() {
            var nextAction = this.game.rnd.between(0, 10);
            if (nextAction === 0) {
                this.moveTo(_extends({}, this.getNextCoords(), {
                    callback: this.wander.bind(this)
                }));
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'leave',
        value: function leave() {
            this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["q" /* PROTESTER_MODE_LEAVE */]);
            this.leavingTimer.stop(true);
        }
    }, {
        key: 'toggleCheering',
        value: function toggleCheering() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.isBeingCheeredUp;

            if (on === this.isBeingCheeredUp) {
                return;
            }

            this.isBeingCheeredUp = on;
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

            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.body.reset(x, y);

            this.posterSprite.revive();

            this.mood = mood;

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'revive', this).call(this);

            this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants_js__["r" /* PROTESTER_MODE_WANDER */], { coords: nextCoords });
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Cop = function (_Prefab) {
    _inherits(Cop, _Prefab);

    function Cop(_ref) {
        var game = _ref.game,
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            alive = _ref.alive,
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

        if (!alive) {
            _this.kill();
        }
        return _this;
    }

    _createClass(Cop, [{
        key: 'update',
        value: function update() {
            var newSpeed = this.speed.value;
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_PURSUE */] || this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */]) {
                newSpeed *= this.speed.running;
            }
            this.setSpeed(newSpeed);

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'update', this).call(this);

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_PURSUE */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["j" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["k" /* FOV_MODE_NORMAL */]
            });
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var _this2 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_WANDER */]:
                    {
                        var coords = props.coords;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_PURSUE */]) {
                            this.target = null;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]) {
                            this.target = null;
                            this.returnCoords = null;
                            this.FOV.revive();
                        }
                        if (coords) {
                            this.moveTo(_extends({}, coords, {
                                callback: this.wander.bind(this)
                            }));
                        } else {
                            this.wander();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_PURSUE */]:
                    {
                        var target = props.target;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.target = target;
                        this.moveTo(target);
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]:
                    {
                        var jailCoords = props.jailCoords;

                        this.FOV.kill();
                        this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                        this.moveTo(_extends({}, jailCoords, {
                            callback: this.handleCovoyEnd.bind(this)
                        }));
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */]:
                    {
                        var _coords = props.coords;

                        this.moveTo(_coords[0]);
                        this.addMoveTarget(_extends({}, _coords[1], {
                            callback: function callback() {
                                _this2.FOV.revive();
                                _this2.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_WANDER */]);
                            }
                        }));
                        break;
                    }
            }

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'handleCovoyEnd',
        value: function handleCovoyEnd() {
            for (var i = 0; i < this.sprite.children.length; i++) {
                this.sprite.getChildAt(i).mz.kill();
            }

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_WANDER */], { coords: this.returnCoords });
        }
    }, {
        key: 'wander',
        value: function wander() {
            var nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.moveTo(_extends({}, this.getNextCoords(), {
                    callback: this.wander.bind(this)
                }));
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
        key: 'revive',
        value: function revive(rtl) {
            var offset = this.game.rnd.between(50, 200);
            var x = rtl ? -offset : this.game.world.width + offset;
            var y = 110;
            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.body.reset(x, y);

            var entranceX = this.game.rnd.between(1, Math.floor(this.game.world.width / 100) - 1) * 100;
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */], {
                coords: [{ x: entranceX, y: y }, { x: entranceX, y: y + this.sprite.height }]
            });

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'revive', this).call(this);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.target = null;

            this.stopWandering();
            this.FOV.kill();

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'kill', this).call(this);
        }
    }]);

    return Cop;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Cop);

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
            onFinishShooting = _ref.onFinishShooting;

        _classCallCheck(this, Journalist);

        var _this = _possibleConstructorReturn(this, (Journalist.__proto__ || Object.getPrototypeOf(Journalist)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'journalist' }));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: (_colors = {}, _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["k" /* FOV_MODE_NORMAL */], 0xdddddd), _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["j" /* FOV_MODE_CAPTURE */], 0xffffff), _colors)
        });
        fov.group.add(_this.FOV.graphics);

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.shootingTimer = _this.game.time.create(false);
        _this.shootingDuration = shootingDuration * 1000;

        _this.cooldownTimer = _this.game.time.create(false);
        _this.cooldownDuration = cooldownDuration * 1000;

        _this.onFinishShooting = onFinishShooting;

        _this.target = null;
        return _this;
    }

    _createClass(Journalist, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */]) {
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
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["j" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["k" /* FOV_MODE_NORMAL */]
            });

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* JOURNALIST_MODE_WANDER */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */]) {
                            this.target = null;
                            this.shootingTimer.stop(true);
                        }
                        this.wander();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */]:
                    {
                        var target = props.target;

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* JOURNALIST_MODE_SHOOTING */] && this.target === target) {
                            break;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
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
            var nextAction = this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.moveTo(_extends({}, this.getNextCoords(), {
                    callback: this.wander.bind(this)
                }));
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
            this.onFinishShooting();

            this.FOV.kill();

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* JOURNALIST_MODE_WANDER */]);

            this.shootingTimer.stop(true);
            this.cooldownTimer.add(this.cooldownDuration, this.cooldownTimerCallback, this);
            this.cooldownTimer.start();
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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(13);
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

        this.mode = __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* SWAT_MODE_HIDE */];
        this.moveTarget = null;
        this.updateIndex = 0;

        this.sprites = [];
        for (var i = 0; i < count; i++) {
            var swatSprite = this.game.add.sprite(-100, -100, 'swat', 0);
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
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["v" /* SWAT_MODE_HUNT */]) {
                var lastSprite = this.sprites[this.sprites.length - 1];

                if (this.game.math.fuzzyEqual(this.game.math.distanceSq(lastSprite.x, lastSprite.y, this.moveTarget.x, this.moveTarget.y), 0, lastSprite.width)) {
                    this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* SWAT_MODE_HIDE */]);
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
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* SWAT_MODE_HIDE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["v" /* SWAT_MODE_HUNT */]) {
                            for (var i = 0; i < this.sprites.length; i++) {
                                for (var j = 0; j < this.sprites[i].children.length; j++) {
                                    this.sprites[i].getChildAt(j).mz.kill();
                                }
                                this.sprites[i].removeChildren();
                                this.sprites[i].visible = false;
                                this.sprites[i].body.stop();
                            }
                            this.updateIndex = 0;
                            this.moveTarget = null;
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["v" /* SWAT_MODE_HUNT */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* SWAT_MODE_HIDE */]) {
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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DIR = {
    ltr: 'ltr',
    rtl: 'rtl'
};

var Shield = function () {
    function Shield(_ref) {
        var game = _ref.game,
            speed = _ref.speed;

        _classCallCheck(this, Shield);

        this.game = game;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.mode = __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* SHIELD_MODE_HIDE */];

        this.sprite = this.game.add.sprite(this.game.world.width * 2, this.game.world.height / 2 + this.game.camera.y, 'shield');
        this.sprite.anchor.set(0.5);
        this.sprite.exist = false;

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;

        this.direction = DIR.rtl;

        this.audio = this.game.add.audio('truck');
    }

    _createClass(Shield, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* SHIELD_MODE_DRIVE */]) {
                if (this.direction === DIR.ltr && this.sprite.x >= this.game.world.width + this.sprite.width || this.direction === DIR.rtl && this.sprite.x <= -this.sprite.width) {
                    this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* SHIELD_MODE_HIDE */]);
                }
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* SHIELD_MODE_HIDE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* SHIELD_MODE_DRIVE */]) {
                            // change direction for the next ride
                            this.direction = this.direction === DIR.ltr ? DIR.rtl : DIR.ltr;

                            this.sprite.kill();
                            this.sprite.body.stop();

                            this.audio.stop();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* SHIELD_MODE_DRIVE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* SHIELD_MODE_HIDE */]) {
                            var y = props.y;

                            this.sprite.x = this.direction === DIR.ltr ? -this.game.world.width : this.game.world.width * 2;
                            this.sprite.y = y;
                            this.sprite.body.velocity.x = this.speed.current * (this.direction === DIR.ltr ? 1 : -1);
                            this.sprite.scale.x = this.sprite.scale.y * (this.direction === DIR.ltr ? -1 : 1);

                            this.audio.loopFull(0.25);
                            this.game.camera.shake(0.005, 3000);
                        }
                        break;
                    }
            }

            this.mode = mode;
        }
    }]);

    return Shield;
}();

/* harmony default export */ __webpack_exports__["a"] = (Shield);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_ScoreMeter_js__ = __webpack_require__(345);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GameInterface = function () {
    function GameInterface(_ref) {
        var game = _ref.game,
            onTogglePoster = _ref.onTogglePoster;

        _classCallCheck(this, GameInterface);

        this.game = game;
        this.onTogglePoster = onTogglePoster;

        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        this.score = new __WEBPACK_IMPORTED_MODULE_0__objects_ScoreMeter_js__["a" /* default */]({
            game: this.game,
            x: this.game.width / 2,
            y: this.game.height - 20,
            width: 300
        });
        this.group.add(this.score.group);

        this.textTimer = this.game.add.text(this.game.width - 20, 20, '', {
            font: '25px Arial',
            fill: '#fff'
        });
        this.textTimer.anchor.set(1, 0);
        this.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);
        this.group.add(this.textTimer);

        this.buttonSound = this.game.add.button(0, 0, 'soundButtons', this.handleClickSound, this, 1, 1, 1, 1, this.group);

        if (Phaser.Device.touch) {
            this.buttonPoster = this.game.add.button(20, this.game.height - 20, 'posterButton', this.handleTogglePoster, this, 1, 1, 1, 1, this.group);
            this.buttonPoster.anchor.set(0, 1);
            this.buttonPoster.input.priorityID = 2;
        }
    }

    _createClass(GameInterface, [{
        key: 'update',
        value: function update(_ref2) {
            var score = _ref2.score,
                protestersAlive = _ref2.protestersAlive,
                protestersTotal = _ref2.protestersTotal,
                meanMood = _ref2.meanMood;

            this.buttonSound.frame = this.game.sound.mute ? 1 : 0;

            this.score.update({
                score: score,
                protestersAlive: protestersAlive,
                protestersTotal: protestersTotal,
                mood: 100 * meanMood
            });
        }
    }, {
        key: 'updateTimer',
        value: function updateTimer(time) {
            this.textTimer.setText(time);
        }
    }, {
        key: 'handleClickSound',
        value: function handleClickSound() {
            this.game.sound.mute = !this.game.sound.mute;
        }
    }, {
        key: 'handleTogglePoster',
        value: function handleTogglePoster() {
            this.onTogglePoster();
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.group.killAll();
        }
    }]);

    return GameInterface;
}();

/* harmony default export */ __webpack_exports__["a"] = (GameInterface);

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoreMeter = function () {
    function ScoreMeter(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width;

        _classCallCheck(this, ScoreMeter);

        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.width = width;

        this.scoreMeter = this.game.add.graphics();
        this.group.add(this.scoreMeter);

        this.moodMeter = this.game.add.graphics();
        this.group.add(this.moodMeter);

        this.aliveMeter = this.game.add.graphics();
        this.group.add(this.aliveMeter);

        this.label = this.game.add.text(-this.width / 2 + 20, -8, this.game.mz.i18n.getTranslation('Protest meter'), {
            font: '12px Arial',
            fill: '#000',
            align: 'right'
        });
        this.group.add(this.label);

        // this.moodNumber = this.game.add.text(
        //     this.width / 2 - 5,
        //     7,
        //     '0',
        //     {
        //         font: '10px Arial',
        //         fill: '#000'
        //     }
        // );
        // this.moodNumber.anchor.set(1, 0);
        // this.group.add(this.moodNumber);
        //
        // this.aliveNumber = this.game.add.text(
        //     -5,
        //     7,
        //     '0',
        //     {
        //         font: '10px Arial',
        //         fill: '#000'
        //     }
        // );
        // this.aliveNumber.anchor.set(1, 0);
        // this.group.add(this.aliveNumber);
    }

    _createClass(ScoreMeter, [{
        key: 'update',
        value: function update(_ref2) {
            var score = _ref2.score,
                mood = _ref2.mood,
                protestersAlive = _ref2.protestersAlive,
                protestersTotal = _ref2.protestersTotal;

            this.updateScoreMeter(score);
            this.updateAliveMeter(protestersAlive, protestersTotal);
            this.updateMoodMeter(mood);
        }
    }, {
        key: 'updateScoreMeter',
        value: function updateScoreMeter(value) {
            this.updateMeter({
                graphics: this.scoreMeter,
                value: value,
                width: this.width,
                height: 16,
                x: -this.width / 2,
                y: 0,
                colorThreshold: 30
            });
        }
    }, {
        key: 'updateAliveMeter',
        value: function updateAliveMeter(protestersAlive, protestersTotal) {
            this.updateMeter({
                graphics: this.aliveMeter,
                value: 100 * protestersAlive / protestersTotal,
                width: this.width / 2 - 1,
                height: 6,
                x: -this.width / 2,
                y: 13,
                colorThreshold: 50
            });

            // this.aliveNumber.setText(`${protestersAlive} / ${protestersTotal}`);
        }
    }, {
        key: 'updateMoodMeter',
        value: function updateMoodMeter(value) {
            this.updateMeter({
                graphics: this.moodMeter,
                value: value,
                width: this.width / 2 - 1,
                height: 6,
                x: 1,
                y: 13,
                colorThreshold: 50
            });

            // this.moodNumber.setText(Math.round(value));
        }
    }, {
        key: 'updateMeter',
        value: function updateMeter(_ref3) {
            var graphics = _ref3.graphics,
                value = _ref3.value,
                width = _ref3.width,
                height = _ref3.height,
                x = _ref3.x,
                y = _ref3.y,
                colorThreshold = _ref3.colorThreshold;

            graphics.clear();

            var color = Phaser.Color.RGBArrayToHex([this.game.math.clamp(1 + (colorThreshold - value) / (100 - colorThreshold), 0, 1), this.game.math.clamp(value / colorThreshold, 0, 1), 0]);

            graphics.lineStyle(height, 0xffffff, 0.9);
            graphics.moveTo(x, y);
            graphics.lineTo(x + width, y);

            graphics.lineStyle(height, color, 1);
            graphics.moveTo(x, y);
            graphics.lineTo(x + Math.round(width * value / 100), y);
        }
    }]);

    return ScoreMeter;
}();

/* harmony default export */ __webpack_exports__["a"] = (ScoreMeter);

/***/ }),

/***/ 346:
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

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();

        this.title = this.game.add.text(this.game.width / 2, 2 / 3 * this.game.height / 2, this.game.mz.i18n.getTranslation('Pause'));
        this.title.anchor.setTo(0.5);

        this.replayButton = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'playButton');
        this.replayButton.anchor.setTo(0.5);

        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.title);
        this.sprite.addChild(this.replayButton);
        this.sprite.fixedToCamera = true;

        this.kill();
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(128);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var STRIPE_HEIGHT = 100;
var STRIPE_DURATION = 1500;
var OVERLAY_DURATION = 3000;

var EndMenu = function () {
    function EndMenu(_ref) {
        var game = _ref.game,
            mode = _ref.mode,
            score = _ref.score,
            stats = _ref.stats;

        _classCallCheck(this, EndMenu);

        this.game = game;
        this.mode = mode;
        this.stats = stats;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.fixedToCamera = true;

        this.topStripe = this.game.add.graphics(0, 0);
        this.topStripe.beginFill(0);
        this.topStripe.drawRect(0, -STRIPE_HEIGHT, this.game.width, STRIPE_HEIGHT);
        this.topStripe.endFill();

        var stripesTween = this.game.add.tween(this.topStripe).to({ top: STRIPE_HEIGHT }, STRIPE_DURATION).start();
        stripesTween.onComplete.addOnce(this.handleTweenComplete, this);

        this.bottomStripe = this.game.add.graphics(0, 0);
        this.bottomStripe.beginFill(0);
        this.bottomStripe.drawRect(0, this.game.height, this.game.width, this.game.height + STRIPE_HEIGHT);
        this.bottomStripe.endFill();
        this.game.add.tween(this.bottomStripe).to({ top: -STRIPE_HEIGHT }, STRIPE_DURATION).start();

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();
        this.overlay.alpha = 0;
        var overlayTween = this.game.add.tween(this.overlay).to({ alpha: 0.5 }, OVERLAY_DURATION).start();
        overlayTween.onComplete.addOnce(this.showStats, this);

        this.replayButton = this.game.add.button(this.game.width - 50, 50, 'repeatButton', this.handleClickPlay, this);
        this.replayButton.anchor.setTo(0.5);
        this.replayButton.visible = false;

        this.sprite.addChild(this.topStripe);
        this.sprite.addChild(this.bottomStripe);
        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.replayButton);
        this.sprite.addChild(score);
    }

    _createClass(EndMenu, [{
        key: 'handleTweenComplete',
        value: function handleTweenComplete() {
            this.replayButton.visible = true;
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay() {
            this.game.state.start('StartMenu');
        }
    }, {
        key: 'showStats',
        value: function showStats() {
            var _this = this;

            var titleText = '';
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["h" /* END_GAME_WIN */]) {
                titleText = 'You did it!';
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* END_GAME_PLAYER_KILLED */]) {
                titleText = 'They turned you in, pal';
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["g" /* END_GAME_TIME_OUT */]) {
                titleText = 'Time is out!';
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* END_GAME_PROTEST_RATE */]) {
                titleText = 'You let the protest fail :(';
            }

            var title = this.game.add.text(40, 40, this.game.mz.i18n.getTranslation(titleText), {
                font: '24px Arial',
                fill: this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["h" /* END_GAME_WIN */] ? '#393' : '#933'
            });
            this.sprite.addChild(title);

            var stats = [['Total protesters:', this.stats.revived], ['Active:', this.stats.alive], ['Arrested:', this.stats.arrested], ['Left home:', this.stats.left]];

            if (this.mode !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["g" /* END_GAME_TIME_OUT */]) {
                stats.unshift(['Your time:', String(__WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* getFormattedTime */](this.stats.time))]);
            }

            stats.forEach(function (args, i) {
                _this.renderStat.apply(_this, [i * 40 + 100].concat(_toConsumableArray(args)));
            });
        }
    }, {
        key: 'renderStat',
        value: function renderStat(y, text, value) {
            var label = this.game.add.text(40, y, this.game.mz.i18n.getTranslation(text), {
                font: '24px Arial',
                fill: '#fff'
            });
            this.sprite.addChild(label);

            var valueText = this.game.add.text(300, y, String(value), {
                font: '24px Arial',
                fill: '#fff'
            });
            this.sprite.addChild(valueText);
        }
    }]);

    return EndMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (EndMenu);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Prefab = function () {
    function Prefab(_ref) {
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
        this.sprite.body.reset(this.sprite.x, this.sprite.y);

        this.stayingTimer = this.game.time.create(false);

        this.mode = null;
        this.moveTarget = [];
    }

    _createClass(Prefab, [{
        key: 'update',
        value: function update() {
            if (this.moveTarget.length) {
                var _moveTarget$ = this.moveTarget[0],
                    x = _moveTarget$.x,
                    y = _moveTarget$.y,
                    callback = _moveTarget$.callback;

                if (this.game.math.fuzzyEqual(x, this.sprite.body.center.x, 1) && this.game.math.fuzzyEqual(y, this.sprite.body.center.y, 1)) {
                    // stop and call callback
                    this.stop();

                    // go to next target
                    this.moveTarget.shift();
                    if (this.moveTarget.length) {
                        this.setVelocity(this.moveTarget[0]);
                    }

                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            this.mode = mode;
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(value) {
            if (this.speed.current === value) {
                return;
            }
            this.speed.current = value;

            // update velocity
            if (this.moveTarget.length) {
                this.setVelocity(this.moveTarget[0]);
            }
        }
    }, {
        key: 'setVelocity',
        value: function setVelocity(target) {
            var rotationToTarget = this.game.math.angleBetweenPoints(this.sprite.body.center, target);
            this.game.physics.arcade.velocityFromRotation(rotationToTarget, this.speed.current, this.sprite.body.velocity);
        }
    }, {
        key: 'moveTo',
        value: function moveTo(target) {
            if (target) {
                this.moveTarget = [{
                    x: target.x,
                    y: target.y,
                    callback: target.callback
                }];
                this.setVelocity(target);
            } else {
                this.stop();
                this.moveTarget = [];
            }
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords(bounds) {
            var directions = [];
            if (!bounds) {
                bounds = {
                    top: this.sprite.y - this.sprite.top + __WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* FIELD_OFFSET */].top,
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
        key: 'addMoveTarget',
        value: function addMoveTarget(target) {
            if (!this.moveTarget.length) {
                this.moveTo(target);
            } else {
                this.moveTarget.push(target);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.sprite.body.stop();
        }
    }, {
        key: 'stopWandering',
        value: function stopWandering() {
            this.moveTo(null);
            this.stayingTimer.stop(true);
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.sprite.revive(1);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.mode = null;
            this.moveTo(null);

            this.sprite.kill();
        }
    }]);

    return Prefab;
}();

/* harmony default export */ __webpack_exports__["a"] = (Prefab);

/***/ })

/******/ });