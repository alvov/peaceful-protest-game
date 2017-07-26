import { SPEED_COP_WALKING, SPEED_COP_RUNNING } from './constants.js';
import Character from './Character.js';

class Cop extends Character {
    constructor({ game, x, y, FOV }) {
        super({ game });

        this.FOV = FOV;

        this.sprite = game.add.sprite(x, y, 'cop', 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        game.physics.arcade.enable(this.sprite);

        this.stayingTimeout = null;
        this.target = null;
    }

    update() {
        if (this.target) {
            if (this.FOV.graphics.containsPoint(this.target)) {
                this.moveTo(this.target);
            } else {
                this.wander();
                this.target = null;
            }
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
            this.stayingTimeout = setTimeout(() => {
                this.wander();
            }, this.game.rnd.between(1000, 3000));
        } else {
            this.sprite.body.onMoveComplete.addOnce(this.wander, this);
            this.moveTo(this.getNextCoords());
        }
    }

    moveTo({ x, y }) {
        this.speed = this.target ? SPEED_COP_RUNNING : SPEED_COP_WALKING;
        super.moveTo({ x, y });
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
        clearTimeout(this.stayingTimeout);
    }

    follow(target) {
        this.target = target;
        // stop regular moving
        this.stopMoving();
    }

    kill() {
        this.stopMoving();
        this.sprite.kill();
    }
}

export default Cop;
