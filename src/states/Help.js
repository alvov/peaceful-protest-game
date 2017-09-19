import {
    I18N_HOW_TO_CALL, I18N_HOW_TO_CHEER, I18N_HOW_TO_COPS, I18N_HOW_TO_SCALE, I18N_MENU_BACK
} from '../constants';

class Help {
    preload() {
        this.game.stage.backgroundColor = '#000';
    }

    create() {
        const horizontalOffset = this.game.width / 15;

        this.back = this.game.add.text(
            horizontalOffset,
            this.game.height / 15,
            this.game.mz.i18n.getTranslation(I18N_MENU_BACK),
            {
                fill: '#fff'
            }
        );

        const textGroup = this.game.add.group();
        let verticalOffset = 0;
        const spacing = this.game.height / 30;
        const fontSize = Math.min(22, Math.round(this.game.height / 19));
        [
            I18N_HOW_TO_SCALE,
            I18N_HOW_TO_CHEER,
            I18N_HOW_TO_CALL,
            I18N_HOW_TO_COPS
        ].forEach((text, i) => {
            const textObject = this.game.add.text(
                horizontalOffset,
                verticalOffset,
                `${i + 1}. ${this.game.mz.i18n.getTranslation(text)}.`,
                {
                    font: `${fontSize}px Arial`,
                    fill: '#fff',
                    wordWrap: true,
                    wordWrapWidth: this.game.width - horizontalOffset * 2
                }
            );
            verticalOffset += textObject.height + spacing;
            textGroup.add(textObject);
        });
        textGroup.y = (this.game.height + this.back.bottom - verticalOffset + spacing) / 2;

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
