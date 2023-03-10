import { Margin } from '@mui/icons-material';
import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';

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
                    <Typography sx={{
                        color
                            : 'red'
                    }} >Item in Your Cart</Typography >
                    <Box className="cartWrapper" >
                        {products.map((product) => (
                            <Box sx={{ bgcolor: '#F5F5F5', p: 2,
                            m: 3,}} key={product.id} className="cartCard">
                                <img src={product.image} alt="" />
                                <Typography >{product.title}</Typography >
                                <Typography >{product.price}</Typography >
                                <Button
                                    className="btn"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography style={{ fontSize: 25,color:'#222222' }}>
                        {'Cart Summary'}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                           
                            borderTop:1,borderTopColor:'#DDDDDD'
                        }}
                    >
                        <Typography sx={{ color: '#AAAAAA' }}>
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
                        <Typography sx={{ color: '#AAAAAA' }}>
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
                             borderTop:1,borderTopColor:'#DDDDDD', borderBottom:1,borderBottomColor:'#DDDDDD'
                        }}
                    >
                        <Typography sx={{ color: '#AAAAAA', }}>
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
                        border: 1,
                        borderColor: '#DDDDDD'
                    }}>
                        <Box className=''
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                m: 1,
                                borderRadius: 1,borderBottom:1,borderBottomColor:'#DDDDDD'

                            }}
                        >
                            <Typography sx={{ color: '#222222' ,fontWeight:'bold'}}>
                                {'Apply Promo Code'}
                            </Typography>
                            <Typography sx={{ marginLeft: 20,textDecoration: 'underline',color:'#D9AC5D' }}>
                                {'View all'}
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
                            <Button sx={{ width: 50, color: '#FFF', backgroundColor: '#D9AC5D', textTransform: 'none' }} variant="contained">Apply</Button>

                        </Box>
                    </Box>
                    <Box sx={{
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#DDDDDD'
                    }}>
                        <Box className=''
                            sx={{
                                display: 'flex',

                                p: 1,
                                m: 1,
                                color: '#282828' ,
                                borderBottom:1,borderBottomColor:'#DDDDDD'

                            }}
                        >
                            <Typography sx={{}}>
                                {'Bill To: '}
                            </Typography>
                            <Typography style={{ marginLeft: 20,fontWeight:'bold' }}>
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
