import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/Actions/user.actions";

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  console.log("isLogged", isLogged);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setLogin((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  console.log("register", login);
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={(event) => dispatch(signin(login, history, event))}>
        <input
          type="email"
          value={login.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          value={login.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button>Button</button>
      </form>
    </div>
  );
}

export default SignIn;
