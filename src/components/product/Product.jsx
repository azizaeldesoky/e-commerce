import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart, FaCheck } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { renderStars } from "../Stars";
import toast from "react-hot-toast";
function Product({ item }) {
  const {
    cartItems,
    addToCart,
    addToFavorite,
    favoriteItems,
    removeFromFavorite,
  } = useContext(CartContext);
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handelAddToCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast">
        <img src={item.images[0]} alt="" className="tost-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to cart
          <div>
            <Link to="/cart">
              <button className="btn"> View Cart</button>
            </Link>
          </div>
        </div>
      </div>,
      {
        duration: 3500,
      }
    );
  };
  const isInFav = favoriteItems.some((favorite) => favorite.id === item.id);

  const handelAddToFavorite = () => {
    if (isInFav) {
      removeFromFavorite(item.id);
    } else {
      addToFavorite(item);
      toast.success(
        <div className="toast">
          <img src={item.images[0]} alt="" className="tost-img" />
          <div className="toast-content">
            <strong>{item.title}</strong>
            added to favorite
            <div>
              <Link to="/favorites">
                <button className="btn"> View Favorite</button>
              </Link>
            </div>
          </div>
        </div>,
        {
          duration: 3500,
        }
      );
    }
  };
  console.log(favoriteItems);

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/product/${item.id}`}>
        {isInCart && (
          <span className="status-cart">
            <FaCheck /> in cart
          </span>
        )}
        <div className="img_product">
          <img src={item.images[0]} />
        </div>

        <p className="name_product">{item.title}</p>

        <div className="stars">{renderStars(item.rating)}</div>

        <p className="price">
          <span>$ {item.price}</span>{" "}
        </p>
      </Link>
      <div className="icons">
        <span className="btn-addCart" onClick={handelAddToCart}>
          <TiShoppingCart />
        </span>
        <span
          className={`${isInFav ? "in-fav" : ""}`}
          onClick={handelAddToFavorite}
        >
          <FaRegHeart />
        </span>
        <span>
          <IoIosShareAlt />
        </span>
      </div>
    </div>
  );
}

export default Product;
