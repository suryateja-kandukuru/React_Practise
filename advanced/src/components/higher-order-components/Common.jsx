import React, { Component } from "react";

const NewComponent = (OriginalComponent, increment) => {
  class Common extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handler = () => {
      this.setState((prevState) => ({
        count: prevState.count + increment,
      }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handler={this.handler}
          {...this.props}
        />
      );
    }
  }
  return Common;
};

export default NewComponent;
