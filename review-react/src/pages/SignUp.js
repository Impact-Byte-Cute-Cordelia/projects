import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function SignUp(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  console.log("props", props);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  console.log("user state", user);

  // const handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleClick = () => {
    // const userLogin = {
    //   emailsss: email,
    //   passwordssss: password,
    // };
    // localStorage.setItem("userssssss", JSON.stringify(userLogin));
    localStorage.setItem("user", JSON.stringify(user));
    props.history.push("/signin");
    // <Redirect to="/signin" />;
  };

  return (
    <div>
      <h3>Halaman Sign up</h3>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Daftar</button>
    </div>
  );
}

export default withRouter(SignUp);
