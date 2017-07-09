import GameState from './GameState.js';

const game = new Phaser.Game({
    parent: document.querySelector('.js-game-container')
});

game.state.add('Game', GameState);
game.state.start('Game');
