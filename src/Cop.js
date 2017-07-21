const ACTIONS = {
    stay: 0,
    walk: 1
};

const SPEED = 30;

class Cop {
    constructor({ game, x, y, FOV }) {
        this.game = game;

        this.FOV = FOV;

        this.sprite = game.add.sprite(x, y, 'cop', 0);
        this.sprite.anchor.set(0.5);

        game.physics.arcade.enable(this.sprite);

        this.stayingTimeout = null;
        this.target = null;

        this.wander();
    }

    update() {
        if (this.target) {
            if (this.FOV.graphics.containsPoint(this.target.sprite.body.center)) {
                this.moveTo(this.target.sprite.body.center);
            } else {
                this.wander();
                this.target = null;
            }
        }

        this.FOV.update({
            x: this.sprite.body.center.x,
            y: this.sprite.body.center.y,
            angle: this.sprite.body.angle,
            mode: this.target ? 'active' : 'normal'
        });
    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, 1);
        switch (nextAction) {
            case ACTIONS.stay:
                this.stayingTimeout = setTimeout(() => {
                    this.wander();
                }, this.game.rnd.between(1000, 3000));
                break;
            case ACTIONS.walk: {
                this.sprite.body.onMoveComplete.addOnce(this.wander, this);
                this.moveTo(this.getNextCoords());
                break;
            }
        }
    }

    moveTo({ x, y }) {
        const distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
        const duration = distance / SPEED * 1000; // ms
        const angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

        this.sprite.body.moveTo(duration, distance, angle);
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
        clearTimeout(this.stayingTimeout);
    }

    getNextCoords() {
        const direction = this.game.rnd.between(0, 3);
        let x = this.sprite.x;
        let y = this.sprite.y;
        if (direction === 0) {
            y = this.game.rnd.between(0, this.sprite.y);
        } else if (direction === 1) {
            x = this.game.rnd.between(this.sprite.x, this.game.world.width);
        } else if (direction === 2) {
            y = this.game.rnd.between(this.sprite.y, this.game.world.height);
        } else if (direction === 3) {
            x = this.game.rnd.between(0, this.sprite.x);
        }
        return { x, y };
    }

    follow(target) {
        this.target = target;
        this.stopMoving();
    }
}

export default Cop;
