import { Container, Col, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TransactionCashRowCMS from "../components/TransactionCashRowCMS";
import EditProfileBuyerModal from "../components/EditProfileBuyerModal";
import { getBuyersById, buyerSelectors } from "../features/buyerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProfileBuyerPage() {
	const dispatch = useDispatch();
	const id = localStorage.getItem("id");
	const buyer = useSelector((state) => buyerSelectors.selectById(state, id));
	useEffect(() => {
		dispatch(getBuyersById(id));
	}, []);

	return (
		<>
			<Container fluid style={{ padding: "4%" }}>
				<Row>
					<Col sm={3}>
						<h1 style={{ color: "#204e64" }}>Company Profile</h1>
						<div className="mt-1 mb-5">
							<Card style={{ width: "20rem" }}>
								<Card.Body>
									<Card.Text>
										<h5 style={{ color: "#204e64" }}>Name:</h5>
										<h6>{buyer?.name}tiara</h6>
										<h5 style={{ color: "#204e64" }}>Owner Name: </h5>
										<h6>{buyer?.owner}tiara2</h6>
										<h5 style={{ color: "#204e64" }}>Phone Number: </h5>
										<h6>{buyer?.phoneNumber}123</h6>
										<h5 style={{ color: "#204e64" }}>Email Address: </h5>
										<h6>{buyer?.email}tiara3</h6>
										<h5 style={{ color: "#204e64" }}>Address: </h5>
										<h6>{buyer?.address}jakarta</h6>
										<h5 style={{ color: "#204e64" }}>Industry: </h5>
										<h6>{buyer?.industry}elektronik</h6>
										<h5 style={{ color: "#204e64" }}>Website: </h5>
										<h6>{buyer?.website}tiara4</h6>
									</Card.Text>

									<EditProfileBuyerModal />
								</Card.Body>
							</Card>
						</div>
					</Col>
					<Col sm={9}>
						<h1 style={{ color: "#204e64" }}>Purchase History</h1>
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
								{/* <TransactionCashRowCMS />
								<TransactionCashRowCMS /> */}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</>
	);
}
