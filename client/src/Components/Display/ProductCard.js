import React from 'react';

const ProductCard = ({product}) => {
    console.log(product);
    const {name, price, countInStock, description, photo} = product
    
    return (
        <div className="col-4 my-2">
            <div className="card">
                <img src={photo} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h2>{name}</h2>
                </div>
                <div className="card-footer">
                    <div className="row justify-content-between">
                        <button className="btn btn-primary">Details</button>
                    <h2>${price}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;