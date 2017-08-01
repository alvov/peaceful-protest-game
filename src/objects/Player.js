import Protester from './Protester.js';

const DEFAULT_SCORE_GAIN_SPEED = 1;

class Player extends Protester {
    constructor({ game, x, y, speed }) {
        super({ game, x, y, speed, spriteKey: 'player' });

        this.score = 0;
        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        this.showedPosterAt = null;

        this.sprite.body.immovable = true;

        this.moveTarget = null;

        // events
        this.sprite.events.onInputUp.add(this.handleClick, this);
        this.sprite.input.priorityID = 2;

        this.sprite.body.onMoveComplete.add(this.resetSpeed, this);

        this.game.onPause.add(this.handleGamePause, this);
        this.game.onResume.add(this.handleGameResume, this);

        this.keys = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        };
    }

    update() {
        super.update();

        if (this.showedPosterAt) {
            this.flushScore();
            this.showedPosterAt = Date.now();
        }

        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;

        if (
            this.keys.up.isDown ||
            this.keys.down.isDown ||
            this.keys.left.isDown ||
            this.keys.right.isDown
        ) {
            this.stopMoving();
            this.togglePoster(false);
            let inputSpeed = this.speed.current / 1000 * 16;

            if (
                this.keys.up.isDown && this.keys.left.isDown ||
                this.keys.up.isDown && this.keys.right.isDown ||
                this.keys.down.isDown && this.keys.left.isDown ||
                this.keys.down.isDown && this.keys.right.isDown
            ) {
                inputSpeed *= 0.7;
            }
            if (this.keys.up.isDown) {
                this.sprite.y -= inputSpeed;
            }
            if (this.keys.down.isDown) {
                this.sprite.y += inputSpeed;
            }
            if (this.keys.left.isDown) {
                this.sprite.x -= inputSpeed;
            }
            if (this.keys.right.isDown) {
                this.sprite.x += inputSpeed;
            }
        }
        if (this.keys.space.justDown) {
            this.togglePoster();
        }
    }

    handleGamePause() {
        if (this.showedPosterAt) {
            this.flushScore();
        }
    }

    handleGameResume() {
        if (this.showPoster) {
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

        super.togglePoster(on);
    }

    moveTo({ x, y }) {
        if (
            this.sprite.body.moves &&
            this.moveTarget &&
            Math.abs(this.moveTarget.x - x) < 30 &&
            Math.abs(this.moveTarget.y - y) < 30
        ) {
            this.speed.current += 5;
        } else {
            this.resetSpeed();
        }
        this.moveTarget = { x, y };
        super.moveTo({ x, y });
    }

    flushScore() {
        this.score += this.scoreGainSpeed * (Date.now() - this.showedPosterAt);
        this.showedPosterAt = null;
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
    }

    resetSpeed() {
        this.speed.current = this.speed.walking;
    }
}

export default Player;
