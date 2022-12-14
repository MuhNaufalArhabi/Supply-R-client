import {
  Container,
  Col,
  Row,
  Button,
  CardGroup,
  Card,
  Carousel,
} from "react-bootstrap";
import ChatRoom from "../components/ChatRoom";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, productSelectors } from "../features/productSlice";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Grid } from "react-loader-spinner";
import { url } from "../stores/url";
// const baseUrl = "http://localhost:3001";
const baseUrl = url

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );
  const [shopId, setShopId] = useState(location.state.product.ShopId);

	const [orderlists, setOrderLists] = useState([
		{
			ProductId: id,
			quantity: 1,
			totalPrice: location.state.product.price,
		},
	]);
	const orders = async () => {
		const { data } = await axios({
			method: "POST",
			url: `${baseUrl}/orders/products`,
			data: { orderlists },
			headers: {
				access_token: localStorage.getItem("access_token"),
			},
		});
		swal("Congratulations!", "Success add product to cart!", "success", {
			buttons: false,
			timer: 3000,
		});
		navigate(`/cart`);
	};
	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch]);


  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const navigateOrder = () => {
    navigate("/order");
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    // setTimeout(setLoading, 8000, true);
  }, []);

  return (
    <>
      {loading ? <div className="loader">
                  <Grid
                    height="80"
                    width="80"
                    color="#204e64"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div> :
      <Container fluid style={{ padding: "4%" }}>
        <Row>
          <h1 style={{ color: "#204e64" }}>Product Details</h1>
        </Row>

        <Row>
          <CardGroup style={{ height: "400px" }}>
            <Card>
              <Carousel style={{ textAlign: "center" }}>
                <Carousel.Item>
                  <img
                    style={{ height: "400px" }}
                    src={product?.mainImage}
                    alt="First slide"
                  />
                </Carousel.Item>
                {product?.Images.map((image) => {
                  return (
                    <Carousel.Item key={image.id}>
                      <img
                        style={{ height: "400px" }}
                        src={image.image}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Card>
            <Card>
              <div style={{ margin: "5%" }}>
                <h2>{product?.name}</h2>
                <h6 style={{ color: "#c7c8c8" }}>{product?.Category.name}</h6>
                <h6 style={{ marginTop: "5%" }}>{product?.description}</h6>
                <h6>Available: {product?.stock}</h6>
                <h2 style={{ marginTop: "5%", marginBottom: "5%" }}>
                  {rupiah(product?.price)}
                </h2>
                {localStorage.role === "buyer" ? (
                  <Button
                    style={{
                      backgroundColor: "#2596be",
                      borderColor: "#2596be",
                      color: "white",
                    }}
                    className="mt-1 mb-1"
                    onClick={orders}
                  >
                    Add to Cart
                  </Button>
                ) : null}
                <br></br>
              </div>
            </Card>
            <Card>
              <div style={{ margin: "5%" }}>
                <h2>{location.state.product.Shop.name}</h2>
                <h6 style={{ marginTop: "5%" }}>Phone Number:</h6>
                <h6>{location.state.product.Shop.phoneNumber}</h6>
                <h6 style={{ marginTop: "5%" }}>Store Address:</h6>
                <h6>{location.state.product.Shop.address}</h6>
                {localStorage.role === "buyer" ? (
                  <>
                    <h6 style={{ marginTop: "5%" }}>Chat with Store:</h6>
                    <ChatRoom shopId={shopId} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Card>
          </CardGroup>
        </Row>
      </Container>
      }
    </>
  );

}
