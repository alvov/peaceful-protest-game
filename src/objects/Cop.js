import Prefab from './Prefab.js';
import FOV from './FOV.js';
import {
    COP_MODE_ENTER,
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    FOV_MODE_CAPTURE,
    FOV_MODE_NORMAL
} from '../constants.js';

class Cop extends Prefab {
    constructor({ game, x = 0, y = 0, alive, fov, speed, spriteName }) {
        super({ game, x, y, speed, spriteKey: 'cop', spriteName });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(this.FOV.graphics);

        this.target = null;
        this.attractionPoint = null;
        this.attractionStrength = 0;
        this.returnCoords = null;

        if (!alive) {
            this.kill();
        }
    }

    update() {
        let newSpeed = this.speed.value;
        if (this.mode === COP_MODE_PURSUE || this.mode === COP_MODE_ENTER) {
            newSpeed *= this.speed.running;
        }
        this.setSpeed(newSpeed);

        super.update();

        this.FOV.update({
            x: this.sprite.x,
            y: this.sprite.y,
            angle: this.sprite.body.angle,
            mode: this.mode === COP_MODE_PURSUE ? FOV_MODE_CAPTURE : FOV_MODE_NORMAL
        });
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case COP_MODE_WANDER: {
                const { coords } = props;
                // clean up previous state
                if (this.mode === COP_MODE_PURSUE) {
                    this.target = null;
                } else if (this.mode === COP_MODE_CONVOY) {
                    this.target = null;
                    this.returnCoords = null;
                    this.FOV.revive();
                }
                if (coords) {
                    this.moveTo(coords, { callback: () => this.wander() });
                } else {
                    this.wander();
                }
                break;
            }
            case COP_MODE_PURSUE: {
                const { target } = props;
                // clean up previous state
                if (this.mode === COP_MODE_WANDER) {
                    this.stopWandering();
                }
                this.target = target;
                this.moveTo(target);
                break;
            }
            case COP_MODE_CONVOY: {
                const { jailCoords } = props;
                this.FOV.kill();
                this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                this.moveTo(jailCoords, () => this.handleCovoyEnd())
                break;
            }
            case COP_MODE_ENTER: {
                const { coords } = props;
                this.moveTo(coords[0]);

                const callback = () => {
                    this.FOV.revive();
                    this.setMode(COP_MODE_WANDER);
                }
                this.moveTo(coords[0], { callback, reset: false })
                break;
            }
        }

        super.setMode(mode);
    }

    handleCovoyEnd() {
        for (let i = 0; i < this.sprite.children.length; i++) {
            this.sprite.getChildAt(i).mz.kill();
        }

        this.setMode(COP_MODE_WANDER, { coords: this.returnCoords });
    }

    wander() {
        const nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
        if (nextAction !== 0) {
            this.moveTo(this.getNextCoords(), { callback: () => this.wander() });
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
            this.stayingTimer.start();
        }
    }

    getNextCoords() {
        let bounds;
        const rnd = this.game.rnd.frac();
        if (
            this.attractionStrength === 1 ||
            this.attractionStrength > 0 && rnd <= this.attractionStrength
        ) {
            bounds = {
                top: Math.min(this.sprite.y, this.attractionPoint.y),
                right: Math.max(this.sprite.x, this.attractionPoint.x),
                bottom: Math.max(this.sprite.y, this.attractionPoint.y),
                left: Math.min(this.sprite.x, this.attractionPoint.x)
            };
        }
        return super.getNextCoords(bounds);
    }

    revive(rtl) {
        const offset = this.game.rnd.between(50, 200);
        const x = rtl ? -offset : this.game.world.width + offset;
        const y = 110;
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.body.reset(x, y);

        const entranceX = this.game.rnd.between(1, Math.floor(this.game.world.width / 100) - 1) * 100;
        this.setMode(COP_MODE_ENTER, {
            coords: [{ x: entranceX, y }, { x: entranceX, y: y + this.sprite.height }]
        });

        super.revive();
    }

    kill() {
        this.target = null;

        this.stopWandering();
        this.FOV.kill();

        super.kill();
    }
}

export default Cop;
