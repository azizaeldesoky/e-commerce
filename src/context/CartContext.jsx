import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //favorite items
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteItems");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  //add to favorite
  const addToFavorite = (item) => {
    setFavoriteItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (!exists) {
        return [...prev, item];
      }
      return prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const removeFromFavorite = (id) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  //Cart
  const addToCart = (item) => {
    setCartItems((prevItem) => [...prevItem, { ...item, quantity: 1 }]);
  };

  //increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  //remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToFavorite,
        favoriteItems,
        removeFromFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
