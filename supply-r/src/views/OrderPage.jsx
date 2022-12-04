import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OrderPage() {
  return (
    <>
      <Container>
        <Row className="align-middle text-center">
          <div className="mt-5  ">
            <h1>Order Page</h1>
          </div>
        </Row>
        <Row className="align-middle text-center">
          <Col sm={12}>
            <div className="mt-5 mb-5">
              <Table striped bordered hover size="sm">
                <thead
                  style={{
                    backgroundColor: "#2596be",

                    color: "white",
                  }}
                >
                  <tr className="align-middle text-center">
                    <th>#</th>
                    <th>Product IMG</th>
                    <th>Product</th>
                    <th>Category</th>

                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle text-center">
                    <td>1</td>
                    <td>gbr</td>
                    <td>produk</td>
                    <td>elektronik</td>
                    <td>1000</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-middle text-center">
              <h5>Total Payment</h5>
              <h4>Rp 5000</h4>
            </Row>
            <Button
              style={{
                backgroundColor: "#204e64",

                color: "white",
              }}
            >
              Cancel
            </Button>{" "}
            <Button
              style={{
                backgroundColor: "#204e64",

                color: "white",
              }}
            >
              Proceed to Payment
            </Button>
          </Col>
        </Row>
        <Row>
          <div className="mt-5 mb-5">
            <h1>Additional Info</h1>
          </div>
        </Row>
      </Container>
    </>
  );
}
