import React, { useState } from "react";

const HelloGrandChild = (props) => {
  console.log("PROPS HELLOGRANDCHILD", props);
  const [biodata, setBiodata] = useState("Thoriq");
  return (
    <div>
      <h1>ini HelloGrandChild</h1>
      {/* {props.numberFavorite.map((item) => (
        <li key={item}>{item}</li>
      ))} */}
      <h1>favorite number: {props.numberFavorite}</h1>
      {/* <h1>state umur pakai useState: {biodata.age}</h1> */}
      <h1>biodata: {biodata}</h1>
    </div>
  );
};

export default HelloGrandChild;
