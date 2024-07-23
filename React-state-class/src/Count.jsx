import { useState } from "react";

export default function Count() {
  //   let count = 0;
  let [count, setCount] = useState(0);

  function incrementCount() {
    //callbacks
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    // fix
    // setCount(26);
  }

  return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </>
  );
}
