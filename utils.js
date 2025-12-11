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
class Grid {
    constructor(test) {
        this._data = fs.readFileSync(test ? 'test.txt' : 'real.txt', 'utf8');
        this.rows = this._data.split('\n');
    }

    printGrid() {
        this.rows.forEach(row => {
            console.log(row);       
        })
    }

    traverse(callback) {
        for (let y = 0; y < this.rows.length; y++) {
            const rowCells = this.rows[y].split('');
            for (let x = 0; x < rowCells.length; x++) {
                callback(rowCells[x], { y, x });
            }
        }
    }

    addVectors(vector1, vector2) {
        return {
            y: vector1.y + vector2.y,
            x: vector1.x + vector2.x,
        }
    }

    getCellNeighbours(address) {
        const adjacent = [
            { y: -1, x: -1 },   // NW
            { y: -1, x: 0 },    // N
            { y: -1, x: 1 },    // NE
            { y: 0, x: -1 },    // W
            { y: 0, x: 1 },     // E
            { y: 1, x: -1 },    // SW
            { y: 1, x: 0 },     // S
            { y: 1, x: 1 },     // SE
        ]

        return adjacent
            .map(dir => this.addVectors(address, dir))
            .filter(addr => this.isInRange(addr));
    }

    isInRange(address) {
        const { y, x } = address;
        if (y < 0 || x < 0 || y >= this.rows.length || x >= this.rows[0].split('').length) {
            return false;
        }

        return true;
    }

    getCellValue(address) {
        const { y, x } = address;
        if (!this.isInRange(address)) return null;

        return this.rows[y].split('')[x];
    }

    setValueByAddress(address, newValue) {
        const { y, x } = address;
        const existingRows = this.rows;
        const targetRow = existingRows[y];
        const newRow = targetRow.slice(0, x) + newValue + targetRow.slice(x + 1);
        const newExistingRows = [...existingRows.slice(0, y), newRow, ...existingRows.slice(y + 1)];
        this.rows = newExistingRows;
        return newExistingRows;
    }
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
    getHighestVal,
    Grid,
};
