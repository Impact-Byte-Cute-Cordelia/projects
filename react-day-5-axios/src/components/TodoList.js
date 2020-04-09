import React, { Component } from 'react';
import axios from 'axios'

class TodoList extends Component {
  constructor(){
    super()
    this.state = {
      todoList: []
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(result => {
      console.log(result.data)
      this.setState({
        todoList: result.data
      })  
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>My todo</h1>
        {this.state.todoList.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </div>
    );
  }
}

export default TodoList;