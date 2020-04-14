import React from "react";
import Counter from "./smallerComponents/Counter";
function BeforeCounter({ cart, setCart }) {
  return (
    <div>
      <Counter cart={cart} setCart={setCart} />
    </div>
  );
}

export default BeforeCounter;
