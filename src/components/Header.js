import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [currentState, setCurrentState] = useState("login");
  return (
    <div className="header-sec">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About us</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          <li>Cart</li>
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
