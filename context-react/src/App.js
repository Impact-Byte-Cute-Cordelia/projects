import React from "react";
import NavbarHooks from "./components/NavbarHooks";
import BookListHooks from "./components/BookListHooks";

import ThemeToggleHooks from "./components/ThemeToggleHooks";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

// import "./App.css";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavbarHooks />
          <BookContextProvider>
            <BookListHooks />
          </BookContextProvider>
          <ThemeToggleHooks />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
