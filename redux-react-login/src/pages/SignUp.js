import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/Actions/user.actions";

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setRegister((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = register.email;
  //   const password = register.password;
  //   axios.post(
  //     "https://backend-go-charity.herokuapp.com/users",
  //     querystring.stringify({ email, password })
  //   );
  //   history.push("/signin");
  // };

  console.log("register", register);
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={(event) => dispatch(signup(register, history, event))}>
        <input
          type="email"
          value={register.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          value={register.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button>Button</button>
      </form>
    </div>
  );
}

export default SignUp;
