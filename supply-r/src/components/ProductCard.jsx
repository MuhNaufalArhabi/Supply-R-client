import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
	const navigate = useNavigate();

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(number);
	};

	// bikin function untuk on click dan di taro di card
	const navigateToProductDetail = () => {
		navigate(`/product-detail/${product.id}`, { state: { product } });
	};

	return (
		<>
			<Card
				style={{
					width: "16rem",
					margin: "3px",
					padding: "0",
					cursor: "pointer",
				}}
				className="shadow"
				onClick={navigateToProductDetail}
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

					<Card.Text className="text-truncate" style={{ color: "#898989" }}>
						{product?.Category.name}
					</Card.Text>
					<Card.Text style={{ fontSize: "24px" }}>
						{rupiah(product?.price)}
					</Card.Text>
					<Card.Text className="text-truncate">{product?.Shop.name}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
