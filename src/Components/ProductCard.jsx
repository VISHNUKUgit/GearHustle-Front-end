import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { BASE_URL } from '../Services/baseUrl';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deleteAdAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { adDeleteStat } from '../Redux/slice';

function ProductCard({ data, dele }) {
  const dispatch = useDispatch();
    // mobile srceen
    // console.log(data);
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        setScreenSize(screenWidth)
    });
    const navigate = useNavigate()
    //delete button
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//   delete Ad
const handleAdDelete = async(id)=>{
    if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
    try {
        const response = await deleteAdAPI(id,reqHeader);
        
        if (response.status === 200) {
         toast.success("deleted successfully")
         dispatch(adDeleteStat())
          return response.data;
        } else {
          // Handle other HTTP status codes (e.g., show an error message)
          console.error(`Failed to delete ad. Status: ${response.status}`);
          return null;
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error deleting ad:', error);
        return null;
      }
    }
}
    return (
        <div style={{ cursor: 'pointer' }}>
            <div className='card shadow mb-4' >
                <div class=" row" >
                    <div class="col-12 col-lg-6">
                        <Carousel>
                            {data ? data.images.map((img) => (<Carousel.Item >
                                <img className='w-100' src={`${BASE_URL}/images/car/${img}`} />
                            </Carousel.Item>)) : ""}
                        </Carousel>
                    </div>

                    <div class={`col-12 col-lg-6 ${screenSize > 600 ? 'pe-4 pt-4' : 'px-4 pt-4'} `}>
                        <div className='d-flex justify-content-between'>
                            <h5 onClick={() => { navigate('/product', { state: { data } }) }}>{data ? data.model : ""}</h5>
                            <div className='d-flex'><h5>{data ? data.price : ""} <i class="fa-solid fa-indian-rupee-sign fa-sm"></i></h5>
                                {
                                    dele ? (
                                        <div>
                                        <Button
                                          id=""
                                          aria-controls={open ? 'basic-menu' : undefined}
                                          aria-haspopup="true"
                                          aria-expanded={open ? 'true' : undefined}
                                          onClick={handleClick}
                                        >
                                          <i class="fa-solid fa-ellipsis-vertical" style={{color: "#000000"}}></i>
                                        </Button>
                                        <Menu
                                          id="basic-menu"
                                          anchorEl={anchorEl}
                                          open={open}
                                          onClose={handleClose}
                                          MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                          }}
                                        >
                                          <MenuItem onClick={()=>handleAdDelete(data._id)}>Delete</MenuItem>
                                          
                                        </Menu>
                                      </div>
                                    ) : ""
                                }

                            </div>

                        </div>
                        <div onClick={() => { navigate('/product', { state: { data } }) }} className='row py-3'>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}> <i class="fa-solid fa-gauge-high fa-sm"></i> {data ? data.distance : ""}</span>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}><i class="fa-solid fa-car-side "></i> {data ? data.option : ""}</span>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}><i class="fa-regular fa-calendar"></i> {data ? data.year : ""}</span>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}><i class="fa-solid fa-earth-americas"></i> INDIA</span>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}><i class="fa-brands fa-superpowers"></i> {data ? data.size : ""}</span>
                            <span className='fw-bold col-6 col-lg-4' style={{ color: '#777' }}><i class="fa-solid fa-location-dot"></i> {data ? data.location : ""}</span>
                        </div>
                        <div className='d-flex justify-content-end pt-4' onClick={() => { navigate('/product', { state: { data } }) }}>
                            <h3>Gear<span className='text-warning'>Hustle</span>.com</h3>
                        </div>

                    </div>
                </div>
            </div>
<ToastContainer/>
        </div>
    )
}

export default ProductCard