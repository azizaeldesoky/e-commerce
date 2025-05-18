import { Link } from "react-router";
import Logo from "../../assets/img/elecLogo.svg";
import "./header.css";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Search from "../Search";

function TopHeader() {
  const { cartItems, favoriteItems } = useContext(CartContext);
  return (
    <div>
      <div className="top-header">
        <div className="container">
          <Link className="logo" to="/">
            <span>Buyzaar</span>
          </Link>
          <Search />
          <div className="header-icons">
            <div className="icon">
              <Link to="/favorites">
                <FaRegHeart />
                <span className="count">{favoriteItems.length}</span>
              </Link>
            </div>

            <div className="icon">
              <Link to="/cart">
                <TiShoppingCart />
                <span className="count">{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
