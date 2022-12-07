import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useFe} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, orderSelectors } from "../features/orderSlice";
import axios from "axios";
import CounterInput from "react-counter-input";
import update from "immutability-helper";
import swal from "sweetalert";

export default function CartPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const [id, setId] = useState(0)
	const orders = useSelector(orderSelectors.selectAll);
	let [changed_order, setChanged_order] = useState(null);
	useEffect(() => {
		dispatch(getOrders());
	},[dispatch]);
	useEffect(() => {
		// console.log("orders dari use Effect", orders);
		if (orders.length > 0) {
			setChanged_order(orders[0]);

			setChanged_order(() => {
				let tp = 0;
				orders[0].OrderProducts.forEach((el) => {
					tp += el.totalPrice;
				});
				return update(orders[0], { totalPrice: { $set: tp } });
			});
		}
	}, [orders]);
	console.log(orders[0]);
	const getToken = async () => {
		console.log(localStorage.access_token);
		let totalPrice = 0;
		changed_order.OrderProducts.forEach((el) => {
			totalPrice += el.totalPrice;
		});
		setChanged_order((prvState) => {
			return update(prvState, { totalPrice: { $set: totalPrice } });
		});
		const { data } = await axios({
			method: "put",
			url: "http://localhost:3001/orders/products/bulk",
			headers: { access_token: localStorage.access_token },
			data: { orders: changed_order },
		});

		console.log(data.transaction.token);
		window.snap.pay(data.transaction.token, {
			onSuccess: function (result) {
				/* You may add your own implementation here */
				// alert("payment success!");
				console.log(result);
				navigate("/profile-buyer");
			},
			onPending: function (result) {
				/* You may add your own implementation here */
				// alert("wating your payment!");
				console.log(result);
			},
			onError: function (result) {
				/* You may add your own implementation here */
				// alert("payment failed!");
				console.log(result);
			},
			onClose: function () {
				/* You may add your own implementation here */
				// alert("you closed the popup without finishing the payment");
			},
		});
	};
	// const delOrderProducts = async (OrderProductId) => {
	// 	try {
	// 		const { data } = await axios({
	// 			method: "delete",
	// 			url: `http://localhost:3001/orders/products/${OrderProductId}`,
	// 			headers: { access_token: localStorage.access_token },
	// 		});
	// 		dispatch(getOrders());
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const delOrderProducts = async (OrderProductId) => {
		try {
			await swal({
				title: "Are you sure?",
				text: "You want to remove this product?",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					axios({
						method: "delete",
						url: `http://localhost:3001/orders/products/${OrderProductId}`,
						headers: { access_token: localStorage.access_token },
					});
					dispatch(getOrders());
					swal("Product removed!", {
						icon: "success",
					});
				} else {
					swal("The product is still in your cart!");
				}
			});
		} catch (error) {
			console.log(error);
		}
	};
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(number);
	};
	const countHandler = (count, idxProduct) => {
		setChanged_order((prevState) => {
			const arr = update(prevState.OrderProducts, {
				[idxProduct]: {
					quantity: {
						$set: count,
					},
					totalPrice: {
						$set: prevState.OrderProducts[idxProduct].Product.price * count,
					},
				},
			});
			let totalPrice = 0;
			changed_order.OrderProducts.forEach((el) => {
				totalPrice += el.totalPrice;
			});

			return update(prevState, {
				OrderProducts: { $set: arr },
				totalPrice: { $set: totalPrice },
			});
		});
	};
	return (
		<>
			<Container>
				<Row>
					<Col sm={12} className="mt-3 mb-3">
						<Row>
							<h2 style={{ color: "#204e64" }}>Order Cart</h2>
						</Row>
						<Row>
							<Col>
								<div className="mt-2 mb-2">
									<Table bordered size="sm">
										<thead
											style={{
												backgroundColor: "#2596be",
												color: "white",
											}}
										>
											<tr className="align-middle text-center">
												<th>No.</th>
												<th>Product Image</th>
												<th>Product Name</th>
												<th>Category</th>
												<th>Price</th>
												<th style={{ width: "100px" }}>Quantity</th>
												<th>Total Price</th>
												<th style={{ width: "100px" }}>Remove</th>
											</tr>
										</thead>
										<tbody>
											{changed_order?.OrderProducts.map((order, index) => {
												return (
													<tr className="align-middle text-center">
														<td>{++index}</td>
														<td>
															<img
																src={order.Product.mainImage}
																style={{ maxHeight: "150px", margin: "10px" }}
															/>
														</td>
														<td>{order.Product.name}</td>
														<td>{order.Product.Category.name}</td>
														<td>{rupiah(order.Product.price)}</td>
														<td>
															<CounterInput
																min={1}
																max={order.Product.stock}
																count={
																	changed_order
																		? order.quantity
																		: orders[0].OrderProducts[index].quantity
																}
																onCountChange={(count) =>
																	countHandler(count, index - 1)
																}
															/>
														</td>

														<td>
															{order.totalPrice == 0
																? rupiah(order.Product.price)
																: rupiah(order.totalPrice)}
														</td>

														<td>
															<FontAwesomeIcon
																icon={faTrash}
																style={{ color: "#e23500", cursor: "pointer" }}
																onClick={() => delOrderProducts(order.id)}
															/>
														</td>
													</tr>
												);
											})}
										</tbody>
									</Table>
									<Row
										className="align-middle text-center"
										style={{ marginTop: "50px", marginBottom: "50px" }}
									>
										<h3 style={{ color: "#204e64" }}>Total Payment</h3>
										<h1>
											{changed_order ? rupiah(changed_order.totalPrice) : 0}
										</h1>
									</Row>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										marginBottom: "50px",
									}}
								>
									<Button
										style={{
											backgroundColor: "#204e64",
											color: "white",
										}}
										onClick={() => {
											// navigate("/order");
											getToken();
										}}
									>
										Proceed to Payment
									</Button>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
