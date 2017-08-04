import Follower from './Follower.js';
import FOV from './FOV.js';

class Cop extends Follower {
    constructor({ game, x, y, fov, speed }) {
        super({ game, x, y, speed, spriteKey: 'cop' });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(this.FOV.graphics);
    }

    update() {
        this.speed.current = this.speed.value;
        if (this.target) {
            this.speed.current *= this.speed.running;
            this.moveTo(this.target);
        }

        super.update();
    }
}

export default Cop;
