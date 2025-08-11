import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuItems = useRestaurantMenu(resId);
  console.log("menuItems --- ", menuItems);
  const categories = menuItems.filter(
    (ele) =>
      ele?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("categories ", categories);
  return menuItems === null ? (
    <ShimmerUI />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        Restaurant Menu categories wise
      </h1>
      {categories.map((category, index)=>(
        <RestaurantCategory key={index} data = {category.card.card}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
