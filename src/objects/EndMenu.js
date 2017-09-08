import {
    END_GAME_WIN,
    END_GAME_PLAYER_KILLED,
    END_GAME_PROTEST_RATE,
    END_GAME_TIME_OUT
} from '../constants.js';

const STRIPE_HEIGHT = 100;
const STRIPE_DURATION = 1500;
const OVERLAY_DURATION = 3000;

class EndMenu {
    constructor({ game, mode, score, stats }) {
        this.game = game;
        this.mode = mode;
        this.stats = stats;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.fixedToCamera = true;

        this.topStripe = this.game.add.graphics(0, 0);
        this.topStripe.beginFill(0);
        this.topStripe.drawRect(0, -STRIPE_HEIGHT, this.game.width, STRIPE_HEIGHT);
        this.topStripe.endFill();

        const stripesTween = this.game.add.tween(this.topStripe)
            .to({ top: STRIPE_HEIGHT }, STRIPE_DURATION)
            .start();
        stripesTween.onComplete.addOnce(this.handleTweenComplete, this);

        this.bottomStripe = this.game.add.graphics(0, 0);
        this.bottomStripe.beginFill(0);
        this.bottomStripe.drawRect(0, this.game.height, this.game.width, this.game.height + STRIPE_HEIGHT);
        this.bottomStripe.endFill();
        this.game.add.tween(this.bottomStripe)
            .to({ top: -STRIPE_HEIGHT }, STRIPE_DURATION)
            .start();

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();
        this.overlay.alpha = 0;
        const overlayTween = this.game.add.tween(this.overlay)
            .to({ alpha: 0.5 }, OVERLAY_DURATION)
            .start();
        overlayTween.onComplete.addOnce(this.showStats, this);

        this.replayButton = this.game.add.button(
            this.game.width - 50,
            50,
            'playButton',
            this.handleClickPlay,
            this
        );
        this.replayButton.anchor.setTo(0.5);
        this.replayButton.visible = false;

        this.sprite.addChild(this.topStripe);
        this.sprite.addChild(this.bottomStripe);
        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.replayButton);
        this.sprite.addChild(score);
    }

    handleTweenComplete() {
        this.replayButton.visible = true;
    }

    handleClickPlay() {
        this.game.state.start('StartMenu');
    }

    showStats() {
        let titleText = '';
        if (this.mode === END_GAME_WIN) {
            titleText = 'You did it!';
        } else if (this.mode === END_GAME_PLAYER_KILLED) {
            titleText = 'They turned you in, pal';
        } else if (this.mode === END_GAME_TIME_OUT) {
            titleText = 'Time is out!';
        } else if (this.mode === END_GAME_PROTEST_RATE) {
            titleText = 'You let the protest fail :(';
        }

        const title = this.game.add.text(
            40,
            40,
            titleText,
            {
                font: '24px Arial',
                fill: this.mode === END_GAME_WIN ? '#393' : '#933'
            }
        );
        this.sprite.addChild(title);

        if (this.mode !== END_GAME_TIME_OUT) {
            const timeString = String(Math.floor(this.stats.time / 60)).padStart(2, '0') + ':' +
                String(this.stats.time % 60).padStart(2, '0');
            const time = this.game.add.text(
                40,
                100,
                `Your time: ${timeString}`,
                {
                    font: '24px Arial',
                    fill: '#fff'
                }
            );
            this.sprite.addChild(time);
        }

        const stats = this.game.add.text(
            40,
            this.mode === END_GAME_TIME_OUT ? 100 : 130,
`
Total protesters: ${this.stats.revived}
Active: ${this.stats.alive}
Arrested: ${this.stats.arrested}
Left home: ${this.stats.left}
`,
            {
                font: '24px Arial',
                fill: '#fff'
            }
        );
        this.sprite.addChild(stats);
    }
}

export default EndMenu;
