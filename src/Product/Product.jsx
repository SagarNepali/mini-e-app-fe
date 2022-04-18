import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Product = ({ product }) => {
  const navigate = useNavigate();

  const showProductDetails = (product) => {
    navigate("/products/" + product.id);
  };

  return (
    <Card className="h-100 text-center p-4 rounded">
      <Card.Img
        src={product.image}
        // style={{ width: "100%", height: "20vw", objectFit: "cover" }}
        variant="top"
        height="250px"
        onClick={() => showProductDetails(product)}
      />

      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text className="mb-0">{product.title.substring(0, 20)}</Card.Text>
        <Card.Subtitle as="h3">${product.price}</Card.Subtitle>
        <Button variant="dark">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
