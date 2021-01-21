import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
const history = useHistory();
const cart = useSelector(state => state.cart)
const {cartProduct} = cart;
  return (
    <div className="bg-info">
      <div className="container text-white">
      <nav className="row justify-content-between">
       <button className="btn text-white" onClick={()=> history.push('/')} ><h4 className="px-2 p-2"> nodeChallenge</h4></button>
       <div className="align-self-center">
          <Link className="text-white font-weight-bold" to="/cart">Cart <span className="bg-danger rounded-circle text-white p-1">{cartProduct.length}</span> </Link>
          <Link className="text-white font-weight-bold ml-5" to ="/cart">Habib</Link>
       </div>
      </nav>
    </div>
    </div>
    
  );
};

export default Navbar;
