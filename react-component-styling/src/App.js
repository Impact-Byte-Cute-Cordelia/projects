import React, { Component } from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

import logo from './logo.svg';
import './App.scss'; // node-sass

import ButtonBoostrap from './components/BottonBoostrap'
import About from './components/About'

const CustomButton = styled.button`
  background: red;
  border: 1px solid black
`

// Function Component
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

// Class component
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <ul style={{color: "blue"}}>              {/* style props */}
        <li className="list">Contact</li>       {/* style external */}
        <li>About</li>
      </ul>

      <Home />
      <Contact />
      <About />

      <CustomButton>Click Me</CustomButton>     {/* styled component */}
      <ButtonBoostrap/>                         {/* style cdn */}

      {/* style framework */}
      <Button className="my-button">Ini dari instalasi bootstrap</Button>

    </div>
  );
}

export default App;