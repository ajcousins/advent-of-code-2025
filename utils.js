const fs = require('fs');

const getLines = (test) => {
    const data = fs.readFileSync(test ? 'test.txt' : 'real.txt', 'utf8');
    const lines = data.split('\n').map(line => line.trim());
    return lines;
}

module.exports = { getLines };
