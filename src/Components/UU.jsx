import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
           <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                        
                                            <i class="fa-solid fa-bars fa-xl" style={{ color: "#000000" }}></i>

                                        
                                    </button> 

                                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                        <div className="offcanvas-header py-0 ">
                                            <h1 className="offcanvas-title" id="staticBackdropLabel">Menu</h1>

                                            <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>

                                        </div>
                                        <hr className="mt-0" />
                                        <div className="">
                                            <div className='d-flex flex-column justify-content-start '>
                                                <Link style={{ textDecoration: 'none' }} to={'/'}   ><h6 className="mx-3  text-dark" style={{ cursor: "pointer" }} data-bs-dismiss="offcanvas">Home</h6></Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/used_car'}   ><h6 className="mx-3  text-dark" style={{ cursor: "pointer" }} data-bs-dismiss="offcanvas">Buy Used car</h6></Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/post_ad'}   ><h6 className='mx-3  text-dark' style={{ cursor: "pointer" }} data-bs-dismiss="offcanvas">Sell your car</h6></Link>
                                            </div>
                                        </div>
                                    </div>
        </>
    );
}

export default Example;




import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button  onClick={handleShow}>
      <i class="fa-solid fa-user-tie fa-2xl " style={{ color: isFixed ? 'black' : 'white',cursor:'pointer' }}></i>
      </button>

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
                                        <p>New user? Click here to <Link to={'/register'} data-bs-dismiss="modal">Register</Link>  </p>
                                    </div> : <div>
                                        <p>Already have an account? Click here to <Link to={'/login'} data-bs-dismiss="modal">Login</Link>  </p>
                                    </div>
                            }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;