import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Modal from 'react-bootstrap/Modal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function Authenticate({isFixed }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [registerORlog,setRegisterORlog] = useState(false)
    const isRegisterForm = registerORlog 
    const formchange = ()=>{
        setRegisterORlog(!registerORlog)
    }


    return (


        <div>

      <div  onClick={handleShow}>
      <i class="fa-solid fa-user-tie fa-2xl " style={{ color: isFixed ? 'black' : 'white',cursor:'pointer' }}></i>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="modal-body d-flex flex-column">
                            <h2 className='fw-bolder text-center'>{isRegisterForm ? 'Register' : 'Login'}</h2>
                            {
                                isRegisterForm ?
                                    <TextField id="standard-basic" label="User name" variant="standard" /> : ''
                            }
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <TextField id="standard-basic" label="Password" variant="standard" />
                            <span className='fw-bolder btn btn-primary my-3'>{isRegisterForm ? 'Register' : 'Log-in'}</span>

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
        </div>



    )
}

export default Authenticate