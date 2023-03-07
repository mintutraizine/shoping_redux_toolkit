import { Margin } from '@mui/icons-material';
import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <>
            <Grid container p={10}>
                <Grid item xs={12} md={8}>
                    <h3>Cart</h3>
                    <div className="cartWrapper">
                        {products.map((product) => (
                            <div key={product.id} className="cartCard">
                                <img src={product.image} alt="" />
                                <h5>{product.title}</h5>
                                <h5>{product.price}</h5>
                                <button
                                    className="btn"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography style={{ fontSize: 25 }}>
                        {'Cart Summary'}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}
                    >
                        <Typography sx={{ color: '#D9AC5D' }}>
                            {'$' + 'Product total'}
                        </Typography>
                        <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
                            {'$' + '464'}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}
                    >
                        <Typography sx={{ color: '#D9AC5D' }}>
                            {'Shiping'}
                        </Typography>
                        <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
                            {'' + 'free'}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}
                    >
                        <Typography sx={{ color: '#D9AC5D' }}>
                            {'$' + 'Cart total'}
                        </Typography>
                        <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
                            {'$' + '464'}
                        </Typography>
                    </Box>
                    <Box sx={{
                        p: 1,
                        m: 1,
                       
                        borderRadius: 1,
                        border: 2,
                        borderColor: 'red'
                    }}>
                        <Box className=''
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                               
                            }}
                        >
                            <Typography sx={{ color: '#D9AC5D' }}>
                                {'Apply Promo code'}
                            </Typography>
                            <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
                                {'view all'}
                            </Typography>
                        </Box>
                        <Box className=''
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,

                            }}
                        >
                             <TextField
                            
        variant="outlined"
        size="small"
        placeholder="Enter Promo Code"
       
      />
                           <Button sx={{width:50,color:'#FFF',backgroundColor:'#D9AC5D',textTransform: 'none'}} variant="contained">Apply</Button>
 
                        </Box>
                    </Box>
                    <Box sx={{
                        p: 1,
                        m: 1,
                       
                        borderRadius: 1,
                        border: 2,
                        borderColor: 'red'
                    }}>
                        <Box className=''
                            sx={{
                                display: 'flex',
                               
                                p: 1,
                                m: 1,
                               
                                borderRadius: 1,
                               
                            }}
                        >
                            <Typography sx={{ color: '#D9AC5D' }}>
                                {'Bill To: '}
                            </Typography>
                            <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
                                {'John'}
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#D9AC5D' }}>
                                {'1600 Amphitheatre Parkway Mountain View, CA 94043, USA. (650) 253-0000'}
                            </Typography>
                        <Box className=''
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                m: 1,
                                
                                borderRadius: 1,

                            }}
                        >
                            <Typography sx={{ color: '#D9AC5D' }}>
                                {'change address '}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};

export default Cart;
