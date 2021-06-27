import React from "react";

export default function RegularComp(props) {
  console.log("Regular Funtional Component Rendered");
  return <div>Regular Functional Component {props.name}</div>;
}
