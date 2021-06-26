import React, { Component } from "react";
import "./style.css";
import style from "./style.module.css";

export default class styleComponent extends Component {
s = {
  color: "blue",
  fontSize: "40px",
};
  render() {
    return (
      <div>
        <p className={style.success}>This is line1</p>
        <p className="error font-xl">This is line2</p>
        <p style={this.s}>This is line3</p>
        <p className="font-xl">This is line4</p>
        <p className={`${style.success} font-xl`}>This is line5</p>
      </div>
    );
  }
}
