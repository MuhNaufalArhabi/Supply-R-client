import { Container, Col, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TransactionCashRowCMS from "../components/TransactionCashRowCMS";
import EditProfileSellerModal from "../components/EditProfileSellerModal.jsx";
import { getSellerById, sellerSelectors } from "../features/sellerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProfileSellerPage() {
  const dispatch = useDispatch();
  const [cash, setCash] = useState([]);
  const id = localStorage.getItem("sellerId");
  const seller = useSelector((state) => sellerSelectors.selectById(state, id));
  const getCashData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/shops/matriks-upfront/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      setCash(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(getSellerById(id));
    getCashData();
  }, []);
  return (
    <>
      <Container fluid style={{ padding: "4%" }}>
        <Row>
          <Col sm={3}>
            <h1 style={{ color: "#204e64" }}>UMKM Profile</h1>
            <div className="mt-1 mb-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text>
                    <h5 style={{ color: "#204e64" }}>Username: </h5>
                    <h6>{seller?.username}bambang</h6>
                    <h5 style={{ color: "#204e64" }}>Email: </h5>
                    <h6>{seller?.email}bambang2</h6>
                    <h5 style={{ color: "#204e64" }}>Phone Number: </h5>
                    <h6>{seller?.phoneNumber}123</h6>
                    <h5 style={{ color: "#204e64" }}>KTP: </h5>
                    <h6>{seller?.ktp}123456</h6>
                  </Card.Text>
                  <EditProfileSellerModal />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={9}>
            <h1 style={{ color: "#204e64" }}>Order List</h1>
            <Table striped bordered hover>
              <thead
                className="sticky-top bg-white"
                style={{ textAlign: "center" }}
              >
                <tr style={{ color: "white", backgroundColor: "#204e64" }}>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Order Date</th>
                  <th>Customer</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {cash.map((cash, index) => {
                  return (
                    <TransactionCashRowCMS
                      cash={cash}
                      key={cash.id}
                      index={index}
                    />
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
