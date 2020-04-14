import React, { Component } from "react";

// Component Class
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}
        >
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
