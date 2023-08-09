const numRows = 30;
const numCols = 30;

const randomGrid = Array.from({ length: numRows}, () => {
   return Array.from({ length: numCols }, () => Math.random() < 0.5 );
});

const clearGrid = Array.from( { length: numRows}, () => (
    Array.from( { length: numCols }, () => false )
));

export{
    randomGrid,
    clearGrid
}