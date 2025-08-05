import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
  const {data} = props

  const {name , cloudinaryImageId, cuisines, avgRatingString, sla } = data.info
  return (
    <div className="m-4 p-4 w-[270px] h-[500px] bg-pink-100 shadow-lg rounded-lg">
      <img
        src={CDN_URL+cloudinaryImageId}
        alt="img food"
        className = "rounded-lg h-[250px] w-[250]"
      />
      <h3 className=" font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{"Delivery Time: "+sla.deliveryTime +" min"}</h4>
    </div>
  );
}

export default RestaurantCard;