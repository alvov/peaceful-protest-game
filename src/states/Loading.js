class Loading {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
        // const loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        // loadingBar.anchor.setTo(0.5);
        // this.load.setPreloadSprite(loadingBar);
        this.game.load.spritesheet('cop', 'assets/cop.png', 88, 98);
        this.game.load.spritesheet('player', 'assets/player.png', 60, 92);
        this.game.load.spritesheet('protester', 'assets/protester.png', 72, 98);
        this.game.load.spritesheet('poster', 'assets/poster.png', 120, 142);
        this.game.load.spritesheet('buttons', 'assets/buttons.png', 100, 100);

        this.load.image('ground01', 'assets/ground01.jpg');
    }

    create() {
        // this.state.start('StartMenu');
        this.state.start('Game');
    }
}

export default Loading;
