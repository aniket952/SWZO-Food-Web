import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
  const {data} = props

  const {name , cloudinaryImageId, cuisines, avgRatingString, sla } = data.info
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt="img food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{"Delivery Time: "+sla.deliveryTime +" min"}</h4>
    </div>
  );
}

export default RestaurantCard;