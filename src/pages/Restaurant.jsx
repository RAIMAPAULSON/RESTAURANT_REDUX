import React, { useEffect } from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantDetails,
  searchRestaurant,
  setcurrentPage,
} from "../redux/restaurantSlice";

const Restaurant = () => {
  const dispatch = useDispatch();
  const { allRestaurants, Loading, error, currentPage } = useSelector(
    (state) => state.restaurantReducer
  );
  const totalPages = 3;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setcurrentPage(page));
      dispatch(fetchRestaurantDetails(page));
    }
  };

  useEffect(() => {
    dispatch(fetchRestaurantDetails());
  }, [dispatch]);

  return (
    <div>
      <Header insideHeader={true} />
      <Container style={{ marginTop: "150px" }}>
        {Loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner className="me-2" animation="border" variant="info" />
            Loading...
          </div>
        ) : (
          <Row className="my-5">
            {allRestaurants?.length > 0 ? (
              allRestaurants?.map((product) => (
                <Col
                  key={product?.id}
                  className="mb-5"
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Card className="shadow rounded h-100">
                    <div
                      style={{
                        height: "250px", 
                        overflow: "hidden",
                      }}
                    >
                      <Card.Img className="img-fluid"
                        variant="top"
                        src={product?.photograph}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%"
                        
                        }}
                      />
                    
                    </div>
                    <Card.Body>
                      <Card.Title>{product?.name}</Card.Title>
                      <Card.Text>{product?.neighborhood}</Card.Text>
                      <div className="mt-2">
                        <Link to={`/${product?.id}/view`}>View More...</Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="text-center fw-bolder text-danger mt-5 mb-5">
                Products not found!!!!!!
              </div>
            )}
          </Row>
        )}
      </Container>
      <div style={{ textAlign: "center" }}>
        <Button
          className="me-2"
          variant="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Restaurant;
