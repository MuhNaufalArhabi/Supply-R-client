import { Col, Row, Container, Card, Form, CardGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AddStoreModal from "../components/AddStoreModal.jsx";
import logo from "../asset/logo-supply-r.png";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
export default function RegistrationSellerPage() {
	const navigate = useNavigate();
	const [formSeller, setFormSeller] = useState({
		username: "",
		password: "",
		email: "",
		phoneNumber: "",
		ktp: "",
	});
	const handleFormAddSeller = (event) => {
		setFormSeller({
			...formSeller,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios({
			method: "POST",
			url: `${baseUrl}/sellers/register`,
			data: formSeller,
		});
		navigate("/login");
	};
	return (
		<>
			<Container>
				<Row className="vh-100 d-flex justify-content-center align-items-center">
					<Col md={12} lg={12} xs={12}>
						<CardGroup className="mb-3 mt-md-4">
							<Card className="shadow" style={{ alignItems: "center" }}>
								<Link
									to="/"
									style={{
										paddingTop: "6%",
										marginBottom: "5%",
									}}
								>
									<img
										src={logo}
										alt="gambar logo"
										style={{ height: "100px" }}
									/>
								</Link>
								<Card.Body
									style={{
										textAlign: "center",
									}}
								>
									<h2
										className="fw-bold mb-2 text-uppercase"
										style={{ color: "#204e64" }}
									>
										Registration UMKM
									</h2>
									<p>Please fill the data with your info!</p>
								</Card.Body>
								<img
									src="https://img.freepik.com/free-vector/flea-market-concept-illustration_52683-55266.jpg?size=626&ext=jpg"
									alt="illustration"
									style={{ width: "400px", paddingTop: "2%" }}
								/>
							</Card>
							<Card className="shadow">
								<Card.Body>
									<div className="mb-3 mt-md-4">
										<div
											className="mb-3"
											style={{ paddingLeft: "10%", width: "90%" }}
										>
											<Form onSubmit={handleSubmit}>
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
														placeholder="Enter username ..."
														onChange={handleFormAddSeller}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label className="text-center">Email</Form.Label>

													<input
														type="email"
														className="form-control"
														name="email"
														placeholder="Enter email address ..."
														onChange={handleFormAddSeller}
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
														onChange={handleFormAddSeller}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicPhone">
													<Form.Label>Phone Number</Form.Label>
													<input
														type="text"
														className="form-control"
														name="phoneNumber"
														placeholder="Enter phone number ..."
														onChange={handleFormAddSeller}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicKtp">
													<Form.Label>KTP</Form.Label>
													<input
														type="text"
														className="form-control"
														name="ktp"
														placeholder="Enter KTP number ..."
														onChange={handleFormAddSeller}
													/>
												</Form.Group>

												<AddStoreModal formSeller={formSeller} />

												{/* <div className="d-grid">
													<Button
														style={{
															backgroundColor: "#2596be",
															borderColor: "#2596be",
															color: "white",
														}}
														type="submit"
													>
														Register Seller
													</Button>
												</div> */}
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
