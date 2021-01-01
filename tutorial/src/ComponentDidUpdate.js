import React from "react";

class ComponentDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      active: null,
      text: null,
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.text == null) {
      this.setState({ text: "hello" });
    }
  }

  render() {
    return (
      <div>
        <h1>Component Did Update {this.state.text}</h1>
        <button onClick={() => this.setState({ active: "yes" })}>Submit</button>
      </div>
    );
  }
}
export default ComponentDidUpdate;
