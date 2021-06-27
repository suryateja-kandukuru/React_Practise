import React, { Component } from "react";

export default class CommonRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    // we are calling the render() prop with parametes, so that it will render the function body jsx
    return <div>{this.props.render(this.state.count, this.handler)}</div>;
  }
}
