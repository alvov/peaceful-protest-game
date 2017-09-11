import ScoreMeter from './../objects/ScoreMeter.js';

class GameInterface {
    constructor({ game }) {
        this.game = game;

        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        this.score = new ScoreMeter({
            game: this.game,
            x: 10,
            y: this.game.height - 10,
            width: this.game.width - 20
        });
        this.group.add(this.score.group);

        this.textTimer = this.game.add.text(
            this.game.width - 10,
            20,
            '',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.textTimer.anchor.set(1, 0.5);
        this.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.group.add(this.textTimer);

        this.textProtestersCount = this.game.add.text(
            this.game.width - 10,
            60,
            '',
            {
                font: '25px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.textProtestersCount.anchor.set(1, 0.5);
        this.textProtestersCount.setShadow(2, 2, 'rgba(0, 0, 0, .5)', 0);
        this.group.add(this.textProtestersCount);

        this.buttonSound = this.game.add.button(
            0,
            0,
            'soundButtons',
            this.handleClickSound,
            this,
            1, 1, 1, 1,
            this.group
        );
    }

    update({ score, protestersAlive, protestersTotal }) {
        this.buttonSound.frame = this.game.sound.mute ? 1 : 0;

        this.score.update(score);

        this.textProtestersCount.setText(
            'Protesters count: ' +
            String(protestersAlive).padStart(2, '0') + ' / ' +
            protestersTotal
        );
    }

    updateTimer(time) {
        this.textTimer.setText(time);
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;
    }

    kill() {
        this.group.killAll();
    }
}

export default GameInterface;
