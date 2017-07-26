class Character {
    constructor({ game }) {
        this.game = game;
    }

    moveTo({ x, y }) {
        const distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
        const duration = distance / this.speed * 1000; // ms
        const angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

        this.sprite.body.moveTo(duration, distance, angle);
    }

    getNextCoords() {
        const directions = [];
        if (this.sprite.x > this.sprite.width) {
            directions.push('left');
        }
        if (this.sprite.x < this.game.world.width - this.sprite.width) {
            directions.push('right');
        }
        if (this.sprite.y > this.sprite.height) {
            directions.push('top');
        }
        if (this.sprite.y < this.game.world.height - this.sprite.height) {
            directions.push('bottom');
        }

        const direction = this.game.rnd.between(0, directions.length - 1);
        let x = this.sprite.x;
        let y = this.sprite.y;
        switch (directions[direction]) {
            case 'left':
                x = this.game.rnd.between(this.sprite.width, this.sprite.x - 1);
                break;
            case 'right':
                x = this.game.rnd.between(this.sprite.x + 1, this.game.world.width - this.sprite.width);
                break;
            case 'top':
                y = this.game.rnd.between(this.sprite.height, this.sprite.y - 1);
                break;
            case 'bottom':
                y = this.game.rnd.between(this.sprite.y + 1, this.game.world.height - this.sprite.height);
                break;
        }
        return { x: Math.round(x), y: Math.round(y) };
    }
}

export default Character;
