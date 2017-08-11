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
/******/ 	return __webpack_require__(__webpack_require__.s = 301);
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
        url: __webpack_require__(303),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'level02',
        url: __webpack_require__(304),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'buttons',
        url: __webpack_require__(305),
        frameWidth: 100,
        frameHeight: 100
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
        url: __webpack_require__(306),
        frameWidth: 62,
        frameHeight: 94
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(118),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(119),
        frameWidth: 60,
        frameHeight: 92
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(120),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(121),
        frameWidth: 60,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(122),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(123),
        frameWidth: 120,
        frameHeight: 142
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(307),
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
        url: __webpack_require__(308),
        frameWidth: 88,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'journalist',
        url: __webpack_require__(118),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(119),
        frameWidth: 60,
        frameHeight: 92
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(120),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(121),
        frameWidth: 60,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(122),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(123),
        frameWidth: 120,
        frameHeight: 142
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(309),
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

module.exports = __webpack_require__.p + "assets/85912d63e15bd0a260defd481c4d917e.png";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5d93c76a90d1610418d01050cfd0eb4d.png";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/33c5c53c054b4c33222f241dc2e47d50.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/53a52f18f16a2791169f5f2b8fc2139d.png";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/95ed17c814a40ec7eea84ee109fa6207.png";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d24af22e7dae1337a8cc1ffe5e7b1aa4.png";

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
            props = _objectWithoutProperties(_ref, ['game', 'x', 'y', 'speed', 'spriteKey']);

        _classCallCheck(this, Protester);

        var _this = _possibleConstructorReturn(this, (Protester.__proto__ || Object.getPrototypeOf(Protester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey, props: props }));

        _this.sprite.inputEnabled = true;
        _this.sprite.input.priorityID = 1;

        _this.posterSprite = _this.sprite.addChild(_this.game.make.sprite(-80, -120, 'poster', 0));
        _this.posterSprite.bringToTop();
        _this.posterSprite.exists = false;

        _this.showPoster = false;
        return _this;
    }

    _createClass(Protester, [{
        key: 'update',
        value: function update() {
            this.posterSprite.exists = this.showPoster;

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'update', this).call(this);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_WANDER */]:
                    {
                        this.wander();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        var jailCoords = props.jailCoords,
                            speed = props.speed;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["i" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.togglePoster(false);
                        this.speed.current = speed;
                        this.setMoveTarget(jailCoords);
                        break;
                    }
            }

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'wander',
        value: function wander() {
            this.sprite.body.onMoveComplete.remove(this.wander, this);
            var activity = this.props.activity;

            var nextAction = this.game.rnd.between(0, activity);
            if (nextAction === 0) {
                this.sprite.body.onMoveComplete.add(this.wander, this);
                this.togglePoster(false);
                this.setMoveTarget(this.getNextCoords());
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
                this.stayingTimer.start();

                this.togglePoster(nextAction < activity / 2.5);
            }
        }
    }, {
        key: 'togglePoster',
        value: function togglePoster() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPoster;

            this.showPoster = on;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.stopWandering();

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'kill', this).call(this);
        }
    }]);

    return Protester;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Protester);

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(44);
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
            var distance = Phaser.Point.distance(this.center, { x: x, y: y });
            if (distance > this.radius) {
                return false;
            }
            var angle = Phaser.Point.angle({ x: x, y: y }, this.center);

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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_EndMenu_js__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_Game_js__ = __webpack_require__(314);






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

/***/ 302:
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

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f92bc2f5d7aa8c5e8ccf000dd5f2268c.jpg";

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c7118db4b46452ebb66ca9f1f72e7d53.jpg";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/121104892eaea3f65969e7beb7d9f45f.png";

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f0898c0eb2cb50754fc66aa5edf79983.png";

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7780fada5b5def9a73f068e7dee87e98.jpg";

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b5628f192689135fb9661a6eb8c1977a.png";

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a1a7aca8cdcabb0b6f29774a2b1eb971.jpg";

