import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/products" className={styles.btn}>
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Tu carrito</h1>

      <div className={styles.items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.summary}>
        <h3>Total: ${totalPrice()}</h3>

        <div className={styles.buttons}>
          <button className={styles.clearBtn} onClick={clearCart}>
            Vaciar carrito
          </button>

          <Link to="/checkout" className={styles.checkoutBtn}>
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
