import * as constants from "../constant";
import hotel from "../../List/hotel";
const pageReducer = (state={},action)=>{
    switch(action.type){
        case constants.NEW_PAGE:
            for(let htl of hotel){
                if(htl.imageId==action.payload.id){
                    return htl
                }
            }
        default:
            return state;
    }
}
export default pageReducer