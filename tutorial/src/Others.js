import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Others extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Other Component</h1>,
      document.getElementById("other-root")
    );
  }
}
