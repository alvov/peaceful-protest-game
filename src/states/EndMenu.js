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
            this.mz.config.win ? 'Протест удался!' : 'Вы слили протест :('
        );
        this.title.anchor.setTo(0.5);

        const timeString = String(Math.floor(this.mz.config.time / 60)).padStart(2, '0') + ':' +
            String(this.mz.config.time % 60).padStart(2, '0');
        this.time = this.game.add.text(
            this.world.centerX,
            2 / 3 * this.world.centerY + 31,
            `Ваше время: ${timeString}`
        );
        this.time.anchor.setTo(0.5);

        this.replayButton = this.game.add.button(
            this.world.centerX,
            this.world.centerY,
            'playButton',
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
