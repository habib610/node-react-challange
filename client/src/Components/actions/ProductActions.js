import axios from "axios";
import {
  DETAILS_PRODUCT_FAIL,
  DETAILS_PRODUCT_REQUEST,
  DETAILS_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAIL,
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
} from "../Constants/ProductConstants";

export const listProductActions = () => async (dispatch) => {
  dispatch({ type: LIST_PRODUCT_REQUEST });

  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: LIST_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailsProductActions = (id) => async (dispatch) => {
  dispatch({type: DETAILS_PRODUCT_REQUEST})
  try{
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({type: DETAILS_PRODUCT_SUCCESS, payload: data})
  } catch(error) {
    dispatch({
      type: DETAILS_PRODUCT_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}