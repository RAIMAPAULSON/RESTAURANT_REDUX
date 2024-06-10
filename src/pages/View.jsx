import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Button, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


const View = () => {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  console.log(restaurant);
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (localStorage.getItem("allRestaurants")) {
      const restaurants = JSON.parse(localStorage.getItem("allRestaurants"))
      setRestaurant(restaurants.find(item => item.id == id))
    }
  }, [])
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Header />
      <div className='container d-flex justify-content-around align-items-center flex-wrap' style={{ width: '100%', marginTop: '150px', height: 'auto', marginBottom: '80px' }}>
        <div style={{ width: '500px', height: '450px' }} className='border rounded shadow'>
          <img className='w-100 h-100 rounded' src={restaurant?.photograph} alt="" />
        </div>
        <div className='border rounded shadow p-3 container' style={{ width: '500px', height: '450px',overflowY:'auto' }}>
          <h4 className='text-warning'>{restaurant?.name}</h4>
          <h6 className='fw-bolder'>Neighborhood : {restaurant?.neighborhood}</h6>
          <h6 className='fw-bolder'>Address :{restaurant?.address}</h6>
          <h6 className='fw-bolder'>Cuisine : {restaurant?.cuisine_type}</h6>
          <div className='mt-3 mb-3'>
            <Button variant="primary" className='me-2' onClick={handleShow}>Operating Hours</Button>
            <Button variant="primary" onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}Reviews</Button>
          </div>
          {isVisible && restaurant.reviews && (
            <div>
              {restaurant.reviews.map((review, index) => (
                <div key={index} className="review">
                  <h6>Name : {review.name}</h6>
                  <p>
                    <strong>Date:</strong> {review.date}
                  </p>
                  <p>
                    <strong>Rating:</strong> {review.rating}
                  </p>
                  <p>
                    <strong>Comments:</strong> {review.comments}
                  </p>
                </div>
              ))}
            </div>
          )}


        </div>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Opearting Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {restaurant?.operating_hours ? (
            <>
              <div>Monday : {restaurant?.operating_hours.Monday}</div>
              <div>Tuesday : {restaurant?.operating_hours.Tuesday}</div>
              <div>Wednesday : {restaurant?.operating_hours.Wednesday}</div>
              <div>Thursday : {restaurant?.operating_hours.Thursday}</div>
              <div>Friday : {restaurant?.operating_hours.Friday}</div>
              <div>Saturday : {restaurant?.operating_hours.Saturday}</div>
              <div>Sunday : {restaurant?.operating_hours.Sunday}</div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default View