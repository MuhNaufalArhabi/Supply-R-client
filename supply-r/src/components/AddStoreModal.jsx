import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddStoreModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create Store
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Store name ..." />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Address</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							type="textarea"
							placeholder="Store address ..."
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control type="text" placeholder="Store phone number ..." />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Owner Name</Form.Label>
						<Form.Control type="text" placeholder="Store owner name ..." />
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
					Create Store
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
