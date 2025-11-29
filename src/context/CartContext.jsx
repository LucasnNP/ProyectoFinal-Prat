import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //verificar si un item ya está en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);

  //agregar item al carrito
  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity }]);
    }
  };

  //eliminar item del carrito
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  //calcular cantidad total de items en el carrito
  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  //calcular precio total del carrito
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
