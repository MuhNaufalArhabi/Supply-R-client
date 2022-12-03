import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ProductRowCMS from "../components/ProductRowCMS";
import react, { useState, useEffect } from "react";
import { getProductByShopId, productSelectors } from "../features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function ProductListCMS() {
	const dispatch = useDispatch();
	const { shopId } = useParams();
	const products = useSelector(productSelectors.selectAll);
	useEffect( () => {
	dispatch(getProductByShopId(shopId));
		console.log(products);
	}, [dispatch]);
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
						{products.map((product, index) => {
							return <ProductRowCMS product={product} key={product.id} index={index} />
						})}
						</tbody>
					</Table>
				</Container>
			</div>
		</>
	);
}
