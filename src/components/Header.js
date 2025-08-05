import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [currentState, setCurrentState] = useState("login");
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-36"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"><Link to="/" >Home</Link></li>
          <li className="px-4"><Link to="/about" >About us</Link></li>
          <li className="px-4"><Link to="/contact" >Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              currentState === "login"
                ? setCurrentState("logout")
                : setCurrentState("login");
            }}
          >
            {currentState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
