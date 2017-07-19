class Boot{
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    }

    preload() {
        // this.load.image('loader', 'assets/loader.png');
    }

    create() {
        this.state.start('Loading');
    }
}

export default Boot;
