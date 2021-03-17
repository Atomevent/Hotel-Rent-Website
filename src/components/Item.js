import {Link} from "react-router-dom"

const Item = ({hotelInfo}) => {
    return (
        <div className ="Item">

            <h2 className="text-center hotel-info hotel-name">Hotel Name : {hotelInfo.hotelName}</h2>
            <h2 className="text-center hotel-info hotel-price">Price : {hotelInfo.price} /day</h2>
            <Link to={hotelInfo.link} className="text-center m-auto">Read More</Link>
        </div>
    )
}

export default Item
