import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  CardGroup,
} from "react-bootstrap";

export default function RegistrationSellerPage() {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={12} lg={12} xs={12}>
            <CardGroup className="mb-3 mt-md-4">
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1611991463676-580844e2cf3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
                />

                <Card.Body>
                  <img src="https://i.postimg.cc/0yWBrfP8/SUPPLY-R-1-removebg-preview-1.png"></img>
                </Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      Registration Seller
                    </h2>
                    <p className=" mb-5">
                      Please fill the data with your info!
                    </p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicUsername"
                        >
                          <Form.Label className="text-center">
                            Username
                          </Form.Label>

                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter username"
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

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <Form.Label>Phone Number</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicKtp">
                          <Form.Label>KTP</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            name="ktp"
                            placeholder="Enter KTP id"
                          />
                        </Form.Group>

                        <div className="d-grid">
                          <Button variant="info" type="submit">
                            Register Seller
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
