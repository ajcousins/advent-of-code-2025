const { getCommaSeparatedValues } = require('../utils.js');

const getSplitted = (chars, splitSize) => {
    const arr = [];
    let remainingChars = chars;
    while (remainingChars.length > 0) {
        const removed = remainingChars.slice(0, splitSize);
        arr.push(removed);
        remainingChars = remainingChars.slice(splitSize);
    }

    return arr;
}

const isInvalid = (num) => {
    const chars = num.toString();
    const halfLength = chars.length / 2;
    let windowSize = 1;
    while (windowSize <= halfLength) {
        if (chars.length % windowSize !== 0) {
            windowSize += 1;
            continue;
        }
        const splittedChars = getSplitted(chars, windowSize);
        const isAllSame = splittedChars.every(item => item === splittedChars[0]);
        if (isAllSame) return true;
        windowSize += 1;
    }

    return false;
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
