import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Signin(props) {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (users.email === user.email && users.password === user.password) {
      localStorage.setItem("statusLogin", true);
      props.history.push("/learn");
    } else {
      alert("salah email atau password");
    }
  };

  return (
    <div>
      <h3>
        <Link to="/signup">Daftar</Link>
      </h3>
      <h3>Halaman Sign In</h3>

      <input
        type="email"
        name="email"
        value={users.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={users.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default withRouter(Signin);
