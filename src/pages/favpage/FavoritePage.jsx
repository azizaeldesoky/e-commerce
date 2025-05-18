import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "../../components/product/Product";
import PageTransition from "../../components/PageTransition";

function FavoritePage() {
  const { favoriteItems } = useContext(CartContext);
  return (
    <PageTransition>
      <div className="container">
        <div className="top-slide">
          <h2>Your Favorites</h2>
        </div>
        <div className="products">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((item, index) => (
              <Product key={index} item={item} />
            ))
          ) : (
            <div className="container">
              {" "}
              <p> Favorites is Empty</p>{" "}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default FavoritePage;
