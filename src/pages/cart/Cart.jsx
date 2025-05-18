import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

import "./cart.css";
import PageTransition from "../../components/PageTransition";
function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  console.log(cartItems);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <PageTransition>
      <div className="cart">
        <div className="order-summary">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p> Your Cart is Empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="item-cart">
                  <div className="image-name">
                    <div className="img-item">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price-item">${item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delete-btn"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bottom-summary">
            <div className="show-table">
              <p>Total:</p>
              <span className="total-checkout">${totalPrice}</span>
            </div>
            <div className="button-div">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
