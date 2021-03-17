import {combineReducers} from "redux";
import cartReducer from "./cart";
import pageReducer from "./page";
const allReducers = combineReducers({
    cart : cartReducer,
    page: pageReducer
})
export default allReducers