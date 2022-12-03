import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  CardGroup,
} from "react-bootstrap";
import { useState } from "react";


export default function RegistrationBuyerPage() {
  const [formBuyer, setFormBuyer] = useState({
    name: "",
    email: "",
    password: "",
    owner: "",
    address: "",
    phoneNumber: "",
    industry: "",
    website: "",
  })

  const handleFormBuyer = (event) => {
    setFormBuyer({
      ...formBuyer,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formBuyer);
  }
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={12} lg={12} xs={12}>
            <CardGroup className="mb-3 mt-md-4">
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1581264669997-3f222f331aaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                />

                <Card.Body>
                  <img src="https://i.postimg.cc/0yWBrfP8/SUPPLY-R-1-removebg-preview-1.png"></img>
                </Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      Registration Buyer
                    </h2>
                    <p className=" mb-5">
                      Please fill the data with your info!
                    </p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label className="text-center">Name</Form.Label>

                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter company name"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>

                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicOwner">
                          <Form.Label>Owner</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="owner"
                            placeholder="Enter owner name"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <Form.Label>Phone Number</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicAddress"
                        >
                          <Form.Label>Address</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter company address"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicIndustry"
                        >
                          <Form.Label>Industry</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="industry"
                            placeholder="Enter industry name"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicWebsite"
                        >
                          <Form.Label>Website</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="website"
                            placeholder="Enter website info"
                          />
                        </Form.Group>

                        <div className="d-grid">
                          <Button
                            style={{
                              backgroundColor: "#2596be",
                              borderColor: "#2596be",
                              color: "white",
                            }}
                            type="submit"
                          >
                            Register Company
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
