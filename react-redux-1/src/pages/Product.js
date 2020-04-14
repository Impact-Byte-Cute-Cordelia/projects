import React, { useState } from "react";

import BeforeCounter from "./components/BeforeCounter";

const Product = () => {
  const [cart, setCart] = useState(0);
  return (
    <div>
      <h1>Halaman Product</h1>
      <h3>Anda memiliki {cart} barang dalam keranjang</h3>
      <BeforeCounter cart={cart} setCart={setCart} />
      {/* <Counter cart={cart} setCart={setCart} /> */}
    </div>
  );
};

export default Product;
