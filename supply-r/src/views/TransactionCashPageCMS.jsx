import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TransactionCashRowCMS from "../components/TransactionCashRowCMS";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url
export default function TransactionCashPageCMS() {
	const id = localStorage.id;
	const [cash, setCash] = useState([]);
	const getCashData = async () => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `${baseUrl}/shops/matriks-upfront/${id}`,
				headers: {
					access_token: localStorage.access_token,
				},

			});
			setCash(data)
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCashData();
	}, []);
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
						Upfront Transaction List
					</h1>
					<br></br>
					{cash?.length === 0 ? <h1 style={{textAlign: 'center'}}>No Transaction Data</h1> :
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
							{cash.map((cash, index) => {
								return (
									<TransactionCashRowCMS
										cash={cash}
										key={cash.id}
										index={index}
									/>
								);
							})}
						</tbody>
					</Table>
					}
				</Container>
			</div>
		</>
	);
}
