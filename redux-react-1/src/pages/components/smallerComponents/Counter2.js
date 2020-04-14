import React from "react";

const Counter2 = ({ cart, setCart }) => {
  const handleMinus = () => {
    setCart(cart - 1);
  };
  const handlePlus = () => {
    setCart(cart + 1);
  };
  return (
    <div>
      <div>
        <button onClick={handlePlus}>+</button>
        {cart}
        <button onClick={handleMinus}>-</button>
      </div>
    </div>
  );
};

export default Counter2;
