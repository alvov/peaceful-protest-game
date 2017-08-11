import Prefab from './Prefab.js';
import FOV from './FOV.js';
import {
    FOV_MODE_NORMAL,
    FOV_MODE_CAPTURE,
    JOURNALIST_MODE_WANDER,
    JOURNALIST_MODE_SHOOTING
} from '../constants.js';

class Journalist extends Prefab {
    constructor({ game, x, y, speed, fov, ...props }) {
        super({ game, x, y, speed, spriteKey: 'journalist', props });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: {
                [FOV_MODE_NORMAL]: 0xdddddd,
                [FOV_MODE_CAPTURE]: 0xffffff
            }
        });
        fov.group.add(this.FOV.graphics);

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.shootingTimer = this.game.time.create();
        this.duration = this.props.duration * 1000;

        this.target = null;
    }

    update() {
        if (this.mode === JOURNALIST_MODE_SHOOTING) {
            this.turnTo(this.target);
        }
        this.updateProgressBar(this.shootingTimer.running ? this.shootingTimer.ms / this.duration : 0);

        this.FOV.update({
            x: this.sprite.x,
            y: this.sprite.y,
            angle: this.sprite.body.angle,
            mode: this.mode === JOURNALIST_MODE_SHOOTING ? FOV_MODE_CAPTURE : FOV_MODE_NORMAL
        });

        super.update();
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case JOURNALIST_MODE_WANDER: {
                if (this.mode === JOURNALIST_MODE_SHOOTING) {
                    this.target = null;
                    this.shootingTimer.stop(true);
                }
                this.wander();
                break;
            }
            case JOURNALIST_MODE_SHOOTING: {
                const { target } = props;
                if (this.mode === JOURNALIST_MODE_SHOOTING && this.target === target) {
                    break;
                } else if (this.mode === JOURNALIST_MODE_WANDER) {
                    this.stopWandering();
                    this.stopMovement();
                }
                this.target = target;

                this.shootingTimer.add(this.duration, this.finishShooting, this);
                this.shootingTimer.start();

                break;
            }
        }

        super.setMode(mode);
    }

    wander() {
        this.sprite.body.onMoveComplete.remove(this.wander, this);
        const nextAction = this.game.rnd.between(0, 2);
        if (nextAction !== 0) {
            this.sprite.body.onMoveComplete.add(this.wander, this);
            this.setMoveTarget(this.getNextCoords());
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
            this.stayingTimer.start();
        }
    }

    turnTo({ x, y }) {
        this.sprite.body.angle = Phaser.Point.angle({ x, y }, this.sprite);
    }

    finishShooting() {
        const { onFinishShooting, callbackContext, points } = this.props;
        onFinishShooting.call(callbackContext, points);

        this.FOV.kill();

        this.setMode(JOURNALIST_MODE_WANDER);
    }

    kill() {
        this.stopWandering();
        this.FOV.kill();

        super.kill();
    }
}

export default Journalist;
