import Player from './../objects/Player.js';
import NPCProtester from './../objects/NPCProtester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';
import SWATSquad from '../objects/SWATSquad.js';
import Shield from '../objects/Shield.js';
import DroppedPoster from '../objects/DroppedPoster.js';
import GameInterface from '../objects/GameInterface.js';
import PauseMenu from './../objects/PauseMenu.js';
import EndMenu from './../objects/EndMenu.js';

import {
    FIELD_OFFSET,
    END_GAME_PLAYER_KILLED,
    END_GAME_TIME_OUT,
    END_GAME_PROTEST_RATE,
    END_GAME_WIN,
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    COP_MODE_ENTER,
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    SHIELD_MODE_DRIVE,
    PROTESTER_MODE_ARRESTED,
    JOURNALIST_MODE_SHOOTING,
    JOURNALIST_MODE_WANDER
} from '../constants.js';

import {
    getFormattedTime
} from '../utils.js';

class Game {
    init(level) {
        this.mz = {
            level,
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
            postersToRevive: [],
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
                borders: [],
                droppedPosters: []
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

    create() {
        // this.game.time.advancedTiming = true;

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
            this.game.add.audio('croud')
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
            const autoSprite = this.game.add.sprite(i, 120, 'auto');
            autoSprite.anchor.set(0, 1);
            this.mz.groups.cars.add(autoSprite);
        }

        this.mz.groups.actors = this.game.add.group();

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

        // top borders
        for (let i = 0; i < this.game.world.width; i += 100) {
            const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
            const borderTop = this.game.add.sprite(i, FIELD_OFFSET.top - 25, 'border', 0, this.mz.groups.actors);
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
                value: 300
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
        this.createProtesters();

        // interface
        this.mz.objects.interface = new GameInterface({
            game: this.game,
            onTogglePoster: () => {
                this.mz.objects.player.togglePoster();
            }
        });

        // bottom borders
        for (let i = 0; i < this.game.world.width; i += 100) {
            const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
            const borderBottom = this.game.add.sprite(i, this.game.world.height - 25, 'border', 0, this.mz.groups.actors);
            borderBottom.anchor.set(0, 0.5);
            this.game.physics.arcade.enable(borderBottom);
            borderBottom.body.setSize(borderBottom.width, offset, 0, borderBottom.height - offset);
            borderBottom.body.immovable = true;
            this.mz.arrays.borders.push(borderBottom);
        }

        this.mz.objects.timer = this.game.time.create();
        this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        this.mz.objects.timer.start();

        // pause menu
        this.mz.objects.pauseMenu = new PauseMenu({ game: this.game });

        // events

        // click on field
        const fieldClickHandler = this.game.add.sprite(0, 0);
        fieldClickHandler.fixedToCamera = true;
        fieldClickHandler.scale.set(this.game.width, this.game.height);
        fieldClickHandler.inputEnabled = true;
        fieldClickHandler.input.priorityID = 1;
        fieldClickHandler.events.onInputDown.add(this.handleTap, this);
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

        // update player
        this.mz.objects.player.update();

        // update protesters
        const lastTickMeanMood = this.mz.protesters.meanMood;
        this.mz.score = 0;
        this.mz.protesters.meanMood = 0;
        this.mz.protesters.alive = 0;
        const posterProtesters = this.mz.arrays.protesters.filter(x => x.mz.showPoster);

        if (this.mz.objects.player.showPoster)
        {
            posterProtesters.push(this.mz.objects.player.sprite);
        }
        for (let i = 0; i < this.mz.arrays.protesters.length; i++) {
            const sprite = this.mz.arrays.protesters[i];
            if (!sprite.alive) {
                if (this.mz.protesters.toRevive !== 0) {
                    const mood = this.game.math.clamp(
                        lastTickMeanMood,
                        this.mz.level.protesters.mood,
                        (this.mz.level.winningThreshold - 1) / 100
                    );
                    this.reviveProtester({
                        sprite,
                        mood
                    });
                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += mood;
                }
            } else {
                sprite.mz.update();

                let closeToPoster = false;
                for (const protesterSprite of posterProtesters)
                {
                    if (
                        this.getDistanceSq(sprite, protesterSprite) <= this.mz.objects.player.radius.actualSq
                    )
                    {
                        closeToPoster = true;
                        break;
                    }
                }
                sprite.mz.toggleCheering(
                    !this.mz.gameEnded &&
                    closeToPoster
                );

                this.mz.protesters.alive++;
                this.mz.protesters.meanMood += sprite.mz.mood;
            }

        }

        this.mz.protesters.toRevive = 0;

        this.mz.protesters.meanMood = this.mz.protesters.alive !== 0 ?
            this.mz.protesters.meanMood / this.mz.protesters.alive :
            0;
        this.mz.score = 100 * this.game.math.clamp(
            100 * (
                0.5 * this.mz.protesters.alive / this.mz.level.protesters.count.max +
                0.5 * this.mz.protesters.meanMood
            ) / this.mz.level.winningThreshold,
            0,
            1
        );

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
        this.mz.arrays.press.forEach(journalistSprite => {
            const journalist = journalistSprite.mz;
            let newTarget = null;

            if (
                !this.mz.gameEnded &&
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
        if (this.mz.cops.alive < this.mz.arrays.cops.length) {
            // revive if necessary
            const copsRequired = this.getCopsRequiredNumber();
            if (copsRequired > this.mz.cops.alive) {
                this.reviveCops(copsRequired - this.mz.cops.alive);
                this.mz.cops.alive = copsRequired;
            }
        }

        for (let i = 0; i < this.mz.cops.alive; i++) {
            const copSprite = this.mz.arrays.cops[i];
            const cop = copSprite.mz;

            if (cop.mode !== COP_MODE_CONVOY && cop.mode !== COP_MODE_ENTER) {
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
                        let distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, protester.sprite.body.center);
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
        }

        // protesters collision
        for (let i = 0; i <= this.mz.arrays.protesters.length; i++) {
            const protesterSprite = i === this.mz.arrays.protesters.length ?
                this.mz.objects.player.sprite :
                this.mz.arrays.protesters[i];

            if (
                !protesterSprite.alive ||
                protesterSprite.mz.mode === PROTESTER_MODE_ARRESTED
            ) {
                continue;
            }

            const protesterBounds = protesterSprite.getBounds();

            // vs cops
            for (let j = 0; j < this.mz.arrays.cops.length; j++) {
                const copSprite = this.mz.arrays.cops[j];
                if (
                    !copSprite.alive ||
                    copSprite.mz.target !== protesterSprite ||
                    !Phaser.Rectangle.intersects(protesterBounds, copSprite.getBounds())
                ) {
                    continue;
                }
                this.proceedToJail(protesterSprite, copSprite);
            }

            // vs swat
            if (this.mz.objects.swat) {
                for (let j = 0; j < this.mz.objects.swat.sprites.length; j++) {
                    const swatSprite = this.mz.objects.swat.sprites[j];
                    if (
                        swatSprite.children.length !== 0 ||
                        swatSprite.x <= 0 ||
                        swatSprite.x >= this.game.world.width ||
                        !Phaser.Rectangle.intersects(protesterBounds, swatSprite.getBounds())
                    ) {
                        continue;
                    }
                    this.arrest(protesterSprite, swatSprite);
                }
            }

            // vs shield
            if (this.mz.gameEnded) {
                this.game.physics.arcade.collide(
                    protesterSprite,
                    this.mz.objects.shield.sprite,
                    protesterSprite => {
                        protesterSprite.body.collideWorldBounds = false;
                        if (protesterSprite.health === 1) {
                            this.beatUpProtester(protesterSprite);
                        }
                        protesterSprite.mz.dropPosterRnd();
                    }
                );
            }
        }

        // player collisions
        if (
            this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED &&
            !this.mz.gameEnded
        ) {
            // vs posters
            for (let i = 0; i < this.mz.arrays.droppedPosters.length; i++) {
                const droppedPoster = this.mz.arrays.droppedPosters[i];
                if (!droppedPoster.sprite.alive) {
                    continue;
                }
                if (
                    Phaser.Rectangle.intersects(droppedPoster.sprite.getBounds(), this.mz.objects.player.sprite.getBounds())
                ) {
                    this.mz.objects.audio.pick.play('', 0, 0.25);
                    this.mz.objects.player.powerUp();
                    droppedPoster.kill();
                }
            }
        }

        // player vs borders collision
        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.arrays.borders
        );

        // update posters
        this.mz.arrays.droppedPosters.forEach(droppedPoster => {
            if (droppedPoster.sprite.alive) {
                droppedPoster.update();
            }
        });
        this.mz.postersToRevive.forEach(this.createPoster, this);
        this.mz.postersToRevive = [];

        this.mz.groups.actors.sort('y', Phaser.Group.SORT_ASCENDING);

        if (!this.mz.gameEnded) {
            this.checkWin();
        }

        // events
        if (this.mz.events.keys.esc.justUp) {
            this.game.paused = !this.game.paused;
        }
    }

    render() {
        // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
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

    handleTap(sprite, pointer) {
        const coords = {
            x: pointer.x + this.game.camera.x,
            y: pointer.y + this.game.camera.y
        };
        const player = this.mz.objects.player;
        player.resetClickSpeed();
        player.moveTo(coords, { callback: () => player.resetClickSpeed(true) });
    }

    handleProtesterLeft() {
        this.mz.protesters.left++;
    }

    handleDropPoster(coords) {
        // defer poster creation to the end of update method
        this.mz.postersToRevive.push(coords);
    }

    handleFinishShooting() {
        this.mz.protesters.toRevive += this.mz.level.protesters.count.add;
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
        this.mz.objects.interface.updateTimer(getFormattedTime(this.mz.level.duration - this.mz.timePassed));
    }

    createCops() {
        const totalCount = this.mz.level.cops.count[this.mz.level.cops.count.length - 1][1];
        this.mz.cops.alive = this.getCopsRequiredNumber();
        for (let i = 0; i < totalCount; i++) {
            const cop = new Cop({
                game: this.game,
                ...this.getRandomCoordinates(),
                alive: i < this.mz.cops.alive,
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

            if (i < this.mz.cops.alive) {
                cop.setMode(COP_MODE_WANDER);
            }
        }
    }

    reviveCops(count) {
        for (let i = 0; i < count; i++) {
            const index = i + this.mz.cops.alive;
            const copSprite = this.mz.arrays.cops[index];
            copSprite.mz.revive(Boolean(index % 2));
        }
    }

    getCopsRequiredNumber() {
        let result = 0;
        for (let i = 0; i < this.mz.level.cops.count.length; i++) {
            if (this.mz.score <= this.mz.level.cops.count[i][0]) {
                result = this.mz.level.cops.count[i][1];
                break;
            }
        }
        return result;
    }

    createProtesters() {
        const count = this.mz.level.protesters.count.max;
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
                dropPoster: this.mz.level.protesters.poster.drop,
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
        let isRevived = false;
        for (let i = 0; i < this.mz.arrays.droppedPosters.length; i++) {
            const droppedPoster = this.mz.arrays.droppedPosters[i];
            if (!droppedPoster.sprite.alive) {
                droppedPoster.revive(coords);
                isRevived = true;
                break;
            }
        }
        if (!isRevived) {
            this.mz.arrays.droppedPosters.push(
                new DroppedPoster({
                    game: this.game,
                    group: this.mz.groups.droppedPosters,
                    ...coords,
                    alive: this.mz.level.protesters.poster.alive
                })
            );
        }
    }

    proceedToJail(protesterSprite, copSprite) {
        let closestCarCoords = null;
        let minDistanceSq = Infinity;
        this.mz.groups.cars.forEach(carSprite => {
            const carCoords = {
                x: (carSprite.right + carSprite.left) / 2,
                y: carSprite.bottom + 20
            };
            const distanceToCarSq = this.getDistanceSq(copSprite, carCoords);
            if (distanceToCarSq < minDistanceSq) {
                closestCarCoords = carCoords;
                minDistanceSq = distanceToCarSq;
            }
        });

        this.arrest(protesterSprite, copSprite);

        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
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

        if (protesterSprite.name !== 'player') {
            this.mz.protesters.arrested++;
        }
    }

    launchSWAT() {
        this.mz.timers.swat.stop(true);

        this.mz.objects.audio.boo.play();

        const direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';
        this.mz.objects.swat.setMode(SWAT_MODE_HUNT, {
            x: direction === 'ltor' ?
                -100 :
                this.game.world.width + 100,
            y: this.getRandomCoordinateY(),
            target: {
                x: direction === 'ltor' ?
                    this.game.world.width + 100:
                    -100,
                y: this.getRandomCoordinateY()
            }
        });
    }

    launchShield() {
        this.mz.objects.shield.setMode(SHIELD_MODE_DRIVE, {
            y: this.game.height / 2 + this.game.camera.y
        });
    }

    checkWin() {
        if (this.mz.timePassed > this.mz.level.duration) {
            this.endGame(END_GAME_TIME_OUT);
        } else if (this.mz.score === 0) {
            this.endGame(END_GAME_PROTEST_RATE);
        } else if (this.mz.score === 100) {
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
                    this.launchShield();
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
        if (this.game.rnd.between(0, 600 * (1 / this.mz.objects.audio.random.length)) === 0) {
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
        return this.game.math.clamp(
            this.game.world.randomX,
            FIELD_OFFSET.left,
            this.game.world.width - FIELD_OFFSET.right
        );
    }

    getRandomCoordinateY() {
        return this.game.math.clamp(
            this.game.world.randomY,
            FIELD_OFFSET.top,
            this.game.world.height - FIELD_OFFSET.bottom
        );
    }
}

export default Game;
