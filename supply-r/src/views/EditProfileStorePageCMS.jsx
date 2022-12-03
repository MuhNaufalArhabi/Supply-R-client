import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EditProfileStorePageCMS() {
	return (
		<>
			<div style={{ marginLeft: "20%" }}>
				<Container
					style={{
						paddingTop: "2%",
						paddingBottom: "2%",
						paddingLeft: "15%",
						paddingRight: "15%",
					}}
				>
					<h1
						style={{
							textAlign: "center",
							color: "#204e64",
						}}
					>
						Edit [Store Name]'s Profile
					</h1>
					<br></br>

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

						<br></br>
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
					</Form>
				</Container>
			</div>
		</>
	);
}
