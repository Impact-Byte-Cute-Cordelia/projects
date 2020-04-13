import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const SignIn = (props) => {
  console.log("props", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userLogin = {
      email: email,
      password: password,
    };
    console.log("user", userLogin);

    const login = JSON.parse(localStorage.getItem("user"));
    if (
      userLogin.email === login.email &&
      userLogin.password === login.password
    ) {
      localStorage.setItem("statusLogin", true);
      props.history.push("/todo");
    } else {
      alert("salah password bang");
    }
  };

  return (
    <div>
      <h1>Ini halaman signin</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="submit" />
      </form>
      <h3>
        <Link to="/signup">Daftar</Link>
      </h3>
    </div>
  );
};

export default withRouter(SignIn);
