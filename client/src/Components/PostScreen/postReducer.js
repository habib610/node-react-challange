import { LIST_POST_FAIL, LIST_POST_REQUEST, LIST_POST_SUCCESS } from "./postConstants";

export const listPostReducer = (state = {posts: [], loading: true}, action) => {
    switch(action.type){
        case LIST_POST_REQUEST:
            return {loading: true}
        case LIST_POST_SUCCESS:
            return {loading: false, posts: action.payload}
        case LIST_POST_FAIL:
            return {loading: false, error: action.payload}
        default: 
        return state;
    }
}