const { Grid } = require('../utils.js');

(() => {
    const grid = new Grid();
    const rollValues = []
    grid.traverse((val, address) => {
        if (val !== '@') return;
        const neighbours = grid.getCellNeighbours(address);
        const adjacentRolls = neighbours
            .map(neighbourAddr => grid.getCellValue(neighbourAddr))
            .reduce((acc, cur) => cur === '@' ? acc + 1 : acc, 0);
        rollValues.push(adjacentRolls);
    });

    const numberValid = rollValues.filter(val => val < 4).length;
    console.log('numberValid:', numberValid);
})()
