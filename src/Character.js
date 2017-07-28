class Character {
    constructor({ game, x, y, spriteKey }) {
        this.game = game;

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.bounce.set(0);

        this.attractionPoint = null;
    }

    moveTo({ x, y }) {
        const distance = this.game.physics.arcade.distanceToXY(this.sprite, x, y);
        const duration = distance / this.speed * 1000; // ms
        const angle = this.game.math.radToDeg(this.game.physics.arcade.angleToXY(this.sprite, x, y));

        this.sprite.body.moveTo(duration, distance, angle);
    }

    getNextCoords() {
        const directions = [];
        if (this.attractionPoint && this.game.rnd.between(0, 1)) {
            if (this.attractionPoint.x > this.sprite.x) {
                directions.push('right');
            } else {
                directions.push('left');
            }
            if (this.attractionPoint.y > this.sprite.y) {
                directions.push('bottom');
            } else {
                directions.push('top');
            }
        } else {
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
