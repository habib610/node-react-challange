import React, { useEffect, useState } from 'react';
import { data } from '../../data';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProduct] = useState([])
    
    useEffect(()=> {
        setProduct(data)
    }, [])

    return (
        <div className="container"> 
        <div className="row">
            {
                products.map(product=> <ProductCard key={product._id} product={product} />)
            }
        </div>
        </div>
    );
};

export default Product;