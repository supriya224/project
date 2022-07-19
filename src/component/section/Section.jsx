import React from 'react'
import '../section/Section.css';
import IMG from '../../assests/youtube.png'
import IMG1 from '../../assests/andriod.png'
import IMG2 from '../../assests/img.jpg'

function Section() {
  return (
    <div className='section'>
      <div className='col-6'>
      <h7 className='h7'>WHAT'S INSIDE</h7>
      <h1 className='head'>Connect can bring 
        charm to your website.</h1>
      <p className='col-4'>Get straightto the point always, people find it attracitve
          when they visit your website
      </p>
</div>
      <div className='box'>
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <div className='box-items'>
                <div className='box-img'>
                  <img src={IMG} className="img-items" alt='pic'></img>
                </div>
                <h1 className='box-heading'>
                  Fluid Layout
                </h1>
                <p className='box-text text-1'>Deliver the best stores and ideas ono the topics you care about
                most straight to you </p>
              </div>
            </div>

            <div className='col-5'>
              <div className='box-items-1'>
                <div className='box-img'>
                  <img src={IMG2} alt='pic' className='img-items1'></img>
                </div>
                <h1 className='box-heading'>
                  Fluid Layout
                </h1>
                <p className='box-text text-1'>Deliver the best stores and ideas ono the topics you care about
                most straight to you </p>
              </div>
            </div>

            <div className='col-5'>
              <div className='box-items-2'>
                <div className='box-img'>
                 <img src={IMG1} alt='pic' className='img-items2'></img>

                </div>
              <h1 className='box-heading'>
                  Fluid Layout
                </h1>
                <p className='box-text text-1'>Deliver the best stores and ideas ono the topics you care about
                most straight to you </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Section;