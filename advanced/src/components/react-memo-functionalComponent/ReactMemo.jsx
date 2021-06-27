import React from "react";

// Pure component concept is for class based
// React.memo(component) is for functional based.
// React.memo takes a component and converts it into a higher level component

const reactMemo = (props) => {
  console.log("React Memo Funtional Component Rendered");
  return <div>React Memo Functional Component {props.name}</div>;
};

export default React.memo(reactMemo);
