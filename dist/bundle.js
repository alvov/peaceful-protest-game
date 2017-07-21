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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_Game_js__ = __webpack_require__(4);





const containerNode = document.querySelector('.js-game-container');

const game = new Phaser.Game({
    width: containerNode.clientWidth,
    height: containerNode.clientHeight,
    parent: containerNode
});

game.state.add('Boot', __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__["a" /* default */]);
game.state.add('Loading', __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__["a" /* default */]);
game.state.add('StartMenu', __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__["a" /* default */]);
game.state.add('Game', __WEBPACK_IMPORTED_MODULE_3__states_Game_js__["a" /* default */]);
game.state.start('Boot');


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Boot{
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    }

    preload() {
        // this.load.image('loader', 'assets/loader.png');
    }

    create() {
        this.state.start('Loading');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Boot);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Loading {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
        // const loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        // loadingBar.anchor.setTo(0.5);
        // this.load.setPreloadSprite(loadingBar);
        this.game.load.spritesheet('cop', 'assets/cop.png', 100, 100);
        this.game.load.spritesheet('protester', 'assets/protester.png', 100, 100);
        this.game.load.spritesheet('buttons', 'assets/buttons.png', 100, 100);

        this.load.image('ground01', 'assets/ground01.jpg');
    }

    create() {
        // this.state.start('StartMenu');
        this.state.start('Game');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Loading);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StartMenu {
    create() {
        this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Мирный Протест MVP');
        this.title.anchor.setTo(0.5);

        this.playButton = this.game.add.button(this.world.centerX, this.world.centerY, 'buttons', this.handleClickPlay, this)
        this.playButton.anchor.setTo(0.5);
    }

    resize(newWidth, newHeight) {

    }

    handleClickPlay() {
        this.state.start('Game');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (StartMenu);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cop_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CopFOV_js__ = __webpack_require__(7);




const COPS_COUNT = 3;

class Game {
    preload() {
        this.game.mz = {
            eventHandler: null,
            objects: {
                cops: [],
                protester: null,
                textScore: null
            },
            groups: {}
        };
    }

    create() {
        const bgTile = this.game.add.tileSprite(0, 0, 1024, 768, 'ground01');
        bgTile.tileScale.set(0.2);

        this.game.add.image(0, 0, this.bitmap);

        for (let i = 0; i < COPS_COUNT; i++) {
            const copFOV = new __WEBPACK_IMPORTED_MODULE_2__CopFOV_js__["a" /* default */]({ game: this.game });
            const cop = new __WEBPACK_IMPORTED_MODULE_1__Cop_js__["a" /* default */]({
                game: this.game,
                x: this.game.rnd.between(0, this.game.world.width),
                y: this.game.rnd.between(0, this.game.world.height),
                FOV: copFOV
            });
            this.game.mz.objects.cops.push(cop);
        }

        this.game.mz.objects.protester = new __WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY
        });

        this.game.mz.groups.menu = this.game.add.group();
        this.game.mz.objects.textScore = this.game.add.text(
            this.game.world.width - 10,
            20,
            '0',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.game.mz.objects.textScore.anchor.set(1, 0.5);
        this.game.mz.groups.menu.add(this.game.mz.objects.textScore);

        // click on field
        this.game.mz.eventHandler = this.game.add.sprite(0, 0);
        this.game.mz.eventHandler.fixedToCamera = true;
        this.game.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
        this.game.mz.eventHandler.inputEnabled = true;
        this.game.mz.eventHandler.input.priorityID = 0;
        this.game.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {
        // this.game.physics.arcade.overlap(
        //     this.game.mz.protester.sprite,
        //     this.game.mz.cops[0].sprite,
        //     this.game.mz.cops[0].handleOverlap,
        //     null,
        //     this.game.mz.cops[0]
        // );
        this.game.mz.objects.protester.update();

        this.game.mz.objects.textScore.setText(Math.floor(this.game.mz.objects.protester.score / 1000));

        for (let i = 0; i < this.game.mz.objects.cops.length; i++) {
            const cop = this.game.mz.objects.cops[i];
            if (
                this.game.mz.objects.protester.showPoster &&
                cop.FOV.graphics.containsPoint(this.game.mz.objects.protester.sprite.body.center)
            ) {
                cop.follow(this.game.mz.objects.protester);
            }

            cop.update();
        }
    }

    render() {
        // this.game.debug.body(this.game.mz.objects.protester.sprite);
        // for (let i = 0; i < this.game.mz.objects.cops.length; i++) {
        //     this.game.debug.body(this.game.mz.objects.cops[i].sprite);
        // }
    }

    handleClick(sprite, pointer) {
        this.game.mz.objects.protester.moveTo({
            x: pointer.x,
            y: pointer.y
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SPEED = 80;

class Protester {
    constructor({ game, x, y }) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, 'protester', 0);
        this.sprite.anchor.set(0.5);
        // this.sprite.crop(new Phaser.Rectangle(35, 45, 30, 46));
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.events.onInputUp.add(this.handleClick, this);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;

        this.showPoster = false;
        this.score = 0;
        this.showedPosterAt = null;

        // this.sprite.body.onMoveComplete.add(this.stopMoving, this);
    }

    update() {
        if (this.showPoster) {
            this.sprite.frame = 1;
        } else {
            this.sprite.frame = 0;
        }

        if (this.showedPosterAt) {
            this.flushScore();
            this.showedPosterAt = Date.now();
        }
    }

    handleClick() {
        if (this.sprite.body.isMoving) {
            this.stopMoving();
        } else {
            this.togglePoster();
        }
    }

    togglePoster(on = !this.showPoster) {
        if (on === this.showPoster) {
            return;
        }

        // count score
        if (on) {
            this.showedPosterAt = Date.now();
        } else {
            this.flushScore();
        }

        this.showPoster = on;
    }

    flushScore() {
        this.score += Date.now() - this.showedPosterAt;
        this.showedPosterAt = null;
    }

    moveTo({ x, y }) {
        this.togglePoster(false);

        const distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
        const duration = distance / SPEED * 1000; // ms
        const angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

        this.sprite.body.moveTo(duration, distance, angle);
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Protester);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACTIONS = {
    stay: 0,
    walk: 1
};

const SPEED = 30;

class Cop {
    constructor({ game, x, y, FOV }) {
        this.game = game;

        this.FOV = FOV;

        this.sprite = game.add.sprite(x, y, 'cop', 0);
        this.sprite.anchor.set(0.5);

        game.physics.arcade.enable(this.sprite);

        this.stayingTimeout = null;
        this.target = null;

        this.wander();
    }

    update() {
        if (this.target) {
            if (this.FOV.graphics.containsPoint(this.target.sprite.body.center)) {
                this.moveTo(this.target.sprite.body.center);
            } else {
                this.wander();
                this.target = null;
            }
        }

        this.FOV.update({
            x: this.sprite.body.center.x,
            y: this.sprite.body.center.y,
            angle: this.sprite.body.angle,
            mode: this.target ? 'active' : 'normal'
        });
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, 1);
        switch (nextAction) {
            case ACTIONS.stay:
                this.stayingTimeout = setTimeout(() => {
                    this.wander();
                }, this.game.rnd.between(1000, 3000));
                break;
            case ACTIONS.walk: {
                this.sprite.body.onMoveComplete.addOnce(this.wander, this);
                this.moveTo(this.getNextCoords());
                break;
            }
        }
    }

    moveTo({ x, y }) {
        const distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
        const duration = distance / SPEED * 1000; // ms
        const angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

        this.sprite.body.moveTo(duration, distance, angle);
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
        clearTimeout(this.stayingTimeout);
    }

    getNextCoords() {
        const direction = this.game.rnd.between(0, 3);
        let x = this.sprite.x;
        let y = this.sprite.y;
        if (direction === 0) {
            y = this.game.rnd.between(0, this.sprite.y);
        } else if (direction === 1) {
            x = this.game.rnd.between(this.sprite.x, this.game.world.width);
        } else if (direction === 2) {
            y = this.game.rnd.between(this.sprite.y, this.game.world.height);
        } else if (direction === 3) {
            x = this.game.rnd.between(0, this.sprite.x);
        }
        return { x, y };
    }

    follow(target) {
        this.target = target;
        this.stopMoving();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Cop);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const COLORS = {
    normal: 0x3a3a56,
    active: 0x563a3a
};

class CopFOV {
    constructor({ game }) {
        this.game = game;

        this.graphics = this.game.add.graphics(0, 0);
        this.color = 0;
    }

    update({ x, y, angle, mode }) {
        this.graphics.clear();
        this.graphics.beginFill(COLORS[mode || 'normal'], 0.5);
        this.graphics.arc(
            x,
            y,
            200,
            angle - Math.PI / 2,
            angle + Math.PI / 2
        );
        this.graphics.endFill();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (CopFOV);


/***/ })
/******/ ]);