class PauseMenu {
    constructor({ game }) {
        this.game = game;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.exists = false;

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.world.width, this.game.world.height);
        this.overlay.endFill();

        this.title = this.game.add.text(
            this.game.world.centerX,
            2 / 3 * this.game.world.centerY,
            'Пауза'
        );
        this.title.anchor.setTo(0.5);

        this.replayButton = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            'playButton'
        );
        this.replayButton.anchor.setTo(0.5);

        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.title);
        this.sprite.addChild(this.replayButton);
    }

    kill() {
        this.sprite.kill();
    }

    revive() {
        this.sprite.revive();
    }
}

export default PauseMenu;
