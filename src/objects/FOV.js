import { FOV_MODE_NORMAL, FOV_MODE_CAPTURE } from '../constants.js';

const DEFAULT_COLORS = {
    [FOV_MODE_NORMAL]: 0x3a3a56,
    [FOV_MODE_CAPTURE]: 0x563a3a
};

class FOV {
    constructor({ game, radius, angle, colors = DEFAULT_COLORS }) {
        this.game = game;
        this.radius = radius;
        this.radiusSq = this.radius ** 2;
        this.halfViewAngle = this.game.math.degToRad(angle / 2);
        this.colors = colors;

        this.graphics = this.game.add.graphics(0, 0);
        this.center = null;
        this.isActive = true;
    }

    update({ x, y, angle, mode }) {
        this.center = { x, y };
        this.angle = angle;

        this.graphics.clear();

        if (!this.isActive) {
            return;
        }

        const startAngle = this.angle - this.halfViewAngle;
        const endAngle = this.angle + this.halfViewAngle;
        const arcStart = [
            x + Math.cos(startAngle) * this.radius,
            y + Math.sin(startAngle) * this.radius
        ];

        this.graphics.beginFill(this.colors[mode || FOV_MODE_NORMAL], 0.4);
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
        const distanceSq = this.game.math.distanceSq(this.center.x, this.center.y, x, y);
        if (distanceSq > this.radiusSq) {
            return false;
        }
        let angle = this.game.math.angleBetweenPoints(this.center, { x, y });

        const leftAngle = this.angle - this.halfViewAngle;
        const rightAngle = this.angle + this.halfViewAngle;

        if (leftAngle <= angle && angle <= rightAngle) {
            return true;
        }

        angle -= 2 * Math.PI * Math.sign(angle);

        return leftAngle <= angle && angle <= rightAngle;
    }

    destroy() {
        this.graphics.destroy();
        this.isActive = false;
    }

    kill() {
        this.graphics.kill();
        this.isActive = false;
    }

    revive() {
        this.graphics.revive();
        this.isActive = true;
    }
}

export default FOV;
