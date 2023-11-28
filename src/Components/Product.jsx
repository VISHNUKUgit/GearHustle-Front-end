import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
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
                                <div class="carousel-item active">
                                    <img src="https://scb-image-bucket.s3.amazonaws.com/ee92aaed-352c-4f35-a161-6fc8b8709a56/0159be62-94ed-400c-91e2-7e83dea3c3c2.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://scb-image-bucket.s3.amazonaws.com/ee92aaed-352c-4f35-a161-6fc8b8709a56/188c0647-7e13-49fe-b9bf-8c0f4b075138.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://scb-image-bucket.s3.amazonaws.com/ee92aaed-352c-4f35-a161-6fc8b8709a56/1af4fd8c-6737-49c7-9bdb-c4c0e1d3e0c2.jpg" class="d-block w-100" alt="..." />
                                </div>
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
                    <h1>Mercedes-Benz A 250 Sport - 2017</h1>
                </div>
                <div className="col-lg-4">
                    <div className='d-flex flex-column'>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <div class="list-group shadow" id="list-tab" role="tablist">
                                        <div class="list-group-item bg-primary "  ><h3 className='text-center'>Price</h3></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Mileage</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Car Options</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Engine Size</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Specification</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Seats</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Transmission</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Drive Displacement</span><span>profile</span></div>
                                        <div class="list-group-item d-flex justify-content-between"><span>Location</span><span>profile</span></div>
                                        
                                        
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
                        <button className='btn mt-3 text-center fw-bold w-100' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>REQUEST TO TEST DRIVE</button>
                        <button className='btn mt-3 bg-info text-center fw-bold w-100' style={{ borderBottom: '3px solid #336d80' }}>TRADE IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product