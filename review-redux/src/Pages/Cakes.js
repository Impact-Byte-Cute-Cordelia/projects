import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCakes, minusCakes } from "../Actions/CakesActions";

function Cakes(props) {
  return (
    <div>
      <h1>Pages Cakes</h1>
      <h3>I have {props.cakes}</h3>
      <button
        onClick={() => {
          props.addCakes();
        }}
      >
        Buy More Cakes
      </button>
      <button
        onClick={() => {
          props.minusCakes();
        }}
      >
        Oops i eat my cakes
      </button>
      <button onClick={() => props.history.push("/icecream")}>
        Go to pages icecream
      </button>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cakes));
