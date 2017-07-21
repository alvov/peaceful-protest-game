import Protester from './../Protester.js';
import Cop from './../Cop.js';
import CopFOV from './../CopFOV.js';

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
            const copFOV = new CopFOV({ game: this.game });
            const cop = new Cop({
                game: this.game,
                x: this.game.rnd.between(0, this.game.world.width),
                y: this.game.rnd.between(0, this.game.world.height),
                FOV: copFOV
            });
            this.game.mz.objects.cops.push(cop);
        }

        this.game.mz.objects.protester = new Protester({
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

export default Game;
