import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
    },
    name: "Raif Fahmi",
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleThemeProvider: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
