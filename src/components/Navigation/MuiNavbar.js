import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import CountryDropdown from 'country-dropdown-with-flags-for-react'; 
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
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DrawerCompoenent from "./DrawerCompoenent";
import imagepaths from "../../static/imagepaths";
import "./style.css";
import { changeScreenName, openmodal } from "../../store/loginModalSlice";
const MuiNavbar = ({ navitems }) => {
  const itemQuantity = useSelector((state) => state.cart);
  const [countyName, setcountyName] = React.useState("");
  const navigate=useNavigate();
  const items = useSelector((state) => state.cart);
  const [tabvalue, settabValue] = useState(0);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isScreenSizematch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(theme);
  console.log(isScreenSizematch);

  const [selected, setSelected] = useState("");
  //chnage country
  const handleCountryChange = (event) => {
    setcountyName(event.target.value);
  };

  const callSignInModal=()=>{
    dispatch(openmodal())
    dispatch(changeScreenName('login'));
  }
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
              <Stack direction={'row'} sx={{alignItems:'center',m:1}}>
              <Button
                    component={Link}
                    to="/SignInScreen"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#D9AC5D",
                      color: "white",
                      width: 50,
                      height: 30,
                    }}
                    size="small"
                  >
                    Sign In
                  </Button>
               <Badge
                   
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

                  <FormControl size="small" sx={{ m: 1,width:60 }}>
                    {/* <Select
                      inputProps={{ "aria-label": "Without label" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={countyName}
                      onChange={handleCountryChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select> */}
                    {/* <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                    /> */}
                    <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS'  value=""></CountryDropdown>  
                  </FormControl>
                  <Button
                   
                   onClick={()=>{callSignInModal()}}
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
