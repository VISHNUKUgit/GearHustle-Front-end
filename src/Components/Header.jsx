import React, { useEffect, useState } from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import Authenticate from './Authenticate';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

    const [isLogin, setIsLogin] = useState(false)


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

    return (
        <>
            {
                screenSize > 600 ?
                    <div className={`navbars ${isFixed ? 'fixed' : ''} p-0`}>

                        <nav className={`navbar w-100 ${isFixed ? 'bg-light' : 'bg-primary'}`}>
                            <div className="container d-flex">
                                <Link style={{ textDecoration: 'none' }} to={'/'}><h1 className={`mb-0 ${isFixed ? 'text-black' : 'text-light'}`}>Gear<span className='text-warning'>Hustle</span>.com</h1></Link>

                                <div className='d-flex align-items-center'>

                                    <Link to={'/used_car'}><h6 className={`mx-2 btn fw-bolder  ${isFixed ? 'text-dark' : 'text-light'}`}>Buy Used car</h6></Link>
                                    <Link to={'/post_ad'}><h6 className={`mx-2 btn fw-bolder  ${isFixed ? 'text-dark' : 'text-light'}`}>Sell your car</h6></Link>

                                    {
                                        isLogin ? <Link to={'/user_profile'}><i class="fa-solid fa-user-tie fa-2xl " style={{ color: isFixed ? 'black' : 'white' }}
                                        ></i></Link>
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
                                                
                                                <Link style={{ textDecoration: 'none' }} to={'/used_car'}   ><h6 className="mx-3  text-dark" style={{ cursor: "pointer" }} onClick={handleClose}>Buy Used car</h6></Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/post_ad'}   ><h6 className='mx-3  text-dark' style={{ cursor: "pointer" }} onClick={handleClose}>Sell your car</h6></Link>
                                                {
                                                    isLogin ? <Link to={'/user_profile'}><i class="fa-solid fa-user-tie fa-2xl " style={{ color:'black' }}
                                                    onClick={handleClose}></i></Link>
                                                        :
                                                        <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleShow(); }}>
                                                            <Authenticate isFixed={true}/>
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