const { getCommaSeparatedValues } = require('../utils.js');

const isInvalid = (num) => {
    const chars = num.toString();
    const length = chars.length;
    if (length % 2 !== 0) return false;
    const left = chars.slice(0, length / 2);
    const right = chars.slice(length / 2);
    if (left === right) return true;
    return false
}

(() => {
    const values = getCommaSeparatedValues();
    const invalidIds = [];
    for (const val of values) {
        const [low, high] = val.split('-').map(n => Number(n));
        let current = low;
        while (current <= high) {
            if (isInvalid(current)) invalidIds.push(current);
            current += 1;
        }
    }

    const sum = invalidIds.reduce((acc, cur) => acc + cur, 0)
    console.log('sum:', sum);
})()