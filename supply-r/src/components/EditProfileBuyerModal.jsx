import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditProfileBuyerModal(props) {
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-center">Name</Form.Label>

            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter company name"
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

          <Form.Group className="mb-3" controlId="formBasicOwner">
            <Form.Label>Owner</Form.Label>
            <input
              type="text"
              className="form-control"
              name="owner"
              placeholder="Enter owner name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter company address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicIndustry">
            <Form.Label>Industry</Form.Label>
            <input
              type="text"
              className="form-control"
              name="industry"
              placeholder="Enter industry name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicWebsite">
            <Form.Label>Website</Form.Label>
            <input
              type="text"
              className="form-control"
              name="website"
              placeholder="Enter website info"
            />
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
