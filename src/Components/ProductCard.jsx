import React, { useState } from 'react'

function ProductCard() {
     // mobile srceen
     const [screenSize, setScreenSize] = useState(window.innerWidth)
     window.addEventListener('resize', function () {
 
         const screenWidth = window.innerWidth;
 
         setScreenSize(screenWidth)
     });
    return (
        <div>
            <div className='card shadow mb-4'>
            <div class=" row" >
                <div class="col-12 col-lg-6">
                    <img className='w-100' src="https://scb-image-bucket.s3.amazonaws.com/Thumbs/ee92aaed-352c-4f35-a161-6fc8b8709a56.jpg" class="card-img-top" alt="..." />
                </div>

                <div class={`col-12 col-lg-6 ${screenSize>600?'pe-4 pt-4':'px-4 pt-3'} `}>
                    <div className='d-flex justify-content-between'>
                        <h5>Mercedes-Benz A 250 Sport</h5>
                        <h5>85,000 <i class="fa-solid fa-indian-rupee-sign fa-sm"></i></h5>
                    </div>
                    <div className='row py-3'>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}> <i class="fa-solid fa-gauge-high fa-sm"></i>  49,798 KM</span>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}><i class="fa-solid fa-car-side "></i> Full Option</span>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}><i class="fa-regular fa-calendar"></i> 2017</span>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}><i class="fa-solid fa-earth-americas"></i> GCC</span>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}><i class="fa-brands fa-superpowers"></i> 2.0</span>
                        <span className='fw-bold col-6 col-lg-4' style={{color:'#777'}}><i class="fa-solid fa-location-dot"></i> Dubai</span>
                    </div>
                    <div className='d-flex justify-content-end pt-4'>
                        <h3>Gear<span className='text-warning'>Hustle</span>.com</h3>
                    </div>

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProductCard