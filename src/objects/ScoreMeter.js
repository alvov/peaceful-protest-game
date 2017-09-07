class ScoreMeter {
    constructor({ game, x, y, width, parentGroup, winPoint }) {
        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.width = width;
        this.winPoint = winPoint;
        parentGroup.add(this.group);

        this.progressBar = this.game.add.graphics();
        this.group.add(this.progressBar);
        // this.label = this.game.add.text(
        //     -280,
        //     0,
        //     'Score:',
        //     {
        //         font: '14px Arial',
        //         fill: '#000',
        //         align: 'right'
        //     }
        // );
        // this.group.add(this.label);
    }

    update(value) {
        this.progressBar.clear();
        value = this.game.math.clamp(value, 0, 100);
        const height = 10;
        const x = 0;
        const y = 0;
        this.progressBar.lineStyle(2, 0x333333, 1);
        this.progressBar.drawRect(x, y - height, this.width, height);
        this.progressBar.lineStyle(height, 0x00ff00, 1);
        this.progressBar.moveTo(x, y - height / 2);
        this.progressBar.lineTo(x + Math.round(this.width * value / 100), y - height / 2);
        this.progressBar.lineStyle(3, 0xffff00, 1);
        this.progressBar.moveTo(x + Math.round(this.width * this.winPoint / 100), y - height);
        this.progressBar.lineTo(x + Math.round(this.width * this.winPoint / 100), y);
    }
}

export default ScoreMeter;
