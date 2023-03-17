import { Typography, Box, Grid, Button } from "@mui/material";
import { Stack } from "@mui/system";
import OTPInput, { ResendOTP } from "otp-input-react";
//import OtpInput from "react18-input-otp";
import React, { useState, useEffect, useCallback } from "react";
import imagepaths from "../../static/imagepaths";
import { useNavigate } from "react-router-dom";
import "./OtpScreen.css";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: "red",
//     },
//     root: {
//       flexGrow: 1,
//     },
//   })
// );

const OtpScreen = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [numInputs, setnumInputs] = useState(4);

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const [timer, setTimer] = useState(60);
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
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     maxWidth: 740,
    //     //  backgroundColor: "red",
    //     margin: "auto",
    //     marginTop: 6,
    //     border: "1 px solid black",
    //     boxShadow: 8,
    //   }}
    // >
    <Grid
      container
      sx={{ flexDirection: { xs: "column-reverse", md: "row", sm: "row" } }}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Box
          // sx={{ backgroundColor: "lightgrey" }}
          height={420}
          //   maxWidth={400}
          alignItems="center"
          // justifyContent={"center"}
          display="flex"
          flexDirection={"column"}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",

              //justifyContent: "space-between",
              display: "flex",

              width: "100%",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <img
              onClick={() => navigate(-1)}
              src={imagepaths.backIcon}
              style={{ height: 14, width: 14 }}
            />
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "16px", sm: "14px" },
                textAlign: "center",
                fontStyle: "normal",
                fontFamily: "Inter",
              }}
            >
              OTP Verification 1
            </Typography>
            <div></div>
          </Stack>

          <Typography
            sx={{
              //  fontSize: "18px",
              textAlign: "center",
              fontStyle: "normal",
              fontFamily: "Inter",
              fontWeight: "500",
              marginTop: 4,
              marginBottom: 3,
              fontSize: { xs: "10px", md: "14px", sm: "12px" },
            }}
          >
            We have sent a verification code <br />
            to +1-457-889-6587
          </Typography>

          <>
            <Box px={{ xs: 2, sm: 2, md: 7 }} className="OTPBox">
              <OTPInput
                inputClassName="active"
                value={otp}
                onChange={setOtp}
                OTPLength={4}
                otpType="any"
                disabled={false}
                inputStyles={{
                  border: "1px solid #D7D7D7",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "20px",
                  width: "43px",
                  height: "46px",
                  textAlign: "center",
                  alignSelf: "center",
                  marginTop: ".5rem",
                }}
                mx={{ xs: 3, sm: 3, md: 5 }}
              />
            </Box>
            {/* <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                isInputNum
                // separator={<span>-</span>}
                inputStyle={{
                  border: "1.5px solid #AAAAAA",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "20px",
                  width: "45px",
                  height: "48px",
                  textAlign: "center",
                  margin: 12,
                }}
                containerStyle={{}}
                focusStyle={{
                  outline: "none",
                  border: "1px solid  #D9AC5D",
                  borderRadius: "8px",
                }}
                //hasErrored={hasErrored}
                errorStyle="error"
                //  isSuccessed={isSuccessed}
                successStyle="success"
              /> */}

            <Button
              onClick={onSubmit}
              sx={{
                backgroundColor:
                  otp.length < numInputs ? "lightgrey" : "#D9AC5D",
                marginTop: 4,
                fontSize: "12px",
                color: "#374256",
                width: "80%",
                height: "30px",
                fontWeight: "500",
                textTransform: "none",
                height: "32px",
                "&:hover": {
                  backgroundColor: "#D9AC5D",
                },
              }}
              disabled={otp.length < numInputs}
            >
              Verify
            </Button>

            <Stack
              sx={{
                display: "flex",
                marginTop: 5,
                width: "80%",

                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Stack flexDirection="row">
                <Typography
                  sx={{
                    // fontSize: "14px",
                    fontSize: { xs: "8px", md: "12px", sm: "10px" },
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontFamily: "Inter",
                  }}
                >
                  Didn’t received OTP?
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    color: "#D9AC5D",
                    fontSize: { xs: "8px", md: "12px", sm: "10px" },
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontFamily: "Inter",
                    marginLeft: ".3rem",
                  }}
                  onClick={resetTimer}
                >
                  Resend Again
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: { xs: "8px", md: "12px", sm: "10px" },
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontFamily: "Inter",
                  }}
                >
                  0:{timer}
                </Typography>
              </Stack>
            </Stack>
          </>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box height={420} display="flex">
          <img
            src={imagepaths.otpBackground}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default OtpScreen;
