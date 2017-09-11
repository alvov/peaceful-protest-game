class ScoreMeter {
    constructor({ game, x, y, width }) {
        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.width = width;

        this.progressBar = this.game.add.graphics();
        this.group.add(this.progressBar);
        this.label = this.game.add.text(
            20,
            -15,
            'Protest meter',
            {
                font: '12px Arial',
                fill: '#fff',
                align: 'right'
            }
        );
        this.label.setShadow(1, 1, 'rgba(0, 0, 0, .9)', 0);
        this.group.add(this.label);
    }

    update(value) {
        this.progressBar.clear();

        const height = 14;
        const x = 0;
        const y = 0;
        const colorThreshold = 30;
        const color = Phaser.Color.RGBArrayToHex([
            this.game.math.clamp(1 + (colorThreshold - value) / (100 - colorThreshold), 0, 1),
            this.game.math.clamp(value / colorThreshold, 0, 1),
            0
        ]);
        this.progressBar.lineStyle(2, 0x333333, 1);
        this.progressBar.drawRect(x, y - height, this.width, height);
        this.progressBar.lineStyle(height, color, 1);
        this.progressBar.moveTo(x, y - height / 2);
        this.progressBar.lineTo(x + Math.round(this.width * value / 100), y - height / 2);
    }
}

export default ScoreMeter;
