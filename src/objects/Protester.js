import Prefab from './Prefab.js';

class Protester extends Prefab {
    constructor({ game, x, y, speed, spriteKey, activity }) {
        super({ game, x, y, speed, spriteKey });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-80, -120, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.activity = activity;
        this.showPoster = false;
        this.stayingTimer = this.game.time.create(false);
    }

    update() {
        this.posterSprite.exists = this.showPoster;
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, this.activity);
        if (nextAction === 0) {
            this.sprite.body.onMoveComplete.addOnce(this.wander, this);
            this.togglePoster(false);
            this.moveTo(this.getNextCoords());
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
            this.stayingTimer.start();

            this.togglePoster(nextAction < 4);
        }
    }

    togglePoster(on = !this.showPoster) {
        this.showPoster = on;
    }

    kill() {
        this.stayingTimer.stop(true);
        this.sprite.body.onMoveComplete.removeAll();

        super.kill();
    }
}

export default Protester;
