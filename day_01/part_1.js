const { getLines } = require('../utils.js');

const keepWithinRange = (cur) => {
    while (cur < 0 || cur > 99) {
        if (cur < 0) cur += 100;
        if (cur > 99) cur -= 100;
    }
    return cur
}

(() => {
    const lines = getLines();
    let current = 50;
    let count = 0;
    
    for (const line of lines) {
        const dir = line[0];
        const mag = Number(line.slice(1));

        dir === 'L' ? current -= mag : current += mag;
        current = keepWithinRange(current)
   
        if (current === 0) count++;
    }

    console.log('count:', count);
})()