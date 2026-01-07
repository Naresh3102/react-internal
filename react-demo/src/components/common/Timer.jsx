import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds : {seconds}</p>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset} disabled={seconds === 0}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
