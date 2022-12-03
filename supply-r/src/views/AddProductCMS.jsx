import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddProductCMS() {
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
					<h1 style={{ textAlign: "center", color: "#204e64" }}>Add Product</h1>
					<br></br>

					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Product name ..." />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Category</Form.Label>
							<Form.Select>
								<option disabled selected>
									-- Select Category --
								</option>
								<option value="1">Electronik</option>
								<option value="2">Pertukangan</option>
								<option value="3">Jasa Konstruksi / Renovasi</option>
								<option value="4">Office / Stationary</option>
								<option value="5">Jasa Perawatan / Peralatan dan Mesin</option>
								<option value="6">Souvenir / Merchandise</option>
								<option value="7">Jasa Event Organizer</option>
								<option value="8">Jasa Mandoe dan Tenaga Kerja Lainnya</option>
								<option value="9">Jasa Percetakan dan Media</option>
								<option value="10">Kesehatan</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								type="textarea"
								placeholder="Product description ..."
							/>
						</Form.Group>

						<Row style={{ flexDirection: "row" }}>
							<Col style={{ flex: "1" }}>
								<Form.Group className="mb-3">
									<Form.Label>Price</Form.Label>
									<Form.Control type="number" placeholder="Product price ..." />
								</Form.Group>
							</Col>

							<Col style={{ flex: "1" }}>
								<Form.Group className="mb-3">
									<Form.Label>Stock</Form.Label>
									<Form.Control type="number" placeholder="Product stock ..." />
								</Form.Group>
							</Col>
						</Row>

						<Form.Group className="mb-3">
							<Form.Label>Image 1</Form.Label>
							<Form.Control type="file" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Image 2</Form.Label>
							<Form.Control type="file" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Image 3</Form.Label>
							<Form.Control type="file" />
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
							+ Add Product
						</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}
