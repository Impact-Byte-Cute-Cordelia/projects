import React, { useState, useEffect } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click {count} times
      </button>
    </div>
  );
}

export default HooksCounter;
