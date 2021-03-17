import{useSelector} from "react-redux"
const CartItem = (props) => {
    const state = useSelector(state => state.cart[props.index])
    return (
        <div className="flex cart-item">
            <h2>{state.hotelName}</h2>
            <p>Price: {state.price}</p>

        </div>
    )
}

export default CartItem
