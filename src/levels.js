export default {
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 2 * 60, // s
        winningScore: 60,
        cops: {
            count: 5,
            speed: {
                value: 50,
                running: 1.7
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        press: {
            count: 3,
            speed: {
                value: 50
            },
            fov: {
                distance: 200,
                angle: 150
            },
            duration: 5, // s
            points: 20
        },
        protesters: {
            count: 30,
            speed: {
                value: 60
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            stamina: 100,
            staminaCooldown: 5 // s
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningScore: 100,
        cops: {
            count: 7,
            speed: {
                value: 60,
                running: 1.7
            },
            fov: {
                distance: 200,
                angle: 120
            }
        },
        press: {
            count: 5,
            speed: {
                value: 50
            },
            fov: {
                distance: 100,
                angle: 100
            },
            duration: 7, //
            points: 20
        },
        protesters: {
            count: 30,
            speed: {
                value: 60
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            stamina: 200,
            staminaCooldown: 5 // s
        }
    }
};
