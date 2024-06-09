import React from 'react'
import Header from '../components/Header'
import heroimg from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <Header />
      <div className='container d-flex justify-content-between flex-wrap' style={{ paddingTop: '160px' }}>
        <div style={{paddingTop:'80px'}}>
        <h1>Enjoy Our <br /> Delicious Meal</h1>
        <h6 className='text-justify pt-4'>Embark on a culinary journey where flavors dance on your palate, and <br /> every dish is a masterpiece of taste and presentation.
           Indulge in the <br /> essence of culinary artistry, where each bite tells a story of passion and perfection.</h6>
           <button className='btn rounded bg-warning p-3 fw-bolder text-white mt-3'><Link to={'/restaurant'} style={{textDecoration:'none',color:'white'}}>BOOK A TABLE</Link></button>
        </div>
        <div className='ms-2'>
          <img height={'400px'} width={'400px'} src={heroimg} alt=""  />
        </div>
      </div>
    </div>
  )
}

export default Landing