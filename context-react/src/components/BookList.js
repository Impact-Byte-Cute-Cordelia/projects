import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    console.log("context", this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Harry Potter 1</li>
          <li style={{ background: theme.ui }}>Harry Potter 2</li>
          <li style={{ background: theme.ui }}>Harry Potter 3</li>
        </ul>
      </div>
    );
  }
}
