import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import EditProfile from '../Components/EditProfile';
import { BASE_URL } from "../Services/baseUrl"
import { getUserAdsAPI } from '../Services/allAPI';

function OwnProfile() {
  const deleteStatus = useSelector((state)=>(state.loginstat.adDelete))
  const logStat = useSelector((state) => (state.loginstat.login))
  const proUpdateStatus = useSelector((state) => (state.loginstat.proUpdate))
  // console.log(logStat);
  const [userData, setUserData] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("currentUser")) {
      const data = JSON.parse(sessionStorage.getItem("currentUser"));
      setUserData(data);
      // console.log(data);
    }
  }, [logStat, proUpdateStatus]);
  // mobile srceen
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

    const screenWidth = window.innerWidth;

    setScreenSize(screenWidth)
  });
  // API call to get user projects
  const [allAds, setAllAds] = useState("")
  const getUserData = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserAdsAPI(reqHeader)
      if (result.status === 200) {
        setAllAds(result.data)

      } else {
        alert(result)
        console.log(result);
      }
    }

  }
  useEffect(() => {
    getUserData()
  }, [deleteStatus])
  // console.log(allAds);
  return (
    <div className='w-100 d-flex justify-content-center'>
      <div className='container'>
        <div className='my-4'>
          <Breadcrumb>
            <Breadcrumb.Item >
              <Link to={'/'}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row my-5">
          <div className="col-lg-3">
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-dark fs-3 d-flex justify-content-center align-items-center ' >

                {userData ?
                  userData.profile ?
                    <img className='w-100' style={{ borderRadius: '50%' }} src={`${BASE_URL}/images/profile/${userData.profile}`} alt="" /> :
                    <h1 className=' bg-dark text-light fs-3 d-flex justify-content-center align-items-center ' style={{ width: "150px", height: '150px', borderRadius: '50%' }} >{userData.username.charAt(0).toUpperCase()}</h1>
                  : ""}
              </div>
            </div>

            <div className={`d-flex flex-column ${screenSize > 600 ? '' : 'justify-content-center align-items-center'}`}>
              <h4 className='text-center my-3'>{userData ? userData.username : ""}</h4>
              <span>MOB:{userData ? userData.mob : ""}</span>
              <span>Email:{userData ? userData.email : ""}</span>
              <span>Whatsapp:{userData ? userData.whatsapp : ""}</span>
              <button className={`btn btn-danger my-3 ${screenSize > 600 ? 'w-100' : 'w-50'}`}><EditProfile userData={userData} /></button>
              <button className={`btn btn-warning ${screenSize > 600 ? 'w-100  my-3' : 'w-50 my-1'}`}>Share profile</button>
            </div>
          </div>
          <div className="col-lg-9">
            {
              allAds.length>0 ? 
                allAds.map((ad) => (
                  <ProductCard key={ad.id} data={ad} dele />
                ))
               : 
                <div className='d-flex flex-column align-items-center my-5'>
                  <h5 className='mt-5'>You haven't listed anything yet</h5>
                  <span>Let go of what you don't use anymore</span>
                  <Link to={'/post_ad'}>
                    <button className='btn btn-success mt-3 mb-5'>Start Selling</button>
                  </Link>
                </div>
              
            }


          </div>
        </div>
      </div>
    </div>

  )
}

export default OwnProfile