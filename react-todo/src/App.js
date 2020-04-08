import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "learn react", isComplete: false },
    { text: "Learn more about react", isComplete: false },
    { text: "learn react hooks", isComplete: false },
  ]);
  console.log("todos", todos);
  const [value, setValue] = useState("");

  // handle change form
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return alert("belom isi");
    console.log("isi submit", e);
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
  };

  // function add todo
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    console.log("newTodos.text", newTodos[index].text);
    const editTodos = newTodos[index].text;
    const newEdit = prompt(editTodos);

    newTodos.splice(index, 1, { text: newEdit });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Learn React Todo Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" />
      </form>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default App;
