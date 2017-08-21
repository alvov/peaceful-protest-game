import Prefab from './Prefab.js';
import {
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

class Protester extends Prefab {
    constructor({ game, x, y, speed, spriteKey, spriteName, ...props }) {
        super({ game, x, y, speed, spriteKey, spriteName, props });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.sprite.checkWorldBounds = true;

        this.injurySprite = this.sprite.addChild(
            this.game.make.sprite(
                -15,
                -this.sprite.height / 2 - 2,
                'injury'
            )
        );
        this.injurySprite.bringToTop();
        this.injurySprite.exists = false;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-40, -60, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.audioScream = null;
        if (this.props.audioKey) {
            this.audioScream = this.game.add.audio(this.props.audioKey);
        }

        this.showPoster = false;

        // events
        this.sprite.events.onOutOfBounds.add(this.kill, this);
    }

    update() {
        this.injurySprite.exists = this.sprite.health !== 1;
        this.posterSprite.exists = this.showPoster;

        super.update();
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_WANDER: {
                const { coords } = props;
                if (coords) {
                    this.sprite.body.onMoveComplete.add(this.wander, this);
                    this.setMoveTarget(coords);
                } else {
                    this.wander();
                }
                break;
            }
            case PROTESTER_MODE_ARRESTED: {
                const { x, y } = props;
                this.sprite.x = x;
                this.sprite.y = y;

                // clean up previous state
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }
                this.togglePoster(false);
                this.stopMovement();
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
        if (this.showPoster !== on && on && this.audioScream) {
            this.audioScream.play();
        }
        this.showPoster = on;
    }

    revive({ x, y, nextCoords }) {
        this.sprite.body.reset(x, y);
        this.sprite.x = x;
        this.sprite.y = y;

        super.revive();

        this.setMode(PROTESTER_MODE_WANDER, { coords: nextCoords });
    }

    kill() {
        this.stopWandering();

        super.kill();
    }
}

export default Protester;
