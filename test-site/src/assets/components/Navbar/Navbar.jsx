import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='companyLogo'>
          <h1>NOWLE</h1>
          </div>
          <div className='links'>
            <a href='#' className='link'>About</a>
            <a href='#' className='link'>Services</a>
        </div>
    </div>
  )
}

export default Navbar