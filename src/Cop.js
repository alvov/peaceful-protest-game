const ACTIONS = {
    stay: 0,
    walk: 1
};

const SPEED = 30;

class Cop {
    constructor({ game, x, y }) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, 'cop', 0);
        this.sprite.anchor.set(0.5);

        game.physics.arcade.enable(this.sprite);

        this.wander();
        this.stayingTimeout = null;
    }

    update() {

    }

    wander() {
        this.sprite.body.onMoveComplete.removeAll();
        const nextAction = this.game.rnd.between(0, 1);
        switch (nextAction) {
            case ACTIONS.walk: {
                this.sprite.body.onMoveComplete.addOnce(this.wander, this);
                this.moveTo(this.getNextCoords());
            }
            case ACTIONS.stay:
                this.stayingTimeout = setTimeout(() => {
                    this.wander();
                }, this.game.rnd.between(1000, 3000));
            default:
                // do nothing
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
}

export default Cop;
