import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CheckoutSteps } from "../../components/Checkout/CheckoutSteps";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton";

export const CheckoutPage = () => {
  const checkoutSubmit = () => {
    alert("Payment Success");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <CheckoutSteps step1 step2 step3 />
          <h1>Payment Method</h1>
          <Form>
            <Form.Group>
              <Form.Label as="legend">Select Method</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Stripe"
                  id="Stripe"
                  name="paymentMethod"
                  value="stripe"
                  checked
                ></Form.Check>
              </Col>
            </Form.Group>

            <StripeCheckoutButton price={"299.44"} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
