import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../Actions/counterActions";

function ProductHooks() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Product - {cart}</h2>
      <button onClick={() => dispatch(addCart())}>Increment</button>
    </div>
  );
}

export default ProductHooks;
