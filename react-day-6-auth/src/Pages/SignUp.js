import React, { useState } from "react";
import { withRouter } from "react-router-dom";
function SignUp(props) {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...signUp };
    console.log("submit", user);
    localStorage.setItem("user", JSON.stringify(user));
    props.history.push("/signin");
  };

  console.log("state", signUp);
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={signUp.email}
          onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={signUp.password}
          onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(SignUp);
