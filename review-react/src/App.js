import React from "react";
// components
import Header from "./components/Header";
// pages
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// Library
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const isLogin = JSON.parse(localStorage.getItem("statusLogin"));
  console.log("isLogin", isLogin);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>HOME</h1>
        </Route>
        <Route path="/learn">{isLogin ? <Learn /> : <Redirect to="/" />}</Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

// penamaan variable WAJIB snake case dan bahasa inggris
