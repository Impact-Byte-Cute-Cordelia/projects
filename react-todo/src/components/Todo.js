import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  console.log("todo", todo);
  console.log("todo", index);
  return (
    <div style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
      <h3>{todo.text}</h3>
      <button onClick={() => completeTodo(index)}>complete</button>
      <button onClick={() => removeTodo(index)}>delete</button>
      <button onClick={() => editTodo(index)}>edit</button>
    </div>
  );
};

export default Todo;
