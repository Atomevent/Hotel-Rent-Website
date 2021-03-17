import * as constants from "../constant";
import hotel from "../../List/hotel";
const cartReducer = (state=[],action)=>{
    switch(action.type){
        case constants.CART_ADD:
           for(let i of state){
               if(i.imageId-1===action.payload.id){
                    return state;
               }
           }
           return [...state,hotel[action.payload.id]]
        case constants.CART_DEL:
            
        case constants.CART_RESET:
            return [];
        default:
            return state;
    }
}
export default cartReducer;