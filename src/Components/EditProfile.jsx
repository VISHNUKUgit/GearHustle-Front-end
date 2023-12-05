import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import { BASE_URL } from "../Services/baseUrl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfileAPI } from '../Services/allAPI';
import { useDispatch } from 'react-redux';
import { profileUpdated } from '../Redux/slice';

function EditProfile({ userData }) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [profileData, setProfileData] = useState({
        username: "",
        email: "",
        password: "",
        profile: "",
        mob:"",
        whatsapp: ""
    })
    useEffect(()=>{
        setProfileData({...profileData,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            profile: userData.profile,
            mob: userData.mob,
            whatsapp: userData.whatsapp})
            setpreview("")
    },[show])

    const [preview, setpreview] = useState("")
    // console.log(profileData);
    

    // update function 
    const handleUpdateProfile = async () => {
        const {  username,
        email,
        password,
        profile,
        mob,
        whatsapp } = profileData
        // console.log(username,
        //     email,
        //     password,
        //     profile,
        //     mob,
        //     whatsapp);
        //     console.log(preview);
        if (!username || !mob||!whatsapp) {
            
            toast.error("please fill all")
        }
        else {
            const reqBody = new FormData()

            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("whatsapp",whatsapp)
            reqBody.append("mob",mob)
            preview ? reqBody.append("profile", preview) : reqBody.append("profile", userData.profile)
console.log("api",preview);
console.log("api",userData.profile);
            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/from-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateProfileAPI(reqBody,reqHeader)
                // console.log("api",result);
                if (result.status === 200) {
                    sessionStorage.setItem("currentUser", JSON.stringify(result.data))
                    // console.log(result);
                    setShow(!show)
                    toast.success("updated successfully")
                    dispatch(profileUpdated())

                } else {
                    setShow(!show)
                    console.log(result.response.data);
                }
            } else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateProfileAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    sessionStorage.setItem("currentUser", JSON.stringify(result.data))
                    setShow(!show)
                    
                    toast.success("updated successfully")
                    dispatch(profileUpdated())

                } else {
                    setShow(!show)
                    console.log(result.response.data);
                }

            }
        }
    }
    // console.log(`${BASE_URL}/images/profile${profileData.profile}`);
    return (
        <>
            < div onClick={handleShow}>
                EditProfile
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>EditProfile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <label htmlFor="proIMG" style={{cursor:'pointer'}}>
                        <input style={{ display: 'none' }} type="file" name="" id="proIMG" onChange={(e)=>setpreview(e.target.files[0])} />
                        <div >
                            {
                                profileData.profile ? preview ? <img className='w-100' style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={`${preview ? URL.createObjectURL(preview) : ``}`} alt="" /> :
                                    <img className='w-100' style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={`${BASE_URL}/images/profile/${profileData.profile}`} alt="" />
                                    :                                                                                                                           
                                    preview ? <img className='w-100' style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={`${preview ? URL.createObjectURL(preview) : ``}`} alt="" /> :
                                        <img className='w-100' style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nvlmwygLKlmp7aC6rEIPSgNEcTLbi1TV5P1gVU-LSwImRRp9CzMZywB1PPC9JjeFWNU&usqp=CAU" alt="" />

                            }
                        </div>
                    </label>
                    <TextField id="outlined-basic" label="username" className='mt-2' variant="outlined" value={profileData && profileData.username} onChange={(e) => setProfileData({ ...profileData, username: e.target.value })} />
                    <TextField id="outlined-basic" label="mob" className='mt-2' variant="outlined" value={profileData && profileData.mob} onChange={(e) => setProfileData({ ...profileData, mob: e.target.value })} />
                    <TextField id="outlined-basic" label="whatsapp" className='mt-2' variant="outlined" value={profileData && profileData.whatsapp} onChange={(e) => setProfileData({ ...profileData, whatsapp: e.target.value })} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-warning' onClick={handleUpdateProfile}>
                        Upadte
                    </Button>

                </Modal.Footer>
            </Modal>
            <ToastContainer/>
        </>
    );
}

export default EditProfile;