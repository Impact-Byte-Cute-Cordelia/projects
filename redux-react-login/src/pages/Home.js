import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jwt-decode";

function Home() {
  const History = useHistory();
  const handleClick = () => {
    History.push("/signin");
  };
  const isLogged = useSelector((state) => state.user.isLogged);
  console.log("isLogged", isLogged);
  const decode = localStorage.getItem("token");
  const decoded = jwt(decode);
  console.log("decoded", decoded);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>sign in</button>
      <button>sign up</button>
    </div>
  );
}

export default Home;
