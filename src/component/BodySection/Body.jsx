import React from 'react'
import '../BodySection/Body.css'
import IMG from '../../assests/img1.jpg';

function Body() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='row'>
          <div className='col-6'>
            <h7>Launch your product</h7>
            <h2 className='head'>Connect better with interactive stream</h2>

            <div class="w3-show-inline-block">
              <div class="w3-bar">
                <button class="W3-btn-btn1">SEE MORE</button>
                <button class="W3-btn-btn2">DOWNLOAD</button>
              </div>
            </div>
            <p className='col-4'>Free unrestricted usage for 14 days 
              No credit card required*
            </p>
          </div>
          <div className='col-6'>
            <div className='about-img'>
              <img src={IMG} className='img' alt='pic'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;