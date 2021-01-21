

import { applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import { productReducers } from "../reducers/ProductReducers";
import { detailsReducer } from "../reducers/DetailsReducers";
import { reducersCart } from '../reducers/cartReducers';

const initialState = {
  cart: {
    cartProduct: localStorage.getItem("cartProduct") ? JSON.parse(localStorage.getItem("cartProduct")) : []
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
  productList: productReducers,
  productDetails: detailsReducer,
  cart: reducersCart
})
const store = createStore( reducer, initialState, composeEnhancer(applyMiddleware(thunk))
  );

export default store;