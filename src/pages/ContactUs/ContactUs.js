import React from "react";
import GoogleMapReact from "google-map-react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Container, Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import location from "../../static/images/Vector@2x.png";
import phonenumber from "../../static/images/Vector (1).png";
import email from "../../static/images/Vector (2).png";
import youtube from "../../static/images/Youtube.png";
import insta from "../../static/images/Instagram.png";
import facebook from "../../static/images/Shape.png";
import twitter from "../../static/images/Shape (1).png";
import bgdottedimg from "../../static/images/Group 70@2x.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./Style.css";

const containerStyle = {
  // width: "500px",
  width: "100%",
  height: "270px",
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const ContactUs = () => {

  const onLoad = (marker) => {
    console.log("marker: ", marker);
};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="contactus-top-box" sx={{ position: "relative" }}>
      <Box className="border">
        <Box className="contact-center">
          <Typography
            sx={{
              textDecoration: "underline",
              color: "#d9ac5d",
              fontWeight: 700,
              fontSize: "24px",
            }}
            className="contact"
          >
            Contact Us
          </Typography>
        </Box>

        <Box>
          <Typography
            className="message"
            sx={{
              marginLeft: "1px",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "24.2px",
              marginTop: "15px",
              fontFamily: "Inter",
            }}
          >
            Leave us a message
          </Typography>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{ position: "relative" }}
            >
              <Box className="contactus-bottom-bg-image">
                <img src={`${bgdottedimg}`} alt="" />
              </Box>
              <form className="contacus-form" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-info" sx={{ fontFamily: "Inter" }}>
                  Full Name
                </label>
                <input
                  {...register("FullName", { required: true })}
                  type="text"
                  placeholder="Enter name"
                  maxLength={100}
                  className="input-field"
                />
                {errors.FullName && (
                  <p className="errors">Name field is required!</p>
                )}

                <label className="form-info" sx={{ fontFamily: "Inter" }}>
                  Email Id
                </label>
                <input
                  {...register("EmailId", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  placeholder="Enter mail id"
                  maxLength={100}
                  className="input-field"
                />
                {errors.EmailId && (
                  <p className="errors">Email field is required!</p>
                )}

                <label className="form-info" sx={{ fontFamily: "Inter" }}>
                  Message
                </label>

                <textarea
                  rows="8"
                  cols="68"
                  {...register("Message", { required: true })}
                  placeholder="Enter Message"
                  className="message-box"
                  maxLength={200}
                />
                {errors.Message && (
                  <p className="errors">Message field is required!</p>
                )}
                <Box sx={{ textAlign: "center", marginTop: "30px" }}>
                  <Button
                    type="submit"
                    className="contact-Send-buttn"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "19.36px",
                      textAlign: "Center",
                      marginLeft: "Auto",
                      background: "#d9ac5d",
                      fontFamily: "Inter",
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="contactus-top-bg-image">
                <img src={`${bgdottedimg}`} alt="" />
              </Box>
              <Box
                className="img1-text"
                sx={{ display: "flex", marginTop: "37px" }}
              >
                <img alt="location-symbol" src={`${location}`} />
                <Typography sx={{ marginLeft: "10px", fontFamily: "Inter" }}>
                  4517 Washington Ave. Manchester, Kentucky 39495{" "}
                </Typography>
              </Box>
              <Box
                className="img2-text"
                sx={{ display: "flex", marginTop: "40px" }}
              >
                <img alt="phonenumber-symbol" src={`${phonenumber}`} />
                <Typography sx={{ marginLeft: "10px", fontFamily: "Inter" }}>
                  {" "}
                  +1-234-081-1236
                </Typography>
              </Box>
              <Box
                className="img3-text"
                sx={{ display: "flex", marginTop: "30px" }}
              >
                <img alt="email-symbol" src={`${email}`} />
                <Typography sx={{ marginLeft: "10px", fontFamily: "Inter" }}>
                  hello@info.com
                </Typography>
              </Box>
              <Box className="social-media">
                <Link href="https://www.youtube.com/" target="_blank">
                  <img
                    alt="youtube"
                    src={`${youtube}`}
                    className="social-media-icon"
                  />
                </Link>

                <Link href="https://www.instagram.com/" target="_blank">
                  <img
                    alt="instagram"
                    src={`${insta}`}
                    className="social-media-icon"
                  />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <img
                    alt="facebook"
                    src={`${facebook}`}
                    className="social-media-icon"
                  />
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                  <img
                    alt="twitter"
                    src={`${twitter}`}
                    className="social-media-icon"
                  />
                </Link>
              </Box>
              <Box>
                <Box className="contactus-map">
                 
                  <LoadScript googleMapsApiKey="">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={defaultCenter}
                      zoom={10}
                    >
                      <Marker onLoad={onLoad} position={defaultCenter} />
                    </GoogleMap>
                  </LoadScript>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
