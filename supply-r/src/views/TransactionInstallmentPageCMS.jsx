import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TransactionInstallmentRowCMS from "../components/TransactionInstallmentRowCMS";

export default function TransactionInstallmentPageCMS() {
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
						Installment Transaction List
					</h1>
					<br></br>

					<Table striped bordered hover>
						<thead
							className="sticky-top bg-white"
							style={{ textAlign: "center" }}
						>
							<tr style={{ color: "white", backgroundColor: "#204e64" }}>
								<th>Order ID</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Total Price</th>
								<th>Order Date</th>
								<th>Customer</th>
								<th>Payment Method</th>
							</tr>
						</thead>
						<tbody>
							<TransactionInstallmentRowCMS />
							<TransactionInstallmentRowCMS />
						</tbody>
					</Table>
				</Container>
			</div>
		</>
	);
}
