import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

export default function ReviewAxios() {
  const [user, setUser] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [show, setShow] = useState(false);

  const handleShow = (index) => {
    setShow(true);
    console.log("index", index);

    const fetchApiByOne = async () => {
      let url = `https://5e8437e5a8fdea00164ac426.mockapi.io/user/${index}`;
      const res = await axios.get(url);
      let data = res.data;
      setUserEdit(data);
      console.log("data", data);
    };
    fetchApiByOne();
  };
  const handleClose = () => setShow(false);

  const fetchApi = async () => {
    let url = "https://5e8437e5a8fdea00164ac426.mockapi.io/user";
    const res = await axios.get(url);
    let data = res.data;
    setUser(data);
    console.log("data", data);
  };
  useEffect(() => {
    // async function fetchMyAPI() {
    //   let url = "https://digimon-api.herokuapp.com/api/digimon";
    //   const response = await axios.get(url);
    //   let data = response.data;
    //   setUser(data);
    //   console.log(response);
    // }

    // fetchMyAPI();

    fetchApi();
  }, []);

  const handleChangeEdit = (e) => {
    const newValue = e.target.value;
    const name = userEdit.name;
    setUserEdit({
      name: newValue,
    });
    console.log("userEdit", userEdit);
  };

  const handleSubmit = (id) => {
    // const newId = parseInt(id);
    // console.log("masuk", id);
    // await axios.put(
    //   `https://5e8437e5a8fdea00164ac426.mockapi.io/user/${id}`,
    //   userEdit
    // );
    console.log("userEdit", userEdit);
    const ids = 1;

    axios
      .put(`https://5e8437e5a8fdea00164ac426.mockapi.io/user/${ids}`, {
        userEdit,
      })
      .then((response) => {
        // setUserEdit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchApi();
    setShow(false);
  };

  console.log(user);
  return (
    <div>
      <h1>My Digimon</h1>
      {user.map((item, index) => {
        if (index < 20) {
          return (
            <li key={index}>
              {index + 1}. {item.name}
              {/* <img src={item.img}></img> */}
              <button onClick={() => handleShow(item.id)}>Edit</button>
            </li>
          );
        }
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              value={userEdit.name}
              onChange={handleChangeEdit}
            />
            <br />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(userEdit.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
