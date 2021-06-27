import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
export default class CompType extends Component {
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
    }, 2000);

    // clear interval on destorying the component
  }

  render() {
    console.log("Parent component rendered");
    return (
      <div>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
