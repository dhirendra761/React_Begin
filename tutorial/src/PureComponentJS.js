import React, { Component, PureComponent } from "react";

export default class PureComponentJS extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
    };
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Pure Component</h1>
        <p>My data is :{this.state.data}</p>
        <button onClick={() => this.setState({ data: 10 })}>Update</button>
      </div>
    );
  }
}
