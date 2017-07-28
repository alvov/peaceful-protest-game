import Player from './../Player.js';
import Protester from './../Protester.js';
import Cop from './../Cop.js';
import FOV from './../FOV.js';
import {
    WORLD_HEIGHT, WORLD_WIDTH,
    COPS_COUNT,
    PROTESTERS_COUNT,
    WINNING_SCORE,
    TIME,
    FOV_COP_DISTANCE,
    FOV_COP_ANGLE
} from '../constants.js';

class Game {
    init() {
        this.mz = {
            score: 0,
            startTime: null,
            timePassed: 0, // ms
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

    create() {
        this.game.world.resize(WORLD_WIDTH, WORLD_HEIGHT);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'ground01');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.game.add.image(0, 0, this.bitmap);

        this.mz.groups.copsFOV = this.game.add.group();
        this.mz.groups.cops = this.game.add.group();

        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, 0, 'border');
            borderSprite.scale.set(0.25);
        }

        for (let i = 0; i < COPS_COUNT; i++) {
            const copFOV = new FOV({
                game: this.game,
                radius: FOV_COP_DISTANCE,
                angle: FOV_COP_ANGLE
            });
            this.mz.groups.copsFOV.add(copFOV.graphics);

            const cop = new Cop({
                game: this.game,
                ...this.getRandomCoordinates(),
                FOV: copFOV
            });
            this.mz.groups.cops.add(cop.sprite);
            cop.wander();
        }

        this.mz.groups.protesters = this.game.add.group();
        for (let i = 0; i < PROTESTERS_COUNT; i++) {
            const protester = new Protester({
                game: this.game,
                ...this.getRandomCoordinates(),
                spriteKey: `protester${this.game.rnd.between(1, 3)}`,
                activity: this.game.rnd.between(10, 20)
            });
            this.mz.groups.protesters.add(protester.sprite);
            protester.wander();
        }

        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY
        });
        this.game.camera.follow(this.mz.objects.player.sprite);

        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, this.game.world.height - 50, 'border');
            borderSprite.scale.set(0.25);
        }

        this.mz.groups.menu = this.game.add.group();
        this.mz.groups.menu.fixedToCamera = true;
        this.mz.objects.textScore = this.game.add.text(
            this.game.width - 10,
            20,
            `x${this.mz.objects.player.scoreGainSpeed} ${this.mz.objects.player.score} / ${WINNING_SCORE}`,
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textScore.anchor.set(1, 0.5);
        this.mz.objects.textScore.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.mz.groups.menu.add(this.mz.objects.textScore);

        this.mz.objects.textTimer = this.game.add.text(
            this.game.width - 10,
            60,
            this.getFormattedTime(this.mz.timePassed),
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
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

        this.mz.startTime = Date.now();
    }

    update() {
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

        // count score gaining speed
        this.mz.groups.cops.forEachExists(copSprite => {
            if (this.game.physics.arcade.distanceBetween(copSprite, this.mz.objects.player.sprite) < FOV_COP_DISTANCE) {
                this.mz.objects.player.scoreGainSpeed += 1;
            }
        });

        // update score
        this.mz.score = Math.floor(this.mz.objects.player.score / 1000);

        // draw score
        this.mz.objects.textScore.setText(
            `x${this.mz.objects.player.scoreGainSpeed} ${this.mz.score} / ${WINNING_SCORE}`
        );

        // update player
        this.mz.objects.player.update();

        // update protesters
        this.mz.groups.protesters.forEachExists(sprite => {
            sprite.mz.update();
        });

        // update cops
        this.mz.groups.cops.forEachExists(copSprite => {
            if (this.mz.objects.player.showPoster) {
                copSprite.mz.attractionPoint = { ...this.mz.objects.player.sprite.body.center };
            } else {
                copSprite.mz.attractionPoint = null;
            }
            // find target for a cop
            let newTarget = null;
            let distanceToTarget = Infinity;

            for (let i = 0; i <= this.mz.groups.protesters.children.length; i++) {
                const protester = i === this.mz.groups.protesters.children.length ?
                    this.mz.objects.player :
                    this.mz.groups.protesters.getAt(i).mz;
                if (!protester.sprite.exists) {
                    continue;
                }
                if (
                    (
                        protester.sprite === copSprite.mz.target ||
                        protester.showPoster
                    ) &&
                    copSprite.mz.FOV.containsPoint(protester.sprite.body.center)
                ) {
                    const distanceToProtester = this.game.physics.arcade.distanceBetween(copSprite, protester.sprite);
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
        this.game.physics.arcade.overlap(
            this.mz.groups.protesters,
            this.mz.groups.cops,
            ({ mz: protester }, { mz: cop }) => {
                protester.kill();
                cop.follow(null);
            },
            (protesterSprite, { mz: cop }) => {
                return cop.target === protesterSprite;
            }
        );

        // cops vs player collision
        this.game.physics.arcade.overlap(
            this.mz.objects.player.sprite,
            this.mz.groups.cops,
            () => {
                this.endGame();
            },
            (playerSprite, { mz: cop }) => {
                return cop.target === playerSprite;
            }
        );

        // this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.protesters);
        // this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.groups.cops);
        // this.game.physics.arcade.collide(this.mz.groups.cops, this.mz.groups.protesters);
        // this.game.physics.arcade.collide(this.mz.groups.cops);
        // this.game.physics.arcade.collide(this.mz.groups.protesters);

        this.mz.timePassed = Date.now() - this.mz.startTime;
        this.mz.objects.textTimer.setText(this.getFormattedTime(this.mz.timePassed));

        this.checkWin();
    }

    render() {
        // this.game.debug.body(this.mz.objects.player.sprite);
        // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

        // this.mz.groups.cops.forEachExists(sprite => {
        //     this.game.debug.body(sprite);
        // });
        // this.mz.groups.protesters.forEachExists(sprite => {
        //     this.game.debug.body(sprite);
        // });
    }

    handleClick(sprite, pointer) {
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

    endGame() {
        this.mz.groups.cops.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.mz.groups.protesters.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.state.start('EndMenu', true);
    }

    checkWin() {
        if (
            this.mz.score >= WINNING_SCORE ||
            this.mz.timePassed > TIME * 1000
        ) {
            this.endGame();
        }
    }

    getRandomCoordinates() {
        return {
            x: Math.max(100, Math.min(this.game.world.width - 100, this.game.world.randomX)),
            y: Math.max(100, Math.min(this.game.world.height - 100, this.game.world.randomY))
        };
    }

    getFormattedTime(ms) {
        const s = TIME - Math.floor(ms / 1000);
        const min = Math.floor(s / 60);
        return String(min).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }
}

export default Game;
