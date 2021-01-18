import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsProductActions } from '../actions/ProductActions';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loaiding/Loading';

const ProductDetails = (props) => {
    const {productId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(detailsProductActions(productId))
    },[dispatch, productId])
const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
  

    const {loading, error, product} = productDetails




const handleAddToCart = (product, qty) => {
    console.log(product, qty);
}
    return (
        <div className="container">
            {
                loading ? <Loading></Loading> : error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : (
                  <div className="row">
                <div className="col-6">
                    <img src={product.photo} alt={product.name} className="img-fluid w-100"/>
                </div>
                <div className="col-3">
                    <h4 className="text-uppercase font-weight-bold " > {product.name}</h4>
                    <p>Category: {product.category}</p>
                    <p>Brand: {product.brand} </p>
                    <h3>Price: ${product.price}</h3> 
                    <p>InStock: {product.countInStock}</p>
                    <p>Reviews: </p>
                    <p>Description: {product.description}</p>
                </div>
                <div className="col-3">
                    <div className="">

                    </div>
                    <div className="row justify-content-between">
                        <p className="font-weight-bold align-self-center pt-2">Price:</p>
                <h3 className="font-weight-bold text-info "> ${product.price}</h3> 
                    </div>
                    <div className="row justify-content-between">
                        <p className="font-weight-bold">Availability: </p>
                <p className="font-weight-bold text-success"> Available </p> 
                    </div>
                    <div className="row justify-content-between">
                        <p className="font-weight-bold">Quantity: </p>
                <p className="font-weight-bold"> 
                <select className="form-control" value={qty} onChange={(e)=> setQty(e.target.value)} >
                    {
                        [...Array(product.countInStock).keys()].map((item, index) => {
                            return <option  key={index} >{item + 1}</option>
                        })
                    }
                    </select> </p> 
                    </div>
                    <div className="row justify-content-between">
                        <button onClick={()=>handleAddToCart( qty)} className="btn-primary btn-block">Add to cart</button>
                    </div>
                </div>
            </div>  
  
                )
            }
            
            <button className="btn btn-primary m-2" onClick={()=> props.history.push('/')} >  Go to Home</button>
        </div>
    );
};

export default ProductDetails;