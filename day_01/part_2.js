const { getLines } = require('../utils.js');

(() => {
    const lines = getLines();
    let current = 50;
    let clicks = 0;

    for (const line of lines) {
        const dir = line[0];
        let mag = Number(line.slice(1));

        while (mag > 0) {
            if (dir === 'L') {
                if (current === 0) current = 100
                current -= 1
            }
            if (dir === 'R') {
                if (current === 100) current = 0
                current += 1
            }
            if (current === 0 || current === 100) {
                clicks += 1;
            }
            mag--
        }
    }

    console.log('totalClicks:', clicks);
})()
