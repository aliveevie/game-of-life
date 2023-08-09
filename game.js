function calculateNextGeneration(currentGrid) {
    const newGrid = [];
    for (let row = 0; row < numRows; row++) {
      const newRow = [];
      for (let col = 0; col < numCols; col++) {
        const cell = currentGrid[row][col];
        const aliveNeighbors = countAliveNeighbors(currentGrid, row, col);
        
        if (cell) {
          newRow.push(aliveNeighbors === 2 || aliveNeighbors === 3);
        } else {
          newRow.push(aliveNeighbors === 3);
        }
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }
  
  function countAliveNeighbors(grid, row, col) {
    const numRows = grid.length;
    const numCols = grid[0].length;
  
    let aliveNeighbors = 0;
  
    // Check all eight possible neighbor positions
    const neighborOffsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
  
    for (const [rowOffset, colOffset] of neighborOffsets) {
      const neighborRow = row + rowOffset;
      const neighborCol = col + colOffset;
  
      // Check if the neighbor position is within the grid boundaries
      if (neighborRow >= 0 && neighborRow < numRows && neighborCol >= 0 && neighborCol < numCols) {
        // Count the alive neighbor
        if (grid[neighborRow][neighborCol]) {
          aliveNeighbors++;
        }
      }
    }
  
    return aliveNeighbors;
  }

  const numCols = 10;
  const numRows = 10;

  const newGrid = Array.from({ length: numRows }, (_, rowIndex) => 
      Array.from({ length: numCols }, (_, colIndex) => (rowIndex) % 2 === 0 )
    );
    
    console.log(newGrid)

  

 
  