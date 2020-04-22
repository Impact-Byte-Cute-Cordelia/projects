import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggleHooks() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default ThemeToggleHooks;
