import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";

class DigimonDesc extends Component {
  constructor(){
    super()
    this.state = {
      digimonName: "",
      digimon: {},
    }
  }

  componentDidMount(){
    console.log(this.props)
    // this.setState({
    //   digimonName: this.props.match.params.name
    // })
    axios.get(`https://digimon-api.herokuapp.com/api/digimon/name/${this.props.match.params.name}`)
    .then(result => {
      console.log(result)
      this.setState({
        digimon: result.data[0]
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <h1>Hallo {this.state.digimon.name} </h1>
        <img src={this.state.digimon.img} />
      </div>
    )
  }
}

export default withRouter(DigimonDesc)