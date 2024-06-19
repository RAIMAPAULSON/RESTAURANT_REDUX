import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{ height: "auto", zIndex: "800", marginTop: "350px" }}
      className="bg-warning p-5"
    >
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={6} lg={3} className="mb-3 text-white">
            <h5 className="fw-bolder">
              <i className="fa-solid fa-truck-fast me-2"></i>SPICE HUT
            </h5>
            <p>
              Designed and built with all the love in the world by the Bootstrap
              team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.O.</p>
            <p>Currently v5.3.2.</p>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={5}
            className="mb-3 text-white d-md-flex justify-content-between"
          >
            <div className="links">
              <h5>Links</h5>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
              <br />
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart
              </Link>
              <br />
              <Link
                to={"/wishlist"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Wishlist
              </Link>
            </div>
            <div className="guides">
              <h5>Guides</h5>
              <a
                href="https://react.dev/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <br />
              <a
                href="https://react-bootstrap.github.io/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
              <br />
              <a
                href="https://reactrouter.com/en/main"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Routing
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-3 text-white">
            <h5>Contact Us</h5>
            <div className="d-flex mb-3">
              <input
                placeholder="Enter your email here"
                type="text"
                className="p-2 flex-grow-1"
              />
              <button className="btn btn-info ms-2 bg-danger">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="#"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 text-white">
            <p>Copyright &copy; 2024 Spice Hut. Built with React.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
