import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isLightTheme, light, dark, name } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Contact Contexts</h1>
              <h3>Halo, {name}</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
