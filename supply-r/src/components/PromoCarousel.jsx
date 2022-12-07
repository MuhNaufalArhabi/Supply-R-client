import Carousel from "react-bootstrap/Carousel";

function PromoCarousel() {
	return (
		<Carousel>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					// src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fsettings-banner%2F67212a8331d58820ff837d0a03bc65.jpg&w=1920&q=75"
					src="http://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg"
					alt="First slide"
					style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					// src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fsettings-banner%2Fd7e051f5151af981adfdeef26aef01.jpg&w=1920&q=75"
					src="http://www.xenelsoft.com/images/ecommercedesignbanner.png"
					alt="Second slide"
					style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					// src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fsettings-banner%2F4e822862beb6f5fc4cd0bd7a397c3a.jpg&w=1920&q=75"
					src="http://www.velocityconsultancy.com/wp-content/uploads/2017/12/ecommerce.jpg"
					alt="Third slide"
					style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					// src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fsettings-banner%2F89ceab458f97470807e19fd1b266e1.jpg&w=1920&q=75"
					src="http://amoranesia.com/assets/jumbotron-banner/banner3.jpg"
					alt="Fourth slide"
					style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
				/>
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default PromoCarousel;
