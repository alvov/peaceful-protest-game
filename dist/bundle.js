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
/******/ 	return __webpack_require__(__webpack_require__.s = 297);
/******/ })
/************************************************************************/
/******/ ({

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    initial: [{
        type: 'spritesheet',
        key: 'level01',
        url: __webpack_require__(299),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'level02',
        url: __webpack_require__(300),
        frameWidth: 300,
        frameHeight: 150
    }, {
        type: 'spritesheet',
        key: 'buttons',
        url: __webpack_require__(301),
        frameWidth: 100,
        frameHeight: 100
    }],
    level1: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(114),
        frameWidth: 400,
        frameHeight: 200
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(302),
        frameWidth: 62,
        frameHeight: 94
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(115),
        frameWidth: 60,
        frameHeight: 92
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(116),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(117),
        frameWidth: 60,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(118),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(119),
        frameWidth: 120,
        frameHeight: 142
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(303),
        overwrite: false
    }],
    level2: [{
        type: 'spritesheet',
        key: 'border',
        url: __webpack_require__(114),
        frameWidth: 400,
        frameHeight: 200
    }, {
        type: 'spritesheet',
        key: 'cop',
        url: __webpack_require__(304),
        frameWidth: 88,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'player',
        url: __webpack_require__(115),
        frameWidth: 60,
        frameHeight: 92
    }, {
        type: 'spritesheet',
        key: 'protester1',
        url: __webpack_require__(116),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester2',
        url: __webpack_require__(117),
        frameWidth: 60,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'protester3',
        url: __webpack_require__(118),
        frameWidth: 72,
        frameHeight: 98
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(119),
        frameWidth: 120,
        frameHeight: 142
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(305),
        overwrite: false
    }]
});

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f3798349fe5c3b3b1799c27955b1d6a2.png";

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5d93c76a90d1610418d01050cfd0eb4d.png";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/33c5c53c054b4c33222f241dc2e47d50.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/53a52f18f16a2791169f5f2b8fc2139d.png";

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/95ed17c814a40ec7eea84ee109fa6207.png";

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d24af22e7dae1337a8cc1ffe5e7b1aa4.png";

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Character_js__ = __webpack_require__(121);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Protester = function (_Character) {
    _inherits(Protester, _Character);

    function Protester(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            spriteKey = _ref.spriteKey,
            activity = _ref.activity;

        _classCallCheck(this, Protester);

        var _this = _possibleConstructorReturn(this, (Protester.__proto__ || Object.getPrototypeOf(Protester)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: spriteKey }));

        _this.sprite.inputEnabled = true;
        _this.sprite.input.priorityID = 1;

        _this.posterSprite = _this.sprite.addChild(_this.game.make.sprite(-80, -120, 'poster', 0));
        _this.posterSprite.bringToTop();
        _this.posterSprite.exists = false;

        _this.activity = activity;
        _this.showPoster = false;
        _this.stayingTimeout = null;
        return _this;
    }

    _createClass(Protester, [{
        key: 'update',
        value: function update() {
            this.posterSprite.exists = this.showPoster;
        }
    }, {
        key: 'wander',
        value: function wander() {
            var _this2 = this;

            this.sprite.body.onMoveComplete.removeAll();
            var nextAction = this.game.rnd.between(0, this.activity);
            if (nextAction === 0) {
                this.sprite.body.onMoveComplete.addOnce(this.wander, this);
                this.moveTo(this.getNextCoords());
            } else {
                clearTimeout(this.stayingTimeout);
                this.stayingTimeout = setTimeout(function () {
                    _this2.wander();
                }, this.game.rnd.between(3000, 6000));

                this.togglePoster(nextAction < 4);
            }
        }
    }, {
        key: 'togglePoster',
        value: function togglePoster() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPoster;

            this.showPoster = on;
        }
    }, {
        key: 'moveTo',
        value: function moveTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.togglePoster(false);
            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'moveTo', this).call(this, { x: x, y: y });
        }
    }, {
        key: 'kill',
        value: function kill() {
            clearTimeout(this.stayingTimeout);
            this.sprite.body.onMoveComplete.removeAll();
            this.sprite.kill();
        }
    }]);

    return Protester;
}(__WEBPACK_IMPORTED_MODULE_0__Character_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Protester);

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
    function Character(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            spriteKey = _ref.spriteKey;

        _classCallCheck(this, Character);

        this.game = game;

        this.speed = _extends({
            current: speed.walking
        }, speed);

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.bounce.set(0);

        this.attractionPoint = null;
    }

    _createClass(Character, [{
        key: 'moveTo',
        value: function moveTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            var distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
            var duration = distance / this.speed.current * 1000; // ms
            var angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

            this.sprite.body.moveTo(duration, distance, angle);
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords() {
            var directions = [];
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
                if (this.sprite.x > this.sprite.width) {
                    directions.push('left');
                }
                if (this.sprite.x < this.game.world.width - this.sprite.width) {
                    directions.push('right');
                }
                if (this.sprite.y > this.sprite.height) {
                    directions.push('top');
                }
                if (this.sprite.y < this.game.world.height - this.sprite.height) {
                    directions.push('bottom');
                }
            }

            var direction = this.game.rnd.between(0, directions.length - 1);
            var x = this.sprite.x;
            var y = this.sprite.y;
            switch (directions[direction]) {
                case 'left':
                    x = this.game.rnd.between(this.sprite.width, this.sprite.x - 1);
                    break;
                case 'right':
                    x = this.game.rnd.between(this.sprite.x + 1, this.game.world.width - this.sprite.width);
                    break;
                case 'top':
                    y = this.game.rnd.between(this.sprite.height, this.sprite.y - 1);
                    break;
                case 'bottom':
                    y = this.game.rnd.between(this.sprite.y + 1, this.game.world.height - this.sprite.height);
                    break;
            }
            return { x: Math.round(x), y: Math.round(y) };
        }
    }]);

    return Character;
}();

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_EndMenu_js__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_Game_js__ = __webpack_require__(310);






