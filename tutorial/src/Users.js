import React, { Component } from "react";

export default class Users extends Component {
  render() {
    if (true) {
      throw new Error("there is an error");
    }
    return (
      <div>
        <h1>Hello USer Compinent</h1>
      </div>
    );
  }
}
