import React from 'react';
import "./style.css";
import Box from '@mui/material/Box';
import Slider_img from '../../components/Banner_slider/index';
import Headphone_cat from '../../components/Headphone_cat/index';
import Product_cat from '../../components/Product-cat/index';
import Promotional_app_banner from '../../components/Promotional_app_banner';

const Products = () => {
    return (
        <>
            <Slider_img />

            <Box sx={{ mt: 4 }}>
                {/* Shop From Top Categories */}
                <Headphone_cat />

                {/* Shop From New Release */}
                <Product_cat />

                {/* Banner2 */}
                <Promotional_app_banner />

                {/* Shop From Recommended */}
                <Product_cat />
            </Box>
        </>
    );
};

export default Products;