import { useState } from "react";


const App = () => {
  const [ time, setTime ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ stopwatch, setStopwatch ] = useState(null);

  const startCount = () => {
    setIsRunning(true);
    setStopwatch(
      setInterval(() => {
        setTime(time => time + 1);
      }, 1000)
    )
  }

  const stopCount = () => {
    setIsRunning(false);
    clearInterval(stopwatch);
  }

  return <>
    {
      isRunning ? 
      <button onClick={stopCount}>{time}</button> :
      <button onClick={startCount}>{time}</button>
    }
  </>
}

export default App;
