import { auth, google, facebook, twitter } from '../stores/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form, CardGroup } from 'react-bootstrap';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import socket from '../stores/socket';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const handleFormLogin = (event) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitSeller = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3001/sellers/login',
        data: formLogin,
      });
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('id', data.id);
      localStorage.setItem('role', data.role);
      socket.emit('userConnect', {socketId: socket.id, role: data.role, id: data.id});
      // localStorage.setItem('name', data.name);
      // socket.emit('newUser', { users: localStorage.name, id: localStorage.id, role: localStorage.role });

    //   console.log(data);
    //   const shop = await axios({
    //     method: 'GET',
    //     url: `http://localhost:3001/shops/${data.id}`,
    //   });
    //   if (!shop.data) {
    //     localStorage.setItem('name', data.name);
    //   } else {
    //     localStorage.setItem('name', shop.data.name);
    //   }
	//   console.log(shop.data)
    //   socket.emit('newUser', { users: localStorage.name, UserId: localStorage.id });

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitBuyer = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3001/buyers/login',
        data: formLogin,
      });
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('id', data.id);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);
      socket.emit('userConnect', {socketId: socket.id, role: data.role, id: data.id});
      // socket.emit('newUser', { users: localStorage.name, id: localStorage.id ,role: localStorage.role })
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (provider) => {
    try {
      let baseUrl = '';
      const { user } = await signInWithPopup(auth, provider);
      console.log(user.displayName, user.email);
      if (provider === google) {
        baseUrl = 'http://localhost:3001/sellers/google-login';
      } else if (provider === facebook) {
        baseUrl = 'http://localhost:3001/sellers/facebook-login';
      } else if (provider === twitter) {
        baseUrl = 'http://localhost:3001/sellers/twitter-login';
      }
      const { data } = await axios({
        method: 'POST',
        url: baseUrl,
        data: {
          username: user.displayName,
          email: user.email,
        },
      });
      console.log(data);
      localStorage.setItem('access_token', data.access_token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
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
                  <Button
                    className="mb-3 mt-md-4"
                    style={{
                      backgroundColor: '#2596be',
                      borderColor: '#2596be',
                      color: 'white',
                    }}
                    type="button"
                    onClick={() => {
                      navigate('/register-buyer');
                    }}>
                    Register as Company
                  </Button>
                  <br></br>

                  <Button
                    className="mb-3 mt-md-4"
                    style={{
                      backgroundColor: '#2596be',
                      borderColor: '#2596be',
                      color: 'white',
                    }}
                    type="button"
                    onClick={() => {
                      navigate('/register-seller');
                    }}>
                    Register as UMKM
                  </Button>
                </Card.Body>
              </Card>
              <Card className="shadow">
                <Card.Body>
                  {/* ---------------------------------------- */}
                  <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <MDBTabs
                      pills
                      justify
                      className="mb-3 d-flex flex-row justify-content-between">
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleJustifyClick('tab1')}
                          active={justifyActive === 'tab1'}>
                          Buyer
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleJustifyClick('tab2')}
                          active={justifyActive === 'tab2'}>
                          Seller
                        </MDBTabsLink>
                      </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                      <MDBTabsPane show={justifyActive === 'tab1'}>
                        <div className="mb-3 mt-md-4">
                          <h2 className="fw-bold mb-2 text-uppercase ">LOGIN BUYER</h2>
                          <p className=" mb-5">Please enter your login and password!</p>
                          <div className="mb-3">
                            <Form onSubmit={handleSubmitBuyer}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                  Email address
                                </Form.Label>

                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter email"
                                  onChange={handleFormLogin}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  placeholder="Enter password"
                                  onChange={handleFormLogin}
                                />
                              </Form.Group>

                              <div className="d-grid">
                                <Button
                                  style={{
                                    backgroundColor: '#2596be',
                                    borderColor: '#2596be',
                                    color: 'white',
                                  }}
                                  type="submit">
                                  Login
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </div>
                        <div className="text-center mb-3">
                          <h5 style={{ color: '#204e64' }}>Log in with:</h5>

                          <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: '40%' }}>
                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(facebook)}>
                              <MDBIcon fab icon="facebook-f" size="lg" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(twitter)}>
                              <MDBIcon fab icon="twitter" size="lg" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(google)}>
                              <MDBIcon fab icon="google" size="lg" />
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={justifyActive === 'tab2'}>
                        <div className="mb-3 mt-md-4">
                          <h2 className="fw-bold mb-2 text-uppercase ">LOGIN SELLER</h2>
                          <p className=" mb-5">Please enter your login and password!</p>
                          <div className="mb-3">
                            <Form onSubmit={handleSubmitSeller}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                  Email address
                                </Form.Label>

                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter email"
                                  onChange={handleFormLogin}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  placeholder="Enter password"
                                  onChange={handleFormLogin}
                                />
                              </Form.Group>

                              <div className="d-grid">
                                <Button
                                  style={{
                                    backgroundColor: '#2596be',
                                    borderColor: '#2596be',
                                    color: 'white',
                                  }}
                                  type="submit">
                                  Login
                                </Button>
                              </div>
                            </Form>
                          </div>
                        </div>
                        <div className="text-center mb-3">
                          <h5 style={{ color: '#204e64' }}>Log in with:</h5>

                          <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: '40%' }}>
                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(facebook)}>
                              <MDBIcon fab icon="facebook-f" size="lg" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(twitter)}>
                              <MDBIcon fab icon="twitter" size="lg" />
                            </MDBBtn>

                            <MDBBtn
                              tag="a"
                              color="none"
                              className="m-1"
                              style={{ color: '#2596be' }}
                              onClick={() => login(google)}>
                              <MDBIcon fab icon="google" size="lg" />
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBTabsPane>
                    </MDBTabsContent>
                  </MDBContainer>
                  {/* ---------------------------------------- */}
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
