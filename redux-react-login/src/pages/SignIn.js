import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/Actions/user.actions";

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  // check state redux isLogged
  const isLogged = useSelector((state) => state.user);
  console.log("isLogged", isLogged);

  const [signinState, setSigninState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (field, value) => {
    setSigninState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={(event) => dispatch(signin(signinState, history, event))}>
        <input
          type="email"
          value={signinState.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          value={signinState.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
