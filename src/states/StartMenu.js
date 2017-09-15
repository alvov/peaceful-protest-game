import levels from '../levels.js';
import pack from '../assets/pack.js';
import {
    LANG_RU,
    LANG_EN
} from '../constants.js';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = '#000';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.mz.i18n.createText(
            this.game.world.centerX,
            100,
            'Peaceful protest',
            {
                fill: '#fff'
            }
        );
        this.title.anchor.setTo(0.5);

        this.menu = [
            ['> Level 01', this.handleClickPlay.bind(this, 'level1')],
            ['> Level 02', this.handleClickPlay.bind(this, 'level2')],
            ['How to play?', this.handleClickHelp.bind(this)],
            ['Controls', this.handleClickControls.bind(this)]
        ].map(([itemTitle, callback], i) => {
            return [
                this.game.mz.i18n.createText(
                    40,
                    i * 70 + 200,
                    itemTitle,
                    {
                        fill: '#fff'
                    }
                ),
                callback
            ];
        });

        this.langButton = this.game.add.button(
            this.game.world.width - 10,
            10,
            'langButtons',
            this.handleClickLang.bind(this)
        );
        this.langButton.anchor.setTo(1, 0);

        this.game.input.onDown.add(this.handleClickMenu, this);
    }

    update() {
        this.langButton.frame = this.game.mz.i18n.currentLang === LANG_RU ? 1 : 0;
    }

    handleClickPlay(level) {
        this.state.start('Loading', true, false, {
            assets: [
                ['pack', level, null, JSON.stringify(pack)]
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
