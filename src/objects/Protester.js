import Prefab from './Prefab.js';
import {
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

class Protester extends Prefab {
    constructor({ game, x, y, speed, spriteKey, spriteName, onDropPoster }) {
        super({ game, x, y, speed, spriteKey, spriteName });

        this.injurySprite = this.sprite.addChild(
            this.game.make.sprite(
                -15,
                -this.sprite.height / 2 - 2,
                'injury'
            )
        );
        this.injurySprite.bringToTop();
        this.injurySprite.visible = false;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-10, 11, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.anchor.set(0.5, 1);
        this.posterSprite.visible = false;

        this.showPoster = false;
        this.dropPoster = 1;

        this.onDropPoster = onDropPoster;
    }

    update() {
        this.injurySprite.visible = this.sprite.health !== 1;
        this.posterSprite.visible = this.posterSprite.alive && this.showPoster;

        super.update();
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_ARRESTED: {
                if (this.game.rnd.frac() < this.dropPoster) {
                    this.posterSprite.kill();
                    this.onDropPoster({ x: this.sprite.x, y: this.sprite.y });
                }

                this.moveTo(null);

                const { x, y } = props;
                this.sprite.x = x;
                this.sprite.y = y;

                break;
            }
        }

        super.setMode(mode, props);
    }
}

export default Protester;
