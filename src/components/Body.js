import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CORS_API } from "../utils/Constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurantListData, setRestaurantListData] = useState([]);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const fetchRestaurantList = async () => {
    const reslist = await fetch(SWIGGY_URL, {
      headers: {
        "x-cors-api-key": CORS_API,
      },
    });
    const json = await reslist.json();

    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants
    );
    setRestaurantListData(
      json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants
    );
    console.log(restaurantList);
  };
  if (onlineStatus === false) {
    return <h1>Looks like you are offline, check your internet please</h1>;
  }
  return restaurantList.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mx-5">
      <div className="m-4 p-4 ">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="border border-solid border-black "
        ></input>
        <button
          onClick={() => {
            const searchResult = restaurantListData.filter((res) =>
              res.info.name.includes(searchText)
            );
            setRestaurantList(searchResult);
          }}
          className="px-4  bg-green-100 m-4 rounded-lg py-2 "
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterdata = restaurantList.filter(
              (data) => data.info.avgRating > 4.6
            );
            setRestaurantList(filterdata);
          }}
          className="bg-green-100 px-4 py-2 rounded-lg"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className=" flex flex-wrap">
        {restaurantList.map((ele, index) => {
          return (
            <Link to={"/restaurant/" + ele.info.id} key={index}>
              <RestaurantCard data={ele} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
