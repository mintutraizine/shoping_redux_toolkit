import { Button, Card, CardActions, CardContent, Grid, requirePropFactory, Slide, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts, fetch1, fetchProducts1 } from '../../store/productSlice';
import { STATUSES } from '../../store/productSlice';
import { Link } from "react-router-dom";
import imagepaths from '../../static/imagepaths';
import "./style.css";
import Box from '@mui/material/Box';
import ImageSlider from 'react-auto-image-slider';

const Products = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product);
    const { catedata } = useSelector((state) => state.product);

    console.log(data,"data");
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchProducts1());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <Box>
            {/* Banner1 */}
            <Box sx={{ position: "relative", zIndex: "-1" }}>
                <img src={imagepaths.headphoneBanner1} style={{ width: "100%", marginBottom: "50px" }} />
                <img src={require("../../static/images/headphone.png")} className="top-right-hp" />
            </Box>

            {/* <ImageSlider effectDelay={200} autoPlayDelay={2000}>
                <Slide>
                    <img alt="img2" src={imagepaths.headphoneBanner1} style={{ width: "100%",height:"100%" }} />
                </Slide>
                <Slide>
                    <img alt="img2" src={imagepaths.headphoneBanner1} style={{ width: "100%" }} />
                </Slide>
                <Slide>
                    <img alt="img1" src={imagepaths.headphoneBanner1} style={{ width: "100%" }} />
                </Slide>
            </ImageSlider> */}

            {/* Shop From Top Categories */}
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

                {/* Shop From New Release */}
                <h1 className="shop-title"><span className='text-dec'>Shop From <span className="span-title">New Release</span></span></h1>
                <Grid container spacing={2}>
                    {data.map((product, index) => index < 6 && (
                        <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }} key="index" className="grid-cont">
                            <Card sx={{ minWidth: 180, height: 270, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #DDDDDD", borderRadius: "16px" }} className="card-main-cont">
                                <Box sx={{ backgroundColor: "#F5F5F5" }}>
                                    <img src={product.image} alt="" style={{ height: "100px", width: "160px", objectFit: "contain" }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" className="pro-title">
                                        {product.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'start', display: "flex", pl: 2 }}>
                                    <Typography variant="body2" className='pro-price' sx={{ mr: 0.5 }}>
                                        ${product.price}
                                    </Typography>
                                    <Typography className='pro-price2'>${product.price}</Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", pb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component={Link}
                                        to={{
                                            pathname: `/productdetails`,
                                            isedit: "false"
                                        }}
                                        state={{ data: product }}
                                        sx={{ fontSize: "12px" }}
                                        color="black"
                                    >
                                        View Details
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Banner2 */}
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

            {/* Shop From Recommended */}
            <Box className='product-cont'>
                <h1 className="shop-title"><span className='text-dec'>Shop From <span className="span-title">Recommended</span></span></h1>
                <Grid container spacing={2}>
                    {data.map((product, index) => index < 6 && (
                        <Grid item xs={6} sm={4} md={2} lg={2} sx={{ textAlign: 'center' }} key="index" className="grid-cont">
                            <Card sx={{ minWidth: 180, height: 270, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #DDDDDD", borderRadius: "16px" }} className="card-main-cont">
                                <Box sx={{ backgroundColor: "#F5F5F5" }}>
                                    <img src={product.image} alt="" style={{ height: "100px", width: "160px", objectFit: "contain" }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" className="pro-title">
                                        {product.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'start', display: "flex", pl: 2 }}>
                                    <Typography variant="body2" className='pro-price' sx={{ mr: 0.5 }}>
                                        ${product.price}
                                    </Typography>
                                    <Typography className='pro-price2'>${product.price}</Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", pb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component={Link}
                                        to={{
                                            pathname: `/productdetails`,
                                            isedit: "false"
                                        }}
                                        state={{ data: product }}
                                        sx={{ fontSize: "12px" }}
                                        color="black"
                                    >
                                        View Details
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Products;