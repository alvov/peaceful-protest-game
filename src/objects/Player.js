import Protester from './Protester.js';
import {
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

const DEFAULT_CLICK_SPEED_UP = 1;

class Player extends Protester {
    constructor({ game, x, y, speed, fovGroup, radius, cheering, stamina, staminaCooldown }) {
        super({
            game,
            x,
            y,
            speed,
            spriteKey: 'player',
            spriteName: 'player'
        });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.sprite.body.collideWorldBounds = true;

        this.radius = radius;
        this.radiusSq = this.radius ** 2;
        this.cheering = cheering;

        this.moveTarget = null;
        this.stamina = stamina;
        this.maxStamina = stamina;
        this.cooldownTimer = this.game.time.create(false);
        this.staminaCooldown = staminaCooldown * 1000;

        this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.audioScream = this.game.add.audio('scream03');

        this.showPoster = false;
        this.isFrozen = false;

        this.circleGraphics = this.game.add.graphics(0, 0);
        this.circleGraphics.lineStyle(1, 0x33ff33, 1);
        this.circleGraphics.drawCircle(0, 0, this.radius * 2);
        fovGroup.add(this.circleGraphics);

        // events
        this.sprite.events.onInputUp.add(this.handleClick, this);
        this.sprite.input.priorityID = 2;

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

        this.circleGraphics.visible = this.showPoster;
        if (this.showPoster) {
            this.circleGraphics.x = this.sprite.x;
            this.circleGraphics.y = this.sprite.y;
        }

        if (this.mode === PROTESTER_MODE_ARRESTED || this.isFrozen) {
            this.updateProgressBar(0);
            return;
        }

        if (this.isFrozen) {
            return;
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
            this.stopMovement();
        }

        if (this.keys.space.justDown) {
            this.togglePoster();
        }
    }

    handleGameResume() {
        this.stopMovement();
    }

    handleClick() {
        if (this.sprite.body.isMoving) {
            this.stopMovement();
        } else {
            this.togglePoster();
        }
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_ARRESTED: {
                const { x, y } = props;
                this.sprite.x = x;
                this.sprite.y = y;
                this.stopMovement();
                this.togglePoster(false);

                this.sprite.body.collideWorldBounds = false;

                this.sprite.events.onInputUp.removeAll();
                this.cooldownTimer.stop(true);
                break;
            }
        }

        super.setMode(mode, props);
    }

    togglePoster(on = !this.showPoster) {
        if (on === this.showPoster) {
            return;
        }

        // play sound
        if (on) {
            this.audioScream.play('', 0, 0.1);
        }

        this.showPoster = on;
    }

    resetClickSpeedUp() {
        this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;
    }

    freeze() {
        if (this.sprite.alive) {
            this.sprite.events.onInputUp.remove(this.handleClick, this);
            this.stopMovement();
        }

        this.isFrozen = true;
    }

    stopMovement() {
        this.sprite.body.stop();

        super.stopMovement();
    }

    kill() {
        this.game.onResume.removeAll();

        super.kill();
    }
}

export default Player;
