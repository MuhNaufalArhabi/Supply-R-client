import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function SideBar() {
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
				<Link to="/dashboard" className="nav-link">
					<h4>Dashboard</h4>
				</Link>
				<hr />
				<Link to="/transaction" className="nav-link">
					<h4>Transaction</h4>
				</Link>
				<hr />
				<Link to="/product-list" className="nav-link">
					<h4>Products</h4>
				</Link>
				<Link to="/product-list" className="nav-link">
					<h5 style={{ fontWeight: "lighter" }}>Product List</h5>
				</Link>
				<Link to="/add-product" className="nav-link">
					<h5 style={{ fontWeight: "lighter" }}>Add Product</h5>
				</Link>
				<hr />
				<Link to="/profile-store" className="nav-link">
					<h4>Shop Profile</h4>
				</Link>
				<hr />
				<Link to="/" className="nav-link">
					<h4>Back to Home Page</h4>
				</Link>
				<hr />
			</Container>
		</>
	);
}
