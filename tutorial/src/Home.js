import React from "react";

export default class Home extends React.Component {
  
    state = {
      name: "Dhirendra",
      count: 0,
      email: "dhirendra@test.com",
    };
  
  handleClick = () => {
  this.setState({
    name:"KALI",
    count: this.state.count+1,
    email:null
  })
  };
  render() {
    const { name, empId } = this.props.employee;
    return (
      <div>
        <div>
          <h6>Home Compnent</h6>
          <h6>{empId}</h6>
          <h6>{name}</h6>
        </div>
        <div>
          <h6>State Compnent</h6>
          <h6>Count: {this.state.count}</h6>
          <h6>
            {this.state.name} : email {this.state.email}
          </h6>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}
