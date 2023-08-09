import './App.css';
import { useState, useEffect } from 'react';
import { calculateNextGeneration } from './controllers/nextgeneration';
import { randomGrid, clearGrid } from './controllers/grids';

function App() {

  const numRows = 30;
  const numCols = 30;
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(start){
      setCounter(prev => prev + 1)
      const interval = setInterval(() => {
        setGrid((prev) => calculateNextGeneration(prev))
      }, 1000);
      return () => clearInterval(interval)
    }
  }, [start, grid])
  
  // Inside the GameOfLifeGrid component

  useState(() => {
    const newGrid = Array.from({ length: numRows }, (_, rowIndex) => 
      Array.from({ length: numCols }, (_, colIndex) => (rowIndex) % 2 === 0 )
    );
    setGrid(newGrid);
  }, []);  

  function handleClick(rowIndex, colIndex){
    const newGrid = [...grid]
    newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex]
    setGrid(newGrid)
  }

  function handleGeneration(){
    setStart(!start);
  }

  function handleRandomGrid(){
    setCounter(0);
    setGrid(randomGrid)
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className='header' >
        <h1>Conway's Game of Life</h1>
        </div>
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
      <div className='controls' >
            <h3>Generations</h3>
            <p>{counter}</p>
            <button
            onClick={handleGeneration}
            >Start/Stop/Resume</button>
            <button
            onClick={handleRandomGrid}
            >Randomize</button>
            <button>Clear Board</button>
            <button>Patterns</button>
      </div>

      </div>
    </div>
  );
}




export default App;
