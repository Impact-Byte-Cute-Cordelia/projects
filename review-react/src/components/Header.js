import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </div>
  );
}

export default Header;
