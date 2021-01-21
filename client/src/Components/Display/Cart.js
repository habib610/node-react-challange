import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartActions } from "../actions/CartActions";

const Cart = (props) => {
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCartActions(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartProduct } = cart;

  const checkoutHandler = () => {
    props.history.push(`/signin?redirect=shipping`)
}
  return (
    <div className="container">
      <h2>My Cart</h2>
      <div className="row mt-5">
        <div className="col-8">
          {cartProduct.map((item) => (
            <div key={item.product} className="row my-2">
              <div className="col-2">
                  <img className="w-50" src={item.image} alt={item.name}/>
              </div>
              <div className="col-4 font-weight-bold">
                <Link to="/details/:product">{item.name}</Link>
              </div>
              <div className="col-2">
             {item.qty}
              </div>
              <div className="col-2">
                <button className="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          ))}
          <div className="row my-2"></div>
        </div>

        <div className="col-4">
        <h4>Subtotal: ({
              cartProduct.reduce((total, current)=> total + current.qty , 0) 
              }) Items 
              : ${
                  cartProduct.reduce((total, current)=> total + current.price * current.qty, 0)
              }
              </h4>
          <button disabled={cartProduct.length === 0} className="btn btn-warning btn-block" onClick={checkoutHandler}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
