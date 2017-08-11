import Player from './../objects/Player.js';
import Protester from './../objects/Protester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';
import {
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED,
    JOURNALIST_MODE_SHOOTING,
    JOURNALIST_MODE_WANDER
} from '../constants.js';

class Game {
    init(level) {
        this.mz = {
            level,
            score: 0,
            timePassed: 0, // s
            eventHandler: null,
            map: null,
            objects: {
                player: null,
                textScore: null,
                bgTile: null,
                buttonSound: null,
                audio: {}
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

    create() {
        this.game.stage.backgroundColor = '#ccc';

        this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.mz.objects.audio.constr1 = this.game.add.audio('constr01');
        this.mz.objects.audio.constr2 = this.game.add.audio('constr02');
        this.mz.objects.audio.constr1.loopFull();
        this.mz.objects.audio.constr2.loopFull(0.5);
        this.mz.objects.audio.random = [
            this.game.add.audio('boo'),
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

        this.mz.groups.press = this.game.add.group();
        this.mz.groups.cops = this.game.add.group();
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
                speed: this.mz.level.cops.speed
            });
            this.mz.groups.cops.add(cop.sprite);
            cop.setMode(COP_MODE_WANDER);
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
                duration: this.mz.level.press.duration,
                points: this.mz.level.press.points,
                onFinishShooting: this.handleFinishShooting,
                callbackContext: this
            });
            this.mz.groups.press.add(journalist.sprite);
            journalist.setMode(JOURNALIST_MODE_WANDER);
        }

        this.mz.groups.protesters = this.game.add.group();
        for (let i = 0; i < this.mz.level.protesters.count; i++) {
            const protester = new Protester({
                game: this.game,
                ...this.getRandomCoordinates(),
                speed: this.mz.level.protesters.speed,
                spriteKey: `protester${this.game.rnd.between(1, 3)}`,
                audioKey: `scream0${this.game.rnd.between(1, 2)}`,
                activity: this.game.rnd.between(10, 20)
            });
            this.mz.groups.protesters.add(protester.sprite);
            protester.setMode(PROTESTER_MODE_WANDER);
        }

        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            ...this.mz.level.player
        });
        this.game.camera.follow(this.mz.objects.player.sprite);
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
        this.mz.eventHandler = this.game.add.sprite(0, 100);
        this.mz.eventHandler.fixedToCamera = true;
        this.mz.eventHandler.scale.setTo(this.game.width, this.game.height - 100);
        this.mz.eventHandler.inputEnabled = true;
        this.mz.eventHandler.input.priorityID = 1;
        this.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {
        // update background
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

        this.playRandomSound();

        // count score gaining speed
        this.mz.objects.player.resetScoreGainSpeed();
        this.mz.groups.cops.forEachExists(copSprite => {
            if (Phaser.Point.distance(copSprite, this.mz.objects.player.sprite) < this.mz.level.cops.fov.distance) {
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
        this.mz.groups.protesters.forEachExists(sprite => {
            sprite.mz.update();
        });

        // update journalists
        this.mz.groups.press.forEachExists(journalistSprite => {
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

        // update cops
        this.mz.groups.cops.forEachExists(copSprite => {
            const cop = copSprite.mz;
            if (this.mz.objects.player.showPoster) {
                cop.attractionPoint = { ...this.mz.objects.player.sprite.body.center };
            } else {
                cop.attractionPoint = null;
            }

            if (cop.mode !== COP_MODE_CONVOY) {
                // find target for a cop
                let newTarget = null;
                let distanceToTarget = Infinity;
                for (let i = 0; i <= this.mz.groups.protesters.children.length; i++) {
                    const protester = i === this.mz.groups.protesters.children.length ?
                        this.mz.objects.player :
                        this.mz.groups.protesters.getAt(i).mz;
                    if (!protester.sprite.exists || !cop.FOV.containsPoint(protester.sprite.body.center)) {
                        continue;
                    }
                    if (
                        protester.sprite === cop.target ||
                        protester.showPoster
                    ) {
                        let distanceToProtester = Phaser.Point.distance(copSprite, protester.sprite);
                        // give higher priority to current target
                        if (protester.sprite === cop.target) {
                            distanceToProtester *= 2 / 3;
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

        // cops vs protesters collision
        this.game.physics.arcade.overlap(
            this.mz.groups.protesters,
            this.mz.groups.cops,
            this.proceedToJail,
            (protesterSprite, copSprite) =>
                copSprite.mz.target === protesterSprite && protesterSprite.mz.mode !== PROTESTER_MODE_ARRESTED,
            this
        );

        // cars vs protesters collision
        this.game.physics.arcade.overlap(
            this.mz.groups.protesters,
            this.mz.groups.cars,
            protesterSprite => {
                protesterSprite.mz.kill();
            },
            protesterSprite => protesterSprite.mz.mode === PROTESTER_MODE_ARRESTED
        );

        // cops vs player collision
        this.game.physics.arcade.overlap(
            this.mz.objects.player.sprite,
            this.mz.groups.cops,
            (playerSprite, copSprite) => {
                this.mz.eventHandler.events.onInputUp.remove(this.handleClick, this);
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

        this.checkWin();
    }

    render() {
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
        this.mz.groups.cops.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.mz.groups.press.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.mz.groups.protesters.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.endGame(false);
    }

    handleFinishShooting(points) {
        this.mz.objects.player.score += points;
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;
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
        // beat him up a little
        protesterSprite.damage(0.8);

        let closestCarCoords = null;
        let minDistance = Infinity;
        this.mz.groups.cars.forEach(carSprite => {
            const carCoords = {
                x: (carSprite.right - carSprite.left) / 2,
                y: (carSprite.bottom - carSprite.top) / 2
            };
            const distanceToCar = Phaser.Point.distance(copSprite, carCoords);
            if (distanceToCar < minDistance) {
                closestCarCoords = carCoords;
                minDistance = distanceToCar;
            }
        });
        protesterSprite.mz.setMode(PROTESTER_MODE_ARRESTED, {
            jailCoords: closestCarCoords,
            speed: copSprite.mz.speed.value
        });
        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
    }

    checkWin() {
        if (
            this.mz.score >= this.mz.level.winningScore ||
            this.mz.timePassed > this.mz.level.duration
        ) {
            this.endGame(true);
        }
    }

    endGame(win) {
        this.mz.objects.audio.constr1.stop();
        this.mz.objects.audio.constr2.stop();

        this.state.start('EndMenu', true, false, {
            win,
            score: this.mz.score
        });
    }

    playRandomSound() {
        if (this.game.rnd.between(0, 200) === 0) {
            const randomNumber = this.game.rnd.between(0, this.mz.objects.audio.random.length - 1);
            this.mz.objects.audio.random[randomNumber].play('', 0, 0.5);
        }
    }

    getRandomCoordinates() {
        const globalOffset = 100;
        return {
            x: Math.max(globalOffset, Math.min(this.game.world.width - globalOffset, this.game.world.randomX)),
            y: Math.max(globalOffset, Math.min(this.game.world.height - globalOffset, this.game.world.randomY))
        };
    }

    getFormattedTime(secondsPassed) {
        const s = this.mz.level.duration - secondsPassed;
        const min = Math.floor(s / 60);
        return String(min).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }
}

export default Game;
