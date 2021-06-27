import React, { Component } from "react";

export default class HoverRender extends Component {
  render() {
    return (
      <div>
        <h4 onMouseOver={this.props.handle}>
          <span>Hover Component {this.props.count}</span>
        </h4>
      </div>
    );
  }
}
