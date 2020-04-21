import React from "react";
import { connect } from "react-redux";
import { addCart, minusCart } from "../../../redux/Actions/counterActions";

const CounterRedux = (props) => {
  return (
    <div>
      <h1>Make Counter using Redux</h1>
      <h3>Hasil total cart {props.cart}</h3>

      <button
        onClick={() => {
          props.addCartDispatch();
        }}
      >
        +
      </button>

      <button>-</button>

    </div>
  );
};

// UNTUK MENGAMBIL STATE DARI STORE
const mapStateToProps = (props) => {
  return {
    cart: props.counter.cart,
  };
};

// UNTUK MERUBAH STATE DARI COMPONENT KE STORE
const mapDispatchToProps = (dispatch) => {
  return {
    addCartDispatch: () => dispatch(addCart()),
    minusCartDispatch: () => dispatch(minusCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
