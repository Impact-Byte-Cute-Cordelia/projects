import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UserGithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount = () => {
    const { username } = this.props.match.params;
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ data: result });
      });
  };
  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    return <div>detail user github</div>;
  }
}

export default withRouter(UserGithub);
