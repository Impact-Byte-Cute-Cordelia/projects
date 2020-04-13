import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // const [isLogin, setIsLogin] = useState(false);
  console.log("props", props);
  console.log("email", email);
  console.log("password", password);

  console.log("history", history);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    if (localStorage.hasOwnProperty("user")) {
      const login = JSON.parse(localStorage.getItem("user"));

      if (login.email === user.email && login.password === user.password) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("status", true);
        history.push("/todo");
      } else {
        alert("salah bwang");
      }
    } else {
      alert("sign up dulu bwang");
    }
  };

  return (
    <div>
      <h1>Ini Sign in</h1>
      <Link to="/signup">Sign up</Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
