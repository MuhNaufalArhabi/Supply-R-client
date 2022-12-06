import { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import EditProfileBuyerModal from "../components/EditProfileBuyerModal";
import { getBuyersById, buyerSelectors } from "../features/buyerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProfileBuyerPage() {
  const [modalEditShow, setModalEditShow] = useState(false);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const buyer = useSelector((state) => buyerSelectors.selectById(state, id));
  useEffect(() => {
    dispatch(getBuyersById(id));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div className="mt-5 mb-5">
            <h1>Company Profile</h1>
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
                  <Card.Title>Company Info</Card.Title>
                  <div className="border border-2 border-info"></div>

                  <Card.Text>
                    <h5>Name </h5>
                    <h6>{buyer?.name}</h6>
                    <h5>Owner Name </h5>
                    <h6>{buyer?.owner}</h6>
                    <h5>Phone Number </h5>
                    <h6>{buyer?.phoneNumber}</h6>
                    <h5>Email Address </h5>
                    <h6>{buyer?.email}</h6>
                    <h5>Address </h5>
                    <h6>{buyer?.address}</h6>
                    <h5>Industry </h5>
                    <h6>{buyer?.industry}</h6>
                    <h5>Website </h5>
                    <h6>{buyer?.website}</h6>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#2596be",
                      borderColor: "#2596be",
                      color: "white",
                    }}
                    onClick={() => setModalEditShow(true)}
                  >
                    Edit Company Info
                  </Button>
                  <EditProfileBuyerModal
                    show={modalEditShow}
                    onHide={() => setModalEditShow(false)}
                  />
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
