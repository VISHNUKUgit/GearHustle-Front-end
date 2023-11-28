import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';

function Home() {
  // mobile srceen
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

    const screenWidth = window.innerWidth;

    setScreenSize(screenWidth)
  });
  return (
    <div className={`w-100 d-flex flex-column bg-light ${screenSize > 600 ? 'align-items-center' : 'justify-content-center'} `}>
      <div className={`container py-4 ${screenSize > 600 ? 'row md-3' : 'd-flex flex-column-reverse'} `}>
        <div className="col-md-3">
          <i class="fa-solid fa-filter fa-lg" style={{ color: "#575757" }}></i>
          Filter
        </div>
        <div className="col-md-9 d-flex justify-content-between">
          <div>
            <nav style={{ '--bs-breadcrumbDivider': '>' }} aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item fw-bold"><Link to={'/'} style={{ textDecoration: 'none' }} >Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Used cars</li>
              </ol>
            </nav>
          </div>
          <div>
            <h4><span class="badge bg-secondary">Most Recent</span></h4>
          </div>
        </div>
      </div>
      <div className={`container  ${screenSize > 600 ? 'row' : ''} `}>
        <div className="col-12 col-md-3 mb-3 ">
        <form class="d-flex" role="search">
        <input class="form-control me-2 shadow" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </div>
        <div className="col-12 col-md-9">
          <div>
            
           <Link to={'/product'}><ProductCard /></Link> 
           
            <ProductCard />
            
            <ProductCard />
            </div>
          </div> 
        
      </div>
    </div>
  )
}

export default Home