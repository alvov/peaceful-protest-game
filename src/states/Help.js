import {
    I18N_HOW_TO_CALL, I18N_HOW_TO_CHEER, I18N_HOW_TO_COPS, I18N_HOW_TO_SCALE, I18N_MENU_BACK
} from '../constants';

class Help {
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

        const offset = this.game.height / 4;
        const spacing = Math.min(80, this.game.height / 5);
        const fontSize = Math.min(22, Math.round(this.game.height / 19));
        [
            I18N_HOW_TO_SCALE,
            I18N_HOW_TO_CHEER,
            I18N_HOW_TO_CALL,
            I18N_HOW_TO_COPS
        ].forEach((text, i) => {
            this.game.add.text(
                40,
                i * spacing + offset,
                `${i + 1}. ${this.game.mz.i18n.getTranslation(text)}.`,
                {
                    font: `${fontSize}px Arial`,
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
