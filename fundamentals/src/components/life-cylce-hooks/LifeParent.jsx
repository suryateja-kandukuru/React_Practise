import React, { Component } from "react";
import LifeChild from "./LifeChild";
export default class LifeParent extends Component {
  // Mounting Hooks
  //  constructor
  //  getDerivedStateFromProps
  //  Render()
  //  child constructor
  //  child getDerivedStateFromProps
  //  child Render()
  //  child componentDidMount
  //  componentDidMount

  // All lifecycle hooks of parents renders first
  // then child render except the componentDidMount of parent is loaded last

  // when a change in parent component happenes then below lifecylce hooks calls
  // Always child ComponentMount,Update, getSnapshot happens before the parent getSnapshot, Mound and update happens.

  //  getDerivedStateFromProps
  //  shouldComponentUpdate
  //  Render()
  //  child getDerivedStateFromProps
  //  child shouldComponentUpdate
  //  child Render()
  //  child getSnapshotBeforeUpdate
  //  getSnapshotBeforeUpdate
  //  child componentDidUpdate
  //  componentDidUpdate

  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      name: "Parent Component",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  changeName = () => {
    this.setState(() => ({
      name: "Surya Teja",
    }));
  };

  render() {
    console.log("Render()");
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button>
        <LifeChild />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
