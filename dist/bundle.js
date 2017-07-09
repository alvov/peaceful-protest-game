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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameState_js__ = __webpack_require__(1);


const game = new Phaser.Game({
    parent: document.querySelector('.js-game-container')
});

game.state.add('Game', __WEBPACK_IMPORTED_MODULE_0__GameState_js__["a" /* default */]);
game.state.start('Game');


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(2);


const PROTESTERS_COUNT = 1;

class GameState {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
        this.game.load.spritesheet('protester', 'assets/protester.png', 100, 100);
        this.game.mz = {
            eventHandler: null,
            protesters: []
        };
    }

    create() {
        for (let i = 0; i < PROTESTERS_COUNT; i++) {
            const protester = new __WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]({ game: this.game });
            this.game.add.existing(protester.sprite);
            this.game.mz.protesters.push(protester);
        }
        this.game.mz.eventHandler = this.game.add.sprite(0, 0);
        this.game.mz.eventHandler.fixedToCamera = true;
        this.game.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
        this.game.mz.eventHandler.inputEnabled = true;
        this.game.mz.eventHandler.input.priorityID = 0;
        this.game.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {

    }

    render() {
        // this.game.debug.spriteInputInfo(this.game.mz.protesters[0].sprite, 30, 30, '#000');
    }

    handleClick(sprite, pointer) {
        const activeProtester = this.game.mz.protesters.find(protester => protester.isActive);
        if (activeProtester) {
            activeProtester.setActive(false);
            activeProtester.setDisabled(true);
            const activeProtesterTween = this.game.add.tween(activeProtester.sprite).to(
                { x: pointer.x, y: pointer.y },
                500,
                Phaser.Easing.Linear.None,
                true
            );
            activeProtesterTween.onComplete.add(() => {
                activeProtester.setDisabled(false);
            });
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (GameState);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Protester {
    constructor({ game }) {
        this.sprite = new Phaser.Sprite(game, game.world.centerX, game.world.centerY, 'protester', 0);
        this.sprite.anchor.set(0.5);
        this.sprite.crop(new Phaser.Rectangle(
            this.sprite.width / 4,
            0,
            3 * this.sprite.width / 4,
            this.sprite.height
        ));
        this.sprite.scale.set(0.5);
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.events.onInputUp.add(this.handleClick, this);
    }

    handleClick() {
        if (!this.isDisabled) {
            this.setActive(!this.isActive);
        }
    }

    setActive(on) {
        if (on) {
            this.sprite.game.mz.protesters.forEach(protester => protester.setActive(false));
            this.isActive = true;
            this.sprite.frame = 1;
        } else {
            this.isActive = false;
            this.sprite.frame = 0;
        }
    }

    setDisabled(on) {
        this.isDisabled = on;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Protester);


/***/ })
/******/ ]);