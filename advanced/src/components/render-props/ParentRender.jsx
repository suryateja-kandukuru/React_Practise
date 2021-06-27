import React, { Component } from "react";
import CounterRender from "./CounterRender";
import HoverRender from "./HoverRender";
import CommonRender from "./CommonRender";
export default class ParentRender extends Component {
  // we are passing a arrow function to the common component and calling that function in the common component
  // That will render the child component when the function call occurs in common component
  render() {
    return (
      <div>
        <CommonRender
          render={(count, handler) => (
            <CounterRender count={count} handle={handler} />
          )}
        />
        <CommonRender
          render={(count, handler) => (
            <HoverRender count={count} handle={handler} />
          )}
        />
      </div>
    );
  }
}
