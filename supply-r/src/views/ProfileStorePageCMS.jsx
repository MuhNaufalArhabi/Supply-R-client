import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getStoreById, storeSelectors } from "../features/storeSlice";
import { useEffect } from "react";
export default function ProfileStorePageCMS() {
	const dispatch = useDispatch();
	const id = localStorage.getItem("id");
	const store = useSelector((state) => storeSelectors.selectById(state, id));
	useEffect(() => {
		dispatch(getStoreById(id));
	}, [dispatch]);
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
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
						{store?.name}
					</h1>
					<br></br>

					<Row>
						<Col className="col-2">
							<div>Address</div>
							<div>Phone Number</div>
							<div>Owner</div>
						</Col>
						<Col className="col-10">
							<div>: {store?.address}</div>
							<div>: {store?.phoneNumber}</div>
							<div>: {store?.owner}</div>
						</Col>
					</Row>
					<br></br>

					<Row style={{ textAlign: "center" }}>
						<Col className="col-4">
							<Card style={{ borderColor: "#204e64" }}>
								<Card.Header
									style={{
										borderColor: "#204e64",
										backgroundColor: "#204e64",
										color: "white",
									}}
								>
									Number of Products
								</Card.Header>
								<Row
									style={{
										height: "200px",
										alignContent: "center",
										justifyContent: "center",
										fontSize: "500%",
										color: "#2596be",
									}}
								>
									{store?.Products.length}
								</Row>
							</Card>
						</Col>
						<Col className="col-4">
							<Card style={{ borderColor: "#204e64" }}>
								<Card.Header
									style={{
										borderColor: "#204e64",
										backgroundColor: "#204e64",
										color: "white",
									}}
								>
									Number of Cash Transaction
								</Card.Header>
								<Row
									style={{
										height: "200px",
										alignContent: "center",
										justifyContent: "center",
										fontSize: "500%",
										color: "#74d528",
									}}
								>
									8
								</Row>
							</Card>
						</Col>
						<Col className="col-4">
							<Card style={{ borderColor: "#204e64" }}>
								<Card.Header
									style={{
										borderColor: "#204e64",
										backgroundColor: "#204e64",
										color: "white",
									}}
								>
									Number of Installment Transaction
								</Card.Header>
								<Row
									style={{
										height: "200px",
										alignContent: "center",
										justifyContent: "center",
										fontSize: "500%",
										color: "#ffbf00",
									}}
								>
									11
								</Row>
							</Card>
						</Col>
					</Row>
					<br></br>
					<Row style={{ textAlign: "center" }}>
						<Col className="col-6">
							<Card style={{ borderColor: "#204e64" }}>
								<Card.Header
									style={{
										borderColor: "#204e64",
										backgroundColor: "#204e64",
										color: "white",
									}}
								>
									Total Income
								</Card.Header>
								<Row
									style={{
										height: "200px",
										alignContent: "center",
										justifyContent: "center",
										fontSize: "300%",
										color: "#74d528",
									}}
								>
									{rupiah(84000000)}
								</Row>
							</Card>
						</Col>
						<Col className="col-6">
							<Card style={{ borderColor: "#204e64" }}>
								<Card.Header
									style={{
										borderColor: "#204e64",
										backgroundColor: "#204e64",
										color: "white",
									}}
								>
									Total Pending Income
								</Card.Header>
								<Row
									style={{
										height: "200px",
										alignContent: "center",
										justifyContent: "center",
										fontSize: "300%",
										color: "#ffbf00",
									}}
								>
									{rupiah(2284000000)}
								</Row>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
