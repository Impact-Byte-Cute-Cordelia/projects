import React, { Component } from "react";
import ChildComponents from "./components/ChildComponents";
import TodoClass from "./components/TodoClass";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Wahid",
      counter: 0,
    };
  }
  // function handle plus
  // handlePlus = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // handleMinus = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
    // console.log("state", this.state.counter);
    return (
      <div>
        {/* <h1>Tes</h1>
        {this.state.name}

        {this.state.counter}
        <button onClick={this.handlePlus}>plus</button>
        <button onClick={this.handleMinus}>minus</button>

        <ChildComponents biodata={this.state.name} /> */}

        <TodoClass />
      </div>
    );
  }
}
