import Protester from './Protester.js';
import {
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED,
    PROTESTER_MODE_LEAVE
} from '../constants.js';

class NPCProtester extends Protester {
    constructor({
        game,
        x,
        y,
        group,
        speed,
        spriteKey,
        spriteName,
        mood,
        moodDown,
        moodUp,
        onLeft,
        callbackContext
    }) {
        super({ game, x, y, speed, spriteKey, spriteName });

        this.group = group;
        this.group.add(this.sprite);

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.leavingTimer = this.game.time.create(false);

        this.mood = mood;
        this.initialMood = mood;
        this.moodUpValue = moodUp;
        this.moodDownValue = moodDown;

        this.isBeingCheeredUp = false;

        this.onLeft = onLeft;
        this.callbackContext = callbackContext;

        // initially dead
        this.kill();
    }

    update() {
        if (
            this.mood === 0 &&
            !this.leavingTimer.running &&
            this.mode === PROTESTER_MODE_WANDER
        ) {
            this.leavingTimer.add(this.game.rnd.between(1000, 5000), this.leave, this);
            this.leavingTimer.start();
        } else if (this.mood > 0 && this.leavingTimer.running) {
            this.leavingTimer.stop(true);
        }
        if (this.mood > 0 && this.mode === PROTESTER_MODE_LEAVE) {
            this.setMode(PROTESTER_MODE_WANDER);
        }

        if (this.isBeingCheeredUp) {
            this.updateProgressBar(this.mood);
            this.moodUp(this.moodUpValue);
        } else if (this.mood < 0.75) {
            this.moodDown(this.moodDownValue);
            this.updateProgressBar(0);
        }

        this.showPoster = this.mode !== PROTESTER_MODE_ARRESTED && this.mood >= 0.75;

        this.sprite.tint = 0xffffff;
        if (this.mood >= 0.75) {
            const tintSaturation = (this.mood - 0.75) / (1 - 0.75) * 0.25;
            this.sprite.tint = Phaser.Color.RGBArrayToHex([
                1 - tintSaturation,
                1,
                1 - tintSaturation
            ]);
        } else if (this.mood <= 0.25) {
            const tintSaturation = (1 - this.mood / 0.25) * 0.25;
            this.sprite.tint = Phaser.Color.RGBArrayToHex([
                1,
                1 - tintSaturation,
                1 - tintSaturation
            ]);
        }

        super.update();
    }

    handleLeft() {
        this.sprite.body.onMoveComplete.remove(this.handleLeft, this);
        this.onLeft.call(this.callbackContext);
        this.kill();
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_WANDER: {
                // clean up previous state
                if (this.mode === PROTESTER_MODE_LEAVE) {
                    this.sprite.body.onMoveComplete.remove(this.handleLeft, this);
                    this.stopMovement();
                }

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
                } else if (this.mode === PROTESTER_MODE_LEAVE) {
                    this.sprite.body.onMoveComplete.remove(this.handleLeft, this);
                }
                this.stopMovement();

                break;
            }
            case PROTESTER_MODE_LEAVE: {
                // clean up previous state
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }

                this.setMoveTarget({
                    x: this.sprite.x < this.game.world.width / 2 ? -100 : this.game.world.width + 100,
                    y: this.sprite.y
                });
                this.sprite.body.onMoveComplete.add(this.handleLeft, this);

                break;
            }
        }

        super.setMode(mode);
    }

    wander() {
        this.sprite.body.onMoveComplete.remove(this.wander, this);
        const nextAction = this.game.rnd.between(0, 10);
        if (nextAction === 0) {
            this.sprite.body.onMoveComplete.add(this.wander, this);
            this.setMoveTarget(this.getNextCoords());
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
            this.stayingTimer.start();
        }
    }

    leave() {
        this.setMode(PROTESTER_MODE_LEAVE);
        this.leavingTimer.stop(true);
    }

    toggleCheering(on = !this.isBeingCheeredUp) {
        if (on === this.isBeingCheeredUp) {
            return;
        }

        this.isBeingCheeredUp = on;
    }

    moodUp(value) {
        this.mood = Math.min(this.mood + value, 1);
    }

    moodDown(value) {
        this.mood = Math.max(this.mood - value, 0);
    }

    revive({ x, y, nextCoords, mood = this.initialMood }) {
        this.sprite.body.reset(x, y);
        this.sprite.x = x;
        this.sprite.y = y;

        this.mood = mood;

        super.revive();

        this.setMode(PROTESTER_MODE_WANDER, { coords: nextCoords });
    }

    kill() {
        this.group.add(this.sprite);
        this.stopWandering();

        super.kill();
    }
}

export default NPCProtester;
