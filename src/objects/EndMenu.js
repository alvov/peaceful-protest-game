import {
    END_GAME_WIN,
    END_GAME_PLAYER_KILLED,
    END_GAME_PROTEST_RATE,
    END_GAME_TIME_OUT,
    I18N_END_ARRESTED, I18N_END_FAIL, I18N_END_TIME, I18N_END_WIN, I18N_STATS_ACTIVE, I18N_STATS_ARRESTED,
    I18N_STATS_LEFT, I18N_STATS_TIME,
    I18N_STATS_TOTAL
} from '../constants.js';

import {
    getFormattedTime
} from '../utils.js';

const STRIPE_DURATION = 1500;
const OVERLAY_DURATION = 3000;

class EndMenu {
    constructor({ game, mode, score, stats }) {
        this.game = game;
        this.mode = mode;
        this.stats = stats;

        const stripeHeight = this.game.height / 6;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.fixedToCamera = true;

        this.topStripe = this.game.add.graphics(0, 0);
        this.topStripe.beginFill(0);
        this.topStripe.drawRect(0, -stripeHeight, this.game.width, stripeHeight);
        this.topStripe.endFill();

        const stripesTween = this.game.add.tween(this.topStripe)
            .to({ top: stripeHeight }, STRIPE_DURATION)
            .start();
        stripesTween.onComplete.addOnce(this.handleTweenComplete, this);

        this.bottomStripe = this.game.add.graphics(0, 0);
        this.bottomStripe.beginFill(0);
        this.bottomStripe.drawRect(0, this.game.height, this.game.width, this.game.height + stripeHeight);
        this.bottomStripe.endFill();
        this.game.add.tween(this.bottomStripe)
            .to({ top: -stripeHeight }, STRIPE_DURATION)
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
            'repeatButton',
            this.handleClickPlay,
            this
        );
        this.replayButton.anchor.set(0.5);
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
            titleText = I18N_END_WIN;
        } else if (this.mode === END_GAME_PLAYER_KILLED) {
            titleText = I18N_END_ARRESTED;
        } else if (this.mode === END_GAME_TIME_OUT) {
            titleText = I18N_END_TIME;
        } else if (this.mode === END_GAME_PROTEST_RATE) {
            titleText = I18N_END_FAIL;
        }

        const horizontalOffset = this.game.width / 15;
        const title = this.game.add.text(
            horizontalOffset,
            40,
            this.game.mz.i18n.getTranslation(titleText),
            {
                font: '26px Arial',
                fill: this.mode === END_GAME_WIN ? '#393' : '#933',
                wordWrap: true,
                wordWrapWidth: this.replayButton.left - horizontalOffset * 2
            }
        );
        this.sprite.addChild(title);

        const stats = [
            [I18N_STATS_TOTAL, this.stats.revived],
            [I18N_STATS_ACTIVE, this.stats.alive],
            [I18N_STATS_ARRESTED, this.stats.arrested],
            [I18N_STATS_LEFT, this.stats.left]
        ];

        if (this.mode !== END_GAME_TIME_OUT) {
            stats.unshift([I18N_STATS_TIME, String(getFormattedTime(this.stats.time))]);
        }

        const verticalOffset = title.bottom + title.top;
        let leftColumnWidth = 0;
        stats.forEach(([text], i) => {
            const label = this.game.add.text(
                horizontalOffset,
                i * 40 + verticalOffset,
                this.game.mz.i18n.getTranslation(text) + ':',
                {
                    font: '24px Arial',
                    fill: '#fff'
                }
            );
            if (label.width > leftColumnWidth) {
                leftColumnWidth = label.width;
            }
            this.sprite.addChild(label);
        });

        leftColumnWidth += 2 * horizontalOffset;

        stats.forEach(([_, value], i) => {
            const valueText = this.game.add.text(
                leftColumnWidth,
                i * 40 + verticalOffset,
                String(value),
                {
                    font: '24px Arial',
                    fill: '#fff'
                }
            );
            this.sprite.addChild(valueText);
        });
    }
}

export default EndMenu;
