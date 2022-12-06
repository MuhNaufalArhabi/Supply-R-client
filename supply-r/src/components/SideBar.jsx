import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar() {
	const id = localStorage.getItem("id");
	const navigate = useNavigate();
	const handleList = () => {
		navigate(`/product-list/${id}`);
	};
	return (
		<>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					position: "fixed",
					width: "20%",
					minHeight: "100vh",
					backgroundColor: "#f8f8f8",
					paddingLeft: "50px",
					paddingRight: "50px",
					justifyContent: "center",
				}}
			>
				<hr />
				<Link
					to="/profile-store"
					className="nav-link"
					style={{ marginTop: "5px" }}
				>
					<h4 style={{ color: "#204e64" }}>Store Profile</h4>
				</Link>
				<hr />
				<Link
					to="/transaction-cash"
					className="nav-link"
					style={{ marginTop: "5px" }}
				>
					<h4 style={{ color: "#204e64" }}>Transaction</h4>
				</Link>
				<Link to="/transaction-cash" className="nav-link">
					<h5 style={{ fontWeight: "lighter", color: "#204e64" }}>
						Cash Transaction
					</h5>
				</Link>
				<Link to="/transaction-installment" className="nav-link">
					<h5 style={{ fontWeight: "lighter", color: "#204e64" }}>
						Installment Transaction
					</h5>
				</Link>
				<hr />
				<Nav.Link
					onClick={handleList}
					className="nav-link"
					style={{ marginTop: "5px" }}
				>
					<h4 style={{ color: "#204e64" }}>Products</h4>
				</Nav.Link>
				<Nav.Link onClick={handleList} className="nav-link">
					<h5 style={{ fontWeight: "lighter", color: "#204e64" }}>
						Product List
					</h5>
				</Nav.Link>
				<Link to="/add-product" className="nav-link">
					<h5 style={{ fontWeight: "lighter", color: "#204e64" }}>
						Add Product
					</h5>
				</Link>
				<hr />
				<Link
					to="/edit-profile-store"
					className="nav-link"
					style={{ marginTop: "5px" }}
				>
					<h4 style={{ color: "#204e64" }}>Edit Store Profile</h4>
				</Link>
				<hr />
				<Link to="/" className="nav-link" style={{ marginTop: "5px" }}>
					<h4 style={{ color: "#204e64" }}>Back to Home Page</h4>
				</Link>
				<hr />
			</Container>
		</>
	);
}
