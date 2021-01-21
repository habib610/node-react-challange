import { LIST_POST_FAIL, LIST_POST_REQUEST, LIST_POST_SUCCESS } from "./postConstants"
import axios from "axios";

export const loadAllPost = ()=> async(dispatch) => {
    dispatch({type: LIST_POST_REQUEST});
    try{
        const {data} = await axios.get("/api/articles/allpost");
        dispatch({type: LIST_POST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({
            type: LIST_POST_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    }
}