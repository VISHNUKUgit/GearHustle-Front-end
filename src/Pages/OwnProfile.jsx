import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'

function OwnProfile() {
  // mobile srceen
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

      const screenWidth = window.innerWidth;

      setScreenSize(screenWidth)
  });
  return (
    <div className='w-100 d-flex justify-content-center'>
      <div className='container'>
          <div className="row my-5">
            <div className="col-lg-3">
              <div className='d-flex justify-content-center align-items-center'>
              <div className='bg-dark ' style={{width:'150px',height:'150px',borderRadius:'50%'}}>
                {/* <img src="" alt="" /> */}
              </div>
              </div>
              
              <div className={`d-flex flex-column ${screenSize>600?'':'justify-content-center align-items-center'}`}>
                <h4 className='text-center my-3'>VISHNU KU</h4>
                <span>MOB:9048310727</span>
                <span>Email:vishnuAdsCrypto@gmail.com</span>
                <button className={`btn btn-danger my-3 ${screenSize>600?'w-100':'w-50'}`}>Edit profile</button>
                <button className={`btn btn-warning ${screenSize>600?'w-100  my-3':'w-50 my-1'}`}>Share profile</button>
              </div>
            </div>
            <div className="col-lg-9">
              {
                // adData?adData.map((data)=>(
                //   <ProductCard/>
                // )):
                <div className='d-flex flex-column align-items-center my-5'>
                    <h5 className='mt-5'>You haven't listed anything yet</h5>
                    <span>Let go of what you don't use anymore</span>
                    <button className='btn btn-success mt-3 mb-5'>Start Selling</button>
                </div>
              }
              
            </div>
          </div>
      </div>
    </div>

  )
}

export default OwnProfile