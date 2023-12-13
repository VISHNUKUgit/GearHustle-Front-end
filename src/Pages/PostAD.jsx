import React, { useState } from 'react'

import AddCar1 from '../Components/AddCar1';
import { useNavigate } from 'react-router-dom';

function PostAD() {
const navigate = useNavigate()
   // mobile srceen
   const [screenSize, setScreenSize] = useState(window.innerWidth)
   window.addEventListener('resize', function () {

       const screenWidth = window.innerWidth;

       setScreenSize(screenWidth)
   });
  return (
    <div>
      <div>
        <div className='d-flex flex-column align-items-center my-4'>
          <h2 className='text-center' >
            GEAR-HUSTLE BUYERS IS THE BEST <br />
            PLACE TO <span style={{ color: '#A8C82B' }}>SELL BUY TRADE</span> A CAR IN KERALA
          </h2>
          <p className=' fw-bold text-center text-secondary'>CHOOSE HOW YOU WANT TO SELL YOUR CAR </p>
          <div className='bg-dark' style={{ width: '50px', height: '2px' }}></div>
        </div>
        <div className='container'>
          <div className='row my-5'>
            <div className="col-lg-4 mb-2">
              <div class="list-group shadow" id="list-tab" role="tablist">
                <div class="list-group-item bg-primary "  ><h3 className='text-center'>1.SELL US YOUR <br /> CAR</h3></div>
                <div class="list-group-item  ">
                  <h6 className='text-center'>We Buy Any Car In 25 min</h6>
                  <img className='w-100 ' style={{height:screenSize>600?'180px':"180px"}} src="https://www.simplycarbuyers.com/static/images/sell-option/sell.png" alt="" /></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Quick</span><span className='text-secondary'>selling</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Hassle</span><span className='text-secondary'>free</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Guaranteed</span><span className='text-secondary'>sell</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Instant</span><span className='text-secondary'>payment</span></div> 
                <div onClick={()=>navigate('/sell-us-your-car')}  class="btn btn-primary text-center" style={{borderRadius:'0px'}}><h5>Start</h5></div> 
              </div>
            </div>
            <div className="col-lg-4 mb-2">
            <div class="list-group shadow" id="list-tab" role="tablist">
                <div class="list-group-item bg-primary "  ><h3 className='text-center'>2.AUCTION YOUR <br /> CAR</h3></div>
                <div class="list-group-item  ">
                  <h6 className='text-center'>Hundreds of dealers will bid on your car</h6>
                  <img className='w-100' style={{height:screenSize>600?'180px':"180px"}} src="https://www.simplycarbuyers.com/static/images/sell-option/auction.png" alt="" /></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Free</span><span className='text-secondary'>Inspection</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Free</span><span className='text-secondary'>service</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Instant</span><span className='text-secondary'>sale</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>Instant</span><span className='text-secondary'>payment</span></div> 
                <div class="btn btn-primary text-center" style={{borderRadius:'0px'}}><h5>Start</h5></div> 
              </div>
            </div>
            <div className="col-lg-4 mb-2">
            <div class="list-group shadow" id="list-tab" role="tablist">
                <div class="list-group-item bg-primary "  ><h3 className='text-center'>3.ADD YOUR CAR IN OUR WEBSITE</h3></div>
                <div class="list-group-item  ">
                  <h6 className='text-center'>We will find the right buyer for you</h6>
                  <img className='w-100' style={{height:screenSize>600?'180px':"180px"}} src="https://www.simplycarbuyers.com/static/images/sell-option/add-to-list.png" alt="" /></div>
                <div class="list-group-item text-center"><span className='fw-bold'>free</span><span className='text-secondary'>inspection</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>free listing</span><span className='text-secondary'>service</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>sell with</span><span className='text-secondary'>your price</span></div>
                <div class="list-group-item text-center"><span className='fw-bold'>we handle</span><span className='text-secondary'>call</span></div> 
                <div><AddCar1/></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostAD