import React from "react";
import HelloChild from "./HelloChild";

const Hello = (props) => {
  return (
    <div>
      <HelloChild nameSaya={props.name} />
    </div>
  );
};

export default Hello;
