import React, { Component } from "react";
import ChildBoundary from "./ChildBoundary";
import ErrorBoundary from "./ErrorBoundary";
export default class ParerntBoundary extends Component {
  // Advantage of Error Boundary is we can provide a fall back content to the ui
  // when there is any error in component lifecylce or any other error
  render() {
    return (
      <div>
        <ErrorBoundary>
          <ChildBoundary hero="SpiderMan" />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChildBoundary hero="IronMan" />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChildBoundary hero="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
