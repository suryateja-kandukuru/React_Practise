import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  // Pure component will check for any change in state if and only if the state's shallow comparision is true
  // then only ui re-renders.
  // where as a normal class components always re renders when change in state. even if it has previous value as same
  // In purecomponent shoudComponentUpdate() always based on state change if it shallow comparision is true component re renders
  render() {
    console.log("Pure component rendered");
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    );
  }
}
