import Protester from './Protester.js';

const DEFAULT_SCORE_GAIN_SPEED = 0.1;

class Player extends Protester {
    constructor({ game, x, y, speed, stamina, staminaCooldown }) {
        super({ game, x, y, speed, spriteKey: 'player' });

        this.score = 0;
        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        this.scoreGainStartTime = null;

        this.moveTarget = null;
        this.stamina = stamina;
        this.maxStamina = stamina;
        this.cooldownTimer = this.game.time.create(false);
        this.staminaCooldown = staminaCooldown * 1000;

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        // events
        this.sprite.events.onInputUp.add(this.handleClick, this);
        this.sprite.input.priorityID = 2;

        this.game.onPause.add(this.handleGamePause, this);
        this.game.onResume.add(this.handleGameResume, this);

        this.keys = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            shift: this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
        };
    }

    update() {
        this.speed.current = this.speed.value;

        super.update();

        if (this.scoreGainStartTime) {
            this.flushScore();
            this.scoreGainStartTime = Date.now();
        }

        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;

        if (!this.cooldownTimer.running) {
            if (this.keys.shift.isDown) {
                if (this.stamina > 0) {
                    this.stamina -= 1;
                    this.speed.current *= this.speed.running;
                } else {
                    this.cooldownTimer.add(this.staminaCooldown, () => {
                        this.cooldownTimer.stop(true);
                    });
                    this.cooldownTimer.start();
                }
            } else if (this.stamina < this.maxStamina) {
                this.stamina += 1;
            }
        } else {
            this.stamina = this.maxStamina * this.cooldownTimer.ms / this.staminaCooldown;
        }

        if (this.stamina < this.maxStamina) {
            this.updateProgressBar(this.stamina / this.maxStamina, this.cooldownTimer.running ? 0xff0000 : 0x00ff00);
        } else {
            this.updateProgressBar(null);
        }

        if (this.showPoster) {
            this.speed.current *= this.speed.withPoster;
        }

        if (
            this.keys.up.isDown ||
            this.keys.down.isDown ||
            this.keys.left.isDown ||
            this.keys.right.isDown
        ) {
            this.stopMoving();
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
        if (this.scoreGainStartTime) {
            this.flushScore();
        }
    }

    handleGameResume() {
        if (this.showPoster) {
            this.scoreGainStartTime = Date.now();
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
            this.scoreGainStartTime = Date.now();
        } else {
            this.flushScore();
        }

        super.togglePoster(on);
    }

    moveTo({ x, y }) {
        // if (
        //     this.sprite.body.moves &&
        //     this.moveTarget &&
        //     Math.abs(this.moveTarget.x - x) < 30 &&
        //     Math.abs(this.moveTarget.y - y) < 30
        // ) {
        //     this.speed.current += 5;
        // } else {
        //     this.resetSpeed();
        // }
        this.moveTarget = { x, y };
        super.moveTo({ x, y });
    }

    flushScore() {
        this.score += this.scoreGainSpeed * (Date.now() - this.scoreGainStartTime) / 1000;
        this.scoreGainStartTime = null;
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
    }
}

export default Player;
