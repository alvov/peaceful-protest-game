import Protester from './Protester.js';

const PROTESTERS_COUNT = 1;

class GameState {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
        this.game.load.spritesheet('protester', 'assets/protester.png', 100, 100);
        this.game.mz = {
            eventHandler: null,
            protesters: []
        };
    }

    create() {
        for (let i = 0; i < PROTESTERS_COUNT; i++) {
            const protester = new Protester({ game: this.game });
            this.game.add.existing(protester.sprite);
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

    }

    render() {
        // this.game.debug.spriteInputInfo(this.game.mz.protesters[0].sprite, 30, 30, '#000');
    }

    handleClick(sprite, pointer) {
        const activeProtester = this.game.mz.protesters.find(protester => protester.isActive);
        if (activeProtester) {
            activeProtester.setActive(false);
            activeProtester.setDisabled(true);
            const activeProtesterTween = this.game.add.tween(activeProtester.sprite).to(
                { x: pointer.x, y: pointer.y },
                500,
                Phaser.Easing.Linear.None,
                true
            );
            activeProtesterTween.onComplete.add(() => {
                activeProtester.setDisabled(false);
            });
        }
    }
}

export default GameState;
