import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HttpGetEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {users.map((x) => (
        <p key={x.id}>{x.title}</p>
      ))}
    </div>
  );
}
