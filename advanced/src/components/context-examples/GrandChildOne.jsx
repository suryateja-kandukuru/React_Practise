import React, { Component } from "react";
import { Consumer } from "./ContextExp";
export default class GrandChildOne extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(val) => {
            return (
              <div>
                I am Grand child to my grand father got message as ------ {val}
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
