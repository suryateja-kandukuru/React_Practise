import React, { Component } from "react";
import PortalExp from "./PortalExp";
export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialogOpened: false,
    };
  }

  handleDialog = () => {
    this.setState((prevState) => ({
      isDialogOpened: !prevState.isDialogOpened,
    }));
  };

  render() {
    return (
      <div>
        <p>Click Here to see the dialog</p>
        {this.state.isDialogOpened ? (
          <PortalExp
            isDialogOpened={this.state.isDialogOpened}
            onClose={this.handleDialog}
          />
        ) : undefined}
        <button onClick={this.handleDialog}>Open Dialog</button>
      </div>
    );
  }
}
