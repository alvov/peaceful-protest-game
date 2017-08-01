class EndMenu {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Game over');
        this.title.anchor.setTo(0.5);

        this.replayButton = this.game.add.button(this.world.centerX, this.world.centerY, 'buttons', this.handleClickPlay, this);
        this.replayButton.anchor.setTo(0.5);
    }

    resize(newWidth, newHeight) {

    }

    handleClickPlay() {
        this.state.start('StartMenu');
    }
}

export default EndMenu;
