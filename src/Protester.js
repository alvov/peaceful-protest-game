const SPEED = 80;

class Protester {
    constructor({ game, x, y }) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, 'protester', 0);
        this.sprite.anchor.set(0.5);
        // this.sprite.crop(new Phaser.Rectangle(
        //     this.sprite.width / 4,
        //     0,
        //     3 * this.sprite.width / 4,
        //     this.sprite.height
        // ));
        // this.sprite.scale.set(0.5);

        this.setActive(true);

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.events.onInputUp.add(this.handleClick, this);

        game.physics.arcade.enable(this.sprite);

        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.onMoveComplete.add(this.stopMoving, this);
        // this.sprite.body.angularVelocity = 360;
    }

    update() {

    }

    handleClick() {
        if (this.sprite.body.isMoving) {
            this.stopMoving();
        }
        if (!this.isActive) {
            this.setActive(true);
        }
    }

    setActive(on) {
        if (on) {
            this.isActive = true;
            this.sprite.frame = 1;
        } else {
            this.isActive = false;
            this.sprite.frame = 0;
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
}

export default Protester;