/***/ }),

/***/ 310:
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(312);
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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 2 * 60, // s
        winningScore: 60,
        cops: {
            count: 3,
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
            count: 3,
            speed: {
                value: 50
            },
            fov: {
                distance: 200,
                angle: 150
            },
            duration: 5, // s
            points: 20
        },
        protesters: {
            count: 30,
            speed: {
                value: 60
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            stamina: 100,
            staminaCooldown: 5 // s
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningScore: 100,
        cops: {
            count: 5,
            speed: {
                value: 60,
                running: 1.7
            },
            fov: {
                distance: 200,
                angle: 120
            }
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
            duration: 7, //
            points: 20
        },
        protesters: {
            count: 30,
            speed: {
                value: 60
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            stamina: 200,
            staminaCooldown: 5 // s
        }
    }
});

/***/ }),

/***/ 313:
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

            this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, this.mz.config.win ? 'Вы победили!' : 'Вас посадили :(');
            this.title.anchor.setTo(0.5);

            this.score = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY + 31, '\u0412\u0430\u0448 \u0441\u0447\u0435\u0442: ' + this.mz.config.score);
            this.score.anchor.setTo(0.5);

            this.replayButton = this.game.add.button(this.world.centerX, this.world.centerY, 'buttons', this.handleClickPlay, this);
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

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Protester_js__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__(44);
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
                score: 0,
                timePassed: 0, // s
                eventHandler: null,
                map: null,
                objects: {
                    player: null,
                    textScore: null,
                    bgTile: null
                },
                groups: {
                    cars: null,
                    protesters: null,
                    cops: null,
                    copsFOV: null,
                    press: null,
                    pressFOV: null,
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

            // this.mz.map = this.game.add.tilemap('tilemap', 50, 50);

            // FOVs should always be below everything
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

            this.mz.groups.press = this.game.add.group();
            this.mz.groups.cops = this.game.add.group();
            this.mz.groups.obstacles = this.game.add.group();

            for (var _i2 = 0; _i2 < this.mz.level.cops.count; _i2++) {
                var cop = new __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    fov: {
                        group: this.mz.groups.copsFOV,
                        distance: this.mz.level.cops.fov.distance,
                        angle: this.mz.level.cops.fov.angle
                    },
                    speed: this.mz.level.cops.speed
                }));
                this.mz.groups.cops.add(cop.sprite);
                cop.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["c" /* COP_MODE_WANDER */]);
            }

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
                    duration: this.mz.level.press.duration,
                    points: this.mz.level.press.points,
                    onFinishShooting: this.handleFinishShooting,
                    callbackContext: this
                }));
                this.mz.groups.press.add(journalist.sprite);
                journalist.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);
            }

            this.mz.groups.protesters = this.game.add.group();
            for (var _i4 = 0; _i4 < this.mz.level.protesters.count; _i4++) {
                var protester = new __WEBPACK_IMPORTED_MODULE_1__objects_Protester_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    speed: this.mz.level.protesters.speed,
                    spriteKey: 'protester' + this.game.rnd.between(1, 3),
                    activity: this.game.rnd.between(10, 20)
                }));
                this.mz.groups.protesters.add(protester.sprite);
                protester.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["i" /* PROTESTER_MODE_WANDER */]);
            }

            this.mz.objects.player = new __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */](_extends({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY
            }, this.mz.level.player));
            this.game.camera.follow(this.mz.objects.player.sprite);
            this.mz.objects.player.sprite.events.onKilled.addOnce(this.handlePlayerKill, this);

            // bottom borders
            for (var _i5 = 0; _i5 < this.game.world.width; _i5 += 100) {
                var _borderSprite = this.game.add.sprite(_i5, this.game.world.height - 50, 'border');
                _borderSprite.scale.set(0.25);
            }

            this.mz.groups.menu = this.game.add.group();
            this.mz.groups.menu.fixedToCamera = true;
            this.mz.objects.textScore = this.game.add.text(this.game.width - 10, 20, '', {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textScore.anchor.set(1, 0.5);
            this.mz.objects.textScore.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
            this.mz.groups.menu.add(this.mz.objects.textScore);

            var timer = this.game.time.create();
            timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
            timer.start();

            this.mz.objects.textTimer = this.game.add.text(this.game.width - 10, 60, '', {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textTimer.anchor.set(1, 0.5);
            this.mz.objects.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
            this.mz.groups.menu.add(this.mz.objects.textTimer);

            // this.scale.setResizeCallback(this.handleResize, this);

            // click on field
            this.mz.eventHandler = this.game.add.sprite(0, 0);
            this.mz.eventHandler.fixedToCamera = true;
            this.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
            this.mz.eventHandler.inputEnabled = true;
            this.mz.eventHandler.input.priorityID = 1;
            this.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

            // count score gaining speed
            // this.mz.groups.cops.forEachExists(copSprite => {
            //     if (Phaser.Point.distance(copSprite, this.mz.objects.player.sprite) < this.mz.level.cops.fov.distance) {
            //         this.mz.objects.player.scoreGainSpeed += 1;
            //     }
            // });

            // update score
            this.mz.score = Math.floor(this.mz.objects.player.score);

            // draw score
            this.mz.objects.textScore.setText(
            // `x${this.mz.objects.player.scoreGainSpeed} ${this.mz.score} / ${this.mz.level.winningScore}`
            this.mz.score + ' / ' + this.mz.level.winningScore);

            // update player
            this.mz.objects.player.update();

            // update protesters
            this.mz.groups.protesters.forEachExists(function (sprite) {
                sprite.mz.update();
            });

            // update journalists
            this.mz.groups.press.forEachExists(function (journalistSprite) {
                var journalist = journalistSprite.mz;
                var newTarget = null;

                if (journalist.FOV.isActive && _this.mz.objects.player.showPoster && journalist.FOV.containsPoint(_this.mz.objects.player.sprite.body.center)) {
                    newTarget = _this.mz.objects.player.sprite;
                }

                if (newTarget) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */], { target: newTarget });
                } else if (journalist.mode !== __WEBPACK_IMPORTED_MODULE_4__constants_js__["g" /* JOURNALIST_MODE_WANDER */]) {
                    journalist.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);
                }

                journalist.update();
            });

            // update cops
            this.mz.groups.cops.forEachExists(function (copSprite) {
                var cop = copSprite.mz;
                if (_this.mz.objects.player.showPoster) {
                    cop.attractionPoint = _extends({}, _this.mz.objects.player.sprite.body.center);
                } else {
                    cop.attractionPoint = null;
                }

                if (cop.mode !== __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* COP_MODE_CONVOY */]) {
                    // find target for a cop
                    var newTarget = null;
                    var distanceToTarget = Infinity;
                    for (var i = 0; i <= _this.mz.groups.protesters.children.length; i++) {
                        var protester = i === _this.mz.groups.protesters.children.length ? _this.mz.objects.player : _this.mz.groups.protesters.getAt(i).mz;
                        if (!protester.sprite.exists) {
                            continue;
                        }
                        if ((protester.sprite === cop.target || protester.showPoster) && cop.FOV.containsPoint(protester.sprite.body.center)) {
                            var distanceToProtester = Phaser.Point.distance(copSprite, protester.sprite);
                            if (distanceToProtester < distanceToTarget) {
                                newTarget = protester.sprite;
                                distanceToTarget = distanceToProtester;
                            }
                        }
                    }
                    if (newTarget) {
                        // if theres a target in a view, pursue him
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["b" /* COP_MODE_PURSUE */], { target: newTarget });
                    } else if (cop.mode !== __WEBPACK_IMPORTED_MODULE_4__constants_js__["c" /* COP_MODE_WANDER */]) {
                        // else wander around, if not yet
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["c" /* COP_MODE_WANDER */]);
                    }
                }

                cop.update();
            });

            // cops vs protesters collision
            this.game.physics.arcade.overlap(this.mz.groups.protesters, this.mz.groups.cops, this.proceedToJail, function (protesterSprite, copSprite) {
                return copSprite.mz.target === protesterSprite && protesterSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_4__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            }, this);

            // cars vs protesters collision
            this.game.physics.arcade.overlap(this.mz.groups.protesters, this.mz.groups.cars, function (protesterSprite) {
                protesterSprite.mz.kill();
            }, function (protesterSprite) {
                return protesterSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_4__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            });

            // cops vs player collision
            this.game.physics.arcade.overlap(this.mz.objects.player.sprite, this.mz.groups.cops, function (playerSprite, copSprite) {
                _this.mz.eventHandler.events.onInputUp.remove(_this.handleClick, _this);
                _this.proceedToJail(playerSprite, copSprite);
            }, function (playerSprite, copSprite) {
                return copSprite.mz.target === playerSprite && playerSprite.mz.mode !== __WEBPACK_IMPORTED_MODULE_4__constants_js__["h" /* PROTESTER_MODE_ARRESTED */];
            });

            // player vs cars collision
            this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.cars, function (playerSprite) {
                if (playerSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_4__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]) {
                    playerSprite.mz.kill();
                }
            });

            this.checkWin();
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

            // this.mz.groups.cars.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.groups.cops.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.groups.protesters.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.groups.press.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(sprite, pointer) {
            this.mz.objects.player.setMoveTarget({
                x: pointer.x + this.game.camera.x,
                y: pointer.y + this.game.camera.y
            });
        }
    }, {
        key: 'handlePlayerKill',
        value: function handlePlayerKill() {
            this.mz.groups.cops.forEachExists(function (sprite) {
                sprite.mz.kill();
            });
            this.mz.groups.press.forEachExists(function (sprite) {
                sprite.mz.kill();
            });
            this.mz.groups.protesters.forEachExists(function (sprite) {
                sprite.mz.kill();
            });
            this.endGame(false);
        }
    }, {
        key: 'handleFinishShooting',
        value: function handleFinishShooting(points) {
            this.mz.objects.player.score += points;
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
        key: 'proceedToJail',
        value: function proceedToJail(protesterSprite, copSprite) {
            var closestCarCoords = null;
            var minDistance = Infinity;
            this.mz.groups.cars.forEach(function (carSprite) {
                var carCoords = {
                    x: (carSprite.right - carSprite.left) / 2,
                    y: (carSprite.bottom - carSprite.top) / 2
                };
                var distanceToCar = Phaser.Point.distance(copSprite, carCoords);
                if (distanceToCar < minDistance) {
                    closestCarCoords = carCoords;
                    minDistance = distanceToCar;
                }
            });
            protesterSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["h" /* PROTESTER_MODE_ARRESTED */], {
                jailCoords: closestCarCoords,
                speed: copSprite.mz.speed.value
            });
            copSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });
        }
    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (this.mz.score >= this.mz.level.winningScore || this.mz.timePassed > this.mz.level.duration) {
                this.endGame(true);
            }
        }
    }, {
        key: 'endGame',
        value: function endGame(win) {
            this.state.start('EndMenu', true, false, {
                win: win,
                score: this.mz.score
            });
        }
    }, {
        key: 'getRandomCoordinates',
        value: function getRandomCoordinates() {
            var globalOffset = 100;
            return {
                x: Math.max(globalOffset, Math.min(this.game.world.width - globalOffset, this.game.world.randomX)),
                y: Math.max(globalOffset, Math.min(this.game.world.height - globalOffset, this.game.world.randomY))
            };
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DEFAULT_SCORE_GAIN_SPEED = 0.1;
var DEFAULT_CLICK_SPEED_UP = 1;

var Player = function (_Protester) {
    _inherits(Player, _Protester);

    function Player(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            stamina = _ref.stamina,
            staminaCooldown = _ref.staminaCooldown;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'player' }));

        _this.score = 0;
        _this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        _this.scoreGainStartTime = null;

        _this.moveTarget = null;
        _this.stamina = stamina;
        _this.maxStamina = stamina;
        _this.cooldownTimer = _this.game.time.create(false);
        _this.staminaCooldown = staminaCooldown * 1000;

        _this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.showPoster = false;

        // events
        _this.sprite.events.onInputUp.add(_this.handleClick, _this);
        _this.sprite.input.priorityID = 2;

        _this.game.onPause.add(_this.handleGamePause, _this);
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

            if (this.mode === __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]) {
                return;
            }

            if (this.scoreGainStartTime) {
                this.flushScore();
                this.scoreGainStartTime = Date.now();
            }

            this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;

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
            } else if (this.keys.up.justUp || this.keys.down.justUp || this.keys.left.justUp || this.keys.right.justUp) {
                this.sprite.body.stop();
            }

            if (this.keys.space.justDown) {
                this.togglePoster();
            }
        }
    }, {
        key: 'handleGamePause',
        value: function handleGamePause() {
            if (this.scoreGainStartTime) {
                this.flushScore();
            }
        }
    }, {
        key: 'handleGameResume',
        value: function handleGameResume() {
            if (this.showPoster) {
                this.scoreGainStartTime = Date.now();
            }
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
        value: function setMode(mode, props) {
            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["h" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        this.sprite.events.onInputUp.removeAll();
                        this.game.onPause.remove(this.handleGamePause, this);
                        this.game.onResume.remove(this.handleGameResume, this);

                        this.cooldownTimer.stop(true);
                        this.stamina = this.maxStamina;
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

            // count score
            if (on) {
                this.scoreGainStartTime = Date.now();
            } else {
                this.flushScore();
            }

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'togglePoster', this).call(this, on);
        }

        // setMoveTarget({ x, y }) {
        // if (
        //     this.sprite.body.isMoving &&
        //     this.moveTarget &&
        //     this.game.math.fuzzyEqual(this.moveTarget.x, x, 5) &&
        //     this.game.math.fuzzyEqual(this.moveTarget.y, y, 5)
        // ) {
        //     this.clickSpeedUp *= this.speed.clickSpeedUp;
        // } else {
        //     this.resetSpeed();
        // }
        // super.setMoveTarget();
        // }

    }, {
        key: 'flushScore',
        value: function flushScore() {
            this.score += this.scoreGainSpeed * (Date.now() - this.scoreGainStartTime) / 1000;
            this.scoreGainStartTime = null;
        }

        // resetSpeed() {
        //     this.clickSpeedUp = 1;
        // }

    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(44);
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
            speed = _ref.speed;

        _classCallCheck(this, Cop);

        var _this = _possibleConstructorReturn(this, (Cop.__proto__ || Object.getPrototypeOf(Cop)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'cop' }));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(_this.FOV.graphics);

        _this.target = null;
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

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_PURSUE */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* FOV_MODE_NORMAL */]
            });

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'update', this).call(this);
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
            props = _objectWithoutProperties(_ref, ['game', 'x', 'y', 'speed', 'fov']);

        _classCallCheck(this, Journalist);

        var _this = _possibleConstructorReturn(this, (Journalist.__proto__ || Object.getPrototypeOf(Journalist)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'journalist', props: props }));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: (_colors = {}, _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* FOV_MODE_NORMAL */], 0xdddddd), _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* FOV_MODE_CAPTURE */], 0xffffff), _colors)
        });
        fov.group.add(_this.FOV.graphics);

        _this.progressBar = _this.game.add.graphics();
        _this.sprite.addChild(_this.progressBar);

        _this.shootingTimer = _this.game.time.create();
        _this.duration = _this.props.duration * 1000;

        _this.target = null;
        return _this;
    }

    _createClass(Journalist, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */]) {
                this.turnTo(this.target);
            }
            this.updateProgressBar(this.shootingTimer.running ? this.shootingTimer.ms / this.duration : 0);

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
                        var _target = props.target;

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* JOURNALIST_MODE_SHOOTING */] && this.target === _target) {
                            break;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["g" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
                            this.stopMovement();
                        }
                        this.target = _target;

                        this.shootingTimer.add(this.duration, this.finishShooting, this);
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

            this.sprite.body.angle = Phaser.Point.angle({ x: x, y: y }, this.sprite);
        }
    }, {
        key: 'finishShooting',
        value: function finishShooting() {
            var _props = this.props,
                onFinishShooting = _props.onFinishShooting,
                callbackContext = _props.callbackContext,
                points = _props.points;

            onFinishShooting.call(callbackContext, points);

            this.FOV.kill();

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["g" /* JOURNALIST_MODE_WANDER */]);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.stopWandering();
            this.FOV.kill();

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'kill', this).call(this);
        }
    }]);

    return Journalist;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Journalist);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COP_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COP_MODE_PURSUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COP_MODE_CONVOY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOV_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FOV_MODE_CAPTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PROTESTER_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PROTESTER_MODE_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JOURNALIST_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JOURNALIST_MODE_SHOOTING; });
