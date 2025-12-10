const fs = require('fs');

const getLines = (test) => {
    const data = fs.readFileSync(test ? 'test.txt' : 'real.txt', 'utf8');
    const lines = data.split('\n').map(line => line.trim());
    return lines;
}

const getCommaSeparatedValues = (test) => {
    const data = fs.readFileSync(test ? 'test.txt' : 'real.txt', 'utf8');
    const lines = data.split(',').map(line => line.trim());
    return lines;
}

const getHighestVal = (str) => {
    const chars = str.split('').map(c => Number(c));
    let idx = 0;
    let val = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] > val) {
            val = chars[i];
            idx = i;
        }
    }

    return { val, idx }
}

module.exports = {
    getLines,
    getCommaSeparatedValues,
    getHighestVal
};
