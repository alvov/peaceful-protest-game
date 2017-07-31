export default {
    level1: {
        worldWidth: 600,
        worldHeight: 600,
        duration: 2 * 60, // s
        winningScore: 20,
        cops: {
            count: 3,
            speed: {
                walking: 50,
                running: 60
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        protesters: {
            count: 30,
            speed: {
                walking: 60
            }
        },
        player: {
            speed: {
                walking: 120
            }
        }
    },
    level2: {
        worldWidth: 800,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningScore: 100,
        cops: {
            count: 5,
            speed: {
                walking: 60,
                running: 80
            },
            fov: {
                distance: 200,
                angle: 120
            }
        },
        protesters: {
            count: 30,
            speed: {
                walking: 60
            }
        },
        player: {
            speed: {
                walking: 120
            }
        }
    }
};
