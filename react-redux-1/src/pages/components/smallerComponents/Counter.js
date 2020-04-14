import React from "react";
import { connect } from "react-redux";
import {
  // INCREMENT,
  // DECREMENT,
  addCount,
  minusCount,
} from "../../../actions/counterActions";

const Counter = (props) => {
  console.log("props dari redux", props);
  return (
    <div>
      <h1>ini counter</h1>
      <button
        onClick={() => {
          props.minusCount();
        }}
      >
        -
      </button>
      {props.counter}
      <button>+</button>
    </div>
  );
};

const mapStateToProps = ({ count }) => {
  return {
    counter: count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch(addCount()),
    minusCount: () => dispatch(minusCount()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
