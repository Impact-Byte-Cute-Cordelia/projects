import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { DeveloperContext, UserContext } from "../App";

function HooksUseEffect2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFetch, setIdFetch] = useState(1);

  const User = useContext(UserContext);
  const Developer = useContext(DeveloperContext);

  const handleClick = () => {
    setIdFetch(id);
  };

  useEffect(() => {
    console.log("click");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFetch}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFetch]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
      <div>{post.title}</div>

      {/* <useContext */}
      <h1>{User}</h1>
      <h3>who the best developer {Developer.number1}</h3>
    </div>
  );
}

export default HooksUseEffect2;
