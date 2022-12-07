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
import update from "immutability-helper";


export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [id, setId] = useState(0)
  const orders = useSelector(orderSelectors.selectAll);
  let [changed_order, setChanged_order] = useState(
    //   {
    //   BuyerId: orders ? orders.BuyerId : null,
    //   isPaid: orders ? orders.isPaid : null,
    //   paymentMethod: orders ? orders.paymentMethod : null,
    //   totalPrice: orders ? orders.totalPrice : null,
    //   OrderProducts: orders ? orders.OrderProducts : null,
    // }
    null
  );
  useEffect(() => {
    dispatch(getOrders());
    console.log(orders[0]);
    setChanged_order(orders[0]);
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
  const countHandler = (count, idxProduct) => {
    
    setChanged_order((prevState) => {
      console.log(count);
      const arr = update(prevState.OrderProducts, {
        [idxProduct]: {
          quantity: {
            $set: count,
          },
          totalPrice: {
            $set: prevState.OrderProducts[idxProduct].Product.price * (count),
          },
        },
      });
      console.log(arr);

      return update(prevState, {
        OrderProducts: { $set: arr },
      });
    });

    // setChanged_order(tmp);

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
                  {changed_order?.OrderProducts.map((order, index) => {
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
                            count={1}
                            onCountChange={(count) =>
                              countHandler(count, index - 1)
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
