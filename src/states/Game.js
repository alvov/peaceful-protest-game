import Player from './../Player.js';
import Protester from './../Protester.js';
import Cop from './../Cop.js';
import CopFOV from './../CopFOV.js';
import { COPS_COUNT, PROTESTERS_COUNT, WINNING_SCORE } from '../constants.js';

class Game {
    preload() {
        this.mz = {
            score: 0,
            eventHandler: null,
            objects: {
                player: null,
                textScore: null
            },
            groups: {
                protesters: null,
                cops: null,
                menu: null
            }
        };
    }

    create() {
        const bgTile = this.game.add.tileSprite(0, 0, 1024, 768, 'ground01');
        bgTile.tileScale.set(0.2);

        this.game.add.image(0, 0, this.bitmap);

        this.mz.groups.copsFOV = this.game.add.group();
        this.mz.groups.cops = this.game.add.group();

        for (let i = 0; i < COPS_COUNT; i++) {
            const copFOV = new CopFOV({ game: this.game });
            this.mz.groups.copsFOV.add(copFOV.graphics);

            const cop = new Cop({
                game: this.game,
                x: this.game.rnd.between(100, this.game.world.width - 100),
                y: this.game.rnd.between(100, this.game.world.height - 100),
                FOV: copFOV
            });
            this.mz.groups.cops.add(cop.sprite);
            cop.wander();
        }

        this.mz.groups.protesters = this.game.add.group();
        for (let i = 0; i < PROTESTERS_COUNT; i++) {
            const protester = new Protester({
                game: this.game,
                x: this.game.rnd.between(100, this.game.world.width - 100),
                y: this.game.rnd.between(100, this.game.world.height - 100)
            });
            this.mz.groups.protesters.add(protester.sprite);
            protester.wander();
        }

        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY
        });

        this.mz.groups.menu = this.game.add.group();
        this.mz.objects.textScore = this.game.add.text(
            this.game.world.width - 10,
            20,
            `${this.mz.objects.player.score} / ${WINNING_SCORE}`,
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textScore.anchor.set(1, 0.5);
        this.mz.groups.menu.add(this.mz.objects.textScore);

        // click on field
        this.mz.eventHandler = this.game.add.sprite(0, 0);
        this.mz.eventHandler.fixedToCamera = true;
        this.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
        this.mz.eventHandler.inputEnabled = true;
        this.mz.eventHandler.input.priorityID = 0;
        this.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {
        this.mz.objects.player.update();

        this.mz.score = Math.floor(this.mz.objects.player.score / 1000);

        this.mz.objects.textScore.setText(`${this.mz.score} / ${WINNING_SCORE}`);

        this.mz.groups.protesters.forEach(sprite => {
            sprite.mz.update();
        });

        this.mz.groups.cops.forEach(copSprite => {
            const copFOV = copSprite.mz.FOV;
            let target = null;
            let distanceToTarget = Infinity;
            if (
                this.mz.objects.player.showPoster &&
                copFOV.graphics.containsPoint(this.mz.objects.player.sprite.body.center)
            ) {
                target = this.mz.objects.player.sprite;
                distanceToTarget = this.game.physics.arcade.distanceBetween(copSprite, target);
            }

            this.mz.groups.protesters.forEach(protesterSprite => {
                if (!protesterSprite.exists) {
                    return;
                }
                if (
                    protesterSprite.mz.showPoster &&
                    copFOV.graphics.containsPoint(protesterSprite.body.center)
                ) {
                    const distanceToProtester = this.game.physics.arcade.distanceBetween(copSprite, protesterSprite);
                    if (distanceToProtester < distanceToTarget) {
                        target = protesterSprite;
                        distanceToTarget = distanceToProtester;
                    }
                }
            });

            if (target) {
                copSprite.mz.follow(target);
            }

            copSprite.mz.update();
        });

        this.game.physics.arcade.overlap(
            this.mz.groups.protesters,
            this.mz.groups.cops,
            ({ mz: protester }, { mz: cop }) => {
                protester.kill();
                cop.target = null;
                cop.wander();
            },
            (protesterSprite, { mz: cop }) => {
                return cop.target === protesterSprite;
            }
        );

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

        this.checkWin();
    }

    render() {
        // this.game.debug.body(this.mz.objects.player.sprite);
        // this.mz.groups.cops.forEach(sprite => {
        //     this.game.debug.body(sprite);
        // });
        // this.mz.groups.protesters.forEach(sprite => {
        //     this.game.debug.body(sprite);
        // });
    }

    handleClick(sprite, pointer) {
        this.mz.objects.player.moveTo({
            x: pointer.x,
            y: pointer.y
        });
    }

    endGame() {
        this.mz.groups.cops.forEach(sprite => {
            sprite.mz.kill();
        });
        this.state.start('EndMenu', true);
    }

    checkWin() {
        if (this.mz.score >= WINNING_SCORE) {
            this.endGame();
        }
    }
}

export default Game;
