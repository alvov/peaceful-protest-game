export default {
    level1: {
        id: 'level1',
        worldWidth: 600,
        worldHeight: 600,
        duration: 5 * 60, // s
        winningScore: 75,
        cops: {
            count: 1,
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
            mood: 30,
            moodDown: 0.01,
            cheeringDuration: 5
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 150,
            cheering: 0.5,
            stamina: 100,
            staminaCooldown: 5 // s
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 5 * 60, // s
        winningScore: 75,
        cops: {
            count: 5,
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
            frequency: 25000
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
                add: 12
            },
            max: 60,
            speed: {
                value: 60
            },
            mood: 30,
            moodDown: 0.01,
            cheeringDuration: 3
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                clickSpeedUp: 1.05,
                running: 1.5
            },
            radius: 120,
            cheering: 0.5,
            stamina: 200,
            staminaCooldown: 5 // s
        }
    }
};
