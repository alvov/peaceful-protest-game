class EndMenu {
    init(config) {
        this.mz = {
            config
        };
    }

    preload() {
        this.game.stage.backgroundColor = '#ccc';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.add.text(
            this.world.centerX,
            2 / 3 * this.world.centerY,
            this.mz.config.win ? 'Вы победили!' : 'Вас посадили :('
        );
        this.title.anchor.setTo(0.5);

        this.score = this.game.add.text(
            this.world.centerX,
            2 / 3 * this.world.centerY + 31,
            `Ваш счет: ${this.mz.config.score}`
        );
        this.score.anchor.setTo(0.5);

        this.replayButton = this.game.add.button(
            this.world.centerX,
            this.world.centerY,
            'buttons',
            this.handleClickPlay,
            this
        );
        this.replayButton.anchor.setTo(0.5);
    }

    resize(newWidth, newHeight) {

    }

    handleClickPlay() {
        this.state.start('StartMenu');
    }
}

export default EndMenu;
