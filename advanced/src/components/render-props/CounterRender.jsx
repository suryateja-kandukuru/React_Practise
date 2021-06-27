import React, { Component } from "react";

export default class CounterRender extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handle}>
          <span>Counter Component {this.props.count}</span>
        </button>
      </div>
    );
  }
}
