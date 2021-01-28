import React, { Component } from "react";

export default class Refs extends Component {
  constructor() {
    super();
    this.userRef = React.createRef();
  }
  handleClick = () => {
    // console.log(this.userRef);
    this.userRef.current.focus();
    this.userRef.current.value = 1000;
  };

  render() {
    return (
      <div>
        <h1>This is text</h1>
        <input ref={this.userRef} type="text" name="name" />
        <button className="btn btn-small" onClick={this.handleClick}>
          Click me!.
        </button>
      </div>
    );
  }
}
