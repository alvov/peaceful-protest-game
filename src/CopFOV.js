const COLORS = {
    normal: 0x3a3a56,
    active: 0x563a3a
};

class CopFOV {
    constructor({ game }) {
        this.game = game;

        this.graphics = this.game.add.graphics(0, 0);
        this.color = 0;
    }

    update({ x, y, angle, mode }) {
        this.graphics.clear();
        this.graphics.beginFill(COLORS[mode || 'normal'], 0.5);
        this.graphics.arc(
            x,
            y,
            200,
            angle - Math.PI / 2,
            angle + Math.PI / 2
        );
        this.graphics.endFill();
    }
}

export default CopFOV;
