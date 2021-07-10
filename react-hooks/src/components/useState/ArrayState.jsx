import React, { useState } from "react";

export default function ArrayState() {
  // We can also provide an array to useState
  // But limitation is we cant append/push but need to do it in spread operator way inside array and then update.

  const [users, setUser] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => setUser([...users, userInput])}> add </button>
      <p>{JSON.stringify(users)} </p>
    </div>
  );
}
