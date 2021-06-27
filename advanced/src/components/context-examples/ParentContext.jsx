import React, { Component } from "react";
import ChildOne from "./ChildOne";
import { Provider } from "./ContextExp";

export default class ParentContext extends Component {
  // With the help of context we can send data to any component and can render the data.
  // Context has contextType, Provider, Consumer
  // with Providers and Consumer we can send multiple data
  // where as with context Type we can send single data
  // we can also provide default value to context to the fallback ui saftey

  render() {
    return (
      <div>
        <Provider value="stay blessed">
          <ChildOne />
        </Provider>
      </div>
    );
  }
}
