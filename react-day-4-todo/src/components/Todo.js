import React from "react";

const Todo = ({ todo, index, removeTodo, editTodo }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <button onClick={() => removeTodo(index)}>Remove</button>
      <button onClick={() => editTodo(index)}>Edit</button>
    </div>
  );
};

export default Todo;
