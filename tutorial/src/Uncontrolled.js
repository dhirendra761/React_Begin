import React, { Component } from "react";

export default class Uncontrolled extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.password = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.name.current.value, this.password.current.placeholder);
  };
  render() {
    return (
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter name" ref={this.name} />
          <br />
          <br />
          <input
            type="password"
            placeholder="enter password"
            ref={this.password}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
