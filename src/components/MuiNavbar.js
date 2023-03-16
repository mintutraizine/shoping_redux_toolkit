import React, { useState } from "react";
import {
  AppBar,
  Button,
  Stack,
  Avatar,
  CardMedia,
  useTheme,
  useMediaQuery,
  Grid,
  Tabs,
  Tab,
  FormControl,
  Select,
  MenuItem,
  Badge,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import imagepaths from "../static/imagepaths";
//import vibelogo from '../static/images/vibe_logo.png'
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DrawerCompoenent from "./DrawerCompoenent";
//import { Stack } from '@mui/system';
const MuiNavbar = ({ navitems }) => {
  const itemQuantity = useSelector((state) => state.cart);
  const [countyName, setcountyName] = React.useState("");
  const items = useSelector((state) => state.cart);
  const [tabvalue, settabValue] = useState(0);
  const theme = useTheme();
  const isScreenSizematch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(theme);
  console.log(isScreenSizematch);

  //chnage country
  const handleCountryChange = (event) => {
    setcountyName(event.target.value);
  };
  return (
    <Box sx={{ position: "sticky", top: 0,zIndex:2 }}>
      <AppBar
        position="static"
        sx={{
          height: { xs: 70, sm: 80, md: 90, lg: 90 },
          justifyContent: "center",
          backgroundColor: "#2E354D",
        }}
      >
        <Toolbar>
          {isScreenSizematch ? (
            <>
            <Stack direction={'row'} sx={{alignItems:'center',justifyContent:'space-between',width:'100%',}}>
              <Stack direction={'row'}>
            <DrawerCompoenent draweritems={navitems}  />
              {" "}
              <CardMedia
                component="img"
                sx={{
                  height: 34,
                  width: 53,
                  maxHeight: { xs: 72, md: 72 },
                  maxWidth: { xs: 110, md: 110 },
                }}
                src={imagepaths.vibe_app_logo}
              />
              </Stack>

               <Badge
                    sx={{ m: 1 }}
                    badgeContent={itemQuantity.length}
                    color="primary"
                  >
                    <IconButton
                      component={Link}
                      to={{
                        pathname: "/cart",
                      }}
                      sx={{ color: "white" }}
                    >
                      <ShoppingCartCheckoutIcon />
                    </IconButton>
                  </Badge>
                  </Stack>
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 61,
                    width: 105,
                    maxHeight: { xs: 72, md: 72 },
                    maxWidth: { xs: 110, md: 110 },
                  }}
                  src={imagepaths.newLogo}
                />
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  value={tabvalue}
                  textColor="inherit"
                  indicatorColor="secondary"
                  onChange={(e, val) => {
                    settabValue(val);
                  }}
                >
                  {navitems.map((item, index) => (
                    <Tab
                      sx={{ textTransform: "none" }}
                      component={Link}
                      to={{
                        pathname: item.Path,
                      }}
                      key={index}
                      label={item.ScreenName}
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Badge
                    sx={{ m: 1,marginLeft:'auto' }}
                    badgeContent={itemQuantity.length}
                    color="primary"
                  >
                    <IconButton
                      component={Link}
                      to={{
                        pathname: "/cart",
                      }}
                      sx={{ color: "white" }}
                    >
                      <ShoppingCartCheckoutIcon />
                    </IconButton>
                  </Badge>

                  <FormControl size="small" sx={{ m: 1, minWidth: 80 }}>
                    <Select
                      inputProps={{ "aria-label": "Without label" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={countyName}
                      onChange={handleCountryChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    component={Link}
                    to="/SignInScreen"
                    sx={{
                      m: 1,
                      textTransform: "none",
                      backgroundColor: "#D9AC5D",
                      color: "white",
                      width: 100,
                      height: 40,
                    }}
                    size="small"
                  >
                    Sign In
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MuiNavbar;
