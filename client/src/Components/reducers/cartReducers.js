import { ADD_ITEM_TO_CART } from "../Constants/CartContants";


export  const reducersCart = (state = {cartProduct: []}, action)=> {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            const item = action.payload;
            const existItem = state.cartProduct.find( pd => pd.product === item.product) 
            if(existItem){
                return {
                    ...state,
                    cartProduct: state.cartProduct.map(pd => pd.product === existItem.product ? item : pd)
                }
            }
            else {
                return {
                    ...state, cartProduct: [...state.cartProduct, item]
                }
            }
        default:
        return state
    }
}

