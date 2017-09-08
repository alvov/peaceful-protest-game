import {
    SHIELD_MODE_HIDE,
    SHIELD_MODE_DRIVE
} from '../constants.js';

const DIR = {
    ltr: 'ltr',
    rtl: 'rtl'
};

class Shield {
    constructor({ game, speed }) {
        this.game = game;

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.mode = SHIELD_MODE_HIDE;

        this.sprite = this.game.add.sprite(
            this.game.world.width * 2,
            this.game.world.height / 2 + this.game.camera.y,
            'shield'
        );
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.70);
        this.sprite.exist = false;

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;

        this.direction = DIR.rtl;

        this.audio = this.game.add.audio('truck');
    }

    update() {
        if (this.mode === SHIELD_MODE_DRIVE) {
            if (
                this.direction === DIR.ltr && this.sprite.x >= this.game.world.width + this.sprite.width ||
                this.direction === DIR.rtl && this.sprite.x <= -this.sprite.width
            ) {
                this.setMode(SHIELD_MODE_HIDE);
            }
        }
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case SHIELD_MODE_HIDE: {
                if (this.mode === SHIELD_MODE_DRIVE) {
                    // change direction for the next ride
                    this.direction = this.direction === DIR.ltr ? DIR.rtl : DIR.ltr;

                    this.sprite.kill();
                    this.sprite.body.stopMovement(true);

                    this.audio.stop();
                }
                break;
            }
            case SHIELD_MODE_DRIVE: {
                if (this.mode === SHIELD_MODE_HIDE) {
                    const { y } = props;
                    this.sprite.x = this.direction === DIR.ltr ?
                        -this.game.world.width :
                        this.game.world.width * 2;
                    this.sprite.y = y;
                    this.sprite.body.velocity.x = this.speed.current *
                        (this.direction === DIR.ltr ? 1 : -1);
                    this.sprite.scale.x = this.sprite.scale.y *
                        (this.direction === DIR.ltr ? -1 : 1);

                    this.audio.loopFull(0.25);
                    this.game.camera.shake(0.005, 3000);
                }
                break;
            }
        }

        this.mode = mode;
    }
}

export default Shield;
