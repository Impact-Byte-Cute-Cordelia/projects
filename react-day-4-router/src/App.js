import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// component
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
