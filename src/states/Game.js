import Player from './../objects/Player.js';
import NPCProtester from './../objects/NPCProtester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';
import SWATSquad from '../objects/SWATSquad.js';
import Shield from '../objects/Shield.js';
import ScoreMeter from './../objects/ScoreMeter.js';
import PauseMenu from './../objects/PauseMenu.js';
import EndMenu from './../objects/EndMenu.js';

import {
    END_GAME_PLAYER_KILLED,
    END_GAME_TIME_OUT,
    END_GAME_PROTEST_RATE,
    END_GAME_WIN,
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    SHIELD_MODE_DRIVE,
    PROTESTER_MODE_ARRESTED,
    JOURNALIST_MODE_SHOOTING,
    JOURNALIST_MODE_WANDER
} from '../constants.js';
import {SHIELD_MODE_HIDE} from '../constants';

const GLOBAL_OFFSET = 100;

class Game {
    init(level) {
        this.mz = {
            level,
            gameEnded: false,
            score: null,
            timePassed: 0, // s
            protesters: {
                alive: null,
                arrested: 0,
                revived: 0,
                left: 0,
                toRevive: level.protesters.count.start,
                meanMood: level.protesters.mood
            },
            events: {
                keys: {},
                fieldClickHandler: null,
            },
            timers: {
                swat: null
            },
            objects: {
                player: null,
                swat: null,
                shield: null,
                score: null,
                textTimer: null,
                textProtestersCount: null,
                bgTile: null,
                buttonSound: null,
                audio: {},
                pauseMenu: null,
                endMenu: null
            },
            arrays: {
                protesters: [],
                cops: [],
                press: []
            },
            groups: {
                actors: null,
                cars: null,
                droppedPosters: null,
                copsFOV: null,
                pressFOV: null,
                playerFOV: null,
                menu: null
            }
        };
    }

