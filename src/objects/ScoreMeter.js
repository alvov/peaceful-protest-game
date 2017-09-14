class ScoreMeter {
    constructor({ game, x, y, width }) {
        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.width = width;

        this.scoreMeter = this.game.add.graphics();
        this.group.add(this.scoreMeter);

        this.moodMeter = this.game.add.graphics();
        this.group.add(this.moodMeter);

        this.aliveMeter = this.game.add.graphics();
        this.group.add(this.aliveMeter);

        this.label = this.game.add.text(
            -this.width / 2 + 20,
            -8,
            this.game.mz.i18n.getTranslation('Protest meter'),
            {
                font: '12px Arial',
                fill: '#000',
                align: 'right'
            }
        );
        this.group.add(this.label);

        // this.moodNumber = this.game.add.text(
        //     this.width / 2 - 5,
        //     7,
        //     '0',
        //     {
        //         font: '10px Arial',
        //         fill: '#000'
        //     }
        // );
        // this.moodNumber.anchor.set(1, 0);
        // this.group.add(this.moodNumber);
        //
        // this.aliveNumber = this.game.add.text(
        //     -5,
        //     7,
        //     '0',
        //     {
        //         font: '10px Arial',
        //         fill: '#000'
        //     }
        // );
        // this.aliveNumber.anchor.set(1, 0);
        // this.group.add(this.aliveNumber);
    }

    update({ score, mood, protestersAlive, protestersTotal }) {
        this.updateScoreMeter(score);
        this.updateAliveMeter(protestersAlive, protestersTotal);
        this.updateMoodMeter(mood);
    }

    updateScoreMeter(value) {
        this.updateMeter({
            graphics: this.scoreMeter,
            value,
            width: this.width,
            height: 16,
            x: -this.width / 2,
            y: 0,
            colorThreshold: 30
        });
    }

    updateAliveMeter(protestersAlive, protestersTotal) {
        this.updateMeter({
            graphics: this.aliveMeter,
            value: 100 * protestersAlive / protestersTotal,
            width: this.width / 2 - 1,
            height: 6,
            x: -this.width / 2,
            y: 13,
            colorThreshold: 50
        });

        // this.aliveNumber.setText(`${protestersAlive} / ${protestersTotal}`);
    }

    updateMoodMeter(value) {
        this.updateMeter({
            graphics: this.moodMeter,
            value,
            width: this.width / 2 - 1,
            height: 6,
            x: 1,
            y: 13,
            colorThreshold: 50
        });

        // this.moodNumber.setText(Math.round(value));
    }

    updateMeter({ graphics, value, width, height, x, y, colorThreshold }) {
        graphics.clear();

        const color = Phaser.Color.RGBArrayToHex([
            this.game.math.clamp(1 + (colorThreshold - value) / (100 - colorThreshold), 0, 1),
            this.game.math.clamp(value / colorThreshold, 0, 1),
            0
        ]);

        graphics.lineStyle(height, 0xffffff, 0.9);
        graphics.moveTo(x, y);
        graphics.lineTo(x + width, y);

        graphics.lineStyle(height, color, 1);
        graphics.moveTo(x, y);
        graphics.lineTo(x + Math.round(width * value / 100), y);
    }
}

export default ScoreMeter;
