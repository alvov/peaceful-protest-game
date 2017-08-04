import Player from './../objects/Player.js';
import Protester from './../objects/Protester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';

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
                bgTile: null
            },
            groups: {
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

        // this.mz.map = this.game.add.tilemap('tilemap', 50, 50);

        this.mz.groups.pressFOV = this.game.add.group();
        this.mz.groups.copsFOV = this.game.add.group();

        this.mz.groups.press = this.game.add.group();
        this.mz.groups.cops = this.game.add.group();
        this.mz.groups.obstacles = this.game.add.group();

        for (let i = 0; i < this.game.world.width; i += 100) {
            const borderSprite = this.game.add.sprite(i, 0, 'border');
            borderSprite.scale.set(0.25);
        }

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
            cop.wander();
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
                points: this.mz.level.press.points
            });
            this.mz.groups.press.add(journalist.sprite);
            journalist.wander();
        }

        this.mz.groups.protesters = this.game.add.group();
        for (let i = 0; i < this.mz.level.protesters.count; i++) {
            const protester = new Protester({
                game: this.game,
                ...this.getRandomCoordinates(),
                speed: this.mz.level.protesters.speed,
                spriteKey: `protester${this.game.rnd.between(1, 3)}`,
                activity: this.game.rnd.between(10, 20)
            });
            this.mz.groups.protesters.add(protester.sprite);
            protester.wander();
        }

        this.mz.objects.player = new Player({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            ...this.mz.level.player
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

        // this.scale.setResizeCallback(this.handleResize, this);

        // click on field
        this.mz.eventHandler = this.game.add.sprite(0, 0);
        this.mz.eventHandler.fixedToCamera = true;
        this.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
        this.mz.eventHandler.inputEnabled = true;
        this.mz.eventHandler.input.priorityID = 1;
        this.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {
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
            `${this.mz.score} / ${this.mz.level.winningScore}`
        );

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
                journalist.FOV.exists &&
                this.mz.objects.player.showPoster &&
                journalist.FOV.containsPoint(this.mz.objects.player.sprite.body.center)
            ) {
                newTarget = this.mz.objects.player.sprite;
            }

            journalist.follow(newTarget);
            journalist.update();
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
                    const distanceToProtester = Phaser.Point.distance(copSprite, protester.sprite);
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

    updateTimer() {
        this.mz.timePassed++;
        this.mz.objects.textTimer.setText(this.getFormattedTime(this.mz.timePassed));
    }

    endGame() {
        this.mz.groups.cops.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.mz.groups.press.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.mz.groups.protesters.forEachExists(sprite => {
            sprite.mz.kill();
        });
        this.state.start('EndMenu', true);
    }

    checkWin() {
        if (
            this.mz.score >= this.mz.level.winningScore ||
            this.mz.timePassed > this.mz.level.duration
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

    getFormattedTime(secondsPassed) {
        const s = this.mz.level.duration - secondsPassed;
        const min = Math.floor(s / 60);
        return String(min).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }
}

export default Game;
