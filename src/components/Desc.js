import hotel from "../List/hotel"
import {useDispatch,useSelector} from "react-redux";
import pageAction from "../redux/actionCreator/pageAction";
import{Link} from "react-router-dom";
import {addCart} from "../redux/actionCreator/pageAction";
const Desc = () => {
    const dispatch = useDispatch()
    const dirInfo = useSelector(state=>state.page)
    const where = ()=>{
        for(let i of hotel){
            if(i.imageId==window.location.pathname.slice(-1)){
                dispatch(pageAction(i.imageId));

            }
        }
    }
    const addToCart = ()=>{
        dispatch(addCart(window.location.pathname.slice(-1)-1))
    }
    return (
        <div className="description text-center ">
            {where()}
            <div className="text-center container  m-auto">
                <h2>{dirInfo.hotelName}</h2>
                <p>{dirInfo.descript}</p>
                <h2>Price:{dirInfo.price}</h2>
                <Link to="/cart" onClick={addToCart} >Order Now</Link>
            </div>
        </div>
    )
}

export default Desc
