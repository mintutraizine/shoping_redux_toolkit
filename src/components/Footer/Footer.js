import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import "./Footer.css";
import imagepaths from '../../static/imagepaths';


const col1 = ['Sign Up', 'About Us'];
const col2 = ['Showcase', 'Contact Us', 'Legal', 'Privacy Policy', 'Terms & Conditions'];
const col3 = ['Headphone', 'Merchandise', 'ABC'];

function Copyright() {
    return (
        <Box className="copyright-main-cont">
            <Box className="copyright-sec-cont">
                <Typography color="white" className="copyright-text">
                    {'Copyright © '}
                    {new Date().getFullYear()}
                    {'.'} All rights reserved {'.'}
                </Typography>
                <Box className="social-media-icons-cont">
                    <img src={imagepaths.Youtube_icon} className="cursor icon" alt="Youtube Icon" />
                    <img src={imagepaths.Instagram_icon} className="cursor icon" alt="Instagram Icon" />
                    <img src={imagepaths.Facebook_icon} className="cursor icon" alt="Facebook Icon" />
                    <img src={imagepaths.Twitter_icon} className="cursor icon" alt="Twitter Icon" />
                </Box>
            </Box>
        </Box >
    );
}

export default function Footer() {
    return (
        <Box className="footer-main-cont">
            <Box component="footer" className="footer-cont">
                <Grid container className="grid-main-cont">
                    <Grid item xs={12} sm={6} md={7}>
                        <Box className="footer-left-box">
                            <img src={imagepaths.VibeWorldLogo} className="VibeWorldLogo" alt="VibeWorldLogo" />

                            <Box>
                                <Typography
                                    className="footer-heading"
                                >Quick Links</Typography>
                                {col1.map((item, ind) => (
                                    <Typography
                                        className="footer-list"
                                    >
                                        {item}
                                    </Typography>
                                ))
                                }
                            </Box>

                            <Box>
                                <Typography
                                    className="footer-heading"
                                > Others</Typography>

                                {
                                    col2.map((item, ind) => (
                                        <Typography
                                            className="footer-list"
                                        >
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Box>

                            <Box>
                                <Typography
                                    className="footer-heading"
                                > Products</Typography>

                                {
                                    col3.map((item, ind) => (
                                        <Typography
                                            className="footer-list"
                                        >
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={5}>
                        <Box className="download-music-title">
                            Download Our Music app (Vibe World)
                        </Box>
                        <Box className="footer-icons-cont">
                            <Box className="google-play-icon-cont">
                                <img src={imagepaths.Google_Play_Icon} className="cursor google-play-icon" alt="Google Play Icon" />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                <img src={imagepaths.App_Store_Icon} className="cursor app-store" alt="App Store Icon" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Copyright />
            </Box>
        </Box>
    );
}