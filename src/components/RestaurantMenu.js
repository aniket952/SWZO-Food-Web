import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5976596&lng=74.0174464&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await data.json();

      console.log(
        "menu items: ",
        json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );

      setMenuItems(
        json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards || []
      );
    } catch (error) {
      console.error("Failed to fetch menu", error);
    }
  };

  return menuItems === null ? (
    <ShimmerUI />
  ) : (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.card.info.name} - ₹{item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
