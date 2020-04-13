import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
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
    const userLogin = { email: email, password: password };
    console.log("submit", userLogin);
    localStorage.setItem("user", JSON.stringify(userLogin));
    props.history.push("/signin");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleChangeEmail} value={email} />
        <input
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default withRouter(SignUp);
