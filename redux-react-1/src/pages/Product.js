import React from "react";
import "./Product.css";
import Counter from "./components/Counter";
import { connect } from "react-redux";

const Product = (props) => {
  // const [cart, setCart] = useState(0);
  console.log("props", props);
  return (
    <div className="Container">
      <h1>Halaman Product</h1>
      <h3>Anda memiliki {props.cart} jumlah barang</h3>
      <Counter />
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart,
  };
};

export default connect(mapStateToProps, null)(Product);
