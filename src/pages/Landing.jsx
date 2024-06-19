import React from "react";
import Header from "../components/Header";
import heroimg from "../assets/hero.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div>
      <Header />
      <Container style={{ paddingTop: "160px" }}>
        <Row className="d-flex align-items-center">
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start"
            style={{ paddingTop: "80px" }}
          >
            <h1>
              Enjoy Our <br /> Delicious Meal
            </h1>
            <h6 className="pt-4">
              Embark on a culinary journey where flavors dance on your palate,
              and every dish is a masterpiece of taste and presentation. Indulge
              in the essence of culinary artistry, where each bite tells a story
              of passion and perfection.
            </h6>
            <Button className="rounded bg-warning p-3 fw-bolder mt-3">
              <Link
                to={"/restaurant"}
                style={{ textDecoration: "none", color: "white" }}
              >
                BOOK A TABLE
              </Link>
            </Button>
          </Col>
          <Col xs={12} md={6} className="text-center mt-3">
            <img src={heroimg} alt="Delicious Meal" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
