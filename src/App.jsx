import { useState, useEffect } from "react";


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



  useEffect(() =>{
    //监听键盘事件
    document.addEventListener("keypress", keyPress, false)
    return ()=>{
         //销毁键盘事件
      document.removeEventListener("keypress", keyPress, false)
    }
  })

//键盘事件函数
  const keyPress = (e)=>{
    if (e.code === "Escape") {
      ;
    }
    if (isRunning) {
      stopCount();
    }
    else {
      startCount();
    }
  }




  const clickFunction = isRunning ? stopCount : startCount;

  const normalize = (t) => {
    return (t < 10) ? '0' + t : t;
  }

  const output = normalize(~~(time / 3600)) + ":" +  normalize(~~(time / 60) % 60) + ":" + normalize(time % 60)

  return <div className="flex h-screen bg-gradient-to-r from-cyan-500 via-green-500 to-yellow-500">
    <div className="inline-block m-auto">
      <button className={"font-mono text-9xl " + (isRunning ? "text-white" : "text-black")} onClick={clickFunction}>{output}</button>
    </div>
  </div>
  
  
}

export default App;
