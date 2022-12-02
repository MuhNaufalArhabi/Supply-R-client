import { auth, google, facebook, twitter } from "../stores/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  CardGroup,
} from "react-bootstrap";
export default function LoginPage() {
  const login = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={12} lg={12} xs={12}>
            <CardGroup className="mb-3 mt-md-4">
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                />

                <Card.Body>
                  <Button className="mb-3 mt-md-4" variant="info" type="button">
                    Register as Company
                  </Button>
                  <br></br>

                  <Button className="mb-3 mt-md-4" variant="info" type="button">
                    Register as UMKM
                  </Button>
                </Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">LOGIN</h2>
                    <p className=" mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="mb-3">
                      <Form>
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

                        <div className="d-grid">
                          <Button variant="info" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                    </div>
                    <button onClick={() => login(google)}>
                      Login with Google
                    </button>
                    <br/>
                    <button onClick={() => login(facebook)}>
                      Login with Facebook
                    </button>
                    <br/>
                    <button onClick={() => login(twitter)}>
                      Login with twitter
                    </button>
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
