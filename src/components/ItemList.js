import { useDispatch } from "react-redux";
import { addItem } from "../utils/slice/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handelAddItem = (data)=>{
    console.log("click")
    dispatch(addItem(data));

  }
  return (
    <div className="my-5">
      {items.map((item) => (
        <div className=" px-4 py-5 shadow-lg rounded-lg" key = {item.card.info.id}>
          <div
            className="flex justify-between"
            key={item.card.info.id}
          >
            <span className="font-bold">{item.card.info.name}</span>
            <div className="flex">
            <span>₹ {item.card.info.price ? item.card.info.price / 100 : "N/A"}</span>
            <div className="mx-5 my-0.5 px-5 rounded-lg bg-amber-300 hover:cursor-pointer" onClick={()=>handelAddItem(item)}>Add+</div>
            </div>

          </div>
          <p className="text-xs text-left my-3">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
