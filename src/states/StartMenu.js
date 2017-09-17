import levels from '../levels.js';
import pack from '../assets/pack.js';
import {
    LANG_RU,
    LANG_EN,
    I18N_GAME_TITLE, I18N_MENU_CONTROLS, I18N_MENU_HOW_TO, I18N_MENU_LEVEL_1, I18N_MENU_LEVEL_2
} from '../constants.js';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = '#000';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.mz.i18n.createText(
            this.game.width / 2,
            this.game.height / 6,
            I18N_GAME_TITLE,
            {
                fill: '#fff'
            }
        );
        this.title.anchor.set(0.5);

        const menuOffset = this.game.height / 3;
        const menuVerticalSpacing = Math.min(this.game.height / 7, 70);
        this.menu = [
            [I18N_MENU_LEVEL_1, this.handleClickPlay.bind(this, 'level1')],
            [I18N_MENU_LEVEL_2, this.handleClickPlay.bind(this, 'level2')],
            [I18N_MENU_HOW_TO, this.handleClickHelp.bind(this)],
            [I18N_MENU_CONTROLS, this.handleClickControls.bind(this)]
        ].map(([itemTitle, callback], i) => {
            return [
                this.game.mz.i18n.createText(
                    40,
                    i * menuVerticalSpacing + menuOffset,
                    itemTitle,
                    {
                        font: '22px Arial',
                        fill: '#fff'
                    }
                ),
                callback
            ];
        });

        this.langButton = this.game.add.button(
            this.game.world.width - 10,
            0,
            'langButtons',
            this.handleClickLang.bind(this)
        );
        this.langButton.anchor.set(1, 0);

        this.game.input.onDown.add(this.handleClickMenu, this);
    }

    update() {
        this.langButton.frame = this.game.mz.i18n.currentLang === LANG_RU ? 1 : 0;
    }

    handleClickPlay(level) {
        this.state.start('Loading', true, false, {
            assets: [
                ['pack', 'levelCommon', null, pack],
                ['pack', level, null, pack]
            ],
            nextState: [
                'Game', true, false, levels[level]
            ]
        });
    }

    handleClickLang() {
        this.game.mz.i18n.setLang(
            this.game.mz.i18n.currentLang === LANG_RU ? LANG_EN : LANG_RU
        );
    }

    handleClickMenu() {
        this.menu.some(([item, callback]) => {
            if (item.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickMenu, this);
                callback();
                return true;
            }
        });
    }

    handleClickHelp() {
        this.state.start('Help', true, false);
    }

    handleClickControls() {
        this.state.start('Controls', true, false);
    }
}

export default StartMenu;
