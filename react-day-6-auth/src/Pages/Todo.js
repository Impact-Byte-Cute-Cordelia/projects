import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Todo(props) {
  const [isLogin, setIsLogin] = useState({
    status: localStorage.getItem("status"),
  });

  const history = useHistory();

  console.log(isLogin);
  const handleLogout = () => {
    console.log("click");
    localStorage.setItem("status", false);
    setIsLogin((prevState) => {
      return (prevState.status = false);
    });
    history.push("/signin");
  };
  return (
    <div>
      <h1>ini todo</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Todo;
