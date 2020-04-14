import React from "react";
import { connect } from "react-redux";
import { addCart, minusCart } from "../../../Actions/counterActions";

const CounterRedux = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Make Counter using Redux</h1>
      <h3>Hasil total cart {props.cart}</h3>

      <button
        onClick={() => {
          props.addCart();
        }}
      >
        +
      </button>

      <button>-</button>
    </div>
  );
};

// UNTUK MENGAMBIL STATE DARI STORE
const mapStateToProps = ({ cart }) => {
  return {
    cart: cart,
  };
};

// UNTUK MERUBAH STATE DARI COMPONENT KE STORE
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: () => dispatch(addCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
