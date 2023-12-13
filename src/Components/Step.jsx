import React, { useState } from 'react'

function Step({step1,step2,step3}) {
    
    // mobile srceen
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });
    return (
        <div className='d-flex justify-content-center'>
            <div className={`${screenSize > 600 ? "w-75" : "container"}`}>
                <div className='d-flex m-4 justify-content-between'>
                    <div className='d-flex flex-column align-items-center '>
                        <div className={`d-flex justify-content-center align-items-center ${step1?'':"border border-dark"}`} style={{ borderRadius: "50%", width: "60px", height: "60px", backgroundColor: step1 ? "#A8C82B" : ""}}>
                            <h1>1</h1>
                        </div>
                        <span className='mt-2 fw-bold' style={{ color: step1 ? "#A8C82B":""  }}>Select Car</span>
                    </div>
                    <div className='d-flex flex-column align-items-center '>
                        <div className={`d-flex justify-content-center align-items-center ${step2?'':"border border-dark"}`} style={{ borderRadius: "50%",  width: "60px", height: "60px", backgroundColor: step2 ? "#A8C82B" : ""}}
>
                            <h1>2</h1>
                        </div>
                        <span className='mt-2 fw-bold' style={{ color: step2? "#A8C82B":"" }}>Car Details</span>
                    </div>
                    <div className='d-flex flex-column align-items-center '>
                        <div className={`d-flex justify-content-center align-items-center ${step3?'':"border border-dark"}`} style={{ borderRadius: "50%", width: "60px", height: "60px", backgroundColor: step3 ? "#A8C82B" : "" }}>
                        <i class="fa-solid fa-indian-rupee-sign fa-lg"></i>
                        </div>
                        <span className='mt-2 fw-bold' style={{ color: step3? "#A8C82B":"" }}>Price</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step