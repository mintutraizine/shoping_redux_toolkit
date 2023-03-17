import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Grid,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";

import imagepaths from "../../static/imagepaths";
import { Link } from "react-router-dom";
//import Modal from "react-modal";
import React, { useState, useEffect, useCallback } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
//import OtpInput from "react18-input-otp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 720,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};
const SignupScreen = () => {
  //const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [numInputs, setnumInputs] = useState(4);

  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  console.log(timer);

  const resetTimer = () => {
    // if (!timer) {
    setTimer(30);
    //}
  };

  const onSubmit = () => {
    //alert(OTP);
    alert("hello");
  };

  return (
    <Box
      // maxHeight={450}
      sx={{
        flexGrow: 1,
        maxWidth: 800,
        //backgroundColor: "red",
        margin: "auto",
        marginTop: 4,
        border: "1 px solid black",
        boxShadow: 8,
        marginBottom: 8,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            // sx={{ backgroundColor: "lightgrey" }}
            //height={400}

            //alignItems="center"
            justifyContent={"center"}
            display="flex"
            flexDirection={"column"}
            paddingRight={6}
            paddingLeft={6}
          >
            <Typography
              fontFamily={"inter"}
              fontWeight={"500"}
              fontSize={"25px"}
              fontStyle={"normal"}
              lineHeight={"120%"}
              color={"#222222"}
              marginTop={2}
              textAlign="center"
            >
              Welcome to VIBEWORLD
            </Typography>
            <Typography
              fontSize={"20px"}
              fontWeight={"500"}
              fontFamily={"inter"}
              fontStyle={"normal"}
              color={"#D9AC5D"}
              sx={{ cursor: "pointer" }}
            >
              Create Vibe World Account
            </Typography>
            <Typography
              variant="h8"
              align="left"
              marginTop={1}
              marginBottom={1}
              fontWeight={400}
              fontSize={"12px"}
            >
              Full Name
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter name"
              size="small"
              // fontSize={"14px"}
            />
            <Typography
              variant="h8"
              align="left"
              marginTop={1}
              marginBottom={1}
              fontWeight={400}
              fontSize={"12px"}
            >
              Mobile Number
            </Typography>
            <Stack display={"flex"} flexDirection="row">
              <Stack>
                <TextField
                  variant="outlined"
                  placeholder="+1"
                  size="small"
                  // fontSize={"14px"}
                  style={{ width: 60 }}
                />
              </Stack>
              <Stack style={{ marginLeft: 10 }}>
                <TextField
                  variant="outlined"
                  placeholder=" Enter number"
                  size="small"
                  // fontSize={"14px"}
                />
              </Stack>
            </Stack>
            <Typography
              variant="h8"
              align="left"
              marginTop={1}
              marginBottom={1}
              fontWeight={400}
              fontSize={"12px"}
            >
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter email"
              size="small"
              // fontSize={"14px"}
            />
            <Stack display={"flex"} flexDirection="row" marginTop={2}>
              <Stack>
                <Typography
                  variant="h8"
                  align="left"
                  fontWeight={400}
                  fontSize={"12px"}
                  marginBottom={1}
                >
                  Password
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="password"
                  size="small"
                  // fontSize={"14px"}
                />
              </Stack>
              <Stack style={{ marginLeft: 10 }}>
                <Typography
                  variant="h8"
                  align="left"
                  fontWeight={400}
                  fontSize={"12px"}
                  marginBottom={1}
                >
                  Confirm Password
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="password"
                  size="small"
                  // fontSize={"14px"}
                />
              </Stack>
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9AC5D",
                marginTop: 3,
                color: "#374256",
              }}
            >
              <Typography fontSize={"14px"}>Create Vibe World</Typography>
            </Button>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              margin="auto"
              marginTop={5}
            >
              <Typography fontSize={12}>Don’t have an account ? </Typography>
              <Typography
                fontSize={12}
                color="#D9AC5D"
                component={Link}
                to="/CustomModal/OtpScreen"
                // sx={{ cursor: "pointer" }}
              >
                Create Vibe World Account
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex">
            <img
              src={imagepaths.otpBackground}
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupScreen;
