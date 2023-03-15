import { Margin } from '@mui/icons-material';
import { Box, Button, CardMedia, FormControl, Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';
import cartstyle from './style';
import "./cart.css";
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <>
            <Grid container sx={{ p: { xs: 1, sm: 5, md: 7 } }}>
                <Grid item xs={12} sm={12} md={8}>
                    <Typography sx={[cartstyle.itemcarttextstyle]} >Item in Your Cart</Typography >
                    <Box>
                        {products.map((product) => (
                            <Box sx={cartstyle.productbox} key={product.id} >
                                <Box sx={cartstyle.imagebox}>
                                    {/* <img src={product.image} width='100' height='150' alt="" /> */}
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: 150,
                                            width: 100,
                                            maxHeight: { xs: 100, md: 150 },
                                            maxWidth: { xs: 80, md: 100 },
                                        }}
                                        src={product.image}
                                    />
                                </Box>

                                <Box sx={cartstyle.productdetailsbox}>
                                    <Stack>
                                        <Typography sx={{fontSize: { xs: 12, sm: 15, md: 20, lg: 22 }}}>{product.title}</Typography >
                                        <Typography  sx={{ marginTop: 0.2,fontSize: { xs: 12, sm: 15, md: 20, lg: 22 } }}>{'color: ' + product.price}</Typography >
                                        <Stack sx={{
                                            width: '100%', flexDirection: 'row',
                                            justifyContent: 'space-between', alignItems: 'center'
                                        }}>
                                            <FormControl sx={cartstyle.itemdropdown}>
                                                <Select sx={{
                                                    width: 62,
                                                    height: 36,
                                                }}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                // value={countyName}
                                                //onChange={handleCountryChange}
                                                >
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <Typography className='productprice' sx={{ color: '#D9AC5D', marginTop: 1,fontSize: { xs: 15, sm: 15, md: 18, lg: 22 } }}>{'$' + product.price}</Typography >
                                        </Stack>
                                        <Button
                                            sx={cartstyle.removebutton}
                                            onClick={() => handleRemove(product.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Stack>


                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography style={{ fontSize: { xs: 15, sm: 18, md: 20, lg: 25 }, color: '#222222' }}>
                        {'Cart Summary'}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                            borderTop: 1, borderTopColor: '#DDDDDD'
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
                            borderTop: 1, borderTopColor: '#DDDDDD', borderBottom: 1, borderBottomColor: '#DDDDDD'
                        }}
                    >
                        <Typography sx={{ color: '#AAAAAA', }}>
                            {'Cart total'}
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
                                color: '#282828',
                                borderBottom: 1, borderBottomColor: '#DDDDDD'

                            }}
                        >
                            <Typography sx={{}}>
                                {'Bill To :'}
                            </Typography>
                            <Typography style={{ marginLeft: 10,marginBottom:5, fontWeight: 'bold' }}>
                                {'John'}
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#000',p:1,fontSize: { xs: 13, sm: 14, md: 15, lg: 18 }, }}>
                            {'1600 Amphitheatre Parkway Mountain View, CA 94043, USA. (650) 253-0000'}
                        </Typography>
                        <Box className=''
                            sx={[{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                m: 1,

                            }, cartstyle.cart]}
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


