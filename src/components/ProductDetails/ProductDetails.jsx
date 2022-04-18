import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + params.id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.title}
            height="600px"
            width="500px"
          />
        </Col>
        <Col md={6}>
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <h3>${product.price}</h3>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
          </p>
          <h3 className="display-6 fw-bold my-4"></h3>
          <p className="lead">{product.description}</p>
          <Button variant="dark">Add to Cart</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};
