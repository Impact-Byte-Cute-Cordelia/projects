import React from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ThemeToggle from "./components/ThemeToggle";

import ThemeContextProvider from "./contexts/ThemeContext";
import ContactContextProvider from "./contexts/ContactContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <ContactContextProvider>
          <ContactList />
        </ContactContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
