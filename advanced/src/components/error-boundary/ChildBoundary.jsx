import React, { Component } from "react";

export default class ChildBoundary extends Component {
  render() {
    if (this.props.hero === "Joker") {
      throw new Error("Joker is not a hero");
    } else {
      return <div>The hero name is {this.props.hero} </div>;
    }
  }
}
