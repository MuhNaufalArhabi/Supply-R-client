import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <div className="mt-5 mb-3">
            <h1>Cart Page</h1>
          </div>
        </Row>
        <Row>
          <Col sm={10}>
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
                    <th>Total Price</th>
                    <th>Remove</th>
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
                    <td>5000</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#e23500" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button
              style={{
                backgroundColor: "#204e64",

                color: "white",
              }}
              onClick={() => {
                navigate("/order");
              }}
            >
              Proceed to Order
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
