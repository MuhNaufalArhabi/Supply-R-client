import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import AddStoreModal from "../components/AddStoreModal.jsx";
// import { useState } from "react";

export default function ProfileSellerPage() {
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
                    <h6>asas</h6>
                    <h5>Email Address </h5>
                    <h6>ada</h6>
                    <h5>Phone Number </h5>
                    <h6>ada</h6>
                    <h5>KTP ID </h5>
                    <h6>ada</h6>
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
//cek
                  
                  {/* <AddStoreModal /> */}
//cek
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
