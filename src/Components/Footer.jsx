import React, { useState } from 'react'
import a from "../images/Social-PNG-Icons/Facebook.png";
import b from "../images/Social-PNG-Icons/Instagram.png";
import c from "../images/Social-PNG-Icons/Linkedin.png";
import d from "../images/Social-PNG-Icons/Telegram.png";
import e from "../images/Social-PNG-Icons/Twitter.png";
import f from "../images/Social-PNG-Icons/Whatsapp.png";
function Footer() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });
    const image = [ a, b, c, d, e, f ]
    return (
        <>
            {
                screenSize > 600 ?
                    <div className='d-flex flex-column bg-primary py-3 justify-content-center align-items-center w-100'>
                        <div className='w-100'>
                            <hr />
                        </div>
                        <div className='d-flex justify-content-evenly w-100'>


                            <div style={{ width: "350px" }} className="website">

                                <h3>

                                    GearHustle.com
                                </h3>
                                <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                                <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                                <p>Currently v5.2.3.</p>
                            </div>
                            <div style={{ width: "200px" }}>
                                <h4>Links</h4>
                                <h5>
                                    Home
                                </h5>
                                <h5>
                                    Buy Used cars
                                </h5>
                                <h5>
                                    Sell your car
                                </h5>
                            </div>
                            <div style={{ width: "200px" }}>
                                <h4>Guides</h4>
                                <h5>React</h5>
                                <h5>React Bootstrap</h5>
                                <h5>Routing</h5>
                            </div>
                            <div>
                                <h4>Search</h4>
                                <></>

                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <h3 className='text-light text-center'>FOLLOW US ON</h3>
                            <div>
                                {image.map((imageName, index) => (
                                    <img className='border mx-1 border-dark' key={index} src={imageName} alt={`Image ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                        <br />
                        <p>Copyright © 2023 All Rights Reserved by
                        GearHustle.com.<span className='text-warning'>(Always GearHustle.com)</span></p>
                    </div> :
                    <div className='d-flex flex-column bg-primary py-3 justify-content-center align-items-center w-100'>
                        <div className='w-100 container'>
                            <hr />
                        </div>
                        <div className='w-100 d-flex justify-content-center'>
                            <div className='w-50'>
                                <h3 className='text-light'>
                                    GearHustle.com
                                </h3>
                                <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                                <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                                <p>Currently v5.2.3.</p>
                            </div>
                            <div className='w-25 d-flex flex-column'>
                                <div >
                                    <h4 className='text-light'>Links</h4>
                                    <h6>
                                        Home
                                    </h6>
                                    <h6>
                                        Buy Used cars
                                    </h6>
                                    <h6>
                                        Sell your car
                                    </h6>
                                </div>
                                <div>
                                    <h4 className='text-light'>Guides</h4>
                                    <h6>React</h6>
                                    <h6>React Bootstrap</h6>
                                    <h6>Routing</h6>
                                </div>
                            </div>
                        </div>
                        <div className='w-100 container'>
                            <hr />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <h3 className='text-light text-center'>FOLLOW US ON</h3>
                            <div>
                                {image.map((imageName, index) => (
                                    <img className='border mx-1 border-dark' key={index} src={imageName} alt={`Image ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                        <p>Copyright © 2023 All Rights Reserved by<br/>
                        GearHustle.com.<span className='text-warning'>(Always GearHustle.com)</span></p>
                    </div>
            }
        </>
    )
}

export default Footer