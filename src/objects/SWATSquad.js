import {
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT
} from '../constants.js';

const SQUAD_DENSITY = 40;
const SQUAD_DISCIPLINE = 0.4;
const TURN_FREQUENCY = 30;

class SWATSquad {
    constructor({ game, count, speed, group }) {
        this.game = game;

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.mode = SWAT_MODE_HIDE;
        this.moveTarget = null;
        this.updateIndex = 0;
        this.audioAppear = this.game.add.audio('boo');

        this.sprites = [];
        for (let i = 0; i < count; i++) {
            const swatSprite = this.game.add.sprite(0, 0, 'swat', 0);
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
        }
    }

    update() {
        if (this.mode === SWAT_MODE_HUNT) {
            const firstSprite = this.sprites[0];

            if (
                this.game.math.fuzzyEqual(
                    this.game.math.distanceSq(firstSprite.x, firstSprite.y, this.moveTarget.x, this.moveTarget.y),
                    0,
                    20
                )
            ) {
                // todo better endpoint check
                this.setMode(SWAT_MODE_HIDE);
            } else {
                // change direction once in a while
                if (this.updateIndex % TURN_FREQUENCY === 0) {
                    const angle = this.game.math.angleBetweenPoints(firstSprite, this.moveTarget) +
                        (this.updateIndex === 0 ? 1 : -1) * this.game.rnd.realInRange(0, SQUAD_DISCIPLINE);
                    this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, firstSprite.body.velocity);
                }

                for (let i = 1; i < this.sprites.length; i++) {
                    const swatSprite = this.sprites[i];
                    const angleToTarget = this.game.math.angleBetweenPoints(swatSprite, this.sprites[i - 1]);
                    this.game.physics.arcade.velocityFromRotation(angleToTarget, this.speed.current, swatSprite.body.velocity);
                }

                if (this.updateIndex === 2 * TURN_FREQUENCY - 1) {
                    this.updateIndex = 0;
                } else {
                    this.updateIndex++;
                }
            }
        }
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case SWAT_MODE_HIDE: {
                if (this.mode === SWAT_MODE_HUNT) {
                    for (let i = 0; i < this.sprites.length; i++) {
                        this.sprites[i].visible = false;
                        this.sprites[i].body.stopMovement(true);
                    }
                    this.updateIndex = 0;
                    this.moveTarget = null;
                }
                break;
            }
            case SWAT_MODE_HUNT: {
                if (this.mode === SWAT_MODE_HIDE) {
                    const { x, y, target } = props;
                    this.moveTarget = target;

                    const directionSign = this.moveTarget.x > x ? -1 : 1;
                    for (let i = 0; i < this.sprites.length; i++) {
                        const swatSprite = this.sprites[i];
                        swatSprite.x = x + i * directionSign * SQUAD_DENSITY;
                        swatSprite.y = y;
                        swatSprite.visible = true;
                    }

                    this.audioAppear.play();
                }
                break;
            }
        }

        this.mode = mode;
    }
}

export default SWATSquad;
