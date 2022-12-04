import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


export default function ProductCard({product}) {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "12rem" }} className="margin">
        <Card.Img
          variant="top"
          src={product?.mainImage}
        />
        <Card.Body>
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text>Rp. {product?.price}</Card.Text>
          <Card.Text>{product?.Shop.name}</Card.Text>
          <Button
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
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
