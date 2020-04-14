import React, { Component } from "react";
import axios from "axios"

// Component Class
class TodoClass extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then(result => {
      console.log(result)
      this.setState({
        todos: result.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Todo Class</h1>
          {this.state.todos.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
      </div>
    );
  }
}

export default TodoClass;
