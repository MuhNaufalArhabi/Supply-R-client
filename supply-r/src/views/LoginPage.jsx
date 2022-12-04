import { auth, google, facebook, twitter } from "../stores/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const { data } = await axios({
				method: "POST",
				url: "http://localhost:3001/sellers/login",
				data: formLogin,
			});
			localStorage.setItem("access_token", data.access_token);
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
									<Button
										className="mb-3 mt-md-4"
										style={{
											backgroundColor: "#2596be",
											borderColor: "#2596be",
											color: "white",
										}}
										type="button"
										onClick={() => {
											navigate("/register-buyer");
										}}
									>
										Register as Company
									</Button>
									<br></br>

									<Button
										className="mb-3 mt-md-4"
										style={{
											backgroundColor: "#2596be",
											borderColor: "#2596be",
											color: "white",
										}}
										type="button"
										onClick={() => {
											navigate("/register-seller");
										}}
									>
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
											<Form onSubmit={handleSubmit}>
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
										<Button
											variant="danger"
											type="button"
											onClick={() => login(google)}
											className="mt-1 mb-1"
											style={{ padding: 5 }}
										>
											Login with Google
										</Button>

										<br />
										<Button
											variant="primary"
											type="button"
											onClick={() => login(facebook)}
											className="mt-1 mb-1"
										>
											Login with Facebook
										</Button>

										<br />
										<Button
											variant="info"
											type="button"
											onClick={() => login(twitter)}
											className="mt-1 mb-1"
										>
											<i class="fa fa-twitter" aria-hidden="true"></i> Login
											with Twitter
										</Button>
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
