import React, { useState, useEffect } from "react";

export default function SimpleEffect() {
  // useEffects are helpful when ur calling
  // setIntervals, Api calls, clearing Intervals,
  // unSubscribing, Updating DOM

  // Lets see a simple example with setInterval

  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    // use Effect takes an function and array are parameter and its ntg but componentDidMount, componentDidUpdate
    // in function we can update dom, setintervals, calls, etc
    // where array is like watchers
    // What are we specify in that array. We intended to tell react only watch which
    // are specified in array other than any changes do call useEffect method
    console.log("useEffect Called");
    document.title = `clicked ${count} times`;

    const interval = setInterval(() => {
      const time = new Date().toString();
      setTime(time);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // useEffect return an function in which you can do unsubscribe, clear interval to avoid memory leaks.
  // its nothing but componentDidUnmount

  // [ ] empty array passed to use effect means it will call one time when component loads.

  return (
    <div>
      <p>{time}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count {count}
      </button>
    </div>
  );
}
