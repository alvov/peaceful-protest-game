import { SPEED_PROTESTER } from './constants.js';
import Character from './Character.js';

class Protester extends Character {
    constructor({ game, x, y, spriteKey = 'protester' }) {
        super({ game });

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);
        // this.sprite.crop(new Phaser.Rectangle(35, 45, 30, 46));
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-80, -120, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.showPoster = false;
        this.speed = SPEED_PROTESTER;
        this.stayingTimeout = null;
    }

    update() {
        this.posterSprite.exists = this.showPoster;
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, 9);
        if (nextAction === 0) {
            this.stayingTimeout = setTimeout(() => {
                this.wander();
            }, this.game.rnd.between(1000, 3000));

            this.togglePoster(true);
        } else {
            this.sprite.body.onMoveComplete.addOnce(this.wander, this);
            this.moveTo(this.getNextCoords());
        }
    }

    togglePoster(on = !this.showPoster) {
        this.showPoster = on;
    }

    moveTo({ x, y }) {
        this.togglePoster(false);
        super.moveTo({ x, y });
    }

    kill() {
        this.sprite.kill();
        clearTimeout(this.stayingTimeout);
    }
}

export default Protester;
