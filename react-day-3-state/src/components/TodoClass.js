import React, { Component } from "react";

export default class TodoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todos: "",
    };
  }

  handleChange = (event) => {
    this.setState({ todos: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newTodos = [...this.state.todoList, this.state.todos];
    this.setState({ todoList: newTodos });
  };

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h1>Todo class</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>

        {this.state.todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
    );
  }
}
