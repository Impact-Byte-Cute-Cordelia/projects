import React, { Component } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import logo from "./logo.svg";
import "./App.scss"; // node-sass

import ButtonBoostrap from "./components/BottonBoostrap";
import About from "./components/About";
import Hello from "./components/Hello";

const CustomButton = styled.button`
  background: red;
  border: 1px solid black;
`;

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

// Class component
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <ul style={{ color: "blue" }}>
        <li className="list">Contact</li> {/* style external */}
        <li>About</li>
      </ul>
      <Home />
      <Contact />
      <About />
      <CustomButton>Click Me</CustomButton> {/* styled component */}
      <ButtonBoostrap /> {/* style cdn */}
      {/* style framework */}
      <Button className="my-button">Ini dari instalasi bootstrap</Button>
      <Hello name="wahid kecil" />
      {/* <Hello name="Thoriq" />
      <Hello name="Rubi" />
      <Hello name="Ravi" /> */}
    </div>
  );
}

export default App;

// di dalam react ada 2 data
// 1. state >> HANYA BISA HIDUP DIDALAM SATU BUAH COMPONENT
// 2. props >> HANYA BISA HIDUP JIKA DITURUNKAN KE CHILD
