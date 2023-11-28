import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

function AddCar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button class=" w-100 btn btn-primary text-center" style={{ borderRadius: '0px' }} onClick={handleShow}>
        <h5>Start</h5>
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className='col-lg-5'>
              upload mininum 3 images <br />
              <div> 1.<input  type="file" name="" id="carImg1" /></div>
            <div>2.<input  type="file" name="" id="carImg2" /></div>
            <div>3.<input  type="file" name="" id="carImg3" /></div>
            
            </div>
            <div className='col-lg-7'>
              <div className='d-flex flex-column'>
                <TextField id="standard-basic" label="Model ex:toyota" variant="standard" />
                <TextField id="standard-basic" label="Distance travled in KM" variant="standard" />
                <TextField id="standard-basic" label="Car option" variant="standard" />
                <TextField id="standard-basic" label="Engine Size" variant="standard" />
                <TextField id="standard-basic" label="Year" variant="standard" />
                <TextField id="standard-basic" label="Transmission" variant="standard" />
                <TextField id="standard-basic" label="Seats" variant="standard" />
                <TextField id="standard-basic" label="Location" variant="standard" />
                <TextField id="standard-basic" label="Expecting price" variant="standard" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCar1;