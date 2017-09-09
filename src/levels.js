export default {
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 3 * 60, // s
        winningScore: 75,
        cops: {
            count: [
                [40, 0],
                [60, 1],
                [100, 2]
            ],
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
            count: 1,
            speed: {
                value: 50
            },
            fov: {
                distance: 150,
                angle: 100
            },
            duration: 5 // s
        },
        protesters: {
            count: {
                start: 10,
                max: 30,
                add: 8
            },
            speed: {
                value: 60
            },
            mood: 0.3,
            moodUp: 0.001,
            moodDown: 0.0001,
            dropPoster: 0.3
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 120,
            stamina: 100,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 4 * 60, // s
        winningScore: 75,
        cops: {
            count: [
                [40, 3],
                [60, 4],
                [100, 5]
            ],
            speed: {
                value: 60,
                running: 1.7
            },
            fov: {
                distance: 150,
                angle: 120
            }
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 10000,
            scoreThreshold: 50
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
            duration: 5
        },
        protesters: {
            count: {
                start: 30,
                max: 60,
                add: 10
            },
            max: 60,
            speed: {
                value: 60
            },
            mood: 0.25,
            moodUp: 0.002,
            moodDown: 0.0001,
            dropPoster: 0.1
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 100,
            stamina: 200,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        }
    }
};
