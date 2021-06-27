import React, { Component } from "react";
import Common from "./Common";
class Counter extends Component {
  // The hover component and Counter component are sharing same logic its better to move
  // them to a common component so we can reuse same code
  // Thats where Higher Order Component comes into picture.
  // The higher Order component accepts a paramenter component and returns the new Higher Order Component
  // When we pass data input/props to Counter Component & Hover Component, they are moved to common component and we need to attach {...this.props} in return JSX Element
  // Other we can cannot access the data from the parents to child when using a common/hoc component for childs.
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <button onClick={this.props.handler}>
          Count is {this.props.count}
        </button>
      </div>
    );
  }
}

export default Common(Counter, 10);
