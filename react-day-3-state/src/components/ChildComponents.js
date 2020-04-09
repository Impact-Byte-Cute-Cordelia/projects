import React, { useState } from "react";

const ChildComponents = ({ biodata }) => {
  const [name, setName] = useState("hadyd");
  const [counter, setCounter] = useState(0);
  // console.log(props);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Ini Child Components</h1>
      <h3>
        {name} dan {biodata} adalah teman
      </h3>

      <h1>{counter}</h1>
      <button onClick={handlePlus}>plus</button>
      <button onClick={handleMinus}>minus</button>
    </div>
  );
};

export default ChildComponents;
