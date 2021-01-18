import { DETAILS_PRODUCT_FAIL, DETAILS_PRODUCT_REQUEST, DETAILS_PRODUCT_SUCCESS } from "../Constants/ProductConstants";


 export const detailsReducer = (state = {loading: true, product: {}}, action) => {
     switch (action.type) {
         case DETAILS_PRODUCT_REQUEST:
             return {loading: true}
        case DETAILS_PRODUCT_SUCCESS:
            return {product: action.payload, loading: false}
        case DETAILS_PRODUCT_FAIL:
        return {error: action.payload, loading: false}
         default:
             return state;
     }
 }