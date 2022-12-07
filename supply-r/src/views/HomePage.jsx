import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import PromoCarousel from "../components/PromoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import PaginationProducts from "../components/PaginationProducts";
import axios from "axios";
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getPagination = async (id, page, name) => {
    if (id === null) {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/products/pagination`,
        params: {
          page: page,
          limit: 10,
          name: name,
        },
      });
      setCurrentPage(data.currentPage);
      setTotalPage(data.totalPage);
      setProducts(data.products.rows);
    } else {
      console.log(page, name, id);
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/products/category/${id}`,
        params: {
          page: page,
          limit: 10,
          name: name,
        },
      });
      console.log(data);
      setCurrentPage(data.currentPage);
      setTotalPage(data.totalPage);
      setProducts(data.products);
    }
  };
  useEffect(() => {
    // dispatch(getProducts());
    getPagination(null, currentPage);
  }, [currentPage]);

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
              <CategoryCard getPagination={getPagination} currentPage={currentPage} />
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
              <PaginationProducts
                currentPage={currentPage}
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
