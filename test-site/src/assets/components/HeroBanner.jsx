import React from 'react'
import './HeroBanner.css';
import Navbar from './Navbar/Navbar';

const HeroBanner = () => {
  return (
    <>
    
        <div className='heroContainer'>
            <div className='container'>
                <Navbar/>
                <div className='textContainer'>
                    <h1>
                    Leveraging AI for Automated Lead Generation 
                    </h1>
                    <p>
                    By automating data collection and analysis from multiple sources, our application provides clients with precisely targeted leads, enhancing efficiency and business growth opportunities.
                    </p>
                </div>
                <div className='picContainer'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </>
  )
}

export default HeroBanner