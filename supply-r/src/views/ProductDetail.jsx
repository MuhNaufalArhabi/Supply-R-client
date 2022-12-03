import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ProductDetail() {
  return (
    <>
      <Container>
        <Row>
          <div className="mt-5 mb-5">
            <h1>Product Details</h1>
          </div>
        </Row>
        <Row>
          <Col sm={4}>
            <img
              src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled466619.png"
              width={300}
              height={400}
            ></img>
          </Col>
          <Col sm={8}>
            <div className="mt-5 mb-5">
              <h5>Name </h5>
              <h6>asas</h6>
              <h5>Description </h5>
              <h6>ada</h6>
              <h5>Category </h5>
              <h6>ada</h6>
              <h5>Price </h5>
              <h6>ada</h6>
              <h5>Stock </h5>
              <h6>ada</h6>
              <Button
                style={{
                  backgroundColor: "#2596be",
                  borderColor: "#2596be",
                  color: "white",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Container>
            <Row>
              <h5>Images</h5>
            </Row>
          </Container>

          <div className="mt-5 mb-5">
            <h1>Seller Info</h1>
          </div>
        </Row>
      </Container>
    </>
  );
}
