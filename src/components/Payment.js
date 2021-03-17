import {useSelector} from "react-redux";
import {useState} from "react";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetCart} from "../redux/actionCreator/pageAction";

const Payment = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart)
    const mapcart = ()=>{
      return(state.map((cartItem,index)=>{
            return <CartItem index={index} key={index}/>
        })
      )
    }
    const calcPrice = ()=>{
        let price = 0;
        for(let i of state){
            price+= i.price;
        }
        return price;
    }
    const resetCarts = ()=>{
        dispatch(resetCart())
    }
    return (
        <div className ="payment text-center">
            <h2 className="text-center">Payment</h2>
            <div className = "flex flex-payment contain">
                {mapcart()}
                <div className="bottom-line"></div>
            </div>
            <h2 className="text-center">Total: {calcPrice()} </h2>
           <div> 
               <Link to="#" onClick={resetCarts}>Reset</Link>
            </div>
            <Link to="/" className="text-center">Go Back</Link>
        </div>
    )
}

export default Payment
