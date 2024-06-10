import React, { useState } from 'react'
import Header from '../components/Header'
import { Button,Modal } from 'react-bootstrap'


const View = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
     <Header/>
     <div className='container d-flex justify-content-around align-items-center flex-wrap' style={{width:'100%',marginTop:'150px',height:'auto',marginBottom:'80px'}}>
      <div style={{width:'500px',height:'450px'}} className='border rounded shadow'>
      <img className='w-100 h-100 rounded' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="" />
      </div>
      <div className='border rounded shadow p-3' style={{width:'500px',height:'450px'}}>
      <h4>Kangnsnsn</h4>
      <h6>Neighborhood:</h6>
      <h6>Address:</h6>
      <h6>Cuisine:</h6>
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
          <Modal.Title>Opearting Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
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