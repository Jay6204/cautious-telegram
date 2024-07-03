import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About =()=> {
    return (
      <>
        <Container style={{ marginTop: "50px" }}>
          <h1>Where we are</h1>
          <p>
            Welcome to THE PIZZA HOUSE! Nestled in the heart of Downtown
            Jamshedpur, we are located at 1234 Pizza Lane, just a stone's throw
            away from the bustling PM Mall. Our cozy and inviting pizza house
            offers the perfect spot for family gatherings, date nights, and
            casual hangouts with friends. We look forward to serving you our
            delicious, handcrafted pizzas and making every visit a memorable
            one!
          </p>
          <h1>Our Speciality</h1>
          <Row>
            <Col md={6}>
              <p>
                At The Pizza House, we pride ourselves on crafting the most
                delicious and unique pizzas you'll ever taste. Our specialty
                lies in using the freshest ingredients, locally sourced whenever
                possible, and our signature hand-tossed dough, which is prepared
                daily.
              </p>
            </Col>
            <Col md={6}>
              <p>
                Our menu features an array of mouth-watering options, from
                classic Margherita and Pepperoni pizzas to innovative creations
                like our Truffle Mushroom Pizza and BBQ Chicken Delight. We also
                offer a variety of vegan and gluten-free options to cater to all
                dietary preferences.
              </p>
            </Col>
            <Col md={6}>
              <p>
                Each pizza is baked to perfection in our state-of-the-art oven,
                ensuring a crispy crust and melty cheese with every bite. Come
                and experience the magic of [Your Pizza Shop Name], where every
                slice is a masterpiece!
              </p>
            </Col>
          </Row>
          <Row>
            <h1>Our Chef</h1>
            <Col md={3}>
              Meet Chef Antonio Rossi, the culinary genius behind The Pizza House. With over 20 years of experience in the art of pizza
              making, Chef Antonio brings a wealth of knowledge and passion to
              our kitchen. Trained in the picturesque region of Naples, Italy,
              he has honed his skills in some of the most renowned pizzerias
              across Europe.
            </Col>
            <Col md={3}>
              Chef Antonio believes that great pizza starts with the finest
              ingredients and a dedication to traditional techniques. His
              commitment to quality and creativity is evident in every pizza he
              crafts, blending classic flavors with modern twists to delight
              your taste buds.
            </Col>
            <Col md={3}>
              Whether he's perfecting a classic Margherita or experimenting with
              new and exciting toppings, Chef Antonio's dedication to excellence
              ensures that every pizza served at [Your Pizza Shop Name] is a
              culinary masterpiece. Come and taste the love and expertise that
              Chef Antonio puts into every slice!
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default About;