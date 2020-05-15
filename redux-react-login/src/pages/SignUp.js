import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Actions/user.actions";
// import axios from "axios";
// const queryString = require("query-string");

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user);
  console.log("isLogged", isLogged);

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
  //   console.log("click");
  //   const email = register.email;
  //   const password = register.password;
  //   axios
  //     .post(
  //       "https://backend-go-charity.herokuapp.com/users",
  //       queryString.stringify({ email, password })
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   history.push("/signin");
  // };

  return (
    <div>
      <h1>SignUp</h1>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
