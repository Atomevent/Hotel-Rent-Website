import * as constants from "../constant";
const pageAction = (index)=>{
    return ({
        type:constants.NEW_PAGE,
        payload:{
           id:index
        }
    })
}
export const addCart = (index)=>{
    return ({
        type:constants.CART_ADD,
        payload:{
           id:index
        }
    })
}
export const resetCart = ()=>{
    return ({
        type:constants.CART_RESET,
        payload:{
           
        }
    })
}
export default pageAction;
