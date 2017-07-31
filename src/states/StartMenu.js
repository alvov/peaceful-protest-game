import levels from '../levels.js';
import { CURRENT_LEVEL } from '../constants.js';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = '#ccc';
    }

    create() {
        this.title = this.game.add.text(this.world.centerX, 2 / 3 * this.world.centerY, 'Мирный Протест MVP');
        this.title.anchor.setTo(0.5);

        this.playButton = this.game.add.button(this.world.centerX, this.world.centerY, 'buttons', this.handleClickPlay, this)
        this.playButton.anchor.setTo(0.5);
    }

    resize(newWidth, newHeight) {

    }

    handleClickPlay() {
        this.state.start('Loading', true, false, {
            assets: [
                ['spritesheet', 'border', 'assets/border.png', 400, 200],
                ['spritesheet', 'cop', 'assets/cop.png', 88, 98],
                ['spritesheet', 'player', 'assets/player.png', 60, 92],
                ['spritesheet', 'protester1', 'assets/protester01.png', 72, 98],
                ['spritesheet', 'protester2', 'assets/protester02.png', 60, 98],
                ['spritesheet', 'protester3', 'assets/protester03.png', 72, 98],
                ['spritesheet', 'poster', 'assets/poster.png', 120, 142],
                ['image', 'ground01', 'assets/ground01.jpg']
            ],
            nextState: [
                'Game', true, false, levels[CURRENT_LEVEL]
            ]
        });
    }
}

export default StartMenu;
