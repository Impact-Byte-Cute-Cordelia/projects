import React, { Component } from 'react';

class Todo extends Component {
  constructor(){
    super()
    this.state = {
      todoList: [],
      todoInput: "",
      taskInput: "",
    }
  }

  handleChange = (event, name) => {
    console.log("event", event.target)
    console.log("name", name)


    this.setState({
      [event.target.name]: event.target.value
    })

    // console.log(this.state)
  }

  handleClik = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.todoInput],
      todoInput: ""
    })
  }

  // (event) => this.handleChange(event, "hallo")
  handleChangeParameter = (event) => {
    this.handleChange(event, "hallo")
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <h1>My Todo</h1>
        <input type="text" name="todoInput" value={this.state.todoInput} onChange={(event) => this.handleChange(event, "hallo")} />
        <input type="text" name="taskInput" value={this.state.taskInput} onChange={this.handleChange} />

        <button onClick={this.handleClik}>ADD</button>

        {this.state.todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    );
  }
}

export default Todo;