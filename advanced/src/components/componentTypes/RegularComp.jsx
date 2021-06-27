import React, { Component } from "react";

export default class RegularComp extends Component {
  // Regular components always rerenders when change in state
  // shouldComponentUpdate always returns true
  render() {
    console.log("Regular Component rendered");
    return (
      <div>
        <h1>Regular Component {this.props.name}</h1>
      </div>
    );
  }
}
