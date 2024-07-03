import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and Policy</h1>
        <Row>
          <Col md={10}>
            <h6>Privacy Policy:</h6>
            <p>
              At The Pizza House, we value your privacy and are committed to
              protecting your personal information. Any information you provide
              to us through our website or in person will be used solely for the
              purpose of enhancing your experience with our services. We do not
              share your information with third parties without your explicit
              consent. For more details, please read our full Privacy Policy.
            </p>
            <h6>Return and Refund Policy:</h6>
            <p>
              We strive to ensure that every order meets your expectations. If
              you are not satisfied with your order, please contact us within 24
              hours of your purchase. We will do our best to address your
              concerns and, if necessary, offer a replacement or a refund.
              Refunds will be processed to the original method of payment within
              5-7 business days.
            </p>
            <h6>Delivery Policy:</h6>
            <p>
              We offer delivery within a 5-mile radius of our location. Delivery
              times may vary based on traffic and weather conditions, but we aim
              to deliver your order within 45 minutes to an hour. A delivery fee
              may apply, and a minimum order amount is required. Please check
              our Delivery Policy for more details.
            </p>
            <h6>Allergen Policy:</h6>
            <p>
              We take food allergies seriously and strive to provide accurate
              information about our ingredients. Please inform us of any food
              allergies or dietary restrictions when placing your order. While
              we take precautions to prevent cross-contamination, we cannot
              guarantee that our pizzas are free from all allergens due to the
              shared kitchen environment. For more details, please read our full
              Allergen Policy.
            </p>
            <h6>Terms of Service:</h6>
            <p>
              By using our website and services, you agree to comply with our
              terms and conditions. These terms govern your use of our site, the
              purchase of our products, and any interactions you have with The Pizza House. For more information, please read our full Terms
              of Service.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
