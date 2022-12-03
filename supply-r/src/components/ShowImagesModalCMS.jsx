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
              src={props.product.mainImage}
              alt="First slide"
            />
						<p>{props.product.mainImage}</p>
          </Carousel.Item>
          {props.product.Images.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img
                  style={{ height: "500px" }}
                  src={image.image}
                  alt="Second slide"
                />
              </Carousel.Item>
            );
          })}
          {/* <Carousel.Item>
						<img
							style={{ height: "500px" }}
							src="https://www.adidas.co.id/media/catalog/product/h/f/hf1845_fc_ecom.jpg"
							alt="Third slide"
						/>
					</Carousel.Item> */}
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
