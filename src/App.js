import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const numRows = 30;
  const numCols = 30;
  const [grid, setGrid] = useState([]);
  
  // Inside the GameOfLifeGrid component

  useState(() => {
    const newGrid = Array.from({ length: numRows }, () => 
      Array.from({ length: numCols }, () => false )
    );
    setGrid(newGrid);
  }, []);  

  function handleClick(rowIndex, colIndex){
    const newGrid = [...grid]
    console.log(grid)
    newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex]
    setGrid(newGrid)
  }


  

  
  
  

  return (
    <div className="App">
      <div className="App-header">
      <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className='row' key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
            key={colIndex}
            className={`cell ${cell ? 'live' : ''}`}
            onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
      </div>
  

      </div>
    </div>
  );
}




export default App;
