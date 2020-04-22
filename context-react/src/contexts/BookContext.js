import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { id: 1, title: "Harry Potter 1" },
    { id: 2, title: "Harry Potter 2" },
    { id: 3, title: "Harry Potter 3" },
    { id: 4, title: "Harry Potter 4" },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
