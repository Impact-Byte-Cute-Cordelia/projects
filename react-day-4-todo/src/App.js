import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn react" },
    { text: "Learn at impactbyte" },
    { text: "love programming" },
  ]);

  const [value, setValue] = useState("");
  console.log("value", value);

  // handle change input
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // handle remove button
  const removeTodo = (index) => {
    console.log("Sudah ke click");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("isi value", value);
    if (!value) return alert("todo belum diisi");
    const newTodos = [...todos, { text: value }];
    console.log("newTodos", newTodos);
    setTodos(newTodos);
    setValue("");
  };

  return (
    <div>
      <h1>React Todo function</h1>
      {/* untuk form input */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" />
      </form>

      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default App;
