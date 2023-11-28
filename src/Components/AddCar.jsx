import React from 'react'
import TextField from '@mui/material/TextField';

function AddCar() {
  return (
    <div>
        
<button type="button"  class=" w-100 btn btn-primary text-center" style={{borderRadius:'0px'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 <h5>Start</h5> 
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <div className="row">
            <div className='col-lg-5'>

            </div>
            <div className='col-lg-7'>
            <div className='d-flex flex-column'>
      <TextField id="standard-basic" label="Model" variant="standard" />
      <TextField id="standard-basic" label="Distance travled" variant="standard" />
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddCar