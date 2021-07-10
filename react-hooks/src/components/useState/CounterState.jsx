import React, { useState } from "react";

export default function CounterState() {
  // useState also accepts a function which has a parameter prevState.
  // when using counter or appending string use prevState always.
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Current Count is {count}
      </button>
    </div>
  );
}
