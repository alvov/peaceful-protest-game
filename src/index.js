import Boot from './states/Boot.js';
import Loading from './states/Loading.js';
import StartMenu from './states/StartMenu.js';
import Help from './states/Help.js';
import Controls from './states/Controls.js';
import Game from './states/Game.js';

// this fixes mobile browser 100% height issue with address bar and tabs
setTimeout(function() {
    const windowInnerHeight = window.innerHeight;
    if (document.body.clientHeight > windowInnerHeight) {
        document.body.style.height = windowInnerHeight + 'px';
        document.documentElement.style.height = windowInnerHeight + 'px';
    }

    const containerNode = document.querySelector('.js-game-container');

    const game = new Phaser.Game({
        width: containerNode.clientWidth,
        height: containerNode.clientHeight,
        parent: containerNode,
        antialias: true,
        renderer: Phaser.CANVAS
    });

    game.state.add('Boot', Boot);
    game.state.add('Loading', Loading);
    game.state.add('StartMenu', StartMenu);
    game.state.add('Help', Help);
    game.state.add('Controls', Controls);
    game.state.add('Game', Game);

    game.state.start('Boot');
}, 50);

document.body.style.backgroundImage = `url(${require('./assets/pattern.png')})`;
