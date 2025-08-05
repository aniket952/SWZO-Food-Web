import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuItems = useRestaurantMenu(resId);

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
