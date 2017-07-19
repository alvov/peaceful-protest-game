class StartMenu {
    create() {
        this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Мирный Протест MVP');
        this.title.anchor.setTo(0.5);

        this.playButton = this.game.add.button(this.world.centerX, this.world.centerY, 'buttons', this.handleClickPlay, this)
        this.playButton.anchor.setTo(0.5);
    }

    resize(newWidth, newHeight) {

    }

    handleClickPlay() {
        this.state.start('Game');
    }
}

export default StartMenu;
