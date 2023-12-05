import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import { getAllAdsAPI } from '../Services/allAPI';

function Home() {
  const [allAds, setAllAds] = useState("")
  const [searchValue,setSearchValue] = useState("")
  // mobile srceen
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

    const screenWidth = window.innerWidth;

    setScreenSize(screenWidth)
  });
  // get all Ads
  useEffect(() => {
    const getAllAds = async () => {
      const result = await getAllAdsAPI(searchValue)
      if (result.status === 200) {
        setAllAds(result.data)
        
      } else {
        console.log(result);
      }

    }
    getAllAds()
  }, [searchValue])
  // console.log(searchValue);
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
            <input class="form-control me-2 shadow" type="search" placeholder="Search" aria-label="Search" value={searchValue||""} onChange={(e)=>setSearchValue(e.target.value)} />
          </form>
        </div>
        <div className="col-12 col-md-9">
          <div>
            {allAds ? allAds.map((ad) => (
                
              
              <ProductCard data={ad} />
            
             
            )) : ""}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home