import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  getDataDigimon,
  postDataDigimon,
  deleteDataDigimon,
} from "../redux/Actions/getDigimon";

// Component Function
function Digimon(props) {
  const [digimonName, setDigimonName] = useState("");
  const getData = props.getDataDigimon;

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (event) => {
    setDigimonName(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    let newDigimon = {
      id: "10",
      name: digimonName,
    };
    props.postDataDigimon(newDigimon);

    console.log(newDigimon);
  };

  const handleDelete = (id) => {
    props.deleteDataDigimon(id);
  };

  console.log("PROPS", props);

  return (
    <div>
      <h1>Digimon</h1>
      <form onSubmit={handleAdd}>
        <label>
          Digimon Name:
          <input
            type="text"
            name="digimonName"
            value={digimonName}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>

      {props.digimons.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

// UNTUK MENGAMBIL STATE DARI STORE
const mapStateToProps = (props) => {
  console.log("state to props", props);
  return {
    digimons: props.getDigimon.data,
  };
};

// UNTUK MERUBAH STATE DARI COMPONENT KE STORE
// const mapDispatchToProps = { getDataDigimon, postDataDigimon };
const mapDispatchToProps = (dispatch) => {
  return {
    getDataDigimon: () => dispatch(getDataDigimon()),
    postDataDigimon: (postObjectDigimon) =>
      dispatch(postDataDigimon(postObjectDigimon)),
    deleteDataDigimon: (id) => dispatch(deleteDataDigimon(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Digimon);
