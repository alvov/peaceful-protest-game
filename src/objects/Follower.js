import Prefab from './Prefab.js';

class Follower extends Prefab {
    constructor({ game, x, y, speed, spriteKey }) {
        super({ game, x, y, speed, spriteKey });

        this.stayingTimer = this.game.time.create(false);
        this.target = null;
    }

    update() {
        this.FOV.update({
            x: this.sprite.x,
            y: this.sprite.y,
            angle: this.sprite.body.angle,
            mode: this.target ? 'active' : 'normal'
        });
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, 2);
        if (nextAction === 0) {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
            this.stayingTimer.start();
        } else {
            this.sprite.body.onMoveComplete.addOnce(this.wander, this);
            this.moveTo(this.getNextCoords());
        }
    }

    stopMoving() {
        this.sprite.body.onMoveComplete.removeAll(this);
        this.sprite.body.stopMovement(true);
        this.stayingTimer.stop(true);
    }

    follow(target) {
        if (target === this.target) {
            return;
        }

        this.target = target;
        // stop regular moving
        this.stopMoving();

        // if target is gone
        if (!this.target) {
            this.wander();
        }
    }

    kill() {
        this.stopMoving();
        this.sprite.body.onMoveComplete.removeAll();

        super.kill();
    }
}

export default Follower;
