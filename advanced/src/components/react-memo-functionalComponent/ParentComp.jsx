import React, { Component } from "react";
import ReactMemo from "./ReactMemo";
import RegularComp from "./RegularComp";
export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "surya",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        name: "surya",
      }));
    }, 5000);
  }
  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        <ReactMemo name={this.state.name} />
        <RegularComp Compname={this.state.name} />
      </div>
    );
  }
}
