import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
	const navigate = useNavigate();

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	return (
		<>
			<Card
				style={{
					width: "12rem",
					marginLeft: "8px",
					marginRight: "8px",
					marginTop: "8px",
					marginBottom: "8px",
				}}
				className="shadow"
			>
				<Card.Img variant="top" src={product?.mainImage} />
				<Card.Body>
					<Card.Title>{product?.name}</Card.Title>
					<Card.Text>{rupiah(product?.price)}</Card.Text>
					<Card.Text>{product?.Shop.name}</Card.Text>
					<Nav.Link
						style={{
							backgroundColor: "#204e64",
							borderColor: "#204e64",
							color: "white",
						}}
						onClick={() => {
							navigate(`/product-detail/${product.id}`);
						}}
					>
						Details
					</Nav.Link>
				</Card.Body>
			</Card>
		</>
	);
}
