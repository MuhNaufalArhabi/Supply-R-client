import { Container, Button, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddStoreSosmed() {
  const navigate = useNavigate();
  const [formShop, setFormShop] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    owner: "",
  });

  const handleShopForm = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...formShop,
    };
    newForm[name] = value;
    setFormShop(newForm);
  };

  const successRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3001/shops/add",
        headers: {
          access_token: localStorage.access_token,
        },
        data: formShop,
      });
      localStorage.setItem("id", data.id);
      localStorage.setItem("name", data.name);
			navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="mb-3">
        <Row>
          <h3 className="text-center mt-3">Create Store</h3>
          <Form onSubmit={successRegister} style={{ paddingLeft: "5%", width: "95%" }}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter store name ..."
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
                placeholder="Enter store address ..."
                name="address"
                value={formShop.address}
                onChange={handleShopForm}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Store Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter store phone number ..."
                name="phoneNumber"
                value={formShop.phoneNumber}
                onChange={handleShopForm}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter store owner name ..."
                name="owner"
                value={formShop.owner}
                onChange={handleShopForm}
              />
            </Form.Group>
    
            <Button
              style={{
                backgroundColor: "#2596be",
                borderColor: "#2596be",
                color: "white",
              }}
              type="submit">
              Register
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
