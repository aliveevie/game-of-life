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

let grid1 = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));

grid1[2][4] = true;
grid1[3][3] = true;
grid1[3][5] = true;
grid1[4][2] = true;
grid1[4][6] = true;
grid1[5][1] = true;
grid1[5][7] = true;
grid1[6][0] = true;
grid1[6][8] = true;
grid1[7][1] = true;
grid1[7][7] = true;
grid1[8][2] = true;
grid1[8][6] = true;
grid1[9][3] = true;
grid1[9][5] = true;
grid1[10][4] = true;

const pulsarPattern = grid1;


const CrazyCornersPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Crazy Corners pattern
const crazyCornersCells = [
  [2, 2], [2, 3], [2, 6], [2, 7],
  [3, 2], [3, 3], [3, 6], [3, 7],
  [6, 2], [6, 3], [6, 6], [6, 7],
  [7, 2], [7, 3], [7, 6], [7, 7]
];

crazyCornersCells.forEach(([row, col]) => {
  CrazyCornersPattern[row][col] = true;
});

const PentadecathlonPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Pentadecathlon pattern
const pentadecathlonCells = [
  [5, 3], [5, 4], [5, 5],
  [9, 3], [9, 4], [9, 5],
  [11, 3], [11, 4], [11, 5],
  [15, 3], [15, 4], [15, 5],
  [17, 3], [17, 4], [17, 5],
  [21, 3], [21, 4], [21, 5],
  [23, 3], [23, 4], [23, 5],
  [27, 3], [27, 4], [27, 5],
  [29, 3], [29, 4], [29, 5],
];

pentadecathlonCells.forEach(([row, col]) => {
  PentadecathlonPattern[row][col] = true;
});

const BabyPulsarPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Baby Pulsar pattern
const babyPulsarCells = [
  [8, 6], [8, 7], [8, 8],
  [10, 4], [10, 9],
  [11, 4], [11, 9],
  [12, 4], [12, 9],
  [13, 6], [13, 7], [13, 8]
];

babyPulsarCells.forEach(([row, col]) => {
  BabyPulsarPattern[row][col] = true;
});

const LoafPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Loaf pattern
const loafCells = [
  [7, 6], [7, 7],
  [8, 5], [8, 8],
  [9, 6], [9, 9],
  [10, 7]
];

loafCells.forEach(([row, col]) => {
  LoafPattern[row][col] = true;
});

const MaxDensityStillLifePattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Maximum Density Still Life pattern
const maxDensityStillLifeCells = [
  [3, 3], [3, 4],
  [4, 3], [4, 4]
];

maxDensityStillLifeCells.forEach(([row, col]) => {
  MaxDensityStillLifePattern[row][col] = true;
});

const LoadingDockPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Loading Dock pattern
const loadingDockCells = [
  [4, 5], [4, 6], [4, 10], [4, 11],
  [5, 4], [5, 12],
  [6, 4], [6, 12],
  [7, 5], [7, 6], [7, 10], [7, 11]
];

loadingDockCells.forEach(([row, col]) => {
  LoadingDockPattern[row][col] = true;
});


export{
    randomGrid,
    clearGrid,
    gliderGun,
    pulsarPattern,
    PentadecathlonPattern,
    CrazyCornersPattern,
    BabyPulsarPattern,
    LoadingDockPattern,
    MaxDensityStillLifePattern,
    LoafPattern
}




