import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./components/TodoList";
import DigimonList from "./components/DigimonList";
import UnsplashList from "./components/UnsplashList";

function App() {
  return (
    <div>
      {/* <TodoList /> */}
      <DigimonList />
      {/* <UnsplashList /> */}
    </div>
  );
}

export default App;
