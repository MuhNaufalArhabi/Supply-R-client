import { Container, Row, Col, Navbar, Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logo-supply-r.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ChatRoom from "./ChatRoom";
import { auth } from "../stores/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function NavBar({ socket }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleChat = () => {
    socket.emit("newRooms", { role: localStorage.role, id: localStorage.id });
  };

  const handleLogout = () => {
    localStorage.clear();
    signOut(auth);
    navigate("/login");
  };

  const handleBuyerProfile = () => {
    navigate("/profile-buyer");
  };

  const handleSellerProfile = () => {
    navigate("/profile-seller");
  };

  const handleSellerStore = () => {
    navigate("/profile-store");
  };

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container fluid>
          <Row
            style={{
              width: "100%",
              alignItems: "center",
            }}>
            <Col
              className="col-2"
              style={{
                textAlign: "center",
              }}>
              <Link to="/">
                <img src={logo} alt="gambar logo" style={{ height: "50px" }} />
              </Link>
            </Col>
            <Col
              className="col-10"
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}>
              <InputGroup>
                <Form.Control type="search" placeholder="Search" />
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} style={{ color: "gray" }} />
                </InputGroup.Text>
              </InputGroup>

              {!localStorage.access_token ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "15%",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "15px",
                    color: "#204e64",
                  }}>
                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}
                    onClick={handleLogin}>
                    Register / Login
                  </Button>
                </div>
              ) : localStorage.role == "buyer" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "15px",
                    color: "#204e64",
                  }}>
                  <Link to="/cart" className="nav-link">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{
                        fontSize: 24,
                        paddingTop: "2px",
                        paddingLeft: "20px",
                      }}
                    />
                  </Link>
                  <ChatRoom socket={socket} />

                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}
                    onClick={handleBuyerProfile}>
                    Company Profile
                  </Button>

                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}>
                    <Link to="/" className="nav-link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </Button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50%",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "15px",
                    color: "#204e64",
                  }}>
                  <ChatRoom socket={socket} />

                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}
                    onClick={handleSellerStore}>
                    UMKM Store
                  </Button>

                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}
                    onClick={handleSellerProfile}>
                    UMKM Profile
                  </Button>

                  <Button
                    style={{
                      backgroundColor: "#204e64",
                      borderColor: "#204e64",
                      color: "white",
                    }}>
                    <Link to="/" className="nav-link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
