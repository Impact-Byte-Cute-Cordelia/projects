import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const history = useHistory();
  // check state redux isLogged
  const isLogged = useSelector((state) => state.user);
  console.log("isLogged", isLogged);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history.push("/signin")}>signin</button>
      <button onClick={() => history.push("/signup")}>signup</button>
    </div>
  );
}

export default Home;
