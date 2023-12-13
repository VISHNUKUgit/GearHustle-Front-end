import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);




function Appointment() {
    const [branch,setBranch]=useState("")
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const storedUser = sessionStorage.getItem("currentUser");
    const user = JSON.parse(storedUser);

    const handleClose = () => setShow(false)

    const handleNext =()=>{
        if (!branch||!selectedDate||!selectedTime) {
            toast.warning("please Fill all")
        }else{
            setShow(false)
        MySwal.fire({
            title: `Hi ${user.username?user.username:""}`,
            html: `Your appointment was booked at ${branch ? branch :""} <br> on ${selectedDate ? selectedDate:""}, Time: ${selectedTime ? selectedTime:""}.<br>A confirmation email has been sent to ${user.email?user.email:""}.<br>Thank You`,
            icon: "success",
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                // If the user clicked "OK," perform the navigation here
                navigate('/post_ad');
            }
        });
        }
    }

    const handleShow = () => setShow(true);
    

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    return (
        <>
            <div onClick={handleShow}>
                <h5 className='my-0 fw-bolder text-light'>BOOK APPOINTMENT</h5>
                <p className=' mb-0 text-light' style={{ fontSize: "15px" }} >For a free inspection</p>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>When You Want To Sell Your Car ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group mt-1">
                        <label for="exampleInputEmail1">BRANCH</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Branch Name" onChange={(e)=>setBranch(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="datepicker">DATE</label>
                        <input
                            className='form-control'
                            type="date"
                            id="datepicker"
                            name="datepicker"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="timepicker">TIME</label>
                        <input
                            className='form-control'
                            type="time"
                            id="timepicker"
                            name="timepicker"
                            value={selectedTime}
                            onChange={handleTimeChange}
                        />

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn text-light' onClick={handleNext} style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }}>
                        Book Appointment
                    </button>

                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default Appointment