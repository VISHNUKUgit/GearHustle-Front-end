import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StepInpD(props) {
    const location = useLocation()
    const make = location.state.vehicleInfo.make
    const model = location.state.vehicleInfo.model
    const storedUser = sessionStorage.getItem("currentUser");
    const user = JSON.parse(storedUser);
    const [details, setDetails] = useState({
        kilometer: "",
        option: "",
        name: user.username,
        email: user.email,
        mobile: user.mobile ? user.mobile : ""
    })
    const navigate = useNavigate()
    // mobile srceen
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });
    const handleNext = (e) => {
        e.preventDefault(); 
        const { kilometer,
            option,
            name,
            email,
            mobile } = details
        if (!kilometer || !option || !name || !email || !mobile) {
            toast.warning("Please fill all")
        } else {
            navigate('/valuated')
        }

    }
    return (
        <div className='d-flex justify-content-center'>
            <div className={`${screenSize > 600 ? "w-100" : "container"}`}>

                <div className='d-flex justify-content-between align-items-center'>
                    <div style={{ color: 'black', backgroundColor: 'black', height: "2px", }} className='w-25' />
                    <h2 className='text-center'>Kindly fill the form to see your <span style={{ color: "#A8C82B" }}>instant online valuation</span></h2>
                    <div style={{ color: 'black', backgroundColor: 'black', height: "2px", }} className='w-25' />
                </div>
                <div className='row m-5'>
                    <div className='col-lg-8'>
                        <form>
                            <div class="form-group mt-1">
                                <label for="exampleInputEmail1">CAR DETAILS</label>
                                <input disabled type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={`${make}-${model}`} placeholder="" />

                            </div>

                            <div className="form-group mt-1">
                                <label for="exampleFormControlSelect1">KILOMETERS</label>
                                <select class="form-select" aria-label="Default select example" onChange={(e)=>setDetails({...details,kilometer:e.target.value})}
                                    value={details.kilometer || ""}>
                                    <option selected="selected">Select Kilometer</option>
                                    <option>0 - 20,000</option>
                                    <option>20,001 - 40,000</option>
                                    <option>40,001 - 60,000</option>
                                    <option>60,001 - 80,000</option>
                                    <option>80,001 - 100,000</option>
                                    <option>100,001 - 120,000</option>
                                    <option>120,001 - 140,000</option>
                                    <option>140,001 - 160,000</option>
                                    <option>160,001 - 180,000</option>
                                    <option>180,001 - 200,000</option>
                                    <option>200,001 - 220,000</option>
                                    <option>220,001 - 240,000</option>
                                    <option>240,001 - 260,000</option>
                                </select>

                            </div>

                            <div class="form-group mt-1">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-select" aria-label="Default select example" value={details.option || ""} onChange={(e)=>setDetails({...details,option:e.target.value})}>
                                    <option selected="selected">Select Car Option</option>
                                    <option>Basic</option>
                                    <option>Mid Option</option>
                                    <option>Full option</option>

                                </select>
                            </div>
                            <div class="form-group mt-1">
                                <label for="exampleInputEmail1">YOUR NAME</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name" value={details.name || ""} onChange={(e)=>setDetails({...details,name:e.target.value})} />

                            </div>
                            <div class="form-group mt-1">
                                <label for="exampleInputEmail1">YOUR EMAIL</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address" value={details.email || ""} onChange={(e)=>setDetails({...details,email:e.target.value})} />

                            </div>
                            <div class="form-group mt-1">
                                <label for="exampleInputEmail1">YOUR MOBILE NUMBER</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+91-XXXX-XXXXXX" value={details.mobile || ""} onChange={(e)=>setDetails({...details,mobile:e.target.value})}/>

                            </div>
                            <div className='d-flex justify-content-end mt-3'>
                                <div className='d-flex flex-column'>
                                    <div onClick={handleNext} className='btn text-center ' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>
                                        <h5 className='mt-2 fw-bolder text-light'>SEE MY VALUATION</h5>

                                    </div>
                                    <span style={{ fontSize: "11px" }}>By continue to next step you agree on our <span style={{ color: "#A8C82B" }}>Terms & Conditions</span></span>
                                </div>

                            </div>
                        </form>
                        <hr />
                    </div>

                    <div className='col-lg-4'>
                        <div class="card border border-info">
                            <div class="card-header bg-info fw-bold">
                                Important !!!
                            </div>
                            <ul class=" list-group-flush">
                                <li class="">We are the largest car buyers in Kerala</li>
                                <li class="">We are authorized by RTA & located inside RTA </li>
                                <li class="">Your contact information is strictly confidential and exclusive to GearHustle.com & will be used only for authentication purpose.</li>
                                <li>
                                    Not comfortable sharing your contact information? Call our toll free number 910019 to help you selling your car.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default StepInpD