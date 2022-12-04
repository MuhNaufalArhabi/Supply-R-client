import {
	Container,
	Row,
	Col,
	Nav,
	Navbar,
	Form,
	InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../asset/logo-supply-r.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faEnvelope,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
	return (
		<>
			<Navbar bg="light" variant="light" sticky="top">
				<Container fluid>
					<Row
						style={{
							width: "100%",
							alignItems: "center",
						}}
					>
						<Col
							className="col-2"
							style={{
								textAlign: "center",
							}}
						>
							<Link to="/">
								<img src={logo} style={{ height: "50px" }} />
							</Link>
						</Col>
						<Col
							className="col-10"
							style={{
								display: "flex",
								flexDirection: "row",
								textAlign: "center",
							}}
						>
							<InputGroup>
								<Form.Control type="search" placeholder="Search" />
								<InputGroup.Text>
									<FontAwesomeIcon icon={faSearch} style={{ color: "gray" }} />
								</InputGroup.Text>
							</InputGroup>

							{/* before login */}
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "40%",
									alignItems: "center",
									justifyContent: "center",
									gap: "25px",
									color: "#204e64",
								}}
							>
								<Link to="/register-buyer" className="nav-link">
									Register as Buyer
								</Link>
								<Link to="/register-seller" className="nav-link">
									Register as Seller
								</Link>
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</div>

							{/* login as buyer */}
							{/* <div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "40%",
									alignItems: "center",
									justifyContent: "center",
									gap: "25px",
									color: "#204e64",
								}}
							>
								<Link to="/cart" className="nav-link">
									<FontAwesomeIcon
										icon={faCartShopping}
										style={{ fontSize: 24, paddingTop: "2px" }}
									/>
								</Link>
								<Link to="/cart" className="nav-link">
									<FontAwesomeIcon
										icon={faEnvelope}
										style={{ fontSize: 24, paddingTop: "2px" }}
									/>
								</Link>
								<Link to="/profile-buyer" className="nav-link">
									Buyer Profile
								</Link>
								<Link to="/" className="nav-link">
									Logout
								</Link>
							</div> */}

							{/* login as seller */}
							{/* <div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "50%",
									alignItems: "center",
									justifyContent: "center",
									gap: "25px",
									color: "#204e64",
								}}
							>
								<Link to="/cart" className="nav-link">
									<FontAwesomeIcon
										icon={faEnvelope}
										style={{ fontSize: 24, paddingTop: "2px" }}
									/>
								</Link>
								<Link to="/profile-store" className="nav-link">
									Seller Store
								</Link>
								<Link to="/profile-seller" className="nav-link">
									Seller Profile
								</Link>
								<Link to="/" className="nav-link">
									Logout
								</Link>
							</div> */}
						</Col>
					</Row>
				</Container>
			</Navbar>
		</>
	);
}
