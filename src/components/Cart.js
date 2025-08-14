import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClick = ()=>{
      dispatch(clearCart())
  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-4">Cart</h1>
      <div className="w-6/12 m-auto"> <ItemList items={cartItems} />
      <div className="bg-amber-300 my-5 rounded-lg hover:cursor-pointer " onClick={handleClick}>Clear Cart</div></div>
      
     
    </div>
  );
};

export default Cart;
