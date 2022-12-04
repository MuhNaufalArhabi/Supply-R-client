import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ProductRowCMS from "../components/ProductRowCMS";

export default function ProductListCMS() {
	return (
		<>
			<div style={{ marginLeft: "20%" }}>
				<Container
					style={{
						paddingTop: "2%",
						paddingBottom: "2%",
						paddingLeft: "5%",
						paddingRight: "5%",
					}}
				>
					<h1 style={{ textAlign: "center", color: "#204e64" }}>
						Product List
					</h1>
					<br></br>

					<Table striped bordered hover>
						<thead
							className="sticky-top bg-white"
							style={{ textAlign: "center" }}
						>
							<tr style={{ color: "white", backgroundColor: "#204e64" }}>
								<th>No.</th>
								<th>Name</th>
								<th>Category</th>
								<th>Description</th>
								<th>Price</th>
								<th>Stock</th>
								<th>Image</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
							<ProductRowCMS />
						</tbody>
					</Table>
				</Container>
			</div>
		</>
	);
}
