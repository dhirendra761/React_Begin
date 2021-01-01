import React from "react";
import UnMount from "./UnMount";

class UnMountToggle extends React.Component {
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
        {this.state.show ? <UnMount /> : null}
        <button onClick={this.toggleme}>Toggle Me</button>
      </div>
    );
  }
}
export default UnMountToggle;
