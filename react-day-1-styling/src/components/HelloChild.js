import React, { Component } from "react";
import HelloGrandChild from "./HelloGrandChild";

// hooks atau function based
// const HelloChild = (props) => {
//   return (
//     <div>
//       {/* {props.name ? <h1>hello, {props.name}</h1> : "no name"}
//       {props.images ? <img src={props.images} alt="images" /> : "no images"}
//       <img src={props.images} alt="images" /> */}
//       <h1>nama saya adalah: {props.nameSaya}</h1>
//     </div>
//   );
// };

// class based
class HelloChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberFavorite: 9,
    };
  }
  render() {
    // const list = this.state.numberFavorite.map((item) => <li>{item}</li>);
    console.log("STATE HELLOCHILD", this.state);
    return (
      <div>
        {/* <h1>nama saya adalah: {this.props.nameSaya}</h1>
        <h2>hasil dari state</h2>
        <h2>name: {this.state.name}</h2>
        <h2>biodata umur: {this.state.age}</h2>
        <h2>biodata address: {this.state.biodata.address}</h2>
        {list}
        {this.state.numberFavorite.map((item) => (
          <li>{item}</li>
        ))} */}
        <HelloGrandChild numberFavorite={this.state.numberFavorite} />
      </div>
    );
  }
}
export default HelloChild;
