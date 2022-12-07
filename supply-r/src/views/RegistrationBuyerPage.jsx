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
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../asset/logo-supply-r.png";
import swal from "sweetalert";

export default function RegistrationBuyerPage() {
	const navigate = useNavigate();
	const [formBuyer, setFormBuyer] = useState({
		name: "",
		email: "",
		password: "",
		owner: "",
		address: "",
		phoneNumber: "",
		industry: "",
		website: "",
	});

	const handleFormBuyer = (event) => {
		setFormBuyer({
			...formBuyer,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await axios({
				method: "POST",
				url: "http://localhost:3001/buyers/register",
				data: formBuyer,
			});
			swal("Congratulations!", "Registered Successfully!", "success", {
				buttons: false,
				timer: 3000,
			});
			navigate("/login");
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
								<Link
									to="/"
									style={{
										textAlign: "center",
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
										Registration Company
									</h2>
									<p>Please fill the data with your info!</p>
								</Card.Body>
								<Card.Img
									variant="bottom"
									src="https://media.istockphoto.com/vectors/office-workplace-conference-meeting-room-business-concept-flat-vector-id1070379564?k=6&m=1070379564&s=170667a&w=0&h=uxeZCBH5evd46EpOk42ZnqZ6ilHd13Xq-J_GdyXMUVE="
									style={{ width: "auto" }}
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
												<Form.Group className="mb-3" controlId="formBasicName">
													<Form.Label className="text-center">Name</Form.Label>

													<input
														type="text"
														className="form-control"
														name="name"
														placeholder="Enter company name ..."
														onChange={handleFormBuyer}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label className="text-center">Email</Form.Label>

													<input
														type="email"
														className="form-control"
														name="email"
														placeholder="Enter email address ..."
														onChange={handleFormBuyer}
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
														onChange={handleFormBuyer}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicOwner">
													<Form.Label>Owner</Form.Label>
													<input
														type="text"
														className="form-control"
														name="owner"
														placeholder="Enter owner name ..."
														onChange={handleFormBuyer}
													/>
												</Form.Group>

												<Form.Group className="mb-3" controlId="formBasicPhone">
													<Form.Label>Phone Number</Form.Label>
													<input
														type="text"
														className="form-control"
														name="phoneNumber"
														placeholder="Enter phone number ..."
														onChange={handleFormBuyer}
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
														placeholder="Enter company address ..."
														onChange={handleFormBuyer}
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
														placeholder="Enter industry name ..."
														onChange={handleFormBuyer}
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
														placeholder="Enter company website address ..."
														onChange={handleFormBuyer}
													/>
												</Form.Group>

												<div className="d-grid">
													<Button
														style={{
															backgroundColor: "#2596be",
															borderColor: "#2596be",
															color: "white",
															marginTop: "2%",
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
