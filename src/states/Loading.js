class Loading {
    preload() {
        this.game.stage.backgroundColor = '#000';
        // const loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        // loadingBar.anchor.setTo(0.5);
        // this.load.setPreloadSprite(loadingBar);
        this.game.load.spritesheet('border', 'assets/border.png', 400, 200);
        this.game.load.spritesheet('cop', 'assets/cop.png', 88, 98);
        this.game.load.spritesheet('player', 'assets/player.png', 60, 92);
        this.game.load.spritesheet('protester1', 'assets/protester01.png', 72, 98);
        this.game.load.spritesheet('protester2', 'assets/protester02.png', 60, 98);
        this.game.load.spritesheet('protester3', 'assets/protester03.png', 72, 98);
        this.game.load.spritesheet('poster', 'assets/poster.png', 120, 142);
        this.game.load.spritesheet('buttons', 'assets/buttons.png', 100, 100);

        this.load.image('ground01', 'assets/ground01.jpg');

        this.mz = {};
        this.mz.progress = this.game.add.text(
            300,
            300,
            'Loading 0%',
            {
                font: '26px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.progress.anchor.set(0.5);
    }

    loadUpdate() {
        this.mz.progress.setText(`Loading ${this.game.load.progress}%`);
    }

    create() {
        // this.state.start('StartMenu');
        this.state.start('Game');
    }
}

export default Loading;
