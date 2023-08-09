import './App.css';
import { useState, useEffect } from 'react';
import { calculateNextGeneration } from './controllers/nextgeneration';
import { randomGrid, clearGrid, gliderGun, pulsarPattern,
  PentadecathlonPattern, CrazyCornersPattern, BabyPulsarPattern,
  MaxDensityStillLifePattern, LoadingDockPattern, LoafPattern
} from './controllers/grids';

function App() {

  const numRows = 30;
  const numCols = 30;
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(true);
  const [counter, setCounter] = useState(0);
  const [pattern, setPatterns] = useState(false);

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

  function handleClear(){
    setCounter(0);
    setGrid(clearGrid)
    setStart(!start)
  }

  function handlePatterns(){
    setPatterns(true)
  }

  function hidePatterns(){
    setPatterns(false)
  }

  function handleGliderGun(){
    setCounter(0)
    setGrid(gliderGun)
  }

  function handlePulsar(){
    setCounter(0)
    setGrid(pulsarPattern)
  }

  function handlePanthe(){
    setCounter(0);
    setGrid(PentadecathlonPattern)
  }

  function handleCrazyCorner(){
    setCounter(0);
    setGrid(CrazyCornersPattern)
  }

  function handleBabyPulsar(){
    setCounter(0)
    setGrid(BabyPulsarPattern)
  }

  function handleLoafPattern() {
    setCounter(0)
    setGrid(LoafPattern)
  }

  function handleDuckPattern() {
    setCounter(0)
    setGrid(LoadingDockPattern)
  }

  function handleMaxDist() {
    setCounter(0)
    setGrid(MaxDensityStillLifePattern)
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
     { !pattern && 
      <div className='controls' >
            <h3>Generations</h3>
            <p>{counter}</p>
            <button
            onClick={handleGeneration}
            >Start/Stop/Resume</button>
            <button
            onClick={handleRandomGrid}
            >Randomize</button>
            <button
            onClick={handleClear}
            >Clear Board</button>
            <button
            onClick={handlePatterns}
            >Patterns</button>
      </div>
}
  { pattern && 
    <div className='controls' >
        <h3>Patterns:</h3>
        <button
        onClick={handleGliderGun}
        >Glider Glue</button>
        <button
        onClick={handlePulsar}
        >Pulsar</button>
        <button
        onClick={handleCrazyCorner}
        >Crazy Corners</button>
        <button
        onClick={handlePanthe}
        >Pentadecathon</button>
        <button
        onClick={handleBabyPulsar}
        >Baby Pulsar</button>
        <button
        onClick={handleLoafPattern}
        >Loaf Pattern</button>
        <button
        onClick={handleMaxDist}
        >Maximum Density Still life</button>
        <button
        onClick={hidePatterns}
        >Back</button>
    </div>
  }
      </div>
    </div>
  );
}




export default App;