var COP_MODE_WANDER = 'wander';
var COP_MODE_PURSUE = 'pursue';
var COP_MODE_CONVOY = 'convoy';

var FOV_MODE_NORMAL = 'normal';
var FOV_MODE_CAPTURE = 'capture';

var PROTESTER_MODE_WANDER = 'wander';
var PROTESTER_MODE_ARRESTED = 'arrested';

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
            props = _ref.props;

        _classCallCheck(this, Prefab);

        this.props = props;
        this.game = game;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.bounce.set(0);

        this.mode = null;

        this.stayingTimer = this.game.time.create(false);

        this.attractionPoint = null;
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
            var distance = Phaser.Point.distance(this.sprite, coords);
            var duration = distance / this.speed.current * 1000; // ms
            var angle = this.game.math.radToDeg(Phaser.Point.angle(coords, this.sprite));

            this.sprite.body.moveTo(duration, distance, angle);
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords() {
            var directions = [];
            var offsetTop = 50;
            if (this.attractionPoint && this.game.rnd.between(0, 1)) {
                if (this.attractionPoint.x > this.sprite.x) {
                    directions.push('right');
                } else {
                    directions.push('left');
                }
                if (this.attractionPoint.y > this.sprite.y) {
                    directions.push('bottom');
                } else {
                    directions.push('top');
                }
            } else {
                if (this.sprite.left > 0) {
                    directions.push('left');
                }
                if (this.sprite.right < this.game.world.width) {
                    directions.push('right');
                }
                if (this.sprite.top > offsetTop) {
                    directions.push('top');
                }
                if (this.sprite.bottom < this.game.world.height) {
                    directions.push('bottom');
                }
            }

            var direction = this.game.rnd.between(0, directions.length - 1);
            var x = this.sprite.x;
            var y = this.sprite.y;
            switch (directions[direction]) {
                case 'left':
                    x = this.game.rnd.between(this.sprite.x - this.sprite.left, this.sprite.x - 1);
                    break;
                case 'right':
                    x = this.game.rnd.between(this.sprite.x + 1, this.game.world.width - (this.sprite.right - this.sprite.x));
                    break;
                case 'top':
                    y = this.game.rnd.between(this.sprite.y - this.sprite.top + offsetTop, this.sprite.y - 1);
                    break;
                case 'bottom':
                    y = this.game.rnd.between(this.sprite.y + 1, this.game.world.height - (this.sprite.bottom - this.sprite.y));
                    break;
            }
            return { x: Math.round(x), y: Math.round(y) };
        }
    }, {
        key: 'updateProgressBar',
        value: function updateProgressBar(percent) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x00ff00;

            var y = -60;
            var width = 50;
            var height = 10;
            this.progressBar.clear();
            if (percent !== 0) {
                if (percent > 1) {
                    percent = 1;
                }
                this.progressBar.lineStyle(2, color, 1);
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