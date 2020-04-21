import React, { useState } from "react";
import { connect } from "react-redux";
import { addCakes, minusCakes } from "../Actions/CakesActions";

const Cakes = ({ cakes, addCakes, minusCakes }) => {
  // console.log("props cakes", props);
  const [cakesTopping, setCakesTopping] = useState("");
  return (
    <div>
      <h1>Cakes</h1>
      <h3>I have {cakes} cakes</h3>
      <div>
        <button
          onClick={() => {
            addCakes();
          }}
        >
          I buy more cakes
        </button>

        <button
          onClick={() => {
            minusCakes();
          }}
        >
          Oops i eat cakes
        </button>
      </div>
      <div>
        <h4>Adding topping</h4>
        <input
          type="text"
          value={cakesTopping}
          onChange={(e) => setCakesTopping(e.target.value)}
        />
        <button onClick={() => {}}>Confirm</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cakes, cakesTopping }) => {
  return {
    cakes: cakes.cakes,
    cakesTopping: cakesTopping.cakesTopping,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCakes: () => dispatch(addCakes()),
    minusCakes: () => dispatch(minusCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
