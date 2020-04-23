import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ContactContext } from "../contexts/ContactContext";

function ContactList() {
  const { isLightTheme, light, dark, name } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { contacts } = useContext(ContactContext);
  console.log("contacts", contacts);
  return (
    <div
      className="contact-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <h4>{name} contact list</h4>
      <ul>
        {/* <li style={{ background: theme.ui }}>Wahid</li>
        <li style={{ background: theme.ui }}>Zaki</li>
        <li style={{ background: theme.ui }}>Hadyd</li> */}
        {contacts.map((contacts) => {
          return (
            <li style={{ background: theme.ui }} key={contacts.id}>
              {contacts.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
