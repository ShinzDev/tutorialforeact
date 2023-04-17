import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Lanuch Your App</span> with Confidence and Creativity</h1>
        <p className='details'>At AppLand we make sure your online products
        gets to your customer with all confidence 
        </p>
        <a href="" className='cv-btn'>Download</a>
      </div>
    </div>
  ) 
}

export default Header
