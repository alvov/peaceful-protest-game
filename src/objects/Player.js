import Protester from './Protester.js';
import {
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

const DEFAULT_SCORE_GAIN_SPEED = 0.1;
const DEFAULT_CLICK_SPEED_UP = 1;

class Player extends Protester {
    constructor({ game, x, y, speed, stamina, staminaCooldown }) {
        super({
            game,
            x,
            y,
            speed,
            spriteKey: 'player',
            spriteName: 'player',
            audioKey: 'scream03'
        });

        this.sprite.body.collideWorldBounds = true;

        this.score = 0;
        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        this.scoreGainStartTime = null;

        this.moveTarget = null;
        this.stamina = stamina;
        this.maxStamina = stamina;
        this.cooldownTimer = this.game.time.create(false);
        this.staminaCooldown = staminaCooldown * 1000;

        this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.showPoster = false;

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
        if (this.mode !== PROTESTER_MODE_ARRESTED) {
            this.speed.current = this.speed.value;
            this.speed.current *= this.clickSpeedUp;
        }

        super.update();

        if (this.mode === PROTESTER_MODE_ARRESTED) {
            return;
        }

        if (this.scoreGainStartTime) {
            this.flushScore();
            this.scoreGainStartTime = Date.now();
        }

        const areMovingKeysDown = this.keys.up.isDown ||
            this.keys.down.isDown ||
            this.keys.left.isDown ||
            this.keys.right.isDown;

        if (!this.cooldownTimer.running) {
            if (areMovingKeysDown && this.keys.shift.isDown) {
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
            this.updateProgressBar(0);
        }

        if (this.showPoster) {
            this.speed.current *= this.speed.withPoster;
        }

        if (areMovingKeysDown) {
            this.stopMovement();
            const angles = [];

            if (this.keys.up.isDown) {
                angles.push(-90);
            }
            if (this.keys.down.isDown) {
                angles.push(90);
            }
            if (this.keys.left.isDown) {
                if (this.keys.up.isDown) {
                    angles.push(-180);
                } else {
                    angles.push(180);
                }
            }
            if (this.keys.right.isDown) {
                angles.push(0);
            }
            this.game.physics.arcade.velocityFromAngle(
                angles.reduce((value, sum) => sum + value, 0) / angles.length,
                this.speed.current,
                this.sprite.body.velocity
            );

            this.resetClickSpeedUp();

        } else if (
            this.keys.up.justUp ||
            this.keys.down.justUp ||
            this.keys.left.justUp ||
            this.keys.right.justUp
        ) {
            this.sprite.body.stop();
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
            this.stopMovement();
        } else {
            this.togglePoster();
        }
    }

    setMode(mode, props) {
        switch (mode) {
            case PROTESTER_MODE_ARRESTED: {
                this.sprite.events.onInputUp.removeAll();
                this.game.onPause.remove(this.handleGamePause, this);
                this.game.onResume.remove(this.handleGameResume, this);

                this.cooldownTimer.stop(true);
                this.stamina = this.maxStamina;
                break;
            }
        }

        super.setMode(mode, props);
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

    flushScore() {
        this.score += this.scoreGainSpeed * (Date.now() - this.scoreGainStartTime) / 1000;
        this.scoreGainStartTime = null;
    }

    resetScoreGainSpeed() {
        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
    }

    resetClickSpeedUp() {
        this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;
    }
}

export default Player;
