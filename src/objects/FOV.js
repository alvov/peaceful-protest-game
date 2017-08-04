const COLORS = {
    normal: 0x3a3a56,
    active: 0x563a3a
};

class FOV {
    constructor({ game, radius, angle, colors = COLORS }) {
        this.game = game;
        this.radius = radius;
        this.halfViewAngle = this.game.math.degToRad(angle / 2);
        this.colors = colors;

        this.graphics = this.game.add.graphics(0, 0);
        this.center = null;
        this.exists = true;
    }

    update({ x, y, angle, mode }) {
        this.center = { x, y };
        this.angle = angle;

        const startAngle = this.angle - this.halfViewAngle;
        const endAngle = this.angle + this.halfViewAngle;
        const arcStart = [
            x + Math.cos(startAngle) * this.radius,
            y + Math.sin(startAngle) * this.radius
        ];

        this.graphics.clear();
        this.graphics.beginFill(this.colors[mode || 'normal'], 0.4);
        this.graphics.moveTo(x, y);
        this.graphics.lineTo(...arcStart);
        this.graphics.arc(
            x,
            y,
            this.radius,
            startAngle,
            endAngle,
            false,
            10
        );
        this.graphics.lineTo(x, y);
        this.graphics.endFill();
    }

    containsPoint({ x, y }) {
        if (!this.center) {
            return false;
        }
        const distance = Phaser.Point.distance(this.center, { x, y });
        if (distance > this.radius) {
            return false;
        }
        let angle = Phaser.Point.angle({ x, y }, this.center);

        const leftAngle = this.angle - this.halfViewAngle;
        const rightAngle = this.angle + this.halfViewAngle;

        if (leftAngle <= angle && angle <= rightAngle) {
            return true;
        }

        angle -= 2 * Math.PI * Math.sign(angle);

        return leftAngle <= angle && angle <= rightAngle;
    }

    kill() {
        this.graphics.destroy();
        this.exists = false;
    }
}

export default FOV;
