class Prefab {
    constructor({ game, x, y, speed, spriteKey, spriteName, props }) {
        this.props = props;
        this.game = game;

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.sprite = this.game.add.sprite(x, y, spriteKey, 0);
        this.sprite.mz = this;
        this.sprite.name = spriteName;
        this.sprite.anchor.set(0.5);

        this.game.physics.arcade.enable(this.sprite);

        this.stayingTimer = this.game.time.create(false);

        this.mode = null;
        this.moveTarget = null;

        // events
        this.sprite.body.onMoveComplete.add(() => {
            this.setMoveTarget(null);
        });
    }

    update() {
        if (!this.sprite.body.isMoving && this.moveTarget) {
            this.moveTo(this.moveTarget);
        }
    }

    setMode(mode) {
        this.mode = mode;
    }

    moveTo(coords) {
        const distance = this.game.math.distance(this.sprite.x, this.sprite.y, coords.x, coords.y);
        const duration = distance / this.speed.current * 1000; // ms
        const angle = this.game.math.angleBetweenPoints(this.sprite, coords);
        const angleDeg = this.game.math.radToDeg(angle);
        this.sprite.body.angle = angle;

        this.sprite.body.moveTo(duration, distance, angleDeg);
    }

    getNextCoords(bounds) {
        const directions = [];
        const offsetTop = 50;
        if (!bounds) {
            bounds = {
                top: this.sprite.y - this.sprite.top + offsetTop,
                right: this.game.world.width - (this.sprite.right - this.sprite.x),
                bottom: this.game.world.height - (this.sprite.bottom - this.sprite.y),
                left: this.sprite.x - this.sprite.left
            };
        }

        if (this.sprite.x > bounds.left) {
            directions.push('left');
        }
        if (this.sprite.x < bounds.right) {
            directions.push('right');
        }
        if (this.sprite.y > bounds.top) {
            directions.push('top');
        }
        if (this.sprite.y < bounds.bottom) {
            directions.push('bottom');
        }

        const direction = this.game.rnd.between(0, directions.length - 1);
        let x = this.sprite.x;
        let y = this.sprite.y;
        switch (directions[direction]) {
            case 'left':
                x = this.game.rnd.between(bounds.left, this.sprite.x - 1);
                break;
            case 'right':
                x = this.game.rnd.between(this.sprite.x + 1, bounds.right);
                break;
            case 'top':
                y = this.game.rnd.between(bounds.top, this.sprite.y - 1);
                break;
            case 'bottom':
                y = this.game.rnd.between(this.sprite.y + 1, bounds.bottom);
                break;
        }
        return { x: Math.round(x), y: Math.round(y) };
    }

    updateProgressBar(percent, color = 0x00ff00) {
        const y = -30;
        const width = 25;
        const height = 5;
        this.progressBar.clear();
        percent = this.game.math.clamp(percent, 0, 1);
        if (percent !== 0) {
            this.progressBar.lineStyle(1, color, 1);
            this.progressBar.drawRect(-width / 2, y - height / 2, width, height);
            this.progressBar.lineStyle(height, color, 1);
            this.progressBar.moveTo(-width / 2, y);
            this.progressBar.lineTo(Math.round(width * (-0.5 + percent)), y);
        }
    }

    setMoveTarget(coords) {
        this.stopMovement();
        if (coords) {
            this.moveTarget = { x: coords.x, y: coords.y };
        } else {
            this.moveTarget = null;
        }
    }

    stopMovement() {
        this.sprite.body.stopMovement(true);
    }

    stopWandering() {
        this.sprite.body.onMoveComplete.remove(this.wander, this);
        this.stayingTimer.stop(true);
    }

    revive() {
        this.sprite.revive(1);

        this.mode = null;
        this.moveTarget = null;

        // events
        this.sprite.body.onMoveComplete.add(() => {
            this.setMoveTarget(null);
        });
    }

    kill() {
        this.sprite.body.onMoveComplete.removeAll();
        this.sprite.kill();
    }
}

export default Prefab;
