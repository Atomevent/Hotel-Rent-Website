import Item from "./Item";
import hotel from "../List/hotel";

const ItemGrid = () => {
    const itemLoop  = hotel.map((hotelInfo)=>{
        return <Item hotelInfo={hotelInfo} key={hotelInfo.imageId}/>})

        return (
        <div className="item-grid grid container">
            {itemLoop}
        </div>
    )
}

export default ItemGrid
