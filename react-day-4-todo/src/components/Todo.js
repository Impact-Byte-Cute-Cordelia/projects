import React from "react";

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default Todo;
