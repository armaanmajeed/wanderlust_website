import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import NavBar from "./Navbar";
import Pic1 from "../images/pic-1.jpg";
import Pic2 from "../images/pic-2.jpeg";
import Pic3 from "../images/pic-3.jpeg";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div class="container-fluid">
          <div class="container">
            <h1 class="heading">About Us</h1>
            <p class="para">
              In a country with such varied landscapes, cultures, and
              demographics, the mystical lands of India promise tremendous
              travel opportunities for every taste and budget. We are
              Wanderlust, and we believe in uniquely presenting India, virgin,
              and welcoming, a refreshing revelation for even the most seasoned
              travelers. Established in 2021, Wanderlust strives to position
              itself as one of the leading companies, providing great offers,
              competitive airfares, exclusive discounts, and a seamless online
              booking experience for various cities to many of its customers. We
              are updating from time to time better to suit our customers’
              evolving needs and demands. The website aims to provide easy
              accessibility and many options in terms of the cities one can
              visit in India, ranging from the most famous to the old town ones.
              We assure to provide the best offers and experience to all of our
              customers. Let out your inner Wanderlust with us!!.
            </p>
            <Container fluid>
              <Row style={{ marginBottom: "20px" }}>
                <Col xs={6} md={4}>
                  <Image
                    src={Pic2}
                    thumbnail
                    style={{ boxShadow: "10px 10px 8px #888888" }}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src={Pic1}
                    thumbnail
                    style={{ boxShadow: "10px 10px 8px #888888" }}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src={Pic3}
                    thumbnail
                    style={{ boxShadow: "10px 10px 8px #888888" }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
