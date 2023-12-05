import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addAdAPI } from '../Services/allAPI';

function AddCar1() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setCarDetails({
      model: "",
      distance: "",
      option: '',
      size: '',
      year: '',
      transmission: '',
      seats: "",
      location: "",
      price: "",
      images: []
    })
    setSelectedImages([])
  }
    ;

  const handleShow = () => setShow(true);
  const [carDetails, setCarDetails] = useState({
    model: "",
    distance: "",
    option: '',
    size: '',
    year: '',
    transmission: '',
    seats: "",
    location: "",
    price: "",
    images: []
  })


  const [selectedImages, setSelectedImages] = useState([]);


  const handleImageChange = (event) => {
    const files = event.target.files;

    // Convert the FileList object to an array and update the state

    const newSelectedImages = Array.from(files);
    setSelectedImages([...selectedImages, ...newSelectedImages]);


  };
  //   useEffect(()=>{
  // setCarDetails({...carDetails,images:selectedImages})
  //   },[selectedImages])


  // Add Ad
  const handleAddAd = async () => {
    // console.log("selectedImages:", selectedImages);
    // console.log("selectedImages:", selectedImages.length);
    // console.log(carDetails);
    const {
      model,
      distance,
      option,
      size,
      year,
      transmission,
      seats,
      location,
      price,
      images
    } = carDetails;

    // if (!model || !distance || !option || !size || !year || !transmission || !seats || !location || !price || !images.length) {

    //   toast.warning("Please fill in all the fields.");

    //   return;
    // }
    // else {
    const reqBody = new FormData()

    reqBody.append("model", model)
    reqBody.append("distance", distance)
    reqBody.append("option", option)
    reqBody.append("size", size)
    reqBody.append("year", year)
    reqBody.append("transmission", transmission)
    reqBody.append("seats", seats)
    reqBody.append("location", location)
    reqBody.append("price", price)
    // reqBody.append("images", images)
    for (let i = 0; i < selectedImages.length; i++) {
      reqBody.append("images", selectedImages[i])
    }

    // console.log("api",);
    console.log("api", ...reqBody);

    const token = sessionStorage.getItem("token")

    const reqHeader = {
      "Content-Type": "multipart/from-data",
      "Authorization": `Bearer ${token}`
    }
    const result = await addAdAPI(reqBody, reqHeader)
    // console.log("api",result);
    if (result.status === 200) {
      handleClose()
      console.log(result.data)
      // sessionStorage.setItem("currentUser", JSON.stringify(result.data))
      toast.success("Ad posted successfully")
      // dispatch(profileUpdated())

    } else {
      handleClose()
      console.log(result);
    }
    // }


  }

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
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className='col-lg-5'>
              <h1>Upload images</h1>
              <input className='btn btn-info' type="file" multiple onChange={handleImageChange} />

              {selectedImages.length > 0 && (
                <div>
                  <h2>Selected Images:</h2>
                  <div>
                    {selectedImages.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Selected ${index + 1}`}
                        style={{ maxWidth: '100%', marginRight: '10px' }}
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>
            <div className='col-lg-7'>
              <div className='d-flex flex-column'>
                <TextField id="standard-basic" label="Model ex:Swift" variant="standard" value={carDetails.model} onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })} />
                <TextField id="standard-basic" label="Distance travled in KM" variant="standard" value={carDetails.distance} onChange={(e) => setCarDetails({ ...carDetails, distance: e.target.value })} />
                <TextField id="standard-basic" label="Car option" variant="standard" value={carDetails.option} onChange={(e) => setCarDetails({ ...carDetails, option: e.target.value })} />
                <TextField id="standard-basic" label="Engine Size" variant="standard" value={carDetails.size} onChange={(e) => setCarDetails({ ...carDetails, size: e.target.value })} />
                <TextField id="standard-basic" label="Year" variant="standard" value={carDetails.year} onChange={(e) => setCarDetails({ ...carDetails, year: e.target.value })} />
                <TextField id="standard-basic" label="Transmission" variant="standard" value={carDetails.transmission} onChange={(e) => setCarDetails({ ...carDetails, transmission: e.target.value })} />
                <TextField id="standard-basic" label="Seats" variant="standard" value={carDetails.seats} onChange={(e) => setCarDetails({ ...carDetails, seats: e.target.value })} />
                <TextField id="standard-basic" label="Location" variant="standard" value={carDetails.location} onChange={(e) => setCarDetails({ ...carDetails, location: e.target.value })} />
                <TextField id="standard-basic" label="Expecting price" variant="standard" value={carDetails.price} onChange={(e) => setCarDetails({ ...carDetails, price: e.target.value })} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddAd}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default AddCar1;