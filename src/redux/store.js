import{createStore} from "redux";
import allReducers from "./reducer/combine";
import cartReducer from "./reducer/cart";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;