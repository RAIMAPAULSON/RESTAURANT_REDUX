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
              <input onChange={e=>dispatch(searchRestaurant(e.target.value.toLowerCase()))} type="text" style={{width:'280px'}} className='rounded p-1' placeholder='Search restaurant!!!' />
              <button className='bg-warning p-1 rounded text-white ms-2'>Search</button>
            </Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header