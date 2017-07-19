import Protester from './../Protester.js';
import Cop from './../Cop.js';

const PROTESTERS_COUNT = 1;
const COPS_COUNT = 3;

class Game {
    preload() {
        this.game.mz = {
            eventHandler: null,
            cops: [],
            protesters: []
        };
    }

    create() {
        const bgTile = this.game.add.tileSprite(0, 0, 1024, 768, 'ground01');
        bgTile.tileScale.set(0.2);

        this.bitmap = this.game.add.bitmapData(this.game.width, this.game.height);
        this.game.add.image(0, 0, this.bitmap);

        for (let i = 0; i < COPS_COUNT; i++) {
            const cop = new Cop({
                game: this.game,
                bitmap: this.bitmap,
                x: this.game.rnd.between(0, this.game.world.width),
                y: this.game.rnd.between(0, this.game.world.height)
            });
            this.game.mz.cops.push(cop);
        }

        for (let i = 0; i < PROTESTERS_COUNT; i++) {
            const protester = new Protester({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY
            });
            this.game.mz.protesters.push(protester);
        }
        this.game.mz.eventHandler = this.game.add.sprite(0, 0);
        this.game.mz.eventHandler.fixedToCamera = true;
        this.game.mz.eventHandler.scale.setTo(this.game.width, this.game.height);
        this.game.mz.eventHandler.inputEnabled = true;
        this.game.mz.eventHandler.input.priorityID = 0;
        this.game.mz.eventHandler.events.onInputUp.add(this.handleClick, this);
    }

    update() {
        for (let i = 0; i < this.game.mz.protesters.length; i++) {
            this.game.mz.protesters[i].update();
        }
        for (let i = 0; i < this.game.mz.cops.length; i++) {
            this.game.mz.cops[i].update();
        }
    }

    render() {
        // this.game.debug.spriteInputInfo(this.game.mz.protesters[0].sprite, 30, 30, '#000');
    }

    handleClick(sprite, pointer) {
        const activeProtester = this.game.mz.protesters.find(protester => protester.isActive);
        if (!activeProtester) {
            return;
        }
        activeProtester.moveTo({
            x: pointer.x,
            y: pointer.y
        });
    }
}

export default Game;
