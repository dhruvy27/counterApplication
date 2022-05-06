import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  
const [counter, setCounter] = useState(0);
const [stopCounter, setstopCounter] = useState(null);

const [functionality,setFunctionality] = useState(1)

  const startCounter = () => {
    return setTimeout(() => {
      if(functionality)
        setCounter((prev)=> {
        return prev + 1
      })
      else{
        setCounter((prev)=> {
          return prev - 1
         })
      }
    }, 1000);
  };

  const decreaseCounter = () => {
    clearTimeout(stopCounter)
    setstopCounter()
    setFunctionality(0)
    startCounter()
  };

  const increaseCounter = () => {
    clearTimeout(stopCounter)
    setstopCounter()
    setFunctionality(1)
    startCounter()
  };

  useEffect(() => {
    clearTimeout(stopCounter)
    setstopCounter(startCounter());
  }, [counter]);

  return (
    <div className="App">
      <h1>Counter Value</h1>
      <h2>{counter}</h2>
      <button onClick={() => {increaseCounter();}}>
        Start
      </button>
      <button onClick={() => {clearTimeout(stopCounter);}}>
        Stop
      </button>
      <button onClick={() => {decreaseCounter();}}>
        reverse counter
      </button>
    </div>
  );
}
