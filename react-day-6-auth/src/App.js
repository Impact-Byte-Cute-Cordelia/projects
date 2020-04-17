import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// PAGES
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import UserGithub from "./pages/UserGithub";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const isLogin = JSON.parse(localStorage.getItem("statusLogin"));
  console.log("status", isLogin);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todo">
          {isLogin ? <Todo /> : <Redirect to="/signin" />}
          {/* <Todo /> */}
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/user/:id">
          <UserGithub />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
