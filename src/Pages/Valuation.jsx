import React from 'react'
import Appointment from '../Components/Appointment'

function Valuation() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='container mx-5'>
                <div className='row my-4 rounded' style={{ border: "solid 2px #968f8f" }}>
                    <div className='col-lg-5 p-5' style={{ backgroundColor: "#f9f9f9" }}>
                        <div className='d-flex align-items-center flex-column'>
                            <h2 className='my-2' style={{ color: "#A8C82B" }}>YOUR VALUATION</h2>
                            <div className='d-flex my-2'><span className='fw-bold'>Rupees </span>   <h1>{Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000}₹</h1></div>
                            <span>* This is an estimated market price not an offer from GearHustle.Com The final price will be to offered at the branch after 20 minutes inspection, please read the <span style={{ color: "#A8C82B" }}>trems & Conditions.</span> To get more accurate valuation </span>
                            <div className='btn text-center mt-3' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>
                                <Appointment/>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 p-5  '>
                        <h3>WHY TO SELL YOUR CAR TO US?</h3>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-regular fa-star fa-md" style={{ color: "#42c4f2" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'> We offer an instant payment.</p>
                            </span>
                        </div>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-solid fa-certificate fa-md" style={{ color: "#98ed64" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>  We buy absolutely any car (Guaranteed)</p>
                            </span>
                        </div>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-solid fa-check fa-md" style={{ color: "#A8C82B" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>  We even buy cars that are still under finance.</p>
                            </span>
                        </div>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-regular fa-heart fa-md" style={{ color: "#de0000" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>  We offer a free car inspection.</p>
                            </span>
                        </div>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-regular fa-lightbulb fa-md" style={{ color: "#dcb211" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>  We instantly transfer the car ownership..</p>
                            </span>
                        </div>
                        <div>
                            <span className='my-2' style={{ display: 'inline-block' }}>
                                <i class="fa-regular fa-clock fa-md" style={{ color: "#fd9424" }}></i>
                                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>  Takes up just 25 minutes or less to sell your car.</p>
                            </span>
                        </div>
                        <span><span className='fw-bold'>DISCLAIMER:</span>The final offer can be more or less than this valuation depends on car condition.</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Valuation