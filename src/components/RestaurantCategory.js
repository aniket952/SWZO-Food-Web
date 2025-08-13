import { useState } from "react";
import ItemCards from "./ItemList";

const RestaurantCategory = ({ data, isVisible, onMenuClick }) => {
  console.log("props ", data);
  const handleOnClick = ()=>{
    onMenuClick()
  }
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          handleOnClick()
        }}
        className="w-6/12 mx-auto my-4 bg-gray-300 shadow-lg flex justify-between p-4 rounded-lg hover:cursor-pointer"
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {isVisible && (
        <div className="w-6/12 mx-auto bg-gray-100">
          <ItemCards items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
