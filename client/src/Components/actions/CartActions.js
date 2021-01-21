
import axios from "axios";
import { ADD_ITEM_TO_CART } from "../Constants/CartContants";


export const addToCartActions = (productId, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
        name: data.name,
        image: data.photo,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
    }
});
  localStorage.setItem("cartProduct", JSON.stringify(getState().cart.cartProduct) )
}