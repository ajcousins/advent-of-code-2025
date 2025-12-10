const { getLines, getHighestVal } = require('../utils.js');

(() => {
    const lines = getLines();
    const maxJoltages = [];
    for (const line of lines) {
        const { val, idx } = getHighestVal(line.slice(0, -1));
        const subStringToCheck = line.slice(idx + 1);
        const { val: subVal } = getHighestVal(subStringToCheck);
        maxJoltages.push(val * 10 + subVal);
    }

    const sum = maxJoltages.reduce((acc, cur) => acc + cur, 0)
    console.log('sum:', sum);
})()
