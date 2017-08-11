import Prefab from './Prefab.js';
import {
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

class Protester extends Prefab {
    constructor({ game, x, y, speed, spriteKey, ...props }) {
        super({ game, x, y, speed, spriteKey, props });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.injurySprite = this.sprite.addChild(
            this.game.make.sprite(
                -30,
                -this.sprite.height / 2 / this.sprite.scale.y - 2,
                'injury'
            )
        );
        this.injurySprite.bringToTop();
        this.injurySprite.exists = false;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-80, -120, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.audioScream = this.game.add.audio(this.props.audioKey);

        this.showPoster = false;
    }

    update() {
        this.injurySprite.exists = this.sprite.health !== 1;
        this.posterSprite.exists = this.showPoster;

        super.update();
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_WANDER: {
                this.wander();
                break;
            }
            case PROTESTER_MODE_ARRESTED: {
                const { jailCoords, speed } = props;
                // clean up previous state
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }
                this.togglePoster(false);
                this.speed.current = speed;
                this.setMoveTarget(jailCoords);
                break;
            }
        }

        super.setMode(mode);
    }

    wander() {
        this.sprite.body.onMoveComplete.remove(this.wander, this);
        const { activity } = this.props;
        const nextAction = this.game.rnd.between(0, activity);
        if (nextAction === 0) {
            this.sprite.body.onMoveComplete.add(this.wander, this);
            this.togglePoster(false);
            this.setMoveTarget(this.getNextCoords());
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
            this.stayingTimer.start();

            this.togglePoster(nextAction <= activity / 5);
        }
    }

    togglePoster(on = !this.showPoster) {
        if (this.showPoster !== on && on) {
            this.audioScream.play();
        }
        this.showPoster = on;
    }

    kill() {
        this.stopWandering();

        super.kill();
    }
}

export default Protester;
