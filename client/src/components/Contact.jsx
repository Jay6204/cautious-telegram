import React from "react";
import {BiSolidPhoneCall} from "react-icons/bi";
import {ImMobile} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import { Container, Row, Col, Table, Image } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col>
            <h1>The Pizza House</h1>
            <p>
              We'd love to hear from you! Whether you have questions about our
              menu, want to provide feedback, or need assistance with your
              order, our friendly team is here to help.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    .....Contact Details.....
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BiSolidPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>542-45678</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>9876125678</td>
                </tr>
                <tr>
                  <td>
                    <MdEmail />
                  </td>
                  <td>Email</td>
                  <td>pizzashop@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
