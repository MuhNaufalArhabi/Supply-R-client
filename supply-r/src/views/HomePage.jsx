import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import PromoCarousel from "../components/PromoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import PaginationProducts from "../components/PaginationProducts";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const getPagination = async(page, name) => {
    const {data} = await axios({
      method: "GET",
      url: `http://localhost:3001/products/pagination`,
      params: {
        page: page,
        limit: 12,
        name: name
      }
    })
    setCurrentPage(data.currentPage)
    setTotalPage(data.totalPage)
    setProducts(data.products.rows)
  }
  useEffect(() => {
    // dispatch(getProducts());
    getPagination(currentPage)
  },[products[0]?.name, currentPage]);
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
              <PaginationProducts currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
