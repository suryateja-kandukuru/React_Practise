import React, { Component } from "react";
import ForwardRefChild from "./ForwardRefChild";
export default class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRefChild ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
