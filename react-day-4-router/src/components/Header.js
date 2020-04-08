import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <ul>
          <button>
            <Link to="/class">todo class</Link>
          </button>
          <li>
            <Link to="/todo">todo hooks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
