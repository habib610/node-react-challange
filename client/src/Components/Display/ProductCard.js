import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {name, price, _id, photo} = product
    const history = useHistory();
    const dispatch = useDispatch()

    return (
        <div className="col-4 my-2">
            <div className="card">
                <img src={photo} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h2>{name}</h2>
                </div>
                <div className="card-footer">
                    <div className="row justify-content-between">
                        <button onClick={()=> history.push(`/details/${_id}`)} className="btn btn-primary">Details</button>
                    <h2>${price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;