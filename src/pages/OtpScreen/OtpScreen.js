import {
  Typography,
  Box,
  Paper,
  makeStyles,
  Grid,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from "react";
import imagepaths from "../../static/imagepaths";

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
  const [OTP, setOTP] = useState("");
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 800,
        //  backgroundColor: "red",
        margin: "auto",
        marginTop: 8,
        border: "1 px solid black",
        boxShadow: 8,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            // sx={{ backgroundColor: "lightgrey" }}
            height={400}
            //   maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            display="flex"
            flexDirection={"column"}
          >
            <Typography fontSize={"20px"} marginBottom={2}>
              OTP Verification
            </Typography>
            <Typography textAlign={"center"} marginBottom={3}>
              We have sent a verification code <br />
              to +1-457-889-6587
            </Typography>

            <>
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
              />
              <Button
                sx={{
                  backgroundColor: "#D9AC5D",
                  marginTop: 3,
                  fontSize: "16px",
                  color: "#374256",
                  width: "80%",
                  height: "30px",
                }}
              >
                Verify
              </Button>
              <Stack
                alignSelf={"flex-start"}
                flexDirection={"row"}
                display="flex"
                marginLeft={5}
                marginTop={5}
              >
                <Stack flexDirection="row">
                  <Typography fontSize={"14px"}>
                    Didn’t received OTP?{" "}
                  </Typography>
                  <Typography
                    sx={{ textDecoration: "underline", color: "#D9AC5D" }}
                    fontSize={"14px"}
                  >
                    Request Again
                  </Typography>
                </Stack>
                <Stack>
                  <Typography>tttt</Typography>
                </Stack>
              </Stack>
            </>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={400} display="flex">
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

export default OtpScreen;
