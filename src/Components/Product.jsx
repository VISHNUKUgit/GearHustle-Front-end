import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../Services/baseUrl';
import Request from './Request';


function Product({ad}) {
    // console.log(ad);
    const[currentUser,setCurrentUser] = useState("")
    useEffect(()=>{
        if (sessionStorage.getItem("currentUser")) {
            const cuUser = JSON.parse(sessionStorage.getItem("currentUser"));
            setCurrentUser(cuUser) 
        }
    },[])
    
    
    return (
        <div className='w-100 d-flex flex-column align-items-center'>
            <div className='row container py-4'>
                <div className="col-lg-8">
                    <div className='d-flex justify-content-between'>
                        <nav style={{ '--bs-breadcrumbDivider': '>' }} aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                <li class="breadcrumb-item"><Link to={'/used_car'}>Used car</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">car name</li>
                            </ol>
                        </nav>
                        <div>
                            <i class="fa-solid fa-share-nodes fa-lg" style={{ color: "#005eff" }}></i>
                            <span> share</span>
                        </div>
                    </div>
                    <div>
                        <div id="carouselExampleFade" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                {ad?ad.images.map((img)=>(<div class="carousel-item active">
                                    <img  src={`${BASE_URL}/images/car/${img}`} class="d-block w-100" alt="..." />
                                </div>)):""}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <h1>{ad?ad.model:""} {ad?ad.year:""}</h1>
                </div>
                <div className="col-lg-4">
                    <div className='d-flex flex-column'>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <div class="list-group shadow" id="list-tab" role="tablist">
                                        <div class="list-group-item bg-primary "  ><h3 className='text-center'>{ad?ad.price:""}₹</h3></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Distance</span><span>{ad?ad.distance:""}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Car Options</span><span>{ad?ad.option:""}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Engine Size</span><span>{ad?ad.size:""}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Specification</span><span>{ad.spec?ad.spec:"!"}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Seats</span><span>{ad?ad.seats:""}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Transmission</span><span>{ad?ad.transmission:""}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Drive Displacement</span><span>{ad.DD?ad.dd:"!"}</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Location</span><span>{ad?ad.location:""}</span></div>
                                        
                                        
                                    </div>
                                </div>
                                {/* <div class="col-8">
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">home</div>
                                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        { currentUser._id != ad.uploderId ?
                        <div className='d-flex flex-column'>
                            <Request uploderId={ad.uploderId} />
                        <button className='btn mt-3 bg-info text-center fw-bold w-100' style={{ borderBottom: '3px solid #336d80' }}>TRADE IN</button>
                        </div>:""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product