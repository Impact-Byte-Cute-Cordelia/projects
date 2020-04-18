import React, { Component } from "react";
// import axios from "axios";

class AmbilData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataState: {},
    };
  }

  async componentDidMount() {
    // hadid class based fetch promise
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((response) => response.json())
    //   .then((dataFromApi) => this.setState({ dataState: dataFromApi }));
    // rubi class based axios promise
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/")
    //   .then((res) => this.setState({ dataState: res.data }));
    // zaki class based fetch async await
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    // const json = await response.json();
    // this.setState({ dataState: json });
    // class based axios async await
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/"
    // );
    // this.setState({ dataState: response.data });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h1>AmbilData</h1>
      </div>
    );
  }
}

export default AmbilData;

// useEffect
// gabungan 3 lifecycle dari componentDidMount, componentDidUpdate, compontWillUnmount
