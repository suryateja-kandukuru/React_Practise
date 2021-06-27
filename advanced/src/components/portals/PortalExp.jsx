import React, { Component } from "react";
import reactDom from "react-dom";
const modalRoot = document.getElementById("modal-root");

export default class PortalExp extends Component {
  // https://codesandbox.io/s/00254q4n6p?file=/src/index.js:551-585

  // Portals is way to render children into a DOM Node that exists outside DOM Hierarchy of the parent component

  // Normally, when you return an element from a component’s render method, it’s mounted into the DOM as a child of the nearest parent node:
  // However, sometimes it’s useful to insert a child into a different location in the DOM:

  // Portals are best way to dialog box, tooltips

  // A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.

  render() {
    console.log(this.props.isdialogopened);
    return reactDom.createPortal(
      <div
        style={{
          background: "rgba(0,0,0,0.3)",
          inset: "1px",
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "20rem",
            height: "10rem",
            background: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.props.children}
          <button onClick={this.props.onClose}> close dialog</button>
        </div>
      </div>,
      modalRoot
    );
  }
}
