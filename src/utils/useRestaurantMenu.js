import { useEffect, useState } from "react";
import { CORS_API } from "./Constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5976596&lng=74.0174464&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
      {
        headers: {
          "x-cors-api-key": CORS_API,
        },
      }
    );
    const json = await data.json();
    const temp = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];
    setResInfo(temp);
  };
  return resInfo;
};

export default useRestaurantMenu;
