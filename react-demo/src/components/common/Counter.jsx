import React, { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const [num, setNum] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1); // 10 - 1
      setCount((prevCount) => prevCount - 1); // 9 - 1
      setCount((prevCount) => prevCount - 1); // 8 - 1
      setCount((prevCount) => prevCount - 1); // 7 - 1
      setCount((prevCount) => prevCount - 1); // 6 - 1
    } else {
      alert("Count is zero, can't decrement");
    }
  };

  useEffect(() => {
    console.log("Re-render");

    return () => {
      console.log("Component is going to unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Re-rendered");
  }, [count]);

  useEffect(() => {}, [num]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count : {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      {count === 0 && <p>Count is zero</p>}
      {count === 0 ? <p>Count is zero</p> : <p>Count is not zero</p>}

      <button onClick={() => setNum(num + 1)}>Increment Num</button>
    </div>
  );
};

export default Counter;

// Mounting
// Updating
// Unmounting
