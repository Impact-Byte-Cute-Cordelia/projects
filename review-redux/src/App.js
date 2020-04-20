import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header";

// Pages
import Home from "./Pages/Home";
import IceCream from "./Pages/IceCream";
import Cakes from "./Pages/Cakes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cakes">
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
