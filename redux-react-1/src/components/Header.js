import React from "react";
import { connect } from "react-redux";

function Header({ cart }) {
  return (
    <div>
      <h1>Total Product {cart}</h1>
      <h1>Total Cake</h1>
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart,
  };
};

export default connect(mapStateToProps, null)(Header);
