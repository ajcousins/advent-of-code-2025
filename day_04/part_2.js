const { Grid } = require('../utils.js');

(() => {
    const grid = new Grid();
    let rollTotal = 0;
    let countInPass = 0
    let isFirstPass = true;
    while (countInPass !== 0 || isFirstPass) {
        countInPass = 0;
        isFirstPass = false;
        grid.traverse((val, address) => {
            if (val !== '@') return;
            const neighbours = grid.getCellNeighbours(address);
            const adjacentRolls = neighbours
                .map(neighbourAddr => grid.getCellValue(neighbourAddr))
                .reduce((acc, cur) => cur === '@' ? acc + 1 : acc, 0);
            if (adjacentRolls < 4) {
                rollTotal += 1; // increment count
                countInPass += 1;
                grid.setValueByAddress(address, '.'); // remove roll
                grid.printGrid();
            }
        });
    }

    console.log('rollTotal:', rollTotal);
})()
