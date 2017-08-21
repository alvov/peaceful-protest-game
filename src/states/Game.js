import Player from './../objects/Player.js';
import Protester from './../objects/Protester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';
import SWATSquad from '../objects/SWATSquad.js';
import PauseMenu from './../objects/PauseMenu.js';

import {
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED,
    JOURNALIST_MODE_SHOOTING,
    JOURNALIST_MODE_WANDER
} from '../constants.js';

const GLOBAL_OFFSET = 100;

class Game {
    init(level) {
        this.mz = {
            level,
            score: 0,
            timePassed: 0, // s
            map: null,
            events: {
                keys: {},
                fieldClickHandler: null,
            },
            objects: {
                player: null,
                swat: null,
                textScore: null,
                bgTile: null,
                buttonSound: null,
                audio: {},
                pauseMenu: null
            },
            arrays: {
                protesters: [],
                cops: [],
                press: [],
            },
            groups: {
                actors: null,
                cars: null,
                copsFOV: null,
                pressFOV: null,
                menu: null
            }
        };
    }

    create() {
        this.game.stage.backgroundColor = '#ccc';

        this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.mz.objects.audio.constr = [
            this.game.add.audio('constr01'),
            this.game.add.audio('constr02')
        ];
        this.mz.objects.audio.audioPunch = [
            this.game.add.audio('punch01'),
            this.game.add.audio('punch02')
        ];
        this.mz.objects.audio.constr[0].loopFull();
        this.mz.objects.audio.constr[1].loopFull(0.5);
        this.mz.objects.audio.random = [
            this.game.add.audio('croud'),
            this.game.add.audio('cough01'),
            this.game.add.audio('cough02')
        ];

        // this.mz.map = this.game.add.tilemap('tilemap', 50, 50);

        // FOVs should always be below everything
        this.mz.groups.pressFOV = this.game.add.group();
        this.mz.groups.copsFOV = this.game.add.group();

        this.mz.groups.cars = this.game.add.group();
        // cars
        for (let i = 0; i < this.game.world.width; i += 300) {
            const autoSprite = this.game.add.sprite(i, 100, 'auto');
            autoSprite.anchor.set(0, 1);
            autoSprite.scale.set(0.70);
            this.game.physics.arcade.enable(autoSprite);
            autoSprite.body.setSize(
                autoSprite.width / autoSprite.scale.x,
                autoSprite.height / autoSprite.scale.y - 50
            );
            autoSprite.body.immovable = true;
            this.mz.groups.cars.add(autoSprite);
        }

        // top borders
        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, 50, 'border');
            borderSprite.scale.set(0.25);
        }

        this.mz.groups.actors = this.game.add.group();
        this.mz.groups.obstacles = this.game.add.group();

        for (let i = 0; i < this.mz.level.cops.count; i++) {
            const cop = new Cop({
                game: this.game,
                ...this.getRandomCoordinates(),
                fov: {
                    group: this.mz.groups.copsFOV,
                    distance: this.mz.level.cops.fov.distance,
                    angle: this.mz.level.cops.fov.angle
                },
                speed: this.mz.level.cops.speed,
                spriteName: `cop${i}`
            });
            this.mz.arrays.cops.push(cop.sprite);
            this.mz.groups.actors.add(cop.sprite);
            cop.setMode(COP_MODE_WANDER);
        }

        if (this.mz.level.swat) {
            this.mz.objects.swat = new SWATSquad({
                game: this.game,
                ...this.mz.level.swat,
                group: this.mz.groups.actors
            });
            this.swatTimer = this.game.time.create(false);
        }

        for (let i = 0; i < this.mz.level.press.count; i++) {
            const journalist = new Journalist({
                game: this.game,
                ...this.getRandomCoordinates(),
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
                spriteName: `journalist${i}`
            });
            this.mz.arrays.press.push(journalist.sprite);
            this.mz.groups.actors.add(journalist.sprite);
            journalist.setMode(JOURNALIST_MODE_WANDER);
        }

        for (let i = 0; i < this.mz.level.protesters.count; i++) {
            const protester = new Protester({
                game: this.game,
                ...this.getRandomCoordinates(),
                speed: this.mz.level.protesters.speed,
                spriteKey: `protester${this.game.rnd.between(1, 3)}`,
                activity: this.game.rnd.between(10, 20),
                spriteName: `protester${i}`
            });
            this.mz.arrays.protesters.push(protester.sprite);
            this.mz.groups.actors.add(protester.sprite);
            protester.setMode(PROTESTER_MODE_WANDER);
        }

        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            ...this.mz.level.player
        });
        this.game.camera.follow(this.mz.objects.player.sprite);
        this.mz.groups.actors.add(this.mz.objects.player.sprite);
        this.mz.objects.player.sprite.events.onKilled.addOnce(this.handlePlayerKill, this);

        // bottom borders
        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, this.game.world.height - 50, 'border');
            borderSprite.scale.set(0.25);
        }

        this.mz.groups.menu = this.game.add.group();
        this.mz.groups.menu.fixedToCamera = true;
        this.mz.objects.textScore = this.game.add.text(
            this.game.width - 10,
            20,
            '',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textScore.anchor.set(1, 0.5);
        this.mz.objects.textScore.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.mz.groups.menu.add(this.mz.objects.textScore);

        const timer = this.game.time.create();
        timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        timer.start();

        this.mz.objects.textTimer = this.game.add.text(
            this.game.width - 10,
            60,
            '',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textTimer.anchor.set(1, 0.5);
        this.mz.objects.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.mz.groups.menu.add(this.mz.objects.textTimer);

        this.mz.objects.buttonSound = this.game.add.button(
            0,
            0,
            'soundButtons',
            this.handleClickSound,
            this,
            1, 1, 1, 1,
            this.mz.groups.menu
        );
        // this.scale.setResizeCallback(this.handleResize, this);

        // click on field
        const fieldClickHandler = this.game.add.sprite(0, 100);
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
        this.mz.objects.pauseMenu = new PauseMenu({ game: this.game });
    }

    update() {
        // update background
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

        this.playRandomSound();

        // count score gaining speed
        this.mz.objects.player.resetScoreGainSpeed();
        this.mz.arrays.cops.forEach(copSprite => {
            if (
                copSprite.alive &&
                Phaser.Point.distance(copSprite, this.mz.objects.player.sprite) < this.mz.level.cops.fov.distance
            ) {
                this.mz.objects.player.scoreGainSpeed += 1;
            }
        });

        // update menu
        this.mz.score = Math.floor(this.mz.objects.player.score);
        // draw score
        this.mz.objects.textScore.setText(
            `x${Math.round(this.mz.objects.player.scoreGainSpeed)} ${this.mz.score} / ${this.mz.level.winningScore}`
        );

        this.mz.objects.buttonSound.frame = this.game.sound.mute ? 1 : 0;

        // update player
        this.mz.objects.player.update();

        // update protesters
        this.mz.arrays.protesters.forEach(sprite => {
            if (sprite.alive) {
                sprite.mz.update();
            }
        });

        // update journalists
        this.mz.arrays.press.forEach(journalistSprite => {
            const journalist = journalistSprite.mz;
            let newTarget = null;

            if (
                journalist.FOV.isActive &&
                this.mz.objects.player.showPoster &&
                journalist.FOV.containsPoint(this.mz.objects.player.sprite.body.center)
            ) {
                newTarget = this.mz.objects.player.sprite;
            }

            if (newTarget) {
                journalist.setMode(JOURNALIST_MODE_SHOOTING, { target: newTarget });
            } else if (journalist.mode !== JOURNALIST_MODE_WANDER) {
                journalist.setMode(JOURNALIST_MODE_WANDER);
            }

            journalist.update();
        });

        // update swat
        if (this.mz.objects.swat) {
            if (this.mz.objects.swat.mode === SWAT_MODE_HIDE && !this.swatTimer.running) {
                this.swatTimer.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                this.swatTimer.start();
            }
            this.mz.objects.swat.update();
        }

        // update cops
        this.mz.arrays.cops.forEach(copSprite => {
            const cop = copSprite.mz;

            // set attraction point and strength
            cop.attractionPoint = { ...this.mz.objects.player.sprite.body.center };
            let attractionStrength = 0;
            if (this.mz.objects.player.showPoster) {
                attractionStrength += 0.2;
                this.mz.arrays.press.forEach(journalistSprite => {
                    if (journalistSprite.mz.mode === JOURNALIST_MODE_SHOOTING) {
                        attractionStrength += 0.4;
                    }
                });
            }
            cop.attractionStrength = Math.min(1, attractionStrength);

            if (cop.mode !== COP_MODE_CONVOY) {
                // find target for a cop
                let newTarget = null;
                let distanceToTarget = Infinity;
                for (let i = 0; i <= this.mz.arrays.protesters.length; i++) {
                    const protester = i === this.mz.arrays.protesters.length ?
                        this.mz.objects.player :
                        this.mz.arrays.protesters[i].mz;
                    if (
                        !protester.sprite.exists ||
                        protester.mode === PROTESTER_MODE_ARRESTED ||
                        !cop.FOV.containsPoint(protester.sprite.body.center)
                    ) {
                        continue;
                    }
                    if (
                        protester.sprite === cop.target ||
                        protester.showPoster
                    ) {
                        let distanceToProtester = Phaser.Point.distance(copSprite, protester.sprite);
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
                    cop.setMode(COP_MODE_PURSUE, { target: newTarget });
                } else if (cop.mode !== COP_MODE_WANDER) {
                    // else wander around, if not yet
                    cop.setMode(COP_MODE_WANDER);
                }
            }

            cop.update();
        });

        // add protesters
        this.mz.arrays.protesters.forEach(sprite => {
            if (!sprite.alive) {
                const y = this.getRandomCoordinateY();
                this.mz.groups.actors.add(sprite);
                sprite.mz.revive({
                    x: this.game.rnd.between(0, 1) === 0 ? -100 : this.game.world.width + 100,
                    y,
                    nextCoords: {
                        x: this.getRandomCoordinateX(),
                        y
                    }
                });
            }
        });

        // cops vs protesters collision
        this.game.physics.arcade.overlap(
            this.mz.arrays.protesters,
            this.mz.arrays.cops,
            this.proceedToJail,
            (protesterSprite, copSprite) =>
                copSprite.mz.target === protesterSprite && protesterSprite.mz.mode !== PROTESTER_MODE_ARRESTED,
            this
        );

        // swat vs protesters collision
        if (this.mz.objects.swat) {
            this.game.physics.arcade.overlap(
                this.mz.objects.swat.sprites,
                this.mz.arrays.protesters,
                (swatSprite, protesterSprite) => {
                    this.arrest(protesterSprite, swatSprite);
                },
                (swatSprite, protesterSprite) =>
                    swatSprite.children.length === 0 &&
                    protesterSprite.mz.mode !== PROTESTER_MODE_ARRESTED
            );
        }

        // cars vs protesters collision
        this.game.physics.arcade.overlap(
            this.mz.arrays.protesters,
            this.mz.groups.cars,
            protesterSprite => {
                protesterSprite.mz.kill();
            },
            protesterSprite => protesterSprite.mz.mode === PROTESTER_MODE_ARRESTED
        );

        // swat vs player collision
        if (this.mz.objects.swat) {
            this.game.physics.arcade.overlap(
                this.mz.objects.player.sprite,
                this.mz.objects.swat.sprites,
                this.arrest,
                playerSprite => playerSprite.mz.mode !== PROTESTER_MODE_ARRESTED,
                this
            );
        }

        // cops vs player collision
        this.game.physics.arcade.overlap(
            this.mz.objects.player.sprite,
            this.mz.arrays.cops,
            (playerSprite, copSprite) => {
                this.mz.events.fieldClickHandler.events.onInputUp.remove(this.handleClick, this);
                this.proceedToJail(playerSprite, copSprite);
            },
            (playerSprite, copSprite) =>
                copSprite.mz.target === playerSprite && playerSprite.mz.mode !== PROTESTER_MODE_ARRESTED
        );

        // player vs cars collision
        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.groups.cars,
            playerSprite => {
                if (playerSprite.mz.mode === PROTESTER_MODE_ARRESTED) {
                    playerSprite.mz.kill();
                }
            }
        );

        this.mz.groups.actors.sort('y', Phaser.Group.SORT_ASCENDING);

        this.checkWin();

        // events
        if (this.mz.events.keys.esc.justUp) {
            this.game.paused = !this.game.paused;
        }
    }

    render() {
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

    handleClick(sprite, pointer) {
        const coords = {
            x: pointer.x + this.game.camera.x,
            y: pointer.y + this.game.camera.y
        };
        const player = this.mz.objects.player;
        if (
            player.sprite.body.isMoving &&
            player.moveTarget &&
            this.game.math.fuzzyEqual(player.moveTarget.x, coords.x, 5) &&
            this.game.math.fuzzyEqual(player.moveTarget.y, coords.y, 5)
        ) {
            player.clickSpeedUp *= player.speed.clickSpeedUp;
            this.mz.objects.player.setMoveTarget(player.moveTarget);
        } else {
            player.resetClickSpeedUp();
            this.mz.objects.player.setMoveTarget(coords);
        }
    }

    handlePlayerKill() {
        this.endGame(false);
    }

    handleFinishShooting() {
        this.mz.objects.player.score += this.mz.level.press.points;
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;
    }

    handlePause() {
        if (this.game.paused) {
            this.mz.objects.pauseMenu.revive();
        } else {
            this.mz.objects.pauseMenu.kill();
        }
    }

    handleUnpause() {
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

    updateTimer() {
        this.mz.timePassed++;
        this.mz.objects.textTimer.setText(this.getFormattedTime(this.mz.timePassed));
    }

    proceedToJail(protesterSprite, copSprite) {
        let closestCarCoords = null;
        let minDistance = Infinity;
        this.mz.groups.cars.forEach(carSprite => {
            const carCoords = {
                x: (carSprite.right + carSprite.left) / 2,
                y: (carSprite.bottom + carSprite.top) / 2
            };
            const distanceToCar = Phaser.Point.distance(copSprite, carCoords);
            if (distanceToCar < minDistance) {
                closestCarCoords = carCoords;
                minDistance = distanceToCar;
            }
        });

        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });

        this.arrest(protesterSprite, copSprite);
    }

    arrest(protesterSprite, copSprite) {
        // beat him up a little
        protesterSprite.damage(0.8);
        this.playRandomPunch();

        copSprite.addChild(protesterSprite);
        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }

        protesterSprite.mz.setMode(PROTESTER_MODE_ARRESTED, {
            x: -Math.sign(copSprite.body.velocity.x) * protesterSprite.body.halfWidth,
            y: protesterSprite.body.halfHeight
        });
    }

    launchSWAT() {
        this.swatTimer.stop(true);
        const direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';
        this.mz.objects.swat.setMode(SWAT_MODE_HUNT, {
            x: direction === 'ltor' ?
                -GLOBAL_OFFSET :
                this.game.world.width + GLOBAL_OFFSET,
            y: this.getRandomCoordinateY(),
            target: {
                x: direction === 'ltor' ?
                    this.game.world.width + GLOBAL_OFFSET:
                    -GLOBAL_OFFSET,
                y: this.getRandomCoordinateY()
            }
        });
    }

    checkWin() {
        if (
            // this.mz.score >= this.mz.level.winningScore ||
            this.mz.timePassed > this.mz.level.duration
        ) {
            this.endGame(this.mz.score >= this.mz.level.winningScore);
        }
    }

    endGame(win) {
        this.mz.objects.audio.constr[0].stop();
        this.mz.objects.audio.constr[1].stop();

        this.state.start('EndMenu', true, false, {
            win,
            score: this.mz.score
        });
    }

    playRandomSound() {
        if (this.game.rnd.between(0, 200) === 0) {
            this.game.rnd.pick(this.mz.objects.audio.random).play('', 0, 0.5);
        }
    }

    playRandomPunch() {
        this.game.rnd.pick(this.mz.objects.audio.audioPunch).play();
    }

    getRandomCoordinates() {
        return {
            x: this.getRandomCoordinateX(),
            y: this.getRandomCoordinateY()
        };
    }

    getRandomCoordinateX() {
        return this.game.math.clamp(this.game.world.randomX, GLOBAL_OFFSET, this.game.world.width - GLOBAL_OFFSET);
    }

    getRandomCoordinateY() {
        return this.game.math.clamp(this.game.world.randomY, GLOBAL_OFFSET, this.game.world.height - GLOBAL_OFFSET);
    }

    getFormattedTime(secondsPassed) {
        const s = this.mz.level.duration - secondsPassed;
        const min = Math.floor(s / 60);
        return String(min).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }
}

export default Game;
