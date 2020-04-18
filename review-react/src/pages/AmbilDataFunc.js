import React, { useState, useEffect } from "react";
// import axios from "axios";

const AmbilDataFunc = () => {
  // const [dataState, setDataState] = useState({});

  useEffect(() => {
    // hooks fetch promise
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => setDataState(data));
    // hooks fetch async await
    // const fetchApi = async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   const json = await res.json();
    //   setDataState(json);
    // };
    // hooks axios promise
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => setDataState(response.data));
    // hooks axios async await
    // const fetchApi = async () => {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   setDataState(response.data);
    // };
    // fetchApi();
  }, []);

  // console.log("dataState", dataState);
  return (
    <div>
      <h1>Ambil data Func</h1>
    </div>
  );
};

export default AmbilDataFunc;
