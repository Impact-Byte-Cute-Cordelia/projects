import React from "react";
import { connect } from "react-redux";
import { addCakes, minusCakes } from "../Actions/CakesActions";

const Cakes = ({ cakes, addCakes, minusCakes }) => {
  // console.log("props cakes", props);
  return (
    <div>
      <h1>Cakes</h1>

      <button
        onClick={() => {
          addCakes();
        }}
      >
        I buy more cakes
      </button>
      <h3>I have {cakes} cakes</h3>
      <button
        onClick={() => {
          minusCakes();
        }}
      >
        Oops i eat cakes
      </button>
    </div>
  );
};

const mapStateToProps = ({ cakes }) => {
  return {
    cakes: cakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCakes: () => dispatch(addCakes()),
    minusCakes: () => dispatch(minusCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
