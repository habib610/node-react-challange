import {
    LIST_PRODUCT_FAIL,
    LIST_PRODUCT_REQUEST,
    LIST_PRODUCT_SUCCESS,
  } from "../Constants/ProductConstants";
export const productReducers = (state = { loading:true, products: []}, action) => {
    switch(action.type) {
        case LIST_PRODUCT_REQUEST:
            return {loading: true}
        case LIST_PRODUCT_SUCCESS:
            return { loading: false, products: action.payload}
        case LIST_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}