import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function StepInp() {
    const navigate = useNavigate()
    const [vehicleInfo, setVehicleInfo] = useState({
        make: "",
        year: "",
        model: ""
    })
    // mobile srceen
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });
    const handleNext = (e) => {
        e.preventDefault(); 
        const { make, year, model } = vehicleInfo
        if (!make || !year || !model) {
            toast.warning("Please fill all")
        } 
        else 
        {
            navigate('/sell-us-your-car/next', { state: { vehicleInfo } })
        }

    }
    return (
        <div className='d-flex justify-content-center'>
            <div className={`${screenSize > 600 ? "w-75" : "container"}`}>

                <div className='d-flex justify-content-between align-items-center'>
                    <div style={{ color: 'black', backgroundColor: 'black', height: "2px", }} className='w-25' />
                    <h2 className='text-center'>Which <span style={{ color: "#A8C82B" }}>car</span> do you have?</h2>
                    <div style={{ color: 'black', backgroundColor: 'black', height: "2px", }} className='w-25' />
                </div>
                <form>
                    <div class="form-group mt-1">
                        <label for="exampleInputEmail1">Make</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Toyota" onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })} />

                    </div>

                    <div class="form-group mt-1">
                        <label for="exampleInputEmail1">Year</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="2015" onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })} />

                    </div>

                    <div class="form-group mt-1">
                        <label for="exampleInputEmail1">Model</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Innova" onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })} />

                    </div>
                    <div className='d-flex justify-content-end m-3'>
                        <button onClick={() => navigate('/post_ad')} className='btn fw-bold' style={{ border: "solid 2px #968f8f", color: "#9e9898" }}>Back</button>
                        <button onClick={handleNext} className='btn ms-2 text-light fw-bold' style={{ backgroundColor: "#A8C82B" }}>Next</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default StepInp