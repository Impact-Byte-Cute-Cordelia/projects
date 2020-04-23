import React, { createContext, useState } from "react";

export const ContactContext = createContext();

function ContactContextProvider(props) {
  const [contacts, setContacts] = useState([
    { id: 1, name: "wahid" },
    { id: 2, name: "raif" },
    { id: 3, name: "rubi" },
  ]);
  return (
    <ContactContext.Provider value={{ contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;
