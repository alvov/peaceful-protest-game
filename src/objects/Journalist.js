import Prefab from './Prefab.js';
import FOV from './FOV.js';
import {
    FOV_MODE_NORMAL,
    FOV_MODE_CAPTURE,
    JOURNALIST_MODE_WANDER,
    JOURNALIST_MODE_SHOOTING
} from '../constants.js';

class Journalist extends Prefab {
    constructor({ game, x, y, speed, fov, shootingDuration, cooldownDuration, onFinishShooting, callbackContext }) {
        super({ game, x, y, speed, spriteKey: 'journalist' });

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

        this.shootingTimer = this.game.time.create(false);
        this.shootingDuration = shootingDuration * 1000;

        this.cooldownTimer = this.game.time.create(false);
        this.cooldownDuration = cooldownDuration * 1000;

        this.onFinishShooting = onFinishShooting;
        this.callbackContext = callbackContext;

        this.audioFinishShooting = this.game.add.audio('applause');

        this.target = null;
    }

    update() {
        if (this.mode === JOURNALIST_MODE_SHOOTING) {
            this.turnTo(this.target);
        }
        if (this.shootingTimer.running) {
            this.updateProgressBar(this.shootingTimer.ms / this.shootingDuration);
        } else if (this.cooldownTimer.running) {
            this.updateProgressBar(this.cooldownTimer.ms / this.cooldownDuration, 0xff0000);
        } else {
            this.updateProgressBar(0);
        }

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

                this.shootingTimer.add(this.shootingDuration, this.shootingTimerCallback, this);
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
        this.sprite.body.angle = this.game.math.angleBetweenPoints(this.sprite, { x, y });
    }

    shootingTimerCallback() {
        this.onFinishShooting.call(this.callbackContext);

        this.FOV.kill();

        this.setMode(JOURNALIST_MODE_WANDER);

        this.shootingTimer.stop(true);
        this.cooldownTimer.add(this.cooldownDuration, this.cooldownTimerCallback, this);
        this.cooldownTimer.start();

        this.audioFinishShooting.play('', 0, 0.25);
    }

    cooldownTimerCallback() {
        this.FOV.revive();
        this.cooldownTimer.stop(true);
    }

    kill() {
        this.cooldownTimer.stop(true);
        this.shootingTimer.stop(true);
        this.stopWandering();
        this.FOV.kill();

        super.kill();
    }
}

export default Journalist;
