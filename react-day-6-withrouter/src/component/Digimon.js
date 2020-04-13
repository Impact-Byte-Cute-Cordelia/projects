import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";


class Digimon extends Component {
  constructor(){
    super()
    this.state = {
      digimonList: []
    }
  }

  componentDidMount(){
    axios.get("https://digimon-api.herokuapp.com/api/digimon")
    .then(result => {
      console.log(result)
      this.setState({
        digimonList: result.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleClick = (name) => {
    console.log(this.props)
    const {history} = this.props
    history.push(`/digimon/${name.toLowerCase()}`)
  }

  render() {
    return (
      <div>
      <h1>Data Digimon</h1>
      <h5>Click for more detail</h5>
      <ul>
        {this.state.digimonList.map((item, index) => (
          <li key={index} onClick={() => this.handleClick(item.name)}>{item.name}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(Digimon)