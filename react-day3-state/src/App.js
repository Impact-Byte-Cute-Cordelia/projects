import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from './components/Counter'

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alpha",
      age: 20,
      address: "Jl. sana sini",
      hobbies: this.props.hobbies
    };
  }

  handleClick = () => {
    console.log("hallo")
    this.setState({
      name: "delta",
      hobbies: ["baca buku", "ngoding", "diskusi"]
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Hallo {this.state.name}</h1>

        <ul>
          {this.state.hobbies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

          {this.state.hobbies[0]}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

function App() {
  // const [name, setName] = useState("Beta");
  // const [age, setName] = useState("Beta")
  // const [address, setName] = useState("Beta")
  // const [hobby, setName] = useState("Beta")

  const [person, setPerson] = useState({
    name: "Beta",
    age: 17,
    address: "jalna jalan",
    hobbies: ["jalan-jalan", "tidur", "ngegame"],
  });

  const hancleChangeName = () => {
    let newHobby = [...person.hobbies]
    newHobby[0] = "ngopi"

    console.log(newHobby)

    setPerson({  
      ...person,
      name: "Echo",
      hobbies: newHobby
    })
  }

  console.log("PERSON", person)

  return (
    <div className="App">
      <Counter />
      <ChildComponent hobbies={person.hobbies} />

      <h3>Yeaay hallo {person.name}</h3>
      <button onClick={hancleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
