import { Container, Col, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import OrderListSeller from "../components/OrderListSeller";
import EditProfileSellerModal from "../components/EditProfileSellerModal.jsx";
import { getSellerById, sellerSelectors } from "../features/sellerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import TransactionCashRowCMS from "../components/TransactionCashRowCMS";

export default function ProfileSellerPage() {
	const dispatch = useDispatch();
	const [cash, setCash] = useState([]);
	const id = localStorage.getItem("sellerId");
	const seller = useSelector((state) => sellerSelectors.selectById(state, id));
	const getCashData = async () => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3001/shops/matriks-upfront/${id}`,
				headers: {
					access_token: localStorage.access_token,
				},
			});
			setCash(data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		dispatch(getSellerById(id));
		getCashData();
	}, []);
	return (
		<>
			<div style={{ marginLeft: "20%" }}>
				<Container
					style={{
						paddingTop: "2%",
						paddingBottom: "2%",
						paddingLeft: "15%",
						paddingRight: "15%",
					}}
				>
					<h1
						style={{
							textAlign: "center",
							color: "#204e64",
						}}
					>
						UMKM Profile
					</h1>
					<br></br>
					<br></br>
					<Row
						style={{
							textAlign: "center",
						}}
					>
						<Col>
							<div className="mt-1 mb-5">
								<h5 style={{ color: "#204e64" }}>Username: </h5>
								<h6>{seller?.username}</h6>
								<br></br>
								<h5 style={{ color: "#204e64" }}>Email: </h5>
								<h6>{seller?.email}</h6>
								<br></br>
								<h5 style={{ color: "#204e64" }}>Phone Number: </h5>
								<h6>{seller?.phoneNumber}</h6>
								<br></br>
								<h5 style={{ color: "#204e64" }}>KTP: </h5>
								<h6>{seller?.ktp}</h6>
								<br></br>
								<EditProfileSellerModal />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
