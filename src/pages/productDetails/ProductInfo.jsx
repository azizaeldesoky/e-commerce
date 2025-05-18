import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { renderStars } from "../../components/Stars";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    addToFavorite,
    favoriteItems,
    removeFromFavorite,
  } = useContext(CartContext);
  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);
  const isInFav = favoriteItems.some((favorite) => favorite.id === product.id);

  const handelAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast">
        <img src={product.images[0]} alt="" className="tost-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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

  const handelAddToFavorite = () => {
    if (isInFav) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
      toast.success(
        <div className="toast">
          <img src={product.images[0]} alt="" className="tost-img" />
          <div className="toast-content">
            <strong>{product.title}</strong>
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

  return (
    <div className="details-item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">{renderStars(product.rating)}</div>
      <p className="price">$ {product.price}</p>
      <h5>
        Availability <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand <span>{product.brand}</span>
      </h5>
      <p className="desc"> {product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! ONLY {product.stock} item left in stock</span>
      </h5>

      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={handelAddToCart}
      >
        {isInCart ? "Item in Cart" : "Add to Cart"} <TiShoppingCart />
      </button>
      <div className="icons">
        <span
          className={`${isInFav ? "in-fav" : ""}`}
          onClick={() => handelAddToFavorite(product)}
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

export default ProductInfo;
