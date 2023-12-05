import React, { useEffect, useState } from 'react'
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import Authenticate from './Authenticate';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { exit } from '../Redux/slice';





function Header() {
    const dispatch = useDispatch()
const logStat = useSelector((state)=>(state.loginstat.login))
    const [isLogin, setIsLogin] = useState(false)
    const [nam,setNam]=useState("")
     


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // mobile srceen
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });

    // fixed nav bar after 400px
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Set isFixed to true when scroll position is greater than 120 pixels
            setIsFixed(scrollPosition > 400);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // check loged or not

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
          setIsLogin(true);
          const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          setNam(currentUser.username.charAt(0).toUpperCase());
        } else {
          setIsLogin(false);
          setNam(""); // Reset Nam if the user is not logged in
        }
      }, [logStat, isLogin]);
    // console.log(logStat)
// LogOut
const navigate = useNavigate()
const handleLogout = ()=>{
    sessionStorage.clear();
    dispatch(exit())
    navigate('/')
    handleClose()
}
    return (
        <>
            {
                screenSize > 600 ?
                    <div className={`navbars ${isFixed ? 'fixed' : ''} p-0`}>

                        <nav className={`navbar w-100 ${isFixed ? 'bg-light' : 'bg-primary'}`}>
                            <div className="container d-flex">
                                <Link style={{ textDecoration: 'none' }} to={'/'}><h1 className={`mb-0 ${isFixed ? 'text-black' : 'text-light'}`}>Gear<span className='text-warning'>Hustle</span>.com</h1></Link>

                                <div className='d-flex align-items-center'>

                                    {
                                        isLogin ? <>
                                            <Link to={'/used_car'}><h6 className={`mx-2 btn fw-bolder  ${isFixed ? 'text-dark' : 'text-light'}`}>Buy Used car</h6></Link>
                                            <Link to={'/post_ad'}><h6 className={`mx-2 btn fw-bolder  ${isFixed ? 'text-dark' : 'text-light'}`}>Sell your car</h6></Link>
                                        </>
                                            : ""
                                    }

                                    {
                                        isLogin ? 
                                            <Dropdown>
                                                <Dropdown.Toggle className='text-white bg-dark' style={{ width: "45px", height: "45px", borderRadius: "50%" }}>
                                                    <h4 className='mt-'>{`${nam?nam:"@"}`}</h4>
                                                </Dropdown.Toggle>


                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={'/user_profile'} className='fw-bold text-dark' style={{ textDecoration: "none" }}>
                                                            Profile
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className='fw-bold text-dark' onClick={handleLogout} >Log out</Dropdown.Item>

                                                </Dropdown.Menu>
                                            </Dropdown>
                                            // <Link to={'/user_profile'}><i class="fa-solid fa-user-tie fa-2xl " style={{ color: isFixed ? 'black' : 'white' }}
                                            // ></i></Link>
                                            :
                                            <>
                                                <Authenticate isFixed={isFixed} />
                                            </>
                                    }

                                    <h6 className={`mx-2 btn ${isFixed ? 'text-bg-dark' : 'text-bg-light'}`}><i class="fa-solid fa-phone fa-sm" style={{ color: isFixed ? '#FFFFFF' : '#000000' }}></i> 910019</h6>
                                </div>
                            </div>
                        </nav>

                    </div> :
                    <div>
                        <nav className="navbar bg-primary ">
                            <div className="d-flex justify-between container-fluid">
                                <div style={{ width: '10px' }}>

                                    <button className="btn " onClick={handleShow}>
                                        <i class="fa-solid fa-bars fa-xl" style={{ color: "#000000" }}></i>
                                    </button>

                                    <Offcanvas show={show} onHide={handleClose} backdrop="static">
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Menu</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <hr className="mt-0" />
                                        <Offcanvas.Body>
                                            <div className='d-flex flex-column justify-content-start '>
                                                <Link style={{ textDecoration: 'none' }} to={'/'}   ><h6 className="mx-3  text-dark" style={{ cursor: "pointer" }} onClick={handleClose}>Home</h6></Link>

                                                {isLogin ? <> <Link style={{ textDecoration: 'none' }} to={'/used_car'}   ><h6 className="mx-3  text-dark" style={{ cursor: "pointer" }} onClick={handleClose}>Buy Used car</h6></Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/post_ad'}   ><h6 className='mx-3  text-dark' style={{ cursor: "pointer" }} onClick={handleClose}>Sell your car</h6></Link> </>:""}
                                                {
                                                    isLogin ? <> <Link to={'/user_profile'} className='mx-3 text-dark' style={{ textDecoration: "none" }}><h6
                                                        onClick={handleClose}>Profile</h6></Link>
                                                        <h6 className='mx-3' onClick={handleLogout}>Logout</h6></>
                                                        :
                                                        <div className='mx-3' style={{cursor:'pointer'}} onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(); }}>
                                                            <Authenticate isFixed={true} text={"Register/Login"} />
                                                        </div>
                                                }
                                            </div>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                                <Link style={{ textDecoration: 'none' }} to={'/'} ><span className="navbar-brand mb-0 h1 ms-4">GearHustle.com</span></Link>

                                <h6 className=' btn text-bg-light'><i class="fa-solid fa-phone fa-sm" style={{ color: "#000000" }}></i> 910019</h6>
                            </div>
                        </nav>
                    </div>
            }
        </>
    )
}

export default Header