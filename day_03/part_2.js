const { getLines, getHighestVal } = require('../utils.js');

(() => {
    const lines = getLines();
    const maxJoltages = [];
    for (const line of lines) {
        let joltagesToFill = 12;
        let substringToCheck = line; // trimmed from left
        const thisJoltage = [];
        while (joltagesToFill > 0) {
            const substringLength = substringToCheck.length;
            const trimmedFromRight = substringToCheck.slice(0, substringLength - joltagesToFill + 1)
            const { val, idx } = getHighestVal(trimmedFromRight);
            thisJoltage.push(val);
            substringToCheck = substringToCheck.slice(idx + 1);
            joltagesToFill -= 1;
        }

        maxJoltages.push(Number(thisJoltage.join('')));
    }

    const sum = maxJoltages.reduce((acc, cur) => acc + cur, 0)
    console.log('sum:', sum);
})()
