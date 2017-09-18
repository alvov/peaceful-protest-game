class DroppedPoster {
    constructor({ game, group, x, y, alive }) {
        this.game = game;
        this.aliveTime = alive * 1000;

        this.sprite = this.game.add.sprite(x, y, 'poster', 0, group);
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = this.game.rnd.sign() * Math.PI / 3;

        this.livingTimer = this.game.time.create(false);
        this.dyingTimer = this.game.time.create(false);
        this.launchLivingTimer();
    }

    update() {
        if (this.dyingTimer.running) {
            this.sprite.alpha = Math.floor(this.dyingTimer.ms / 400) % 2;
        }
    }

    handleLivingTimer() {
        this.dyingTimer.add(this.aliveTime / 4, this.kill, this);
        this.dyingTimer.start();
    }

    launchLivingTimer() {
        this.livingTimer.add(3 * this.aliveTime / 4, this.handleLivingTimer, this);
        this.livingTimer.start();
    }

    revive(coords) {
        this.sprite.x = coords.x;
        this.sprite.y = coords.y;
        this.sprite.alpha = 1;

        this.launchLivingTimer();
        this.sprite.revive();
    }

    kill() {
        this.livingTimer.stop(true);
        this.dyingTimer.stop(true);
        this.sprite.kill();
    }
}

export default DroppedPoster;
