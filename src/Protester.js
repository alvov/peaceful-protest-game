const SPEED = 80;

class Protester {
    constructor({ game, x, y }) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, 'protester', 0);
        this.sprite.anchor.set(0.5);
        // this.sprite.crop(new Phaser.Rectangle(35, 45, 30, 46));
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.events.onInputUp.add(this.handleClick, this);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;

        this.showPoster = false;
        this.score = 0;
        this.showedPosterAt = null;

        // this.sprite.body.onMoveComplete.add(this.stopMoving, this);
    }

    update() {
        if (this.showPoster) {
            this.sprite.frame = 1;
        } else {
            this.sprite.frame = 0;
        }

        if (this.showedPosterAt) {
            this.flushScore();
            this.showedPosterAt = Date.now();
        }
    }

    handleClick() {
        if (this.sprite.body.isMoving) {
            this.stopMoving();
        } else {
            this.togglePoster();
        }
    }

    togglePoster(on = !this.showPoster) {
        if (on === this.showPoster) {
            return;
        }

        // count score
        if (on) {
            this.showedPosterAt = Date.now();
        } else {
            this.flushScore();
        }

        this.showPoster = on;
    }

    flushScore() {
        this.score += Date.now() - this.showedPosterAt;
        this.showedPosterAt = null;
    }

    moveTo({ x, y }) {
        this.togglePoster(false);

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
