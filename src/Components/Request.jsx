import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getOwnerDetails } from '../Services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Request({uploderId}) {
    // get uploder Details
    const [uploderData,setUploderData] = useState("")
    useEffect(()=>{
        const fetchUploderData= async()=>{
            
                
            try {
                const token = sessionStorage.getItem("token")
                const reqHeader = {
                    "Content-Type": "multipart/from-data",
                    "Authorization": `Bearer ${token}`}

                const result = await getOwnerDetails(uploderId,reqHeader)
                if(result.status===200){
                    setUploderData(result.data[0])
                }
            } catch (error) {
                console.log(error);
            }
            
            
        }
        fetchUploderData()
    },[])
    // console.log("uploderData:",uploderData);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
    <button  className='btn mt-3 text-center fw-bold w-100' style={{ backgroundColor: '#A8C82B', borderBottom: "3px solid #748a21" }} onClick={handleOpen}>REQUEST TO TEST DRIVE</button>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {uploderData?uploderData.username:""}
          </Typography>
          <Typography className='d-flex flex-column' id="transition-modal-description" sx={{ mt: 2 }}>
            Email:{uploderData?uploderData.email:""}
            <div className='d-flex'>Mob:<a href={`tel:${uploderData?uploderData.mob:""}`}>{uploderData?uploderData.mob:""}</a></div>
            Whatapp:{uploderData?uploderData.whatsapp:""}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
  )
}

export default Request