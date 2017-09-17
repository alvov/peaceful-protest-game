import { I18N_UI_PAUSE } from '../constants';

class PauseMenu {
    constructor({ game }) {
        this.game = game;

        this.sprite = this.game.add.sprite(0, 0);

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();

        this.title = this.game.add.text(
            this.game.width / 2,
            2 / 3 * this.game.height / 2,
            this.game.mz.i18n.getTranslation(I18N_UI_PAUSE)
        );
        this.title.anchor.set(0.5);

        this.replayButton = this.game.add.sprite(
            this.game.width / 2,
            this.game.height / 2,
            'playButton'
        );
        this.replayButton.anchor.set(0.5);

        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.title);
        this.sprite.addChild(this.replayButton);
        this.sprite.fixedToCamera = true;

        this.kill();
    }

    kill() {
        this.sprite.kill();
    }

    revive() {
        this.sprite.revive();
    }
}

export default PauseMenu;
