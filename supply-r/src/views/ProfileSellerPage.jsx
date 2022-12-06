import { Container, Col, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TransactionCashRowCMS from "../components/TransactionCashRowCMS";
import EditProfileSellerModal from "../components/EditProfileSellerModal.jsx";
import { getSellerById, sellerSelectors } from "../features/sellerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProfileSellerPage() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("sellerId");
  const seller = useSelector((state) => sellerSelectors.selectById(state, id));
  useEffect(() => {
    dispatch(getSellerById(id));
  }, []);

	return (
		<>
			<Container fluid style={{ padding: "4%" }}>
				<Row>
					<Col sm={3}>
						<h1 style={{ color: "#204e64" }}>UMKM Profile</h1>
						<div className="mt-1 mb-5">
							<Card style={{ width: "20rem" }}>
								<Card.Body>
									<Card.Text>
										<h5 style={{ color: "#204e64" }}>Username: </h5>
										<h6>{seller?.username}bambang</h6>
										<h5 style={{ color: "#204e64" }}>Email: </h5>
										<h6>{seller?.email}bambang2</h6>
										<h5 style={{ color: "#204e64" }}>Phone Number: </h5>
										<h6>{seller?.phoneNumber}123</h6>
										<h5 style={{ color: "#204e64" }}>KTP: </h5>
										<h6>{seller?.ktp}123456</h6>
									</Card.Text>

									<EditProfileSellerModal />
								</Card.Body>
							</Card>
						</div>
					</Col>
					<Col sm={9}>
						<h1 style={{ color: "#204e64" }}>Order List</h1>
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
								<TransactionCashRowCMS />
								<TransactionCashRowCMS />
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</>
	);
}
