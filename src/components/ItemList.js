const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="my-5">
      {items.map(({ card: { info } }) => (
        <div className=" px-4 py-5 shadow-lg rounded-lg">
          <div
            className="flex justify-between"
            key={info.id}
          >
            <span className="font-bold">{info.name}</span>
            <span>₹ {info.price ? info.price / 100 : "N/A"}</span>
          </div>
          <p className="text-xs text-left my-3">{info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
