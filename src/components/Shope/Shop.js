import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])
    
    return (
        <div className="shop-container">
            <div className="products-container">
                <h2>Products Container :{products.length}</h2>
            </div>
            <div className="cart-container">
                <h2>Cart Container</h2>
            </div>
        </div>
    );
};

export default Shop;