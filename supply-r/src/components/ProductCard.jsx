import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "12rem" }} className="margin">
        <Card.Img
          variant="top"
          src="https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/29102022/63575346cdb0741eddce73e3/635ca1f0729c230e0e897a98/64b021c89e7f7a5f3e53d65e9ad36c.JPG"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Rp. 200.000</Card.Text>
          <Card.Text>Lokasi</Card.Text>
          <Button
            style={{
              backgroundColor: "#204e64",
              borderColor: "#204e64",
              color: "white",
            }}
            onClick={() => {
              navigate("/product-detail/1");
            }}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
