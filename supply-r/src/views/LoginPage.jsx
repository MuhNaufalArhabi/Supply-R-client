import { auth, google, facebook, twitter } from "../stores/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
	Col,
	Button,
	Row,
	Container,
	Card,
	Form,
	CardGroup,
} from "react-bootstrap";
import {
	MDBContainer,
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
	MDBBtn,
	MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../asset/logo-supply-r.png";
// import socket from "../stores/socket";

export default function LoginPage() {
	const navigate = useNavigate();

	const [formLogin, setFormLogin] = useState({
		email: "",
		password: "",
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
				method: "POST",
				url: "http://localhost:3001/sellers/login",
				data: formLogin,
			});
      
			localStorage.setItem("access_token", data.access_token);
			localStorage.setItem("id", data.id);
			localStorage.setItem("role", data.role);
      localStorage.setItem('sellerId', data.sellerId);
      
			socket.emit('newUser', { users: localStorage.name, id: localStorage.id, role: localStorage.role });
      
			navigate("/");
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
      console.log(data)
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('id', data.id);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);
      // socket.emit('newUser', { users: localStorage.name, id: localStorage.id ,role: localStorage.role })
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  
	const handleSubmitBuyer = async (event) => {
		try {
			event.preventDefault();
			const { data } = await axios({
				method: "POST",
				url: "http://localhost:3001/buyers/login",
				data: formLogin,
			});
			localStorage.setItem("access_token", data.access_token);
			localStorage.setItem("id", data.id);
			localStorage.setItem("role", data.role);
			localStorage.setItem("name", data.name);
			// socket.emit('newUser', { users: localStorage.name, id: localStorage.id ,role: localStorage.role })
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const login = async (provider) => {
		try {
			let baseUrl = "";
			const { user } = await signInWithPopup(auth, provider);
			console.log(user.displayName, user.email);
			if (provider === google) {
				baseUrl = "http://localhost:3001/sellers/google-login";
			} else if (provider === facebook) {
				baseUrl = "http://localhost:3001/sellers/facebook-login";
			} else if (provider === twitter) {
				baseUrl = "http://localhost:3001/sellers/twitter-login";
			}
			const { data } = await axios({
				method: "POST",
				url: baseUrl,
				data: {
					username: user.displayName,
					email: user.email,
				},
			});
			console.log(data);
			localStorage.setItem("access_token", data.access_token);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const [justifyActive, setJustifyActive] = useState("tab1");

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
								<Row>
									<Link
										to="/"
										style={{
											textAlign: "center",
											paddingTop: "5%",
										}}
									>
										<img
											src={logo}
											alt="gambar logo"
											style={{ height: "100px" }}
										/>
									</Link>
								</Row>

								<Row
									style={{
										textAlign: "center",
										paddingTop: "4%",
									}}
								>
									<h2
										className="fw-bold mb-2 text-uppercase"
										style={{ color: "#204e64" }}
									>
										REGISTER NOW
									</h2>
									<p>Does not have an account yet?</p>
								</Row>

								<Row
									style={{
										height: "42%",
										marginTop: "6%",
										justifyContent: "center",
										gap: "6%",
									}}
								>
									<Button
										style={{
											backgroundColor: "#2596be",
											borderColor: "#2596be",
											color: "white",
											height: "47%",
											width: "50%",
										}}
										type="button"
										onClick={() => {
											navigate("/register-buyer");
										}}
									>
										<h4>Register as Company</h4>
									</Button>
									<Button
										style={{
											backgroundColor: "#2596be",
											borderColor: "#2596be",
											color: "white",
											height: "47%",
											width: "50%",
										}}
										type="button"
										onClick={() => {
											navigate("/register-seller");
										}}
									>
										<h4>Register as UMKM</h4>
									</Button>
								</Row>
							</Card>
							<Card className="shadow">
								<Card.Body>
									{/* ---------------------------------------- */}
									<MDBContainer
										className="p-3 my-5 d-flex flex-column"
										style={{ width: "70%" }}
									>
										<MDBTabs
											justify
											className="mb-3 d-flex flex-row justify-content-between"
										>
											<MDBTabsItem>
												<MDBTabsLink
													onClick={() => handleJustifyClick("tab1")}
													active={justifyActive === "tab1"}
												>
													Company
												</MDBTabsLink>
											</MDBTabsItem>
											<MDBTabsItem>
												<MDBTabsLink
													onClick={() => handleJustifyClick("tab2")}
													active={justifyActive === "tab2"}
												>
													UMKM
												</MDBTabsLink>
											</MDBTabsItem>
										</MDBTabs>

										<MDBTabsContent>
											<MDBTabsPane show={justifyActive === "tab1"}>
												<div className="mb-3 mt-md-4">
													<h2
														className="fw-bold mb-2 text-uppercase"
														style={{ textAlign: "center", color: "#204e64" }}
													>
														LOGIN COMPANY
													</h2>
													<p className=" mb-5" style={{ textAlign: "center" }}>
														Please enter your email and password!
													</p>
													<div className="mb-3">
														<Form onSubmit={handleSubmitBuyer}>
															<Form.Group
																className="mb-3"
																controlId="formBasicEmail"
															>
																<Form.Label className="text-center">
																	Email
																</Form.Label>

																<input
																	type="email"
																	className="form-control"
																	name="email"
																	placeholder="Enter email address ..."
																	onChange={handleFormLogin}
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
																	placeholder="Enter password ..."
																	onChange={handleFormLogin}
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
																	Login
																</Button>
															</div>
														</Form>
													</div>
												</div>
												<div className="text-center mb-3">
													<h5 style={{ color: "#204e64" }}>Login with:</h5>

													<div
														className="d-flex justify-content-center mx-auto"
														style={{ gap: "3%" }}
													>
														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(facebook)}
														>
															<MDBIcon fab icon="facebook-f" size="lg" />
														</MDBBtn>

														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(twitter)}
														>
															<MDBIcon fab icon="twitter" size="lg" />
														</MDBBtn>

														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(google)}
														>
															<MDBIcon fab icon="google" size="lg" />
														</MDBBtn>
													</div>
												</div>
											</MDBTabsPane>

											<MDBTabsPane show={justifyActive === "tab2"}>
												<div className="mb-3 mt-md-4">
													<h2
														className="fw-bold mb-2 text-uppercase"
														style={{ textAlign: "center", color: "#204e64" }}
													>
														LOGIN UMKM
													</h2>
													<p className=" mb-5" style={{ textAlign: "center" }}>
														Please enter your email and password!
													</p>
													<div className="mb-3">
														<Form onSubmit={handleSubmitSeller}>
															<Form.Group
																className="mb-3"
																controlId="formBasicEmail"
															>
																<Form.Label className="text-center">
																	Email
																</Form.Label>

																<input
																	type="email"
																	className="form-control"
																	name="email"
																	placeholder="Enter email address ..."
																	onChange={handleFormLogin}
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
																	placeholder="Enter password ..."
																	onChange={handleFormLogin}
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
																	Login
																</Button>
															</div>
														</Form>
													</div>
												</div>
												<div className="text-center mb-3">
													<h5 style={{ color: "#204e64" }}>Login with:</h5>

													<div
														className="d-flex justify-content-center mx-auto"
														style={{ gap: "3%" }}
													>
														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(facebook)}
														>
															<MDBIcon fab icon="facebook-f" size="lg" />
														</MDBBtn>

														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(twitter)}
														>
															<MDBIcon fab icon="twitter" size="lg" />
														</MDBBtn>

														<MDBBtn
															tag="a"
															color="none"
															className="m-1"
															style={{ color: "#2596be" }}
															onClick={() => login(google)}
														>
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
