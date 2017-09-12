import ScoreMeter from './../objects/ScoreMeter.js';

class GameInterface {
    constructor({ game, onTogglePoster }) {
        this.game = game;
        this.onTogglePoster = onTogglePoster;

        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        this.score = new ScoreMeter({
            game: this.game,
            x: this.game.width / 2,
            y: this.game.height - 20,
            width: 300
        });
        this.group.add(this.score.group);

        this.textTimer = this.game.add.text(
            this.game.width - 10,
            20,
            '',
            {
                font: '25px Arial',
                fill: '#fff'
            }
        );
        this.textTimer.anchor.set(1, 0.5);
        this.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);
        this.group.add(this.textTimer);

        this.buttonSound = this.game.add.button(
            0,
            0,
            'soundButtons',
            this.handleClickSound,
            this,
            1, 1, 1, 1,
            this.group
        );

        if (Phaser.Device.touch) {
            this.buttonPoster = this.game.add.button(
                20,
                this.game.height - 20,
                'posterButton',
                this.handleTogglePoster,
                this,
                1, 1, 1, 1,
                this.group
            );
            this.buttonPoster.anchor.set(0, 1);
            this.buttonPoster.input.priorityID = 2;
        }
    }

    update({ score, protestersAlive, protestersTotal, meanMood }) {
        this.buttonSound.frame = this.game.sound.mute ? 1 : 0;

        this.score.update({
            score,
            protestersAlive,
            protestersTotal,
            mood: 100 * meanMood
        });
    }

    updateTimer(time) {
        this.textTimer.setText(time);
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;
    }

    handleTogglePoster() {
        this.onTogglePoster();
    }

    kill() {
        this.group.killAll();
    }
}

export default GameInterface;
