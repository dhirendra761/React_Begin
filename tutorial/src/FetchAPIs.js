import React from "react";

class FetchAPIs extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        console.log(result.data);
        this.setState({ users: result.data });
        console.log(this.state.users);
      });
    });
  }
  render() {
    return (
      <div>
        <h1> Fetech APIs </h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div>
                <p>{i}</p>
                <label>Name: </label>
                <span>
                  {item.first_name} {item.last_name}
                </span>
                <label> Email: </label>
                <span>{item.email}</span>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default FetchAPIs;
