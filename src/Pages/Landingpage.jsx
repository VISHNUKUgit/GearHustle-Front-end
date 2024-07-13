import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Authenticate from '../Components/Authenticate';
import { useSelector } from 'react-redux';

function Landingpage() {
  const logStat = useSelector((state) => (state.loginstat.login))
  // console.log("land",logStat);
  //Check loged or not
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [logStat])
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    screenSize > 600 ? (
      <div>
        <div className='bg-primary'>
          <div className='container w-100 d-flex '>
            <div className='w-50 d-flex  flex-column '>
              <div className='text-light my-5'>
                <h5>Simply car buyers is the best place to</h5>
                <h1 className='my-3 text-warning'>Sell , Buy , Trade a Car</h1>
                <h6 className='my-3 '>Fast service - Instant payment - Hassle free</h6>
                <h6 className='my-3'>Simple - Comfortable - Free - Seamless</h6>
                <h6 className='my-3'>Effective - Guaranteed</h6>
              </div>
              <div className='d-flex'>
                {isLogin ?
                  <><Link to={'/post_ad'}><button type="button" class="btn btn-outline-light">Sell Your Car</button></Link>
                    <Link to={'/used_car'}><button className='btn btn-warning ms-3'>Browse Used Car</button></Link></>
                  : <div className='btn btn-warning w-50'><Authenticate text={"Expolre"} /></div>}

              </div>
            </div>
            <div className='w-50'>
              <img className='w-100 my-5' src="https://www.simplycarbuyers.com/static/images/car-with-man/man-with-cat-lg.png" alt="" />
            </div>

          </div>
        </div>


        <div className='bg-light py-5 '>
          <div className='container w-100 d-flex justify-content-between'>
            <Link to={'/post_ad'} style={{ textDecoration: 'none' }}><div className='option-box bg-white p-2'>
              <img src="https://www.simplycarbuyers.com/static/images/mainserv/sell.png" alt="" />
              <h3 className='card-title text-center text-dark m-3 mt-5'>Sell Your Car</h3>
              <p className='text-center fw-bold text-secondary'>Simply Car Buyers buys any car in <br />25 minutes only. We buy any car <br /> regardless of its conditions.</p>
              <hr className='p-0' />
              <div className='option-box-btn  w-100'>
                <h6 className='text-center mb-3 '>START SELLING</h6>
              </div>
            </div></Link>
            <Link to={'/used_car'} style={{ textDecoration: 'none' }}>
              <div className='option-box bg-white p-2'>
                <img src="https://www.simplycarbuyers.com/static/images/mainserv/buy.png" alt="" />
                <h3 className='card-title text-center text-dark m-3 mt-5'>Buy Used Car</h3>
                <p className='text-center fw-bold text-secondary'>If you do not find a car, just provide <br /> us with your specifications. We will <br /> do that instantly.</p>
                <hr className='p-0' />
                <div className='option-box-btn  w-100'>
                  <h6 className='text-center mb-3'>BROWES USED CAR</h6>
                </div>
              </div>
            </Link>
            <div className='option-box p-2 bg-white '>
              <img src="https://www.simplycarbuyers.com/static/images/mainserv/trade.png" alt="" />
              <h3 className='card-title text-center m-3'>Trade-in</h3>
              <p className='text-center fw-bold text-secondary'>With us, you can change your car <br /> with any other one. Get more cash <br /> or a better car than yours</p>
              <hr className='p-0' />
              <div className='option-box-btn  w-100'>
                <h6 className='text-center mb-1'>START TRADE-IN</h6>
              </div>
            </div>
          </div>
        </div>


        <div className='py-5'>
          <div className='container w-100 d-flex flex-column'>
            <h2 className='text-center fw-bold'>Why to choose us</h2>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column align-items-center'>
                <i class="fa-solid fa-stopwatch fa-2xl my-4" style={{ color: "#27d6c4" }}></i>
                <h3>IT'S QUICK</h3>
                <p className='fw-bold text-secondary text-center'>takes up just 25 minutes or less to sell your car.</p>
              </div>
              <div className='d-flex flex-column align-items-center px-3'>
                <i class="fa-solid fa-wand-sparkles fa-2xl my-4" style={{ color: "#A8C82B" }}></i>
                <h3>IT'S EFFECTIVE</h3>
                <p className='fw-bold text-secondary text-center'>we offer reasonable rates and a fair price for <br />your car and once we give you a quote, we stick <br /> to it; no messing you around!</p>
              </div>
              <div className='d-flex flex-column align-items-center '>
                <i class="fa-regular fa-star fa-2xl my-4" style={{ color: "#42c4f2" }}></i>
                <h3>IT'S INSTANT</h3>
                <p className='fw-bold text-center text-secondary'>you can choose how you want to be paid,<br /> whether that's by cash, cheque or bank transfer</p>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column align-items-center'>
                <i class="fa-regular fa-clock fa-2xl my-4" style={{ color: "#fd9424" }}></i>
                <h3>IT'S TIME-SAVING</h3>
                <p className='fw-bold text-secondary text-center'>no waiting to make appointments with car <br /> viewers or haggle with time wasters!</p>
              </div>
              <div className='d-flex flex-column align-items-center px-4'>
                <i class="fa-solid fa-gear fa-2xl my-4" style={{ color: "#ff00e9" }}></i>
                <h3>IT'S SIMPLE</h3>
                <p className='fw-bold text-secondary text-center'>we offer reasonable rates and a fair price for <br />only a minimal amount of paperwork is required</p>
              </div>
              <div className='d-flex flex-column align-items-center '>
                <i class="fa-solid fa-certificate fa-2xl my-4" style={{ color: "#98ed64" }}></i>
                <h3>IT'S GUARANTEED</h3>
                <p className='fw-bold text-center text-secondary'>we buy absolutely any car, regardless of the <br /> condition it is in. We even buy cars that are still <br /> under car finance.</p>
              </div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div className='d-flex flex-column align-items-center'>
                <i class="fa-regular fa-heart fa-2xl my-4" style={{ color: "#de0000" }}></i>
                <h3>IT'S FREE</h3>
                <p className='fw-bold text-center text-secondary'>we offer a free online valuation tool <br /> for ease and  a free car inspection, with no <br /> cost for advertising  your car.</p>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <i class="fa-regular fa-lightbulb fa-2xl my-4" style={{ color: "#dcb211" }}></i>
                <h3>IT'S SEAMLESS</h3>
                <p className='fw-bold text-center text-secondary'>We instantly transfer ownership to remove your <br />ownership risk. This removes any worry of  <br />getting summons or fines from another driver</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    ) : (
      <div>
        <div className='container w-100 d-flex align-items-center flex-column py-5'>
          <h2 className='text-center' >
            GEAR-HUSTLE BUYERS IS THE BEST <br />
            PLACE TO <span style={{ color: '#A8C82B' }}>SELL BUY TRADE</span> A CAR IN KERALA
          </h2>
          <p className=' fw-bold text-secondary' >What you are looking for today ?</p>
          <div className='bg-dark' style={{ width: '50px', height: '2px' }}></div>
          <div className='my-3 d-flex flex-column'>
            <div className='btn text-center ' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>
              {/* <h5 className='mt-2 fw-bolder'>SELL YOUR CAR</h5> */}
              <Link style={{ textDecoration: 'none' }} to={`${isLogin ? '/post_ad' : '/'}`} ><h5 className='mt-2 fw-bolder text-dark'>SELL YOUR CAR</h5></Link>
              <p className='fw-bold mb-2' >We absolutely buy any car in 25 minutes</p>
            </div>
            <div className='btn my-4 bg-info text-center' style={{ borderBottom: '3px solid #336d80' }}>
              <Link style={{ textDecoration: 'none' }} to={`${isLogin ? '/used_car' : '/'}`} ><h5 className='mt-2 fw-bolder text-dark'>BUY USED CAR</h5></Link>
              <p className='fw-bold mb-2'>Browse our used cars, or let's get one for you</p>
            </div>
            <div className='btn text-center' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>
              <h5 className='mt-2 fw-bolder'>TRADE IN WITH YOUR CAR</h5>
              <p className='fw-bold mb-2'>Select your next car & we will buy yours</p>
            </div>
          </div>
        </div>
        <div className='container w-100 py-5  bg-light'>
          <h5 className='text-center pb-3 fw-bold'>How to sell your car </h5>
          <div className='d-flex w-100 '>
            <div style={{ width: '33.30%' }}>
              <img className='w-100' src="https://www.simplycarbuyers.com/static/images/steps/step1.png" alt="" />
              <h6 className='text-center'>FREE ONLINE <br /> VALUATION</h6>
            </div>
            <div style={{ width: '33.30%' }}>
              <img className='w-100' src="https://www.simplycarbuyers.com/static/images/steps/step2.png" alt="" />
              <h6 className='text-center'>BOOK AN  <br /> APPOINTMENT</h6>
            </div>
            <div style={{ width: '33.30%' }}>
              <img className='w-100' src="https://www.simplycarbuyers.com/static/images/steps/step3.png" alt="" />
              <h6 className='text-center'>COMPLETE <br /> THE SALE</h6>
            </div>
          </div>

        </div>
        <div className='py-5'>
          <div className='container w-100 d-flex flex-column'>
            <h2 className='text-center fw-bold'>Why to choose us</h2>
            <div className='d-flex flex-column'>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-solid fa-stopwatch fa-md " style={{ color: "#27d6c4" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> QUICK: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>takes up just 25 minutes or less to sell your car.</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class=" fa-solid fa-wand-sparkles fa-md " style={{ color: "#A8C82B" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> EFFECTIVE: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>we offer reasonable rates and a fair price for your car and once we give you a quote, we stick to it; no messing you around!</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-regular fa-star fa-md" style={{ color: "#42c4f2" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> INSTANT: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>you can choose how you want to be paid,whether that's by cash, cheque or bank transfer</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-regular fa-clock fa-md " style={{ color: "#fd9424" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> TIME-SAVING: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>no waiting to make appointments with car viewers or haggle with time wasters!</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-solid fa-gear fa-md" style={{ color: "#ff00e9" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> SIMPLE: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>we offer reasonable rates and a fair price for only a minimal amount of paperwork is required</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-solid fa-certificate fa-md" style={{ color: "#98ed64" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> GUARANTEED: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>we buy absolutely any car, regardless of the  condition it is in. We even buy cars that are still  under car finance.</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-regular fa-heart fa-md" style={{ color: "#de0000" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> FREE: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>we offer a free online valuation tool for ease and  a free car inspection, with no cost for advertising  your car.</p>
              </span>
              <span className='my-2' style={{ display: 'inline-block' }}>
                <i class="fa-regular fa-lightbulb fa-md" style={{ color: "#dcb211" }}></i>
                <h6 style={{ display: 'inline', margin: 0 }}> SEAMLESS: </h6>
                <p style={{ display: 'inline', margin: 0 }} className='fw-bold text-secondary'>We instantly transfer ownership to remove your ownership risk. This removes any worry of getting summons or fines from another driver</p>
              </span>

            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Landingpage;
