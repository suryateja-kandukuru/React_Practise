import React, { useState } from "react";

export default function SimpleState() {
  // useState hook is used only in functional components
  // useState hook return's state variable and state change method

  const [name, setName] = useState("surya");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Entered name is {name}</p>
    </div>
  );
}
