import React, { useState, useEffect } from "react";
import axios from 'axios'

// Component Function
function TodoFunc() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then(result => {
      console.log(result)
      setData(
        result.data
      )
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>Todo Function</h1>
      {data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
}

export default TodoFunc