import React, { useState } from "react";

export default function ObjectState() {
  const [user, setUser] = useState({});
  return (
    <div>
      <input
        type="text"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        type="text"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
