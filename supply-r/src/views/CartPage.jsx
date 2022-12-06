import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, orderSelectors } from "../features/orderSlice";
import { deleteOrder } from "../features/orderSlice";
export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector(orderSelectors.selectAll);
  const deleteHandle = (id) => {
    dispatch(deleteOrder(id));
  }
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, orders]);
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
                {orders[0]?.OrderProducts.map((order, index) => {
                  return <tr className="align-middle text-center">
                    <td>{++index}</td>
                    <td>
                      <img src={order?.Product.mainImage} alt="belum ada" />
                    </td>
                    <td>{order?.Product.name}</td>
                    <td>{order?.Product.Category.name}</td>
                    <td>{order?.Product.price}</td>
                    <td>{order.quantity}</td>
                    <td>5000</td>
                    <td>
                    <Button
                    onClick={() => deleteHandle(order?.id)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#e23500" }}
                      />
                    </Button>
                    </td>
                  </tr>
                })}  
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
