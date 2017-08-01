import pack from '../assets/pack.js';

class Boot {
    init() {
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
    }

    preload() {
        // this.load.image('loader', 'assets/loader.png');
    }

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
