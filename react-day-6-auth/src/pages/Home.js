import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Modal, Button } from "antd";
// import { Modal, Button } from "react-bootstrap";

function Home() {
  const [modal, setModal] = useState(false);

  const handleModalLogin = () => setModal(!modal);

  return (
    <div>
      <h1>Ini halaman Home</h1>
      {/* <Button onClick={handleModalLogin}>Ini modal login</Button>

      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> */}
      {/* <Modal
        title="Basic Modal"
        visible={modal}
        onOk={handleModalLogin}
        // onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}

      <Button color="danger" onClick={handleModalLogin}>
        Ini Modal Login
      </Button>

      {/* Ini modalnya */}
      <Modal isOpen={modal} toggle={handleModalLogin}>
        <ModalHeader>Ini modal untuk login</ModalHeader>
        <ModalBody>
          <input type="text" placeholder="buat login" />{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleModalLogin}>
            Signin
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Home;
