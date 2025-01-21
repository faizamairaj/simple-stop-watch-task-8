import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundImage: "url('image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <i><h1 className='text-5xl font-bold text-red-500'>Stopwatch</h1></i>
      <i><h2 className='font-bold text-6xl bg-red-500 text-white p-4 mt-10 rounded-lg border border-yellow-500 shadow-2xl'>{time} times</h2></i>
      <div className="flex justify-center space-x-10 mt-5">
        <button className='bg-blue-600 text-white text-2xl font-bold p-3 rounded-md' onClick={handleStart}>Start</button>
        <button className='bg-blue-600 text-white text-2xl font-bold p-3 rounded-md' onClick={handleStop}>Stop</button>
        <button className='bg-blue-600 text-white text-2xl font-bold p-3 rounded-md' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
