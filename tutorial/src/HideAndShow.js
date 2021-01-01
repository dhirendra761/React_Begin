import React from "react";

class HideAndShow extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  toggleme = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show ? (
          <h1>Hide and Show Content</h1>
        ) : (
          <p>You need to click button</p>
        )}
        <button onClick={this.toggleme}>Toggle Me</button>
      </div>
    );
  }
}
export default HideAndShow;
