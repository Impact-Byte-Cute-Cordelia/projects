import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIceCream, minusIceCream } from "../Actions/IceCreamActions";
import { useHistory } from "react-router-dom";

function IceCream() {
  const iceCream = useSelector((state) => state.iceCream.iceCream);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("props ice", IceCream);
  return (
    <div>
      <h1>Pages Ice Cream</h1>
      <h3>I have {iceCream} CAKES</h3>
      <button onClick={() => dispatch(addIceCream())}>Buy More IceCream</button>
      <button onClick={() => dispatch(minusIceCream())}>
        Oops i eat IceCream
      </button>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        go back to cakes pages
      </button>
    </div>
  );
}

export default IceCream;
