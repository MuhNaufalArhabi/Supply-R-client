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
					width: "15rem",
					margin: "5px",
					padding: "0",
				}}
				className="shadow"
			>
				<Card.Img
					variant="top"
					className="img-fluid"
					style={{
						height: "200px",
						width: "100%",
						objectFit: "cover",
					}}
					src={product?.mainImage}
				/>
				<Card.Body>
					<Card.Title className="text-truncate">{product?.name}</Card.Title>
					<Card.Text className="text-truncate" style={{ color: "#c7c8c8" }}>
						{product?.Category.name}
					</Card.Text>
					<Card.Text style={{ fontSize: "24px" }}>
						{rupiah(product?.price)}
					</Card.Text>
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
