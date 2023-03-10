import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

import imagepaths from "../../static/imagepaths";
const SignInScreen = () => {
  return (
    <Box
      // maxHeight={450}

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
            paddingLeft={6}
          >
            <Typography
              fontFamily={"inter"}
              fontWeight={"500"}
              fontSize={"28px"}
              fontStyle={"normal"}
              lineHeight={"120%"}
              color={"#222222"}
              marginTop={4}
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
              marginTop={1}
            >
              Vibe In
            </Typography>
            <Typography
              variant="h8"
              align="left"
              marginTop={2}
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
              fontSize={"16Px"}
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
              fontSize={"16Px"}
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
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
              spacing={1}
              alignItems="center"
              marginTop={4}
            >
              <Stack flexDirection={"row"} alignItems="center">
                <div
                  style={{
                    border: "1px solid #D9AC5D",
                    height: 12,
                    width: 12,
                    marginRight: 10,
                  }}
                ></div>
                <Typography
                  fontSize={"14px"}
                  fontWeight={400}
                  fontFamily={"inter"}
                >
                  Remember me
                </Typography>
              </Stack>
              <Typography
                color={"#D9AC5D"}
                fontSize={"14px"}
                fontWeight={400}
                fontFamily={"inter"}
                sx={{ textDecorationLine: "underline" }}
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
                  color: "#000000",
                  backgroundColor: "#000000",

                  borderColor: "#000000",
                  width: 100,
                  borderBlockColor: "#AAAAAA",
                }}
              />
              <div style={{ margin: 4 }}>or</div>
              <hr
                size={1}
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",

                  borderColor: "#000000",
                  width: 100,
                  borderBlockColor: "#AAAAAA",
                }}
              />
            </Stack>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              margin="auto"
              justifyContent={"space-around"}
              width={200}
              marginTop={3}
            >
              <Stack>
                <img
                  src={imagepaths.appleIcon}
                  style={{ width: 30, height: 30 }}
                />
              </Stack>
              <Stack>
                <img
                  src={imagepaths.googleIcon}
                  style={{ width: 20, height: 20 }}
                />
              </Stack>
              <Stack>
                <img
                  src={imagepaths.facebookIcon}
                  style={{ width: 30, height: 30 }}
                />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              margin="auto"
              marginTop={5}
              marginBottom={5}
            >
              <Typography fontSize={12}>Don’t have an account ? </Typography>
              <Typography
                fontSize={12}
                color="#D9AC5D"
                component={Link}
                to="/SignupScreen"
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

export default SignInScreen;
