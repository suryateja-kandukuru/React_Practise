import React, { Component } from "react";
import FragmentExample from "../FragementExample";
export default class SimpleRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.fragementRef = React.createRef();
  }

  updateInput = () => {
    console.log(this.inputRef.current.value);
    console.log(this.fragementRef);
  };

  render() {
    // check console and see the logs
    // we can also add ref to child components or any components
    return (
      <div>
        <input type="text" ref={this.inputRef} onChange={this.updateInput} />
        <FragmentExample ref={this.fragementRef} />
      </div>
    );
  }
}
