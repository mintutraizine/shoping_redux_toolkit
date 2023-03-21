import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import OtpScreen from "../../pages/OtpScreen/OtpScreen";
import SignInScreen from "../../pages/SignInscreen/SignInScreen";
import SignupScreen from "../../pages/SignupScreen/SignupScreen";

const CustomModal = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const {status,modalScreeenName} = useSelector((state) => state.loginmodal);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={status}
        //onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: "65%",
            //maxWidth: 740,
            // margin: "auto",
            // marginTop: 6,
            border: "1 px solid black",

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: 720,
            // bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
            backgroundColor: "white",
          }}
        >
         {modalScreeenName==='login'?<SignInScreen/>:null}
         {modalScreeenName==='signup'?<SignupScreen/>:null}
         {modalScreeenName==='otpscreen'?<OtpScreen/>:null}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