var containerNode = document.querySelector('.js-game-container');

var game = new Phaser.Game({
    width: containerNode.clientWidth,
    height: containerNode.clientHeight,
    parent: containerNode,
    antialias: false
});

game.state.add('Boot', __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__["a" /* default */]);
game.state.add('Loading', __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__["a" /* default */]);
game.state.add('StartMenu', __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__["a" /* default */]);
game.state.add('EndMenu', __WEBPACK_IMPORTED_MODULE_3__states_EndMenu_js__["a" /* default */]);
game.state.add('Game', __WEBPACK_IMPORTED_MODULE_4__states_Game_js__["a" /* default */]);
game.state.start('Boot');

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__ = __webpack_require__(113);
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f92bc2f5d7aa8c5e8ccf000dd5f2268c.jpg";

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c7118db4b46452ebb66ca9f1f72e7d53.jpg";

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/121104892eaea3f65969e7beb7d9f45f.png";

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f0898c0eb2cb50754fc66aa5edf79983.png";

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7780fada5b5def9a73f068e7dee87e98.jpg";

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b5628f192689135fb9661a6eb8c1977a.png";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a1a7aca8cdcabb0b6f29774a2b1eb971.jpg";

/***/ }),

/***/ 306:
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
                var _game$load, _game$load2, _load;

                var _ref2 = _toArray(_ref),
                    assetType = _ref2[0],
                    assetParams = _ref2.slice(1);

                switch (assetType) {
                    case 'pack':
                        (_game$load = _this.game.load).pack.apply(_game$load, _toConsumableArray(assetParams));
                        break;
                    case 'spritesheet':
                        (_game$load2 = _this.game.load).spritesheet.apply(_game$load2, _toConsumableArray(assetParams));
                        break;
                    case 'image':
                        (_load = _this.load).image.apply(_load, _toConsumableArray(assetParams));
                        break;
                }
            });

            this.mz.objects.textProgress = this.game.add.text(300, 300, 'Loading 0%', {
                font: '26px Arial',
                fill: '#fff',
                align: 'right'
            });
            this.mz.objects.textProgress.anchor.set(0.5);
        }
    }, {
        key: 'loadUpdate',
        value: function loadUpdate() {
            this.mz.objects.textProgress.setText('Loading ' + this.game.load.progress + '%');
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(113);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        worldWidth: 600,
        worldHeight: 600,
        duration: 2 * 60, // s
        winningScore: 20,
        cops: {
            count: 3,
            speed: {
                walking: 50,
                running: 60
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        protesters: {
            count: 30,
            speed: {
                walking: 60
            }
        },
        player: {
            speed: {
                walking: 120
            }
        }
    },
    level2: {
        worldWidth: 800,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningScore: 100,
        cops: {
            count: 5,
            speed: {
                walking: 60,
                running: 80
            },
            fov: {
                distance: 200,
                angle: 120
            }
        },
        protesters: {
            count: 30,
            speed: {
                walking: 60
            }
        },
        player: {
            speed: {
                walking: 120
            }
        }
    }
});

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndMenu = function () {
    function EndMenu() {
        _classCallCheck(this, EndMenu);
    }

    _createClass(EndMenu, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#ccc';
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.world.resize(this.game.width, this.game.height);

            this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Game over');
            this.title.anchor.setTo(0.5);

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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Protester_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_FOV_js__ = __webpack_require__(313);
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
                objects: {
                    player: null,
                    textScore: null,
                    bgTile: null
                },
                groups: {
                    protesters: null,
                    cops: null,
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

            this.game.add.image(0, 0, this.bitmap);

            this.mz.groups.copsFOV = this.game.add.group();
            this.mz.groups.cops = this.game.add.group();

            for (var i = 0; i < this.game.world.width; i += 100) {
                var borderSprite = this.game.add.sprite(i, 0, 'border');
                borderSprite.scale.set(0.25);
            }

            for (var _i = 0; _i < this.mz.level.cops.count; _i++) {
                var copFOV = new __WEBPACK_IMPORTED_MODULE_3__objects_FOV_js__["a" /* default */]({
                    game: this.game,
                    radius: this.mz.level.cops.fov.distance,
                    angle: this.mz.level.cops.fov.angle
                });
                this.mz.groups.copsFOV.add(copFOV.graphics);

                var cop = new __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    FOV: copFOV,
                    speed: this.mz.level.cops.speed
                }));
                this.mz.groups.cops.add(cop.sprite);
                cop.wander();
            }

            this.mz.groups.protesters = this.game.add.group();
            for (var _i2 = 0; _i2 < this.mz.level.protesters.count; _i2++) {
                var protester = new __WEBPACK_IMPORTED_MODULE_1__objects_Protester_js__["a" /* default */](_extends({
                    game: this.game
                }, this.getRandomCoordinates(), {
                    speed: this.mz.level.protesters.speed,
                    spriteKey: 'protester' + this.game.rnd.between(1, 3),
                    activity: this.game.rnd.between(10, 20)
                }));
                this.mz.groups.protesters.add(protester.sprite);
                protester.wander();
            }

            this.mz.objects.player = new __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */]({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                speed: this.mz.level.player.speed
            });
            this.game.camera.follow(this.mz.objects.player.sprite);

            for (var _i3 = 0; _i3 < this.game.world.width; _i3 += 100) {
                var _borderSprite = this.game.add.sprite(_i3, this.game.world.height - 50, 'border');
                _borderSprite.scale.set(0.25);
            }

            this.mz.groups.menu = this.game.add.group();
            this.mz.groups.menu.fixedToCamera = true;
            this.mz.objects.textScore = this.game.add.text(this.game.width - 10, 20, 'x' + this.mz.objects.player.scoreGainSpeed + ' ' + this.mz.objects.player.score + ' / ' + this.mz.level.winningScore, {
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

            this.mz.objects.textTimer = this.game.add.text(this.game.width - 10, 60, 'this.getFormattedTime(this.mz.timePassed)', {
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
            this.mz.groups.cops.forEachExists(function (copSprite) {
                if (_this.game.physics.arcade.distanceBetween(copSprite, _this.mz.objects.player.sprite) < _this.mz.level.cops.fov.distance) {
                    _this.mz.objects.player.scoreGainSpeed += 1;
                }
            });

            // update score
            this.mz.score = Math.floor(this.mz.objects.player.score / 1000);

            // draw score
            this.mz.objects.textScore.setText('x' + this.mz.objects.player.scoreGainSpeed + ' ' + this.mz.score + ' / ' + this.mz.level.winningScore);

            // update player
            this.mz.objects.player.update();

            // update protesters
            this.mz.groups.protesters.forEachExists(function (sprite) {
                sprite.mz.update();
            });

            // update cops
            this.mz.groups.cops.forEachExists(function (copSprite) {
                if (_this.mz.objects.player.showPoster) {
                    copSprite.mz.attractionPoint = _extends({}, _this.mz.objects.player.sprite.body.center);
                } else {
                    copSprite.mz.attractionPoint = null;
                }
                // find target for a cop
                var newTarget = null;
                var distanceToTarget = Infinity;

                for (var i = 0; i <= _this.mz.groups.protesters.children.length; i++) {
                    var protester = i === _this.mz.groups.protesters.children.length ? _this.mz.objects.player : _this.mz.groups.protesters.getAt(i).mz;
                    if (!protester.sprite.exists) {
                        continue;
                    }
                    if ((protester.sprite === copSprite.mz.target || protester.showPoster) && copSprite.mz.FOV.containsPoint(protester.sprite.body.center)) {
                        var distanceToProtester = _this.game.physics.arcade.distanceBetween(copSprite, protester.sprite);
                        if (distanceToProtester < distanceToTarget) {
                            newTarget = protester.sprite;
                            distanceToTarget = distanceToProtester;
                        }
                    }
                }

                copSprite.mz.follow(newTarget);

                copSprite.mz.update();
            });

            // cops vs protesters collision
            this.game.physics.arcade.overlap(this.mz.groups.protesters, this.mz.groups.cops, function (_ref, _ref2) {
                var protester = _ref.mz;
                var cop = _ref2.mz;

                protester.kill();
                cop.follow(null);
            }, function (protesterSprite, _ref3) {
                var cop = _ref3.mz;

                return cop.target === protesterSprite;
            });

            // cops vs player collision
            this.game.physics.arcade.overlap(this.mz.objects.player.sprite, this.mz.groups.cops, function () {
                _this.endGame();
            }, function (playerSprite, _ref4) {
                var cop = _ref4.mz;

                return cop.target === playerSprite;
            });

            // this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.protesters);
            // this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.cops);
            // this.game.physics.arcade.collide(this.mz.groups.cops, this.mz.groups.protesters);
            // this.game.physics.arcade.collide(this.mz.groups.cops);
            // this.game.physics.arcade.collide(this.mz.groups.protesters);

            this.checkWin();
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

            // this.mz.groups.cops.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.groups.protesters.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(sprite, pointer) {
            this.mz.objects.player.moveTo({
                x: pointer.x + this.game.camera.x,
                y: pointer.y + this.game.camera.y
            });
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
        key: 'endGame',
        value: function endGame() {
            this.mz.groups.cops.forEachExists(function (sprite) {
                sprite.mz.kill();
            });
            this.mz.groups.protesters.forEachExists(function (sprite) {
                sprite.mz.kill();
            });
            this.state.start('EndMenu', true);
        }
    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (this.mz.score >= this.mz.level.winningScore || this.mz.timePassed > this.mz.level.duration) {
                this.endGame();
            }
        }
    }, {
        key: 'getRandomCoordinates',
        value: function getRandomCoordinates() {
            return {
                x: Math.max(100, Math.min(this.game.world.width - 100, this.game.world.randomX)),
                y: Math.max(100, Math.min(this.game.world.height - 100, this.game.world.randomY))
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(120);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DEFAULT_SCORE_GAIN_SPEED = 1;

var Player = function (_Protester) {
    _inherits(Player, _Protester);

    function Player(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'player' }));

        _this.score = 0;
        _this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        _this.showedPosterAt = null;

        _this.sprite.body.immovable = true;

        _this.moveTarget = null;

        // events
        _this.sprite.events.onInputUp.add(_this.handleClick, _this);
        _this.sprite.input.priorityID = 2;

        _this.sprite.body.onMoveComplete.add(_this.resetSpeed, _this);

        _this.game.onPause.add(_this.handleGamePause, _this);
        _this.game.onResume.add(_this.handleGameResume, _this);

        _this.keys = {
            up: _this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: _this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: _this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: _this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: _this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {
            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this);

            if (this.showedPosterAt) {
                this.flushScore();
                this.showedPosterAt = Date.now();
            }

            this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;

            if (this.keys.up.isDown || this.keys.down.isDown || this.keys.left.isDown || this.keys.right.isDown) {
                this.stopMoving();
                this.togglePoster(false);
                var inputSpeed = this.speed.current / 1000 * 16;

                if (this.keys.up.isDown && this.keys.left.isDown || this.keys.up.isDown && this.keys.right.isDown || this.keys.down.isDown && this.keys.left.isDown || this.keys.down.isDown && this.keys.right.isDown) {
                    inputSpeed *= 0.7;
                }
                if (this.keys.up.isDown) {
                    this.sprite.y -= inputSpeed;
                }
                if (this.keys.down.isDown) {
                    this.sprite.y += inputSpeed;
                }
                if (this.keys.left.isDown) {
                    this.sprite.x -= inputSpeed;
                }
                if (this.keys.right.isDown) {
                    this.sprite.x += inputSpeed;
                }
            }
            if (this.keys.space.justDown) {
                this.togglePoster();
            }
        }
    }, {
        key: 'handleGamePause',
        value: function handleGamePause() {
            if (this.showedPosterAt) {
                this.flushScore();
            }
        }
    }, {
        key: 'handleGameResume',
        value: function handleGameResume() {
            if (this.showPoster) {
                this.showedPosterAt = Date.now();
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.sprite.body.isMoving) {
                this.stopMoving();
            } else {
                this.togglePoster();
            }
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
                this.showedPosterAt = Date.now();
            } else {
                this.flushScore();
            }

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'togglePoster', this).call(this, on);
        }
    }, {
        key: 'moveTo',
        value: function moveTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            if (this.sprite.body.moves && this.moveTarget && Math.abs(this.moveTarget.x - x) < 30 && Math.abs(this.moveTarget.y - y) < 30) {
                this.speed.current += 5;
            } else {
                this.resetSpeed();
            }
            this.moveTarget = { x: x, y: y };
            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'moveTo', this).call(this, { x: x, y: y });
        }
    }, {
        key: 'flushScore',
        value: function flushScore() {
            this.score += this.scoreGainSpeed * (Date.now() - this.showedPosterAt);
            this.showedPosterAt = null;
        }
    }, {
        key: 'stopMoving',
        value: function stopMoving() {
            this.sprite.body.stopMovement(true);
        }
    }, {
        key: 'resetSpeed',
        value: function resetSpeed() {
            this.speed.current = this.speed.walking;
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Character_js__ = __webpack_require__(121);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Cop = function (_Character) {
    _inherits(Cop, _Character);

    function Cop(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            FOV = _ref.FOV,
            speed = _ref.speed;

        _classCallCheck(this, Cop);

        var _this = _possibleConstructorReturn(this, (Cop.__proto__ || Object.getPrototypeOf(Cop)).call(this, { game: game, x: x, y: y, speed: speed, spriteKey: 'cop' }));

        _this.FOV = FOV;

        _this.stayingTimeout = null;
        _this.target = null;
        return _this;
    }

    _createClass(Cop, [{
        key: 'update',
        value: function update() {
            if (this.target) {
                this.moveTo(this.target);
            }

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.target ? 'active' : 'normal'
            });
        }
    }, {
        key: 'wander',
        value: function wander() {
            var _this2 = this;

            this.sprite.body.onMoveComplete.removeAll();
            var nextAction = this.game.rnd.between(0, 2);
            if (nextAction === 0) {
                clearTimeout(this.stayingTimeout);
                this.stayingTimeout = setTimeout(function () {
                    _this2.wander();
                }, this.game.rnd.between(1000, 3000));
            } else {
                this.sprite.body.onMoveComplete.addOnce(this.wander, this);
                this.moveTo(this.getNextCoords());
            }
        }
    }, {
        key: 'moveTo',
        value: function moveTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.speed.current = this.target ? this.speed.running : this.speed.walking;
            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'moveTo', this).call(this, { x: x, y: y });
        }
    }, {
        key: 'stopMoving',
        value: function stopMoving() {
            this.sprite.body.stopMovement(true);
            clearTimeout(this.stayingTimeout);
        }
    }, {
        key: 'follow',
        value: function follow(target) {
            if (target === this.target) {
                return;
            }

            this.target = target;
            // stop regular moving
            this.stopMoving();

            // if target is gone
            if (!this.target) {
                this.wander();
            }
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.stopMoving();
            this.sprite.body.onMoveComplete.removeAll();
            this.sprite.kill();
        }
    }]);

    return Cop;
}(__WEBPACK_IMPORTED_MODULE_0__Character_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Cop);

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COLORS = {
    normal: 0x3a3a56,
    active: 0x563a3a
};

