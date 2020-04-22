import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/Actions/counterActions";

const ProductHooks = () => {
  const cartSelector = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Product Hooks</h1>
      {cartSelector}
      <button onClick={() => dispatch(addCart())}>Increment</button>
    </div>
  );
};

export default ProductHooks;
