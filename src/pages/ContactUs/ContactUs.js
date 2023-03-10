import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Container, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import location from "../../static/images/Vector@2x.png"
import phonenumber from "../../static/images/Vector (1).png"
import email from "../../static/images/Vector (2).png"
import youtube from "../../static/images/Youtube.png"
import insta from "../../static/images/Instagram.png"
import facebook from "../../static/images/Shape.png"
import twitter from "../../static/images/Shape (1).png"
import Map from "../../static/images/Rectangle 19.png"



import "./Style.css";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);
  
  return (
    <Container className="border">
      <Box className="contact-center">
        <Typography sx={{textDecoration: "underline"}} className="contact">
          Contact Us
        </Typography>
      </Box>
      <Box>
      <Typography className="message">Leave us a message</Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>

        <form onSubmit={handleSubmit(onSubmit)} >
          <label>Full Name:</label>
      <input {...register("FullName", { required: true, maxLength: 20 })} placeholder="Enter name" />
      {errors.FullName && <p>This field is required</p>}
      <label>Email Id:</label>
      <input {...register("Email Id", { pattern: /^[A-Za-z]+$/i })} placeholder="Enter mail id" />
      <label>Message:</label>
      <input {...register("Message")} placeholder="Enter Message" className="message-box"/>
      {/* <input type="send" /> */}
    </form>
          {/* <form>
  <label>Full Name:</label>
  <input type="text" name="name" placeholder="Enter name" />
  <label>Email Id:</label>
  <input type="Email" name="Email" placeholder="Enter email id" />
  <label>Message:</label>
  <input type="text" name="Message" placeholder="Enter message" />
</form> */}
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // '& > :not(style)': { m: 1 },
            }}
          >
            <Typography>Full Name</Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Enter Name" id="fullWidth" />
            </Box>
            <Typography>Email Id</Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Enter Email" id="fullWidth" />
            </Box>
            <Typography className="message">Message</Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Enter Message" id="fullWidth" />
            </Box>
          </Box> */}
          <Button className="Send" type="submit"> Send</Button>
        </Grid>
        <Grid item xs={6}>
          <Box className="img1-text">
          <img src={`${location}`} />
          <Typography style={{marginLeft:"10px"}}>4517 Washington Ave. Manchester, Kentucky 39495 </Typography>
          </Box>
          <Box className="img2-text">
          <img src={`${phonenumber}`}/>
          <Typography style={{marginLeft:"10px"}}> +1-234-081-1236</Typography>
          </Box>
          <Box className="img3-text">
          <img src={`${email}`}/>
          <Typography style={{marginLeft:"10px"}}>hello@info.com</Typography>
          </Box>
          <Box className="social-media">
          <img src={`${youtube}`} className="social-media-icon"/>
          <img src={`${insta}`} className="social-media-icon"/>
          <img src={`${facebook}`} className="social-media-icon"/>
          <img src={`${twitter}`} className="social-media-icon"/>
          </Box>
          <Box>
            <img src={`${Map}`} className="google-map"/>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
