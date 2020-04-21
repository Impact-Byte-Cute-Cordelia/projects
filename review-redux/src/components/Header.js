import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Header(props) {
  console.log("props  header", props);
  return (
    <div>
      <h1>Review Redux</h1>
      <h3>total Cakes: {props.cakes}</h3>
      <div>
        <button
          onClick={() => {
            props.history.push("/");
          }}
        >
          go to home
        </button>
        <button
          onClick={() => {
            props.history.push("/icecream");
          }}
        >
          go to ice cream
        </button>
        <button
          onClick={() => {
            props.history.push("/cakes");
          }}
        >
          go to cakes
        </button>
      </div>
    </div>
  );
}

// mapStateToProps untuk ngambil state aja
const mapStateToProps = (props) => {
  return {
    cakes: props.cakes.cakes,
  };
};

// mapDispatchToProps untuk merubah state

export default connect(mapStateToProps, null)(withRouter(Header));
