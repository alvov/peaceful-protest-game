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
                ['spritesheet', 'buttons', 'assets/buttons.png', 100, 100],
            ],
            nextState: ['StartMenu']
        });
    }
}

export default Boot;