var FOV = function () {
    function FOV(_ref) {
        var game = _ref.game,
            radius = _ref.radius,
            angle = _ref.angle;

        _classCallCheck(this, FOV);

        this.game = game;
        this.radius = radius;
        this.halfViewAngle = this.game.math.degToRad(angle / 2);

        this.graphics = this.game.add.graphics(0, 0);
        this.center = null;
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

            var startAngle = this.angle - this.halfViewAngle;
            var endAngle = this.angle + this.halfViewAngle;
            var arcStart = [x + Math.cos(startAngle) * this.radius, y + Math.sin(startAngle) * this.radius];

            this.graphics.clear();
            this.graphics.beginFill(COLORS[mode || 'normal'], 0.4);
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
            var distance = this.game.physics.arcade.distanceToXY(this.center, x, y);
            if (distance > this.radius) {
                return false;
            }
            var angle = this.game.physics.arcade.angleToXY(this.center, x, y);

            var leftAngle = this.angle - this.halfViewAngle;
            var rightAngle = this.angle + this.halfViewAngle;

            if (leftAngle <= angle && angle <= rightAngle) {
                return true;
            }

            angle -= 2 * Math.PI * Math.sign(angle);

            return leftAngle <= angle && angle <= rightAngle;
        }
    }]);

    return FOV;
}();

/* harmony default export */ __webpack_exports__["a"] = (FOV);

/***/ })

/******/ });