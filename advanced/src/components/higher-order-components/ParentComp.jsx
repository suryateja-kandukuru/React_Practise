import React, { Component } from "react";
import Hover from "./Hover";
import Counter from "./Counter";
export default class ParentComp extends Component {
  render() {
    return (
      <div>
        <Hover name="HoverComponent" />
        <Counter name="CounterComponent" />
      </div>
    );
  }
}
