import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <NavLink to="/cart" className={styles.cartWidget}>
      <span className={styles.cartIcon}>🛒</span>
      {totalQuantity() > 0 && (
        <span className={styles.cartCount}>{totalQuantity()}</span>
      )}
    </NavLink>
  );
};

export default CartWidget;
