import {
    I18N_CONTROLS_MOVE, I18N_CONTROLS_POSTER, I18N_CONTROLS_RUN, I18N_MENU_BACK
} from '../constants';

class Controls {
    preload() {
        this.game.stage.backgroundColor = '#000';
    }

    create() {
        this.back = this.game.add.text(
            40,
            this.game.height / 15,
            this.game.mz.i18n.getTranslation(I18N_MENU_BACK),
            {
                fill: '#fff'
            }
        );

        const offset = this.game.height / 3.4;
        const spacing = Math.min(100, this.game.height / 3.8);
        const prefix = 'help';
        [
            ['Move', I18N_CONTROLS_MOVE],
            ['Run', I18N_CONTROLS_RUN],
            ['Poster', I18N_CONTROLS_POSTER]
        ].forEach(([spriteKey, text], i) => {
            const imageObj = this.game.add.sprite(
                this.game.width / 4,
                i * spacing + offset,
                prefix + spriteKey
            );
            imageObj.anchor.set(0.5);
            const textObj = this.game.add.text(
                this.game.width / 2,
                i * spacing + offset,
                this.game.mz.i18n.getTranslation(text),
                {
                    font: '20px Arial',
                    fill: '#fff'
                }
            );
            textObj.anchor.set(0, 0.5);
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