    create() {
        this.game.stage.backgroundColor = '#ccc';

        this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.mz.objects.audio.theme = this.game.add.audio('theme');
        this.mz.objects.audio.theme.loopFull(0.1);
        this.mz.objects.audio.audioPunch = [
            this.game.add.audio('punch01'),
            this.game.add.audio('punch02')
        ];
        this.mz.objects.audio.random = [
            this.game.add.audio('croud'),
            this.game.add.audio('cough01'),
            this.game.add.audio('cough02')
        ];
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

        // cops
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

        // swat
        if (this.mz.level.swat) {
            this.mz.objects.swat = new SWATSquad({
                game: this.game,
                ...this.mz.level.swat,
                group: this.mz.groups.actors
            });
            this.mz.timers.swat = this.game.time.create(false);
        }

        // shield
        this.mz.objects.shield = new Shield({
            game: this.game,
            speed: {
                value: 400
            }
        });

        // press
        const onFinishShooting = this.handleFinishShooting.bind(this);
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
                onFinishShooting,
                spriteName: `journalist${i}`
            });
            this.mz.arrays.press.push(journalist.sprite);
            this.mz.groups.actors.add(journalist.sprite);
            journalist.setMode(JOURNALIST_MODE_WANDER);
        }

        // protesters
        this.createProtesters(this.mz.level.protesters.count.max);

        // player
        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            fovGroup: this.mz.groups.playerFOV,
            ...this.mz.level.player,
            onDropPoster: this.handleDropPoster.bind(this)
        });
        this.game.camera.follow(this.mz.objects.player.sprite);
        this.mz.groups.actors.add(this.mz.objects.player.sprite);

        // bottom borders
        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, this.game.world.height - 50, 'border');
            borderSprite.scale.set(0.25);
        }

        this.mz.groups.menu = this.game.add.group();
        this.mz.groups.menu.fixedToCamera = true;

        this.mz.objects.score = new ScoreMeter({
            game: this.game,
            x: 10,
            y: this.game.height - 10,
            width: this.game.width - 20,
            parentGroup: this.mz.groups.menu,
            winPoint: this.mz.level.winningScore
        });

        this.mz.objects.timer = this.game.time.create();
        this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        this.mz.objects.timer.start();

        this.mz.objects.textTimer = this.game.add.text(
            this.game.width - 10,
            20,
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

        this.mz.objects.textProtestersCount = this.game.add.text(
            this.game.width - 10,
            60,
            '',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textProtestersCount.anchor.set(1, 0.5);
        this.mz.objects.textProtestersCount.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.mz.groups.menu.add(this.mz.objects.textProtestersCount);

        this.mz.objects.buttonSound = this.game.add.button(
            0,
            0,
            'soundButtons',
            this.handleClickSound,
            this,
            1, 1, 1, 1,
            this.mz.groups.menu
        );

        // pause menu
        this.mz.objects.pauseMenu = new PauseMenu({ game: this.game });

        // events

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
    }

    update() {
        // update background
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

        if (!this.mz.gameEnded) {
            this.playRandomSound();
        }

        this.mz.objects.buttonSound.frame = this.game.sound.mute ? 1 : 0;

        // update player
        this.mz.objects.player.update();

        // update protesters
        const lastTickMeanMood = this.mz.protesters.meanMood;
        this.mz.score = 0;
        this.mz.protesters.meanMood = 0;
        this.mz.protesters.alive = 0;
        for (let i = 0; i < this.mz.arrays.protesters.length; i++) {
            const sprite = this.mz.arrays.protesters[i];
            if (!sprite.alive) {
                if (this.mz.protesters.toRevive !== 0) {
                    const mood = Math.max(lastTickMeanMood, this.mz.level.protesters.mood);
                    this.reviveProtester({
                        sprite,
                        mood
                    });
                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += mood;
                }
            } else {
                sprite.mz.update();
                sprite.mz.toggleCheering(
                    !this.mz.gameEnded &&
                    this.mz.objects.player.showPoster &&
                    this.getDistanceSq(sprite, this.mz.objects.player.sprite) <= this.mz.objects.player.radius.actualSq
                );

                this.mz.protesters.alive++;
                this.mz.protesters.meanMood += sprite.mz.mood;
            }

        }

        this.mz.protesters.toRevive = 0;

        this.mz.protesters.meanMood = this.mz.protesters.alive !== 0 ?
            this.mz.protesters.meanMood / this.mz.protesters.alive :
            0;
        this.mz.score = 100 * (
            0.5 * this.mz.protesters.alive / this.mz.level.protesters.count.max +
            0.5 * this.mz.protesters.meanMood
        );

        // draw score
        if (!this.mz.gameEnded) {
            this.mz.objects.score.update(this.mz.score);
        }

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
            if (
                (this.mz.score >= this.mz.level.swat.scoreThreshold || this.mz.gameEnded) &&
                this.mz.objects.swat.mode === SWAT_MODE_HIDE &&
                !this.mz.timers.swat.running
            ) {
                this.mz.timers.swat.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                this.mz.timers.swat.start();
            } else if (
                this.mz.timers.swat.running &&
                this.mz.score < this.mz.level.swat.scoreThreshold
            ) {
                this.mz.timers.swat.stop(true);
            }
            this.mz.objects.swat.update();
        }

        // update shield
        this.mz.objects.shield.update();

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
            cop.attractionStrength = Math.min(1, attractionStrength * this.mz.objects.player.power);

            if (cop.mode !== COP_MODE_CONVOY) {
                // find target for a cop
                let newTarget = null;
                let distanceToTargetSq = Infinity;
                for (let i = 0; i <= this.mz.arrays.protesters.length; i++) {
                    const protester = i === this.mz.arrays.protesters.length ?
                        this.mz.objects.player :
                        this.mz.arrays.protesters[i].mz;
                    if (
                        !protester.sprite.alive ||
                        protester.mode === PROTESTER_MODE_ARRESTED ||
                        !cop.FOV.containsPoint(protester.sprite.body.center)
                    ) {
                        continue;
                    }
                    if (
                        protester.sprite === cop.target ||
                        protester.showPoster
                    ) {
                        let distanceToProtesterSq = this.getDistanceSq(copSprite, protester.sprite);
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

        // player collisions
        if (this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED) {
            // vs posters
            this.mz.groups.droppedPosters.forEachAlive(posterSprite => {
                if (Phaser.Rectangle.intersects(posterSprite.getBounds(), this.mz.objects.player.sprite.getBounds())) {
                    this.mz.objects.audio.pick.play('', 0, 0.25);
                    this.mz.objects.player.powerUp();
                    posterSprite.kill();
                }
            });

            // vs swat
            if (this.mz.objects.swat) {
                this.game.physics.arcade.overlap(
                    this.mz.objects.player.sprite,
                    this.mz.objects.swat.sprites,
                    this.arrest,
                    (playerSprite, swatSprite) => swatSprite.children.length === 0,
                    this
                );
            }

            // vs cops
            this.game.physics.arcade.overlap(
                this.mz.objects.player.sprite,
                this.mz.arrays.cops,
                (playerSprite, copSprite) => {
                    this.mz.events.fieldClickHandler.events.onInputUp.remove(this.handleClick, this);
                    this.proceedToJail(playerSprite, copSprite);
                },
                (playerSprite, copSprite) =>
                    copSprite.mz.target === playerSprite
            );

        }

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

        // player vs shield collision
        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.objects.shield.sprite,
            playerSprite => {
                playerSprite.body.collideWorldBounds = false;
                if (playerSprite.health === 1) {
                    this.beatUpProtester(playerSprite);
                }
            }
        );

        this.mz.groups.actors.sort('y', Phaser.Group.SORT_ASCENDING);

        if (!this.mz.gameEnded) {
            this.checkWin();
        }

        this.mz.objects.textProtestersCount.setText(
            'Protesters count: ' +
            String(this.mz.protesters.alive).padStart(2, '0') + ' / ' +
            this.mz.level.protesters.count.max
        );

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

    handleProtesterLeft() {
        this.mz.protesters.left++;
    }

    handleDropPoster(coords) {
        this.createPoster(coords);
    }

    handleFinishShooting() {
        this.mz.protesters.toRevive += this.mz.level.protesters.count.add;
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

    updateTimer() {
        this.mz.timePassed++;
        this.mz.objects.textTimer.setText(this.getFormattedTime(this.mz.timePassed));
    }

    createProtesters(count) {
        const onDropPoster = this.handleDropPoster.bind(this);
        const onLeft = this.handleProtesterLeft.bind(this);
        for (let i = 0; i < count; i++) {
            const protester = new NPCProtester({
                game: this.game,
                ...this.getRandomCoordinates(),
                group: this.mz.groups.actors,
                speed: this.mz.level.protesters.speed,
                spriteKey: `protester${this.game.rnd.between(1, 3)}`,
                spriteName: `protester${i}`,
                mood: this.mz.level.protesters.mood,
                moodUp: this.mz.level.protesters.moodUp,
                moodDown: this.mz.level.protesters.moodDown,
                dropPoster: this.mz.level.protesters.dropPoster,
                onLeft,
                onDropPoster
            });
            this.mz.arrays.protesters.push(protester.sprite);
        }
    }

    reviveProtester({ sprite, mood }) {
        const randomOffset = this.game.rnd.between(0, 100);
        sprite.mz.revive({
            x: this.game.rnd.between(0, 1) === 0 ?
                -100 - randomOffset :
                this.game.world.width + 100 + randomOffset,
            y: this.getRandomCoordinateY(),
            nextCoords: this.getRandomCoordinates(),
            mood
        });

        this.mz.protesters.toRevive--;
        this.mz.protesters.revived++;
    }

    beatUpProtester(sprite) {
        sprite.damage(0.1);
        this.playRandomPunch();
    }

    createPoster(coords) {
        const posterSprite = this.mz.groups.droppedPosters.getFirstDead(true, coords.x, coords.y, 'poster');
        posterSprite.anchor.set(0.5);
        posterSprite.rotation = this.game.rnd.sign() * Math.PI / 3;
    }

    proceedToJail(protesterSprite, copSprite) {
        let closestCarCoords = null;
        let minDistanceSq = Infinity;
        this.mz.groups.cars.forEach(carSprite => {
            const carCoords = {
                x: (carSprite.right + carSprite.left) / 2,
                y: (carSprite.bottom + carSprite.top) / 2
            };
            const distanceToCarSq = this.getDistanceSq(copSprite, carCoords);
            if (distanceToCarSq < minDistanceSq) {
                closestCarCoords = carCoords;
                minDistanceSq = distanceToCarSq;
            }
        });

        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });

        this.arrest(protesterSprite, copSprite);
    }

    arrest(protesterSprite, copSprite) {
        this.beatUpProtester(protesterSprite);

        copSprite.addChild(protesterSprite);
        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }

        protesterSprite.mz.setMode(PROTESTER_MODE_ARRESTED, {
            x: (
                copSprite.body.velocity.x === 0 ?
                    this.game.rnd.sign() :
                    -Math.sign(copSprite.body.velocity.x)
            ) * protesterSprite.body.halfWidth,
            y: protesterSprite.body.halfHeight
        });

        this.mz.protesters.arrested++;
    }

    launchSWAT() {
        this.mz.timers.swat.stop(true);

        this.mz.objects.audio.boo.play();

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

    launchShield() {
        this.mz.objects.shield.setMode(SHIELD_MODE_DRIVE, {
            y: this.mz.objects.player.sprite.y
        });
    }

    checkWin() {
        if (this.mz.timePassed > this.mz.level.duration) {
            this.endGame(END_GAME_TIME_OUT);
        } else if (this.mz.score === 0) {
            this.endGame(END_GAME_PROTEST_RATE);
        } else if (this.mz.score >= this.mz.level.winningScore) {
            this.endGame(END_GAME_WIN);
        } else if (
            this.mz.objects.player.mode === PROTESTER_MODE_ARRESTED ||
            !this.mz.objects.player.sprite.alive
        ) {
            this.endGame(END_GAME_PLAYER_KILLED);
        }
    }

    endGame(mode) {
        this.mz.gameEnded = true;

        this.mz.objects.audio.theme.fadeOut(2000);

        this.mz.objects.endMenu = new EndMenu({
            game: this.game,
            mode,
            score: this.mz.objects.score.group,
            stats: {
                time: this.mz.timePassed,
                alive: this.mz.protesters.alive,
                arrested: this.mz.protesters.arrested,
                revived: this.mz.protesters.revived,
                left: this.mz.protesters.left
            }
        });

        this.game.camera.unfollow();
        this.mz.groups.menu.killAll();
        this.mz.objects.timer.stop();
        this.mz.events.fieldClickHandler.kill();

        // pause
        this.game.onPause.removeAll();
        this.game.onResume.removeAll();

        // player
        this.mz.objects.player.freeze();

        this.game.input.keyboard.removeKey(Phaser.Keyboard.ESC);
        this.game.input.onDown.remove(this.handleUnpause, this);

        if (mode === END_GAME_WIN) {
            this.mz.objects.audio.applause.play('', 0, 0.25);
            this.mz.arrays.protesters.forEach(sprite => {
                sprite.mz.moodUp(1);
            });
        } else {
            this.mz.objects.audio.boo.play();
            switch (mode) {
                case END_GAME_TIME_OUT: {
                    this.mz.arrays.protesters.forEach(sprite => {
                        sprite.mz.moodDown(1);
                    });
                    break;
                }
                case END_GAME_PROTEST_RATE: {
                    this.launchShield();
                    break;
                }
                case END_GAME_PLAYER_KILLED: {
                    break;
                }
            }
        }
    }

    playRandomSound() {
        if (this.game.rnd.between(0, 200) === 0) {
            this.game.rnd.pick(this.mz.objects.audio.random).play('', 0, 0.25);
        }
    }

    playRandomPunch() {
        this.game.rnd.pick(this.mz.objects.audio.audioPunch).play('', 0, 0.25);
    }

    getDistanceSq(obj1, obj2) {
        return this.game.math.distanceSq(obj1.x, obj1.y, obj2.x, obj2.y);
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
