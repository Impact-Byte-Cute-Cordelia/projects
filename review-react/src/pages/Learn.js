import React, { useState } from "react";

const Learn = () => {
  const [name, setName] = useState("thoriq");
  const [address, setAddress] = useState("kemang");
  const [number, setNumber] = useState(123456);

  console.log("name", name);
  const handleChangeName = (event) => {
    console.log("value", event.target.value);
    setName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };
  // console.log(user);
  return (
    <div>
      <h1>LEARNNNNNNN</h1>
      <input type="text" value={name} onChange={handleChangeName} />
      <input type="text" value={address} onChange={handleChangeAddress} />
      <input type="number" value={number} onChange={handleChangeNumber} />
    </div>
  );
};

export default Learn;
