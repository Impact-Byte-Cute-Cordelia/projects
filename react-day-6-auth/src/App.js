import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // useHistory,
} from "react-router-dom";
// pages
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("status"));

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todo">
          {isLogin && isLogin !== null ? <Todo /> : <Redirect to="/signin" />}
          {/* <Todo /> */}
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
