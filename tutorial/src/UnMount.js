import React from "react";

class UnMount extends React.Component {
  componentWillUnmount() {
    alert("User Deleted");
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>User Info:</h1>
        <p>Name: Dhirendra</p>
        <p>Email:Dhirendra@test.com</p>
        <p>Contact:0000000</p>
      </div>
    );
  }
}
export default UnMount;
