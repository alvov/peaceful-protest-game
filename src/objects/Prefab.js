class Prefab {
    constructor({ game, x, y, speed, spriteKey }) {
        this.game = game;

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.bounce.set(0);

        this.attractionPoint = null;
    }

    moveTo(coords) {
        const distance = Phaser.Point.distance(this.sprite, coords);
        const duration = distance / this.speed.current * 1000; // ms
        const angle = this.game.math.radToDeg(Phaser.Point.angle(coords, this.sprite));

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

    updateProgressBar(percent, color = 0x00ff00) {
        const y = -60;
        const width = 50;
        const height = 10;
        this.progressBar.clear();
        if (percent) {
            if (percent > 1) {
                percent = 1;
            }
            this.progressBar.lineStyle(2, color, 1);
            this.progressBar.drawRect(-width / 2, y - height / 2, width, height);
            this.progressBar.lineStyle(height, color, 1);
            this.progressBar.moveTo(-width / 2, y);
            this.progressBar.lineTo(Math.round(width * (-0.5 + percent)), y);
        }
    }

    kill() {
        this.sprite.kill();
    }
}

export default Prefab;
