import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, orderSelectors } from "../features/orderSlice";
import axios from "axios";
import CounterInput from "react-counter-input";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector(orderSelectors.selectAll);
  let [changed_order, setChanged_order] = useState(orders);
  useEffect(() => {
    dispatch(getOrders());
    setChanged_order(orders);
    console.log(changed_order);
  }, [dispatch]);
  const getToken = async () => {
    console.log(localStorage.access_token);
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3001/orders/testMid",
      headers: { access_token: localStorage.access_token },
    });
    console.log(data.transaction.token);
    window.snap.pay(data.transaction.token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        // alert("payment success!");
        console.log(result);
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        // alert("wating your payment!");
        console.log(result);
      },
      onError: function (result) {
        /* You may add your own implementation here */
        // alert("payment failed!");
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        // alert("you closed the popup without finishing the payment");
      },
    });
  };
  const delOrderProducts = async (OrderProductId) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `http://localhost:3001/orders/products/${OrderProductId}`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(getOrders());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const countHandler = (count, OrderProductId) => {
    let tmp = changed_order;
    const tmp_idx = tmp[0]?.OrderProducts.findIndex(
      (el) => el.id === OrderProductId
    );
    console.log(tmp[0]?.OrderProducts[tmp_idx]);
    tmp[0].OrderProducts[tmp_idx]["quantity"] = count;
    // tmp[0].OrderProducts[tmp_idx] = {
    //   ...tmp[0].OrderProducts[tmp_idx],
    //   quantity: count,
    // };
    // console.log(tmp[0].OrderProducts[0]);
    setChanged_order(tmp);
    // console.log(tmp);
    console.log(changed_order);
  };
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
                    return (
                      <tr className="align-middle text-center">
                        <td>{++index}</td>
                        <td>
                          <img src={order.Product.mainImage} />
                        </td>
                        <td>{order.Product.name}</td>
                        <td>{order.Product.Category.name}</td>
                        <td>{order.Product.price}</td>
                        <td>
                          <CounterInput
                            min={1}
                            max={order.Product.stock}
                            count={order.quantity}
                            onCountChange={(count) =>
                              countHandler(count, order.id)
                            }
                          />
                        </td>
                        <td>{order.totalPrice}</td>
                        <td>
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#e23500" }}
                            onClick={() => delOrderProducts(order.id)}
                          />
                        </td>
                      </tr>
                    );
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
                // navigate("/order");
                getToken();
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
