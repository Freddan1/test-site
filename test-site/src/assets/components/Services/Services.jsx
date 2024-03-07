import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <>
    <div className='serviceContainer'>
        <div className='titleContainer'>
            Our services
        </div>
        <div className='infoContainer'>
        We identify the ideal market-product fit, find prospects, and reach out.
        </div>
    </div>
    <div className='leadWrapper'>
        <div className='leadContainer'>
            <div className='infoCardContainer'>
                LEAD CONNECT
            </div>
            <div className='target__market__section'>
                <h2>
                    What is your target market?
                </h2>
                <p>
                Specify the country or region where you're seeking leads.
                </p>
                <div className='target__market__input'>
                    <input type="text" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services