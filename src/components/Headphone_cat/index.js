import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

function Headphone_cat() {
    return (
        <Box className='product-cont'>
            <h1 className="shop-title"><span className='text-dec'>Shop From <span className="span-title">Top Categories</span></span></h1>

            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Noisecancelinghp.png")} />
                    <Typography className='top-categ-text'>Noise Cancelling</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Wiredhp.png")} />
                    <Typography className='top-categ-text'>Wired</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Wirelesshp.png")} />
                    <Typography className='top-categ-text'>Wireless</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Gaminghp.png")} />
                    <Typography className='top-categ-text'>Gaming</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Noisecancelinghp.png")} />
                    <Typography className='top-categ-text'>Sports</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }}>
                    <img src={require("../../static/images/Gaminghp.png")} />
                    <Typography className='top-categ-text'>Wireless</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Headphone_cat;