import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { useDispatch } from 'react-redux';
import { enter } from '../Redux/slice';
import Spinner from 'react-bootstrap/Spinner';

function Authenticate({ isFixed, text }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [registerORlog, setRegisterORlog] = useState(true);
  const isRegisterForm = registerORlog;

  const formchange = () => {
    setRegisterORlog(!registerORlog);
  }

  // REGISTER API CALL
  const handleRegisterAPI = async (e) => {
    e.preventDefault();

    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      toast.error("Please fill in all fields for registration.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsLoading(true);

      try {
        const result = await registerAPI(userDetails);

        if (result.status === 200) {
          toast.success("Registration was successful. Please login.", {
            position: toast.POSITION.TOP_CENTER,
          });

          setuserDetails({
            username: "",
            email: "",
            password: ""
          });

          formchange();
        } else {
          toast.error(`Error: ${result.response.data}`, {
            position: toast.POSITION.TOP_CENTER,
          });

          setuserDetails({
            username: "",
            email: "",
            password: ""
          });
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error(`Registration failed: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
  }

  // LOGIN API CALL
  const handleLoginAPI = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.info("Please fill in all fields");
    } else {
      setIsLoading(true);

      try {
        const result = await loginAPI(userDetails);

        if (result.status === 200) {
          sessionStorage.setItem("currentUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", JSON.stringify(result.data.token));

          setuserDetails({
            username: "",
            email: "",
            password: ""
          });

          toast.success("Login successful!");
          navigate('/');
          dispatch(enter());
          handleClose();
        } else {
          toast.error(`Login failed: ${result.response.data}`);
          handleClose();
          setuserDetails({
            username: "",
            email: "",
            password: ""
          });
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error(`Login failed: ${error}`);
        handleClose();
        setuserDetails({
          username: "",
          email: "",
          password: ""
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <div onClick={handleShow}>
        {text ? <span className='fw-bold'>{text}</span> : <i className="fa-solid fa-user-tie fa-2xl" style={{ color: isFixed ? 'black' : 'white', cursor: 'pointer' }}></i>}
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
          <div className="modal-body d-flex flex-column">
            <h2 className='fw-bolder text-center'>{isRegisterForm ? 'Register' : 'Login'}</h2>
            <form className='d-flex flex-column' onSubmit={isRegisterForm ? handleRegisterAPI : handleLoginAPI}>
              {isRegisterForm &&
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  value={userDetails.username}
                  onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })}
                />
              }
              <TextField
                
                label="Email"
                type='email'
                variant="standard"
                value={userDetails.email}
                onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })}
              />
              <TextField
                
                label="Password"
                variant="standard"
                type='password'
                value={userDetails.password}
                onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })}
              />
              <button
                type="submit"
                className={`fw-bolder btn btn-primary my-3 ${isLoading ? 'disabled' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className='d-flex justify-content-center align-items-center'>
                  <Spinner animation="border" />  Loading...
                  </div>
                ) : (
                  isRegisterForm ? 'Register' : 'Log-in'
                )}
              </button>
            </form>

          </div>
        </Modal.Body>

        <Modal.Footer>
          {!isRegisterForm ?
            <div>
              <p>New user? Click here to <Link to={'/register'} data-bs-dismiss="modal"><div onClick={formchange}>Register</div></Link></p>
            </div>
            :
            <div>
              <p>Already have an account? Click here to <Link to={'/login'} data-bs-dismiss="modal"><div onClick={formchange}>Login</div></Link></p>
            </div>
          }
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default Authenticate;
