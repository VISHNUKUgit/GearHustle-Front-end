import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { useDispatch } from 'react-redux'
import { enter } from '../Redux/slice';



function Authenticate({ isFixed, text }) {
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  //   const [isLogin, setIsLogin] = useState(true)
  // // check loged or not
  //   useEffect(()=>{
  //     if(sessionStorage.getItem("token"))
  //     {
  //         setIsLogin(true)
  //     }else{
  //         // setIsLogin(false)
  //     }
  // },[])
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [registerORlog, setRegisterORlog] = useState(false)
  const isRegisterForm = registerORlog
  const formchange = () => {
    setRegisterORlog(!registerORlog)
  }
  // REGISTER API CALL
  const handleRegisterAPI = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.error("Please fill in all fields for registration. !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else {

      const result = await registerAPI(userDetails)
      if (result.status === 200) {
        toast.success("Registration was successfull please login", {
          position: toast.POSITION.TOP_CENTER,
        });
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
        // console.log(result.data);
        formchange()
      }
      else {
        // console.log(result.response.data);
        toast.error(`error:${result.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })

      }
    }

  }

  // LOGIN API CALL
  const handleLoginAPI = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.info("Please fill in all fields");
    } 
    else 
    {
      try {
        const result = await loginAPI(userDetails);

        if (result.status === 200) {
          // console.log(result.data.existingUser);
          sessionStorage.setItem("currentUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", JSON.stringify(result.data.token));
          setuserDetails({
            username: "",
            email: "",
            password: ""
          })
          toast.success("Login successful!");
          navigate('/')
          dispatch(enter())
          handleClose()
        } else {
          toast.error(`Login failed: ${result.response.data}`);
          // console.log(result.response.data);
          handleClose()
          setuserDetails({
            username: "",
            email: "",
            password: ""
          })
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error(`Login failed: ${error}`);
        handleClose()
        setuserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  };


  return (


    <div>

      <div onClick={handleShow}>
        {text ? <span className='fw-bold'>{text}</span> : <i class="fa-solid fa-user-tie fa-2xl " style={{ color: isFixed ? 'black' : 'white', cursor: 'pointer' }}></i>}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="modal-body d-flex flex-column">
            <h2 className='fw-bolder text-center'>{isRegisterForm ? 'Register' : 'Login'}</h2>
            {
              isRegisterForm ?
                <TextField id="standard-basic" label="Username" variant="standard" value={userDetails.username} onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })} /> : ''
            }
            <TextField id="standard-basic" label="Email" variant="standard" value={userDetails.email} onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} />
            <TextField id="standard-basic" label="Password" variant="standard" type='password' value={userDetails.password} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} />
            <span onClick={isRegisterForm ? (e) => handleRegisterAPI(e) : (e) => handleLoginAPI(e)} className='fw-bolder btn btn-primary my-3'>{isRegisterForm ? 'Register' : 'Log-in'}</span>

          </div>
        </Modal.Body>
        <Modal.Footer>
          {
            !isRegisterForm ?
              <div>
                <p>New user? Click here to <Link to={'/register'} data-bs-dismiss="modal"><div onClick={formchange}>Register</div></Link>  </p>
              </div> : <div>
                <p>Already have an account? Click here to <Link to={'/login'} data-bs-dismiss="modal"><div onClick={formchange}>Login</div></Link>  </p>
              </div>
          }
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>



  )
}

export default Authenticate