import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Grid,
  InputAdornment,
  endAdornment,
  Checkbox,
} from "@mui/material";

import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import imagepaths from "../../static/imagepaths";

const spanStyle = {
  padding: "20px",

  color: "#ffffff",
  marginTop: "50%",
};

const divStyle = {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // backgroundSize: "cover",s
};
const slideImages = [
  {
    // url: imagepaths.backgroundSlimage1iderImage,
    pic: imagepaths.image1,
    caption:
      "Proin gravida augue nec pellentesque luctus. Duis quis nisi nec elit gravida ultricies a eget magna. Sed justo ligula, maximus vitae lectus et,",
  },
  {
    // url: imagepaths.backgroundSliderImage,
    pic: imagepaths.image3,
    caption:
      "Proin gravida augue nec pellentesque luctus. Duis quis nisi nec elit gravida ultricies a eget magna. Sed justo ligula, maximus vitae lectus et,",
  },
  {
    // url: imagepaths.backgroundSliderImage,
    pic: imagepaths.image3,
    caption:
      "Proin gravida augue nec pellentesque luctus. Duis quis nisi nec elit gravida ultricies a eget magna. Sed justo ligula, maximus vitae lectus et,",
  },
];
const SignInScreen = () => {
  return (
    // <Box
    //   // maxHeight={450}
    //   sx={{
    //     flexGrow: 1,
    //     maxWidth: 800,
    //     //  backgroundColor: "red",
    //     margin: "auto",
    //     //marginTop: 4,
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
          display="flex"
          flexDirection={"column"}
          paddingLeft={6}
          paddingRight={6}
        >
          <img
            src={imagepaths.newLogo}
            style={{
              width: 80,
              height: 50,
              marginTop: 30,
              alignSelf: "center",
            }}
          />
          <div style={{ display: "flex", marginTop: 20, alignSelf: "center" }}>
            <Typography sx={SigninScreenStyle.titlestyle}>
              Welcome to
            </Typography>
            <Typography
              sx={[
                SigninScreenStyle.titlestyle,
                { marginLeft: 1, color: "#D9AC5D" },
              ]}
            >
              VIBEWORLD
            </Typography>
          </div>
          <Stack sx={SigninScreenStyle.rowStyle}>
            <img
              src={imagepaths.backIcon}
              style={{
                // height: { xs: 10, md: 15, sm: 12 },
                // width: { xs: 10, md: 15, sm: 12 },
                height: 15,
                width: 15,
                alignSelf: "center",
              }}
            />
            <Typography sx={SigninScreenStyle.title2Style}>
              Vibe in with email address
            </Typography>
          </Stack>
          <Typography sx={SigninScreenStyle.textfieldheading}>
            Email Address
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter email"
            size="small"
            inputProps={{
              style: {
                fontSize: { xs: "10px", md: "14px", sm: "12px" },
                fontWeight: "400",
                color: "#AAAAAA",
              },
            }}
          />
          <Typography sx={SigninScreenStyle.textfieldheading}>
            Password
          </Typography>
          <TextField
            placeholder="Enter password"
            size="small"
            inputProps={{
              style: {
                fontSize: { xs: "10px", md: "14px", sm: "12px" },
                fontWeight: "400",
                color: "#AAAAAA",
              },
              endAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <Button variant="contained" sx={SigninScreenStyle.signinButtonStyle}>
            <Typography sx={SigninScreenStyle.signintextStyle}>
              Vibe In
            </Typography>
          </Button>
          <Stack
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            spacing={1}
            alignItems="center"
            marginTop={3}
          >
            <Stack flexDirection={"row"} alignItems="center">
              <Checkbox
                sx={{
                  color: "#D9AC5D",
                  "&.Mui-checked": {
                    color: "#D9AC5D",
                  },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "8px", md: "12px", sm: "10px" },
                  color: "#222222",
                }}
              >
                Remember me
              </Typography>
            </Stack>
            <Typography
              sx={{
                textDecorationLine: "underline",
                fontWeight: "400",
                fontSize: { xs: "8px", md: "12px", sm: "10px" },
                color: "#D9AC5D",
              }}
            >
              Forgot password
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"center"}
            margin="auto"
            marginTop={2}
          >
            <hr
              size={1}
              style={{
                width: 100,
                borderColor: "#AAAAAA",
              }}
            />
            <div style={{ margin: 4 }}>or</div>
            <hr
              size={1}
              style={{
                width: 100,
                borderColor: "#AAAAAA",
              }}
            />
          </Stack>

          <Button
            // variant="contained"
            sx={SigninScreenStyle.continuebuttonotpStyle}
            component={Link}
            to="/CustomModal/OtpScreen"
          >
            <Typography sx={SigninScreenStyle.continuebuttontextotpStyle}>
              Continue with OTP
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundImage: `url(${imagepaths.backgroundSliderImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={imagepaths.crossIcon}
            style={{
              width: 20,

              position: "absolute",
              top: "25px",
              right: "25px",
            }}
          />
          {/* <img
            src={imagepaths.otpBackground}
            style={{ height: "100%", width: "100%" }}
          /> */}

          <Slide
            arrows={false}
            autoplay={true}
            indicators={3}
            transitionDuration={1000}
            duration={500}
          >
            {slideImages.map((slideImage, index) => (
              <div
                key={index}
                style={{
                  marginTop: "26%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={slideImage.pic}
                  style={{
                    width: 210,

                    // top: "25px",
                  }}
                />
                <Typography sx={SigninScreenStyle.captionStyle}>
                  {slideImage.caption}
                </Typography>
              </div>
            ))}
          </Slide>
        </Box>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default SignInScreen;
const SigninScreenStyle = {
  titlestyle: {
    fontFamily: "inter",
    fontWeight: "500",

    fontSize: { xs: "15px", md: "24px", sm: "18px" },
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  title2Style: {
    fontWeight: "600",

    marginLeft: 1,
    fontSize: { xs: "8px", md: "12px", sm: "10px" },
  },
  textfieldheading: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "Inter",
    marginTop: 1,
    fontSize: { xs: "8px", md: "12px", sm: "10px" },
  },
  signinButtonStyle: {
    backgroundColor: "#D9AC5D",
    marginTop: 3,
    color: "#374256",
    textTransform: "none",
  },
  signintextStyle: {
    fontWeight: "500",
    fontSize: { xs: "10px", md: "16px", sm: "12px" },
  },
  continuebuttonotpStyle: {
    color: "#374256",
    textTransform: "none",
    border: "1px solid #D9AC5D",
    marginBottom: "12%",
    marginTop: "5%",
  },
  continuebuttontextotpStyle: {
    fontSize: { xs: "8px", md: "12px", sm: "10px" },
    fontWeight: "500",
  },
  captionStyle: {
    //marginTop: "65%",
    color: "#ffffff",
    textAlign: "center",
    marginLeft: 3,
    marginRight: 3,
    alignSelf: "center",
    marginTop: "15%",
  },
};
