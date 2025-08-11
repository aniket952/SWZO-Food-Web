const RestaurantCategory = ({ data }) => {
  console.log("props ", data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-300 shadow-lg flex justify-between p-4 rounded-lg">
        <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
