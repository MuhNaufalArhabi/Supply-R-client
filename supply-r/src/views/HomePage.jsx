import ProductCard from "../components/ProductCard";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors } from "../features/productSlice";
import PromoCarousel from "../components/PromoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
export default function HomePage() {

  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
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
            <CategoryCard />
            <CategoryCard />
          </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3 mb-3">
          <Row>
            <h4>Products</h4>
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />
            })}
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
