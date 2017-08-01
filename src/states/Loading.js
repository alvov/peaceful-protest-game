class Loading {
    init(config) {
        this.mz = {
            config,
            objects: {
                textProgress: null
            }
        };
    }

    preload() {
        this.game.stage.backgroundColor = '#000';
        // const loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        // loadingBar.anchor.setTo(0.5);
        // this.load.setPreloadSprite(loadingBar);

        this.mz.config.assets.forEach(([assetType, ...assetParams]) => {
            switch (assetType) {
                case 'pack':
                    this.game.load.pack(...assetParams);
                    break;
                case 'spritesheet':
                    this.game.load.spritesheet(...assetParams);
                    break;
                case 'image':
                    this.load.image(...assetParams);
                    break;
            }
        });

        this.mz.objects.textProgress = this.game.add.text(
            300,
            300,
            'Loading 0%',
            {
                font: '26px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.mz.objects.textProgress.anchor.set(0.5);
    }

    loadUpdate() {
        this.mz.objects.textProgress.setText(`Loading ${this.game.load.progress}%`);
    }

    create() {
        this.state.start(...this.mz.config.nextState);
    }
}

export default Loading;
