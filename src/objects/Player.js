import Protester from './Protester.js';
import {
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

const DEFAULT_CLICK_SPEED_UP = 1;

class Player extends Protester {
    constructor({
        game,
        x,
        y,
        speed,
        fovGroup,
        radius,
        cheering,
        stamina,
        staminaCooldown,
        powerUp,
        powerDown,
        onDropPoster
    }) {
        super({
            game,
            x,
            y,
            speed,
            spriteKey: 'player',
            spriteName: 'player',
            onDropPoster
        });

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.sprite.body.collideWorldBounds = true;

        this.power = 1;
        this.powerUpValue = powerUp;
        this.powerDownValue = powerDown;
        this.powerTimer = this.game.time.create(false);
        this.powerTimer.loop(2000, this.powerDown, this);
        this.powerTimer.start();

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

        this.radius = {
            initial: radius,
            graphic: 0,
            actual: 0,
            actualSq: 0,
            tween: {}
        };
        this.resetRadius();

        this.circleGraphics = this.game.add.graphics(0, 0);
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
        this.resetRadius();

        if (this.mode !== PROTESTER_MODE_ARRESTED) {
            this.speed.current = this.speed.value;
            this.speed.current *= this.clickSpeedUp;
        }

        super.update();

        this.circleGraphics.clear();
        this.circleGraphics.lineStyle(1, 0x33ff33, 1);
        this.circleGraphics.drawCircle(this.sprite.x, this.sprite.y, this.radius.graphic * 2);

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

    powerUp(value = this.powerUpValue) {
        if (value !== 0) {
            this.powerChange(value);
        }
    }

    powerDown(value = this.powerDownValue) {
        const power = Math.max(1, this.power - value);
        if (power !== this.power) {
            this.powerChange(-value);
        }
    }

    powerChange(value) {
        this.power += value;

        this.posterSprite.scale.set(this.power);
    }

    resetClickSpeedUp() {
        this.clickSpeedUp = DEFAULT_CLICK_SPEED_UP;
    }

    resetRadius() {
        let newRadius = this.showPoster ? this.radius.initial : 0;
        newRadius *= this.power;

        if (newRadius === this.radius.actual) {
            return;
        }

        if (this.radius.tween.isRunning) {
            this.radius.tween.stop();
        }

        if (this.game.math.fuzzyEqual(newRadius, this.radius.graphic, 1)) {
            this.radius.graphic = newRadius;
        } else {
            this.radius.tween = this.game.add.tween(this.radius);
            this.radius.tween.to({ graphic: newRadius }, 500, Phaser.Easing.Exponential.Out);
            this.radius.tween.start();
        }

        this.radius.actual = newRadius;
        this.radius.actualSq = this.radius.actual ** 2;
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
        this.powerTimer.stop(true);

        super.kill();
    }
}

export default Player;
