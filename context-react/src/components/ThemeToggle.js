import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { toggleThemeProvider, isLightTheme } = useContext(ThemeContext);
  console.log("console isLightTheme", isLightTheme);
  return (
    <div>
      <button onClick={toggleThemeProvider}>Toggle Theme Change</button>
    </div>
  );
}

export default ThemeToggle;
