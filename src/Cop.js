import Character from './Character.js';

class Cop extends Character {
    constructor({ game, x, y, FOV, speed }) {
        super({ game, x, y, speed, spriteKey: 'cop' });

        this.FOV = FOV;

        this.stayingTimeout = null;
        this.target = null;
    }

    update() {
        if (this.target) {
            this.moveTo(this.target);
        }

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
            clearTimeout(this.stayingTimeout);
            this.stayingTimeout = setTimeout(() => {
                this.wander();
            }, this.game.rnd.between(1000, 3000));
        } else {
            this.sprite.body.onMoveComplete.addOnce(this.wander, this);
            this.moveTo(this.getNextCoords());
        }
    }

    moveTo({ x, y }) {
        this.speed.current = this.target ? this.speed.running : this.speed.walking;
        super.moveTo({ x, y });
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
        clearTimeout(this.stayingTimeout);
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
        this.sprite.kill();
    }
}

export default Cop;
