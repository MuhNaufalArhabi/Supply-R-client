import { Container, Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
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
  let [changed_order, setChanged_order] = useState(null);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      // setChanged_order(orders[0]);

      setChanged_order(() => {
        let tp = 0;
        orders[0].OrderProducts.forEach((el) => {
          tp += el.totalPrice;
        });
        return update(orders[0], { totalPrice: { $set: tp } });
      });
    }
  }, [orders]);
  console.log(orders[0]);
  console.log(changed_order);
  const getToken = async () => {
    console.log(localStorage.access_token);
    let totalPrice = 0;
    changed_order.OrderProducts.forEach((el) => {
      totalPrice += el.totalPrice;
    });
    setChanged_order((prvState) => {
      return update(prvState, { totalPrice: { $set: totalPrice } });
    });

    const { data } = await axios({
      method: "put",
      url: "http://localhost:3001/orders/products/bulk",
      headers: { access_token: localStorage.access_token },
      data: { orders: changed_order },
    });

    window.snap.pay(data.transaction.token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        // alert("payment success!");
        console.log(result);
        navigate("/profile-buyer");
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
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const countHandler = (count, idxProduct) => {
    setChanged_order((prevState) => {
      const arr = update(prevState.OrderProducts, {
        [idxProduct]: {
          quantity: {
            $set: count,
          },
          totalPrice: {
            $set: prevState.OrderProducts[idxProduct].Product.price * count,
          },
        },
      });
      let totalPrice = 0;
      changed_order.OrderProducts.forEach((el) => {
        totalPrice += el.totalPrice;
      });

      return update(prevState, {
        OrderProducts: { $set: arr },
        totalPrice: { $set: totalPrice },
      });
    });
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
                        <td>{rupiah(order.Product.price)}</td>
                        <td>
                          <CounterInput
                            min={1}
                            max={order.Product.stock}
                            count={
                              changed_order
                                ? order.quantity
                                : orders[0].OrderProducts[index].quantity
                            }
                            onCountChange={(count) =>
                              countHandler(count, index - 1)
                            }
                          />
                        </td>

                        <td>
                          {order.totalPrice == 0
                            ? rupiah(order.Product.price)
                            : rupiah(order.totalPrice)}
                        </td>

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
              <Row className="align-middle text-center">
                <h5>Total Payment</h5>
                <h4>{changed_order ? rupiah(changed_order.totalPrice) : 0}</h4>
              </Row>
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
