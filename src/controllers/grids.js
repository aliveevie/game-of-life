const numRows = 30;
const numCols = 30;

const randomGrid = Array.from({ length: numRows}, () => {
   return Array.from({ length: numCols }, () => Math.random() < 0.5 );
});

const clearGrid = Array.from( { length: numRows}, () => (
    Array.from( { length: numCols }, () => false )
));

const gliderGun = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Glider Gun pattern
const gunCells = [
  [24, 1], [22, 2], [24, 2],
  [12, 3], [13, 3], [20, 3], [21, 3], [34, 3], [35, 3],
  [11, 4], [15, 4], [20, 4], [21, 4], [34, 4], [35, 4],
  [0, 5], [1, 5], [10, 5], [16, 5], [20, 5], [21, 5],
  [0, 6], [1, 6], [10, 6], [14, 6], [16, 6], [17, 6], [22, 6], [24, 6],
  [10, 7], [16, 7], [24, 7],
  [11, 8], [15, 8],
  [12, 9], [13, 9]
];

gunCells.forEach(([row, col]) => {
  gliderGun[row][col] = true;
});

const PulsarPattern = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => false));

// Pulsar pattern
const pulsarCells = [
  [2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12],
  [4, 2], [4, 7], [4, 9], [4, 14],
  [5, 2], [5, 7], [5, 9], [5, 14],
  [6, 2], [6, 7], [6, 9], [6, 14],
  [7, 4], [7, 5], [7, 6], [7, 10], [7, 11], [7, 12],
  [9, 4], [9, 5], [9, 6], [9, 10], [9, 11], [9, 12],
  [10, 2], [10, 7], [10, 9], [10, 14],
  [11, 2], [11, 7], [11, 9], [11, 14],
  [12, 2], [12, 7], [12, 9], [12, 14],
  [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12]
];

pulsarCells.forEach(([row, col]) => {
  PulsarPattern[row][col] = true;
});

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

// Repeat the same process for the other patterns

// Baby Pulsar pattern
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
    gliderGun
}