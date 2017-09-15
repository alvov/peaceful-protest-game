class Help {
    preload() {
        this.game.stage.backgroundColor = '#000';
    }

    create() {
        this.back = this.game.add.text(
            40,
            40,
            this.game.mz.i18n.getTranslation('<   Back to menu'),
            {
                fill: '#fff'
            }
        );

        [
            'Fill the protest scale before time runs out',
            'Show your poster to people around you to cheer them up',
            'Show your poster to journalists for several seconds to call out for more people',
            'Cops will chase you and others for showing posters'
        ].forEach((text, i) => {
            this.game.add.text(
                40,
                i * 80 + 150,
                `${i + 1}. ${this.game.mz.i18n.getTranslation(text)}.`,
                {
                    font: '22px Arial',
                    fill: '#fff',
                    wordWrap: true,
                    wordWrapWidth: this.game.width - 80
                }
            );
        });

        this.game.input.onDown.add(this.handleClickBack, this);
    }

    handleClickBack() {
        if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
            this.game.input.onDown.remove(this.handleClickBack, this);
            this.state.start('StartMenu', true, false);
            return true;
        }
    }
}

export default Help;
