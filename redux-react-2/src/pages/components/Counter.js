import React from "react";
import CounterRedux from "./smallerComponents/CounterRedux";

const Counter = ({ cart, setCart }) => {
  return (
    <div>
      {/* <Counter2 cart={cart} setCart={setCart} /> */}
      <CounterRedux />
    </div>
  );
};

export default Counter;
