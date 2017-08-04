import Follower from './Follower.js';
import FOV from './FOV.js';

class Journalist extends Follower {
    constructor({ game, x, y, fov, speed, duration, points }) {
        super({ game, x, y, speed, spriteKey: 'journalist' });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: {
                normal: 0xdddddd,
                active: 0xffffff
            }
        });
        fov.group.add(this.FOV.graphics);

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.shootingTimer = this.game.time.create();
        this.duration = duration * 1000;
        this.points = points;
    }

    update() {
        if (this.target) {
            this.turnTo(this.target);
            this.updateProgressBar(this.shootingTimer.ms / this.duration);
        }

        super.update();
    }

    turnTo({ x, y }) {
        this.sprite.body.angle = Phaser.Point.angle({ x, y }, this.sprite);
    }

    follow(target) {
        if (target === this.target) {
            return;
        }

        super.follow(target);

        if (this.target) {
            this.shootingTimer.add(this.duration, this.finishShooting, this);
            this.shootingTimer.start();
        } else {
            this.shootingTimer.stop(true);
            this.updateProgressBar(null);
        }
    }

    finishShooting() {
        this.target.mz.score += this.points;
        this.follow(null);
        this.updateProgressBar(null);
        this.FOV.kill();
    }
}

export default Journalist;
