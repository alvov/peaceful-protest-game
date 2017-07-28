import { SPEED_PROTESTER } from './constants.js';
import Character from './Character.js';

class Protester extends Character {
    constructor({ game, x, y, spriteKey, activity }) {
        super({ game, x, y, spriteKey });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-80, -120, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.activity = activity;
        this.showPoster = false;
        this.speed = SPEED_PROTESTER;
        this.stayingTimeout = null;
    }

    update() {
        this.posterSprite.exists = this.showPoster;
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, this.activity);
        if (nextAction === 0) {
            clearTimeout(this.stayingTimeout);
            this.stayingTimeout = setTimeout(() => {
                this.wander();
            }, this.game.rnd.between(3000, 6000));

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
        if (this.sprite.body.moves) {

        }
        this.togglePoster(false);
        super.moveTo({ x, y });
    }

    kill() {
        clearTimeout(this.stayingTimeout);
        this.sprite.body.onMoveComplete.removeAll();
        this.sprite.kill();
    }
}

export default Protester;
