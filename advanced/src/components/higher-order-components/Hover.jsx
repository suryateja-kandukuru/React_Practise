import React, { Component } from "react";
import Common from "./Common";

class Hover extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <h4 onMouseOver={this.props.handler}>Count is {this.props.count}</h4>
      </div>
    );
  }
}
export default Common(Hover, 5);
