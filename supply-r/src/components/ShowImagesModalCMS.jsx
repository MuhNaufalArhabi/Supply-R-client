import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default function ShowImagesModalCMS(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Images</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Carousel style={{ textAlign: "center" }}>
					<Carousel.Item>
						<img
							style={{ height: "500px" }}
							src="https://www.adidas.co.id/media/catalog/product/h/l/hl3859_1_apparel_photography_front20view_grey.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={{ height: "500px" }}
							src="https://www.adidas.co.id/media/catalog/product/g/m/gm3507_f_model_ecom.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={{ height: "500px" }}
							src="https://www.adidas.co.id/media/catalog/product/h/f/hf1845_fc_ecom.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Modal.Body>
			<Modal.Footer>
				<Button
					style={{
						backgroundColor: "#2596be",
						borderColor: "#2596be",
						color: "white",
					}}
					onClick={props.onHide}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
