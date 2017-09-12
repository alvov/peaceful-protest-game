import levels from '../levels.js';
import pack from '../assets/pack.js';
import {
    LANG_RUS
} from '../constants.js';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.add.text(
            this.game.world.centerX,
            40,
            'Peaceful Protest'
        );
        this.title.anchor.setTo(0.5);

        this.level1Button = this.game.add.button(
            150,
            this.world.centerY,
            'level02',
            this.handleClickPlay.bind(this, 'level1')
        );
        this.level1Button.anchor.setTo(0.5);

        this.level2Button = this.game.add.button(
            this.world.width - 150,
            this.world.centerY,
            'level01',
            this.handleClickPlay.bind(this, 'level2')
        );
        this.level2Button.anchor.setTo(0.5);

        // this.langButton = this.game.add.button(
        //     this.game.world.width - 10,
        //     10,
        //     'langButtons',
        //     this.handleClickLang.bind(this)
        // );
        // this.langButton.anchor(1, 0);
    }

    // update() {
    //     // this.langButton.frame = this.game.mz.lang === LANG_RUS ? 0 : 1;
    // }

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

    }
}

export default StartMenu;
