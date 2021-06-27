import React, { Component } from "react";

const ForwardRefChild = React.forwardRef((props, refs) => {
  class ForwardRefChild extends Component {
    render() {
      return (
        <div>
          <input type="text" ref={refs} />
        </div>
      );
    }
  }
  return <ForwardRefChild />;
});

export default ForwardRefChild;
