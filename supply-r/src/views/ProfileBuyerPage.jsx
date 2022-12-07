import { Container, Col, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPerson, faPhone, faLocationDot, faAt, faIndustry, faComputer} from "@fortawesome/free-solid-svg-icons";
import PurchaseHistoryBuyer from "../components/PurchaseHistoryBuyer";
import EditProfileBuyerModal from "../components/EditProfileBuyerModal";
import { getBuyersById, buyerSelectors } from "../features/buyerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:3001";

export default function ProfileBuyerPage() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const buyer = useSelector((state) => buyerSelectors.selectById(state, id));
  useEffect(() => {
    dispatch(getBuyersById(id));
  }, []);
  const [orders, setOrders] = useState([]);
  const fetchOrderHistory = async () => {
    const { data } = await axios({
      method: "get",
      url: `${url}/orders/history`,
      headers: { access_token: localStorage.access_token },
    });
    console.log(data);
    setOrders(data);
  };
  useEffect(() => {
    fetchOrderHistory();
  }, []);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  return (
    <>
      <Container fluid style={{ padding: "4%" }}>
        <Row>
          <Col sm={3}>
            <h1 style={{ color: "#204e64" }}>Company Profile</h1>
            <div className="mt-1 mb-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text>
                    {/* <h5 style={{ color: "#204e64" }}>Name:</h5> */}

                    <h6>
                      <FontAwesomeIcon
                        icon={faBuilding}
                        style={{ color: "gray" }}
                      />
                      : {buyer?.name}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Owner Name: </h5> */}
                    <h6>
                      <FontAwesomeIcon
                        icon={faPerson}
                        style={{ color: "gray" }}
                      />
                      : {buyer?.owner}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Phone Number: </h5> */}
                    <h6>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "gray" }}
                      />
                      : {buyer?.phoneNumber}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Email Address: </h5> */}
                    <h6>
                      <FontAwesomeIcon icon={faAt} style={{ color: "gray" }} />
                      :  {buyer?.email}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Address: </h5> */}
                    <h6>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "gray" }}
                      />{" "}
                      : {buyer?.address}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Industry: </h5> */}
                    <h6>
                      <FontAwesomeIcon
                        icon={faIndustry}
                        style={{ color: "gray" }}
                      />
                      : {buyer?.industry}
                    </h6>
                    {/* <h5 style={{ color: "#204e64" }}>Website: </h5> */}
                    <h6>
                      <FontAwesomeIcon
                        icon={faComputer}
                        style={{ color: "gray" }}
                      />
                     :  {buyer?.website}
                    </h6>
                  </Card.Text>

                  <EditProfileBuyerModal />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={9}>
            <h1 style={{ color: "#204e64" }}>Purchase History</h1>
            <Table striped bordered hover>
              <thead
                className="sticky-top bg-white"
                style={{ textAlign: "center" }}
              >
                <tr style={{ color: "white", backgroundColor: "#204e64" }}>
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Purchase Date</th>
                  <th>Store</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody className="flex">
                {orders?.map((order, index) => {
                  return (
                    <tr key={++index}>
                      <td
                        className="text-center"
                        style={{ verticalAlign: "center", height: "50px" }}
                      >
                        {++index}
                      </td>
                      <td>
                        {order.OrderProducts.map((product) => (
                          <p>{product.Product.name}</p>
                        ))}
                      </td>
                      <td>
                        {order.OrderProducts.map((product) => {
                          return (
                            <p className="text-center">{product.quantity}</p>
                          );
                        })}
                      </td>
                      <td>
                        {order.OrderProducts.map((product) => {
                          return (
                            <p className="text-center">
                              {rupiah(product.totalPrice)}
                            </p>
                          );
                        })}
                      </td>
                      <td className="text-center mt-lg-5">
                        {rupiah(order.totalPrice)}
                      </td>
                      <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
                      <td>
                        {order.OrderProducts.map((product) => {
                          return (
                            <p className="text-center">
                              {product.Product.Shop.name}
                            </p>
                          );
                        })}
                      </td>
                      <td className="text-center">
                        {order.paymentMethod.toUpperCase()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
