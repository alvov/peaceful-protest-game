import levels from '../levels.js';
import pack from '../assets/pack.js';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Peaceful Protest');
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
}

export default StartMenu;
