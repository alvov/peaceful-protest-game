import pack from '../assets/pack.js';
// import {
//     LANG_RUS
// } from '../constants.js';

class Boot {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);

        // this.game.mz = {
        //     lang: LANG_RUS
        // };
    }

    preload() {}

    create() {
        this.state.start('Loading', true, false, {
            assets: [
                ['pack', 'initial', null, JSON.stringify(pack)]
            ],
            nextState: ['StartMenu']
        });
    }
}

export default Boot;
