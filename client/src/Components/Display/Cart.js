import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

    return (
        <div className="container">
            <h2>My Cart</h2>
            <div className="row mt-5">
                <div className="col-8">
                    <div className="row ">
                        <div className="col-2">Imge</div>
                        <div className="col-4 font-weight-bold"> <Link to="/details/:product">this is name of product</Link></div>
                        <div className="col-2">qty</div>
                        <div className="col-2"><button className="btn btn-outline-danger">Delete</button></div>
                    </div>
                </div>

                <div className="col-4">
                <h3>SubTotal: (8) Items: $1950</h3>
                <button className="btn btn-warning my-2 btn-block">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;