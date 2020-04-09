import React from "react";

const Todo = ({ todo, index, removeTodo, editTodo, completeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
      <h3>{todo.text}</h3>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
      <button onClick={() => editTodo(index)}>Edit</button>
    </div>
  );
};

export default Todo;
