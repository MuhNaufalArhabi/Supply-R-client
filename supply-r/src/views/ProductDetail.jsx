
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ChatRoom from '../components/ChatRoom';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById, productSelectors } from '../features/productSlice';
import { useEffect } from 'react';
import socket from '../stores/socket';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // const handleShop = async(param) => {
    //   setReceiverMsg(param ? param : product.ShopId)
    //   socket.emit('newRooms', { role: localStorage.role, id: localStorage.id });
    // };
    // useEffect(() => {
      //   setReceiverMsg(product.Shop.id);
      // }, [product])
      
      const product = useSelector((state) =>
      productSelectors.selectById(state, id)
      );
      const [shopId, setShopId] = useState(product.ShopId);
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const navigateOrder = ()=> {
    navigate('/order');
  }


  return (
    <>
      <Container>
        <Row>
          <div className="mt-5 mb-5">
            <h1>Product Details</h1>
            {/* <pre>{product.Shop}</pre> */}
          </div>
          <ChatRoom shopId={shopId}/>
        </Row>
        <Row>
          <Col sm={4}>
            <img src={product.mainImage} width={300} height={400}></img>
          </Col>
          <Col sm={8}>
            <div className="mt-5 mb-5">
              <h5>Name </h5>
              <h6>{product.name}</h6>
              <h5>Description </h5>
              <h6>{product.description}</h6>
              <h5>Category </h5>
              <h6>{product.Category.name}</h6>
              <h5>Price </h5>
              <h6>{rupiah(product.price)}</h6>
              <h5>Stock </h5>
              <h6>{product.stock}</h6>
              <Button
                style={{
                  backgroundColor: '#2596be',
                  borderColor: '#2596be',
                  color: 'white',
                }}
                className="mt-1 mb-1"
                >
                Add to Cart
              </Button>
              <br></br>

              {/* <Button
                style={{
                  backgroundColor: "#2596be",
                  borderColor: "#2596be",
                  color: "white",
                }}
                className="mt-1 mb-1"
                onClick={() => setModalShow(true)}
              >
                Chat with Seller
              </Button> */}
              {/* <ChatRoom show={modalShow} onHide={() => setModalShow(false)} /> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Container>
            <Row>
              <h5>Images</h5>
            </Row>
          </Container>

          <div className="mt-5 mb-5">
            <h1>Seller Info</h1>
          </div>
        </Row>
      </Container>
    </>
  );
}
