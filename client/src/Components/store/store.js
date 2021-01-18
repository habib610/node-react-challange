import { data } from "../../data";

import { applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import { productReducers } from "../reducers/ProductReducers";
import { detailsReducer } from "../reducers/DetailsReducers";
const initialState = {

}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
  productList: productReducers,
  productDetails: detailsReducer,
})
const store = createStore( reducer, initialState, composeEnhancer(applyMiddleware(thunk))
  );

export default store;