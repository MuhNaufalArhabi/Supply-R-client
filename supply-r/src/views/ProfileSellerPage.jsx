import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import AddStoreModal from "../components/AddStoreModal.jsx";
// import { useState } from "react";
import { getSellerById, sellerSelectors } from "../features/sellerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function ProfileSellerPage() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("sellerId");
  const seller = useSelector((state) => sellerSelectors.selectById(state, id));
  useEffect(() => {
    dispatch(getSellerById(id));
    console.log(seller)
  }, []);
  return (
    <>
      <Container>
        <Row>
          <div className="mt-5 mb-5">
            <h1>Seller Profile</h1>
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
            <div className="mt-1 mb-5">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Seller Info</Card.Title>
                  <div className="border border-2 border-info"></div>

                  <Card.Text>
                    <h5>Username </h5>
                    <h6>{seller?.username}</h6>
                    <h5>Email Address </h5>
                    <h6>{seller?.email}</h6>
                    <h5>Phone Number </h5>
                    <h6>{seller?.phoneNumber}</h6>
                    <h5>KTP ID </h5>
                    <h6>{seller?.ktp}</h6>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#2596be",
                      borderColor: "#2596be",
                      color: "white",
                    }}
                  >
                    Edit Seller Info
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Container>
            <Row>
              <h5>Additional 1</h5>
            </Row>
          </Container>

          <div className="mt-5 mb-5">
            <h1>Additional 2</h1>
          </div>
        </Row>
      </Container>
    </>
  );
}
