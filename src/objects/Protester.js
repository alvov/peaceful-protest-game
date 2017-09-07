import Prefab from './Prefab.js';

class Protester extends Prefab {
    constructor({ game, x, y, speed, spriteKey, spriteName }) {
        super({ game, x, y, speed, spriteKey, spriteName });

        this.injurySprite = this.sprite.addChild(
            this.game.make.sprite(
                -15,
                -this.sprite.height / 2 - 2,
                'injury'
            )
        );
        this.injurySprite.bringToTop();
        this.injurySprite.exists = false;

        this.posterSprite = this.sprite.addChild(this.game.make.sprite(-40, -60, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.exists = false;

        this.showPoster = false;
    }

    update() {
        this.injurySprite.exists = this.sprite.health !== 1;
        this.posterSprite.exists = this.showPoster;

        super.update();
    }
}

export default Protester;
