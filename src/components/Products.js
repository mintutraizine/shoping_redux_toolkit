import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, fetchProducts1 } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { Link } from "react-router-dom";

const Products = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product);
    const { catedata } = useSelector((state) => state.product);
    
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchProducts1());
      //  console.log("products"+products);
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
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
        <div className="productsWrapper">
            {data.map((product,index) => index<4 &&(
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                   {/*  <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button> */}
                
<Typography
    variant="h6"
    noWrap
    component={Link}
    to={{
        pathname: `/productdetails`,
        isedit: "false"
      }}
       state={{ data: product }}
    >
    View Details
</Typography>
{/* <Link to={{
        pathname: `/productdetails`,

      }} state={{ data: "employee" }} >
clcik
</Link> */}
                </div>
            ))}
            {/*  {catedata.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))} */}
        </div>
    );
};

export default Products;
