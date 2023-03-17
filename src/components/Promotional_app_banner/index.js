import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Promotional_app_banner() {
    return (
        <Box className='banner-cont2' sx={{ position: "relative", zIndex: "-1" }}>
            <h1 style={{ color: "white", padding: "50px 20px 10px 50px" }}>Turpis donec ut velit</h1>
            <Typography sx={{ padding: "10px 20px 10px 50px", width: "50%" }} color="white">consectetur adipiscing elit. Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet. </Typography>
            <Button sx={{
                fontSize: "12px",
                padding: "10px 80px",
                outline: "none",
                borderRadius: "4px",
                border: "none",
                margin: "10px 20px 50px 50px",
                backgroundColor: "white",
                color: "black",

            }}>Shop Now</Button>
        </Box>
    )
}

export default Promotional_app_banner;