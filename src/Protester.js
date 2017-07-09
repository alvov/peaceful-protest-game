class Protester {
    constructor({ game }) {
        this.sprite = new Phaser.Sprite(game, game.world.centerX, game.world.centerY, 'protester', 0);
        this.sprite.anchor.set(0.5);
        this.sprite.crop(new Phaser.Rectangle(
            this.sprite.width / 4,
            0,
            3 * this.sprite.width / 4,
            this.sprite.height
        ));
        this.sprite.scale.set(0.5);
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.events.onInputUp.add(this.handleClick, this);
    }

    handleClick() {
        if (!this.isDisabled) {
            this.setActive(!this.isActive);
        }
    }

    setActive(on) {
        if (on) {
            this.sprite.game.mz.protesters.forEach(protester => protester.setActive(false));
            this.isActive = true;
            this.sprite.frame = 1;
        } else {
            this.isActive = false;
            this.sprite.frame = 0;
        }
    }

    setDisabled(on) {
        this.isDisabled = on;
    }
}

export default Protester;
