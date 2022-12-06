import ProductCard from "../components/ProductCard";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors } from "../features/productSlice";
import PromoCarousel from "../components/PromoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = React.useState([])
  const dispatch = useDispatch();
  const getPagination = async(name) => {
    const {data} = await axios({
      method: "GET",
      url: `http://localhost:3001/products/pagination`,
      params: {
        page: 1,
        limit: 10,
        name: name
      }
    })
    setProducts(data.products.rows)
  }
  useEffect(() => {
    dispatch(getProducts());
    getPagination()
  },[products[0]?.name]);
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} className="mt-3 mb-3">
            <PromoCarousel />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3 mb-3">
            <Row>
              <h4 style={{ color: "#204e64" }}>Category</h4>
              <CategoryCard />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3 mb-3">
            <Row>
              <h4>Products</h4>
              {products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
              <PaginationProducts />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3 mb-3">
            <h4>Best Seller</h4>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
