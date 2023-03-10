import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

import imagepaths from "../../static/imagepaths";
import { Link } from "react-router-dom";
const SignupScreen = () => {
  return (
    <Box
      //maxHeight={450}
      sx={{
        flexGrow: 1,
        maxWidth: 840,
        //  backgroundColor: "red",
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
            paddingLeft={2}
          >
            <Typography
              fontFamily={"inter"}
              fontWeight={"500"}
              fontSize={"25px"}
              fontStyle={"normal"}
              lineHeight={"120%"}
              color={"#222222"}
              marginTop={2}
              //textAlign="center"
            >
              Welcome to VIBEWORLD
            </Typography>
            <Typography
              fontSize={"20px"}
              fontWeight={"500"}
              fontFamily={"inter"}
              fontStyle={"normal"}
              color={"#D9AC5D"}
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
                />
              </Stack>
              <Stack>
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
            <Typography
              variant="h8"
              align="left"
              marginTop={1}
              marginBottom={1}
              fontWeight={400}
              fontSize={"12px"}
            >
              Password
            </Typography>
            <TextField
              placeholder="Enter password"
              fontWeight={400}
              fontSize={"14px"}
              size="small"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9AC5D",
                marginTop: 3,
                color: "#374256",
              }}
            >
              <Typography fontSize={"14px"}>Vibe In</Typography>
            </Button>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              margin="auto"
              marginTop={3}
              component={Link}
              to="/OtpScreen"
            >
              <Typography fontSize={12}>Don’t have an account ? </Typography>
              <Typography fontSize={12} color="#D9AC5D">
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
