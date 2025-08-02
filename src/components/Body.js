import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import ShimmerUI from "./Shimmer"

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [restaurantListData, setRestaurantListData] = useState([]);
  useEffect(()=>{
    fetchRestaurantList();
  }, [])
  const fetchRestaurantList = async ()=>{
    const reslist = await fetch(SWIGGY_URL)
    const json = await reslist.json()
    
    setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants)
    setRestaurantListData(json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants)
  }
  
  return (restaurantList.length==0)? <ShimmerUI /> :(
    <div className="body-sec">
      <div className="top-btn">
        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button onClick={()=>{
          const searchResult = restaurantListData.filter((res)=>res.info.name.includes(searchText))
          setRestaurantList(searchResult)
        }}>Search</button>
        <button
          onClick={() => {
            const filterdata = restaurantList.filter(
              (data) => data.info.avgRating > 4.6
            );
            setRestaurantList(filterdata);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((ele, index) => {
          return <RestaurantCard key={index} data={ele} />;
        })}
      </div>
    </div>
  );
};
export default Body;
