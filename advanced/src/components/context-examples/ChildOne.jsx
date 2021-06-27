import React, { Component } from "react";
import GrandChildOne from "./GrandChildOne";
import GreatGrandChild from "./GreatGrandChild";
export default class ChildOne extends Component {
  render() {
    return (
      <div>
        <GrandChildOne />
        <GreatGrandChild />
      </div>
    );
  }
}
