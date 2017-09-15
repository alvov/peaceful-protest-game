class Controls {
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
            ['helpArrows', 'move around'],
            ['helpShift', 'run'],
            ['helpSpacebar', 'show poster']
        ].forEach(([spriteKey, text], i) => {
            this.game.add.sprite(40, i * 100 + 200, spriteKey);
            this.game.add.text(
                300,
                i * 100 + 210,
                this.game.mz.i18n.getTranslation(text),
                {
                    fill: '#fff'
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

export default Controls;
