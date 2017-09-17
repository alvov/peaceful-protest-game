import { I18N_UI_LOADING } from '../constants';

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

        this.mz.config.assets.forEach(([assetType, ...assetParams]) => {
            switch (assetType) {
                case 'pack':
                    this.load.pack(...assetParams);
                    break;
                case 'spritesheet':
                    this.load.spritesheet(...assetParams);
                    break;
                case 'image':
                    this.load.image(...assetParams);
                    break;
            }
        });

        this.mz.objects.textLoading = this.game.add.text(
            this.game.world.centerX - 5,
            this.game.world.centerY,
            this.game.mz.i18n.getTranslation(I18N_UI_LOADING),
            {
                font: '26px Arial',
                fill: '#fff'
            }
        );
        this.mz.objects.textLoading.anchor.set(1, 0.5);

        this.mz.objects.textProgress = this.game.add.text(
            this.game.world.centerX + 5,
            this.game.world.centerY,
            '0 %',
            {
                font: '26px Arial',
                fill: '#fff'
            }
        );
        this.mz.objects.textProgress.anchor.set(0, 0.5);
    }

    loadUpdate() {
        this.mz.objects.textProgress.setText(`${this.game.load.progress} %`);
    }

    create() {
        this.state.start(...this.mz.config.nextState);
    }
}

export default Loading;
