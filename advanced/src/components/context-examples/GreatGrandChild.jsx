import React, { Component } from "react";
import { Context } from "./ContextExp";

export default class GreatGrandChild extends Component {
  render() {
    return (
      <div>
        Im great grand child comp got data from my parent' grand father got
        messsage as
        {this.context}
      </div>
    );
  }
}

GreatGrandChild.contextType = Context;
