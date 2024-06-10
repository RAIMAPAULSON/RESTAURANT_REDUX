import React, { useEffect, useState } from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import logospoon from '../assets/logospoon.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchRestaurant } from '../redux/restaurantSlice'

const Header = ({insideHeader}) => {
  const dispatch = useDispatch()
  // const [text,setText] = useState("")
  // useEffect(()=>{
  //   dispatch(searchRestaurant(text))
  // },[text,dispatch]);
  return (
  <Navbar expand="lg" className="w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand><Link to={'/'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}>
          <img src={logospoon} height={'50px'} width={'50px'} alt="" />SPICE HUT</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {insideHeader &&
            <Nav.Link >
              {/* <input <i className="fa-solid fa-magnifying-glass"></i> onChange={e=>dispatch(searchRestaurant(e.target.value.toLowerCase()))} type="text" style={{width:'280px'}} className='rounded p-1' placeholder='Search restaurant!!!' /> */}
              <div style={{ position: 'relative', width: '280px', marginBottom: '20px' }}>
        <input 
          type="text" 
          onChange={e => dispatch(searchRestaurant(e.target.value.toLowerCase()))} 
          style={{ width: '100%', padding: '10px 40px 10px 10px', borderRadius: '5px' }} 
          className='rounded p-1' 
          placeholder='Search restaurant!!!' 
        />
        <i 
          className="fa-solid fa-magnifying-glass" 
          style={{
            position: 'absolute', 
            top: '50%', 
            right: '10px', 
            transform: 'translateY(-50%)', 
            color: '#aaa'
          }}
        ></i>
      </div>
            </Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header