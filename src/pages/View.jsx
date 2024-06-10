import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import { Button,Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


const View = () => {
  const [show, setShow] = useState(false);
  const [restaurant,setRestaurant] = useState({});
  console.log(restaurant);
  const {id} = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    if(localStorage.getItem("allRestaurants")){
    const restaurants = JSON.parse(localStorage.getItem("allRestaurants"))
    setRestaurant(restaurants.find(item=>item.id==id))
  }},[])
  return (
    <div>
     <Header/>
     <div className='container d-flex justify-content-around align-items-center flex-wrap' style={{width:'100%',marginTop:'150px',height:'auto',marginBottom:'80px'}}>
      <div style={{width:'500px',height:'450px'}} className='border rounded shadow'>
      <img className='w-100 h-100 rounded' src={restaurant?.photograph} alt="" />
      </div>
      <div className='border rounded shadow p-3' style={{width:'500px',height:'450px'}}>
      <h4>{restaurant?.name}</h4>
      <h6>Neighborhood : {restaurant?.neighborhood}</h6>
      <h6>Address :{restaurant?.address}</h6>
      <h6>Cuisine : {restaurant?.cuisine_type}</h6>
      <div className='mt-3 mb-5'>
        <Button variant="primary" className='me-2' onClick={handleShow}>Operating Hours</Button>
        <Button variant="primary">Reviews</Button>
      </div>
      <div>Review</div>
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
          <Modal.Title>Opearting HourS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {restaurant?.operating_hours}
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