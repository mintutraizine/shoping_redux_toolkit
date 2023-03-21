import { Button, Card, CardActions, CardContent, Grid, requirePropFactory, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts, fetch1, fetchProducts1 } from '../../store/productSlice';
import { STATUSES } from '../../store/productSlice';
import { Link } from "react-router-dom";
import imagepaths from '../../static/imagepaths';
import Box from '@mui/material/Box';


function Product_cat() {

    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product);
    const { catedata } = useSelector((state) => state.product);

    console.log(data, "data");
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
        <Box className='product-cont'>
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
    )
}

export default Product_cat;