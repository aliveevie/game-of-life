const numRows = 30;
const numCols = 30;

const randomGrid = Array.from({ length: numRows}, () => {
   return Array.from({ length: numCols }, () => Math.random() < 0.5 );
});

const clearGrid = Array.from( { length: numRows}, () => (
    Array.from( { length: numCols }, () => false )
));


// Create a 30x30 matrix grid filled with false
let grid = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));

// Set specific cells to true
    grid[1][2] = true;
    grid[2][2] = true;
    grid[3][1] = true;
    grid[3][3] = true;
    grid[4][0] = true;
    grid[4][4] = true;
    grid[5][1] = true;
    grid[5][2] = true;
    grid[5][3] = true;

// Create the glider gun pattern

const gliderGun = grid;

grid[2][4] = true;
grid[3][3] = true;
grid[3][5] = true;
grid[4][2] = true;
grid[4][6] = true;
grid[5][1] = true;
grid[5][7] = true;
grid[6][0] = true;
grid[6][8] = true;
grid[7][1] = true;
grid[7][7] = true;
grid[8][2] = true;
grid[8][6] = true;
grid[9][3] = true;
grid[9][5] = true;
grid[10][4] = true;

const pulsarPattern = grid;

export{
    randomGrid,
    clearGrid,
    gliderGun,
    pulsarPattern
}




