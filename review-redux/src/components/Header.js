import React from "react";
import { connect } from "react-redux";

function Header(props) {
  console.log("props", props);
  return (
    <div>
      <h1>React Redux Review</h1>
      <h1>Total Cakes {props.cakes}</h1>
    </div>
  );
}
const mapStateToProps = (props) => {
  return {
    cakes: props.cakes,
  };
};

export default connect(mapStateToProps, null)(Header);
