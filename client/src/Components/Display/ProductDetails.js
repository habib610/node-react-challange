import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';

const ProductDetails = (props) => {
    console.log(props)
    const {productId} = useParams();
    const product = data.find(pd => pd._id === productId);

     const {name, price,  description, category, countInStock, brand ,  photo} = product;

    return (
        <div className="container">

            <div className="row">
                <div className="col-6">
                    <img src={photo} alt={name} className="img-fluid w-100"/>
                </div>
                <div className="col-6">
                    <h4>Name: {name}</h4>
                    <h4>Catagory: {category}</h4>
                    <h4>Brand: {brand} </h4>
                    <h4>Price: ${price}</h4> 
                    <h4>InStock: {countInStock}</h4>
                    <p>Description: {description}</p>
                </div>
            </div>
            <button className="btn btn-primary m-2" onClick={()=> props.history.push('/')} >  Go to Home</button>
        </div>
    );
};

export default ProductDetails;