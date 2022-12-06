import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditProfileSellerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="text-center">Username</Form.Label>

            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Email address</Form.Label>

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone number ..." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>KTP ID</Form.Label>
            <Form.Control type="text" placeholder="KTP ID number ..." />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "#2596be",
            borderColor: "#2596be",
            color: "white",
          }}
          type="submit"
        >
          Edit Profile
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
