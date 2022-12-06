import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddStoreModal({ formSeller, handleSubmit }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formShop, setFormShop] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    owner: '',
  });

  const handleShopForm = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...formShop,
    };
    newForm[name] = value;
    setFormShop(newForm);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (e) => {
    e.preventDefault();

    setShow(true);
  };

  const successRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3001/sellers/register',
        data: { formSeller, formShop },
      });
      console.log(data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleShow}>Next</Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Form onSubmit={successRegister}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Create Store</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Store name ..."
                name="name"
                value={formShop.name}
                onChange={handleShopForm}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="textarea"
                placeholder="Store address ..."
                name="address"
                value={formShop.address}
                onChange={handleShopForm}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Shop Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Store phone number ..."
                name="phoneNumber"
                value={formShop.phoneNumber}
                onChange={handleShopForm}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Owner Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Store owner name ..."
                name="owner"
                value={formShop.owner}
                onChange={handleShopForm}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                backgroundColor: '#2596be',
                borderColor: '#2596be',
                color: 'white',
              }}
              type="submit">
              Regisrer
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
