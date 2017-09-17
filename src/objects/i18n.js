import data from '../assets/i18n.js';
import {
    LANG_RU,
    LANG_EN
} from '../constants.js';

class i18n {
    constructor({ game }) {
        this.game = game;
        this.textObjects = [];
        this.currentLang = navigator.language === LANG_RU ? LANG_RU : LANG_EN;
        this.translations = data;
    }

    setLang(lang) {
        this.currentLang = lang;
        this.textObjects.forEach(({ inst, text }) => {
            inst.setText(this.getTranslation(text));
        });
    }

    createText(x, y, text, font) {
        const textObject = this.game.add.text(
            x,
            y,
            this.getTranslation(text),
            font
        );
        this.textObjects.push({
            inst: textObject,
            text
        });
        return textObject;
    }

    getTranslation(text) {
        return this.translations[text][this.currentLang];
    }

    clear() {
        this.textObjects = [];
    }
}

export default i18n;
