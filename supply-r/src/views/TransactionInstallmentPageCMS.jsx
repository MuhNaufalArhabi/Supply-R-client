import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TransactionInstallmentRowCMS from "../components/TransactionInstallmentRowCMS";
import axios from "axios";
import { useState, useEffect } from "react";
export default function TransactionInstallmentPageCMS() {
	const id = localStorage.id
	const [installment, setInstallment] = useState([]);
	const getInstallmentData = async () => {
		try {
			const {data} = await axios({
				method: "GET",
				url: `http://localhost:3001/shops/matriks-installment/${id}`,
				headers: {
					access_token: localStorage.access_token,
				},
			})
			installment(data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		getInstallmentData()
	}, [])
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
					{installment?.length === 0 ? <h1 style={{textAlign: 'center'}}>No Transaction Data</h1> :
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
							{installment.map((installment, index) => {
								return (
									<TransactionInstallmentRowCMS
										installment={installment}
										key={installment.id}
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
