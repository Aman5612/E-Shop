import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { logout } from "./firebase";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const handleauthentication = () => logout();
  // console.log("The user object is:", user);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="#"
        />
      </Link>

      <div className="header_search ">
        <input className="header_serchInput navigation" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={() => handleauthentication()} className="header_option">
            <span className="header_optionLineOne">Hello{user?.email} </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
