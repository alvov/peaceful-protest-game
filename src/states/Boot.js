import pack from '../assets/pack.js';
import i18n from '../objects/i18n.js';

class Boot {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.mz = {};
    }

    create() {
        this.game.mz.i18n = new i18n({
            game: this.game
        });

        this.state.onStateChange.add(this.handleStateChange, this);

        this.state.start('Loading', true, false, {
            assets: [
                ['pack', 'initial', null, pack],
                ['pack', 'help' + (Phaser.Device.desktop ? 'Desktop' : 'Touch'), null, pack]
            ],
            nextState: ['StartMenu']
        });
    }

    handleStateChange() {
        this.game.mz.i18n.clear();
    }
}

export default Boot;
