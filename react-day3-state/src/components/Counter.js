import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }

    // membungkus function biasa dengan this.state
    this.handleDecrease = this.handleDecrease.bind(this)
  }

  // function biasa membungkus this.state secara manual
  handleDecrease() {
    this.setState({
      count: this.state.count - 1
    })
  }

  // Arrow function sudah bind this.state secara otomatis
  handleIncrease = () => {
    // console.log(this.state)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrease}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default Counter;