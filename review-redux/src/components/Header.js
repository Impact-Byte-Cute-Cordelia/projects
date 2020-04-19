import React from "react";
import { connect } from "react-redux";

function Header(props) {
  console.log("props header", props);
  return (
    <div>
      <h1>React Redux Review</h1>
      <h1>Total Cakes {props.cakes}</h1>
      <h1>Total Cakes {props.iceCream}</h1>
    </div>
  );
}
const mapStateToProps = ({ cakes, iceCream }) => {
  return {
    cakes: cakes.cakes,
    iceCream: iceCream.iceCream,
  };
};

export default connect(mapStateToProps, null)(Header);
