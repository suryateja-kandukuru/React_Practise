import React, { Component } from "react";

export default class LifeChild extends Component {
  constructor(props) {
    console.log("child constructor");
    super(props);

    this.state = {
      name: "Child Component",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("child getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("child Render()");
    return <div>{this.state.name}</div>;
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("child shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("child getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }
}
