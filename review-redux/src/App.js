import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Cakes from "./Pages/Cakes";
import IceCream from "./Pages/IceCream";

// Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Cakes />
          </Route>
          <Route path="/icecream">
            <IceCream />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
